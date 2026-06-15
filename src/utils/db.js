function getKey(name) {
  return `ks_${name}`;
}

export function getAll(name) {
  try {
    const data = localStorage.getItem(getKey(name));
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setAll(name, items) {
  localStorage.setItem(getKey(name), JSON.stringify(items));
}

export function getById(name, id) {
  const items = getAll(name);
  return items ? items.find((i) => i.id === id) : null;
}

export function addItem(name, item) {
  const items = getAll(name) || [];
  const newItem = { ...item, id: Date.now().toString() };
  items.push(newItem);
  setAll(name, items);
  return newItem;
}

export function updateItem(name, id, updates) {
  const items = getAll(name) || [];
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...updates };
  setAll(name, items);
  return items[idx];
}

export function deleteItem(name, id) {
  const items = getAll(name) || [];
  const filtered = items.filter((i) => i.id !== id);
  if (filtered.length === items.length) return false;
  setAll(name, filtered);
  return true;
}

export function seedData(name, defaults) {
  const existing = getAll(name);
  if (!existing || existing.length === 0) {
    setAll(name, defaults);
  }
}
