//27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
/*function getDistinctElements(arr) {
    return [...new Set(arr)]; // Hàm getDistinctElements sử dụng đối tượng Set, đối tượng này tự động loại bỏ các giá trị trùng lặp trong một mảng.
}

const numbers = [1, 2, 2, 7, 3, 7, 4, 11, 5, 11];
const distinctNumbers = getDistinctElements(numbers);
console.log(distinctNumbers);*/ 


//28. Calculate the sum of first 100 prime numbers and return them in an array
/*function isPrime(num) { //Hàm kiểm tra số nguyên tố
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumFirst100Primes() {
    const primes = []; // Khởi tạo mảng chứa số nguyên tố
    let num = 2; // bắt đầu kiểm tra từ số nguyên tố đầu tiên
    while (primes.length < 100) { // Tìm số nguyên tố
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    const sum = primes.reduce((total, prime) => total + prime, 0); // Tính tổng các số nguyên tố
    return { primes, sum };
}

// Ví dụ sử dụng:
const result = sumFirst100Primes();
console.log("Các số nguyên tố:", result.primes);
console.log("Tổng của 100 số nguyên tố đầu tiên:", result.sum);*/


//29.  Print the distance between the first 100 prime numbers
/*function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculatePrimeDistances() {
    const primes = [];
    let num = 2; // bắt đầu kiểm tra từ số nguyên tố đầu tiên
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    const distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]); // Tính khoảng cách giữa các số nguyên tố
    }

    console.log("Các số nguyên tố: ", primes);
    console.log("Khoảng cách giữa các số nguyên tố:");
    console.log(distances);
}

// Gọi hàm để tính toán và in ra khoảng cách
calculatePrimeDistances();*/


//30. Create a function that will add two positive numbers of indefinite size. The numbers
//are received as strings and the result should be also provided as string.
/*function addLargeNumbers(num1, num2) {
    // Đảm bảo rằng cả hai số đều là chuỗi
    num1 = num1.toString();
    num2 = num2.toString();

    let carry = 0; // Biến nhớ khi tổng vượt quá 9
    let result = []; // Mảng để lưu trữ kết quả của từng bước cộng
    let i = num1.length - 1;
    let j = num2.length - 1;

    // Vòng lặp qua từng chữ số từ phải qua trái
    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i], 10) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j], 10) : 0;

        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10); // Tính toán biến nhớ
        result.unshift(sum % 10); // Thêm chữ số vào đầu mảng kết quả

        i--;
        j--;
    }

    // Chuyển đổi mảng kết quả thành chuỗi
    return result.join('');
}

// Ví dụ sử dụng:
const num1 = "123456789123456789";
const num2 = "987654321987654321";
const sum = addLargeNumbers(num1, num2);
console.log(`Kết quả cộng: ${sum}`);*/


//31. Create a function that will return the number of words in a text
function countWords(text) {
    // Loại bỏ khoảng trắng ở đầu và cuối, sau đó tách từ bằng khoảng trắng
    const words = text.trim().split(/\s+/);
    // Trả về số lượng từ
    return words.length;
}

// Ví dụ sử dụng:
const text = "Huỳnh Hồ Nhựt Hào, 20067811.";
const wordCount = countWords(text);
console.log(`Số lượng từ của text: ${wordCount}`);

//32. Create a function that will capitalize the first letter of each word in a text
function capitalizeFirstLetter(text) {
    return text
        .split(' ')               // Tách chuỗi thành mảng các từ bằng khoảng trắng
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
            // Viết hoa chữ cái đầu của từ và nối với phần còn lại của từ
        })
        .join(' ');               // Kết hợp các từ lại thành chuỗi
}

// Ví dụ sử dụng:
const text2 = "huỳnh hồ nhựt hào";
const capitalizedText = capitalizeFirstLetter(text2);
console.log("text2 được in hoa chữ cái đầu: "+capitalizedText);
