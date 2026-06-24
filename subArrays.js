//Find all subarrays that sum to K
function subarraySum(arr, k) {
    let result = [];
    let prefixMap = new Map();
    prefixMap.set(0, [-1]);
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        let requiredSum = currentSum - k;
        if (prefixMap.has(requiredSum)) {
            let startPositions = prefixMap.get(requiredSum);
            for (let start of startPositions) {
                result.push(arr.slice(start + 1, i + 1));
            }
        }
        if (!prefixMap.has(currentSum)) {
            prefixMap.set(currentSum, []);
        }
        prefixMap.get(currentSum).push(i);
    }
    return result;
}
console.log(
    subarraySum([1, 2, 3, 0, 3], 3)
);