//Group array of objects by key
const people = [
    { name: "Ali", city: "HYD" },
    { name: "Sara", city: "MUM" },
    { name: "Raj", city: "HYD" }
];
function groupBy(arr, key) {
    let groupedData = {};
    for (let person of arr) {
        let value = person[key];
        if (!groupedData[value]) {
            groupedData[value] = [];
        }
        groupedData[value].push(person);
    }
    return groupedData;
}
console.log(groupBy(people, "city"));