//Two array are already sorted. Merge two array.
const a = [1, 2, 3]
const b = [2, 3, 6]

function merge(a, b) {
  let mergedList = []
  const lenA = a.length, lenB = b.length;
  let indexA = 0, indexB = 0;

  while (indexA < lenA && indexB < lenB) {
    if (a[indexA] < b[indexB]) {
      mergedList.push(a[indexA])
      indexA++
    } else {
      mergedList.push(b[indexB])
      indexB++
    }
  }

  if (lenA > indexA) {
    mergedList.push(...a.slice(indexA))
  } else if (lenB > indexB) {
    mergedList.push(...b.slice(indexB))
  }

  return mergedList;
}

console.log(merge(a, b));

/**
 * Time complexity O(n+m)
 * Space complexity O(n+m)
 */