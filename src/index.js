module.exports = function getZerosCount(number) {
    let result = 0;
    for (let i = 5; i <= number; i = i + 5) {
        let num = i;
        while (num % 5 === 0) {
            num = num / 5;
            result++;
        }
    }
    return result;
};
