export function playNotificationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch {
    /* audio not supported */
  }
}

export function notifyNewLead() {
  const key = "ks_leads_last_count";
  const prev = parseInt(localStorage.getItem(key) || "0", 10);
  const leads = JSON.parse(localStorage.getItem("ks_leads") || "[]");
  if (leads.length > prev) {
    playNotificationSound();
    localStorage.setItem(key, String(leads.length));
    return true;
  }
  return false;
}

export function markLeadsViewed() {
  const leads = JSON.parse(localStorage.getItem("ks_leads") || "[]");
  localStorage.setItem("ks_leads_last_count", String(leads.length));
}
