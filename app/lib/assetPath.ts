export const assetPath = (path: string) =>
  process.env.NODE_ENV === "production" ? `/Millennium${path}` : path;