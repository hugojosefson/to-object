/**
 * @deprecated use Object.fromEntries instead
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 */
export function toObject<K extends string | number | symbol, V>(
  acc: Record<K, V>,
  [key, value]: [K, V],
): Record<K, V> {
  acc[key] = value;
  return acc;
}
