const AUTH_KEY = "ks_admin_auth";
const DEFAULT_USER = "admin";
const DEFAULT_PASS = "admin123";

export function isAuthenticated() {
  const data = localStorage.getItem(AUTH_KEY);
  if (!data) return false;
  try {
    const { user, expires } = JSON.parse(data);
    return user === DEFAULT_USER && Date.now() < expires;
  } catch {
    return false;
  }
}

export function login(user, pass) {
  if (user !== DEFAULT_USER || pass !== DEFAULT_PASS) {
    return false;
  }
  const data = { user, expires: Date.now() + 24 * 60 * 60 * 1000 };
  localStorage.setItem(AUTH_KEY, JSON.stringify(data));
  return true;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}
