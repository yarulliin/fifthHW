function multiply(firstNum, secondNum) {
    if (typeof firstNum != 'number' || typeof secondNum != 'number') {
        throw 'Введены некорректные данные';
    }
    else return firstNum * secondNum;
}

const multiplyBy10 = multiply.bind(undefined, 10);