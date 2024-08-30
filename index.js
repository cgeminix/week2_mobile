//27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function getDistinctElements(arr) {
    return [...new Set(arr)]; // Hàm getDistinctElements sử dụng đối tượng Set, đối tượng này tự động loại bỏ các giá trị trùng lặp trong một mảng.
}

const numbers = [1, 2, 2, 7, 3, 7, 4, 11, 5, 11];
const distinctNumbers = getDistinctElements(numbers);
console.log(distinctNumbers); 