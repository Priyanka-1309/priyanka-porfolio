// src/utils/loadImages.js
export const loadImages = (modules) => {
  return Object.values(modules).map((mod) => mod.default)
}
