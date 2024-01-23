const arr = Array.from(
  { length: 100000 }, (_, i) => i + 1
);

function binarySearch(sortedArray, target) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === target) {
      return middle;
    }

    if (sortedArray[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1
}

console.log(
  binarySearch(arr, 32685)
)