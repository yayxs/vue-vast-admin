/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ["admin", "editor"];
  // 是admin 或者editor
  return valid_map.indexOf(str.trim()) >= 0;
}
