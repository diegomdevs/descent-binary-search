export default function descentBinarySearch(item, data) {
  let high = 0;
  let low = data.length - 1;
  while (high <= low) {
    const mid = getAscentMid(low, high);
    const guess = data[mid];
    if (guess === item) return mid;
    if (guess < item) low = mid - 1;
    else high = mid + 1;
  }
  return undefined;
}
function getAscentMid(low, high) {
  const mid_formula = Math.round((low + high) / 2);

  return mid_formula;
}
