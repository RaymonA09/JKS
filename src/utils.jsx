// utils.jsx
export function createPageUrl(page) {
  const normalized = page.toLowerCase().replace(/\s+/g, "-");

  if (normalized === "home") return "/"; // Home should go to root "/"
  return `/${normalized}`;
}
