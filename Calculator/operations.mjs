const operations = new Map()

operations['/'] = (firstNumber, secondNumber) => firstNumber = firstNumber / secondNumber;
operations['X'] = (firstNumber, secondNumber) => firstNumber = firstNumber * secondNumber;
operations['-'] = (firstNumber, secondNumber) => firstNumber = firstNumber - secondNumber;
operations['+'] = (firstNumber, secondNumber) => firstNumber = firstNumber + secondNumber;
operations['%'] = (firstNumber, secondNumber) => firstNumber = firstNumber / secondNumber * 100;

export default operations;
