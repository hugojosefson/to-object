export function toObject<K extends string | number | symbol, V>(
  acc: Record<K, V>,
  [key, value]: [K, V],
): Record<K, V> {
  acc[key] = value;
  return acc;
}
