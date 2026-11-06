export const assetPath = (path: string) => {
  // leave full links and embedded images alone
  if (/^(https?:)?\/\/|^data:|^blob:/.test(path)) return path;
  return process.env.NODE_ENV === "production" ? `/Millennium${path}` : path;
};