const OPERATORS = ['+', '-', '*', '/'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomOperator() {
  return OPERATORS[randomNumber(0, OPERATORS.length - 1)];
}

function generateExpression(operators, range) {
  let expression = '';
  let prevOperator;
  for (let i = 0; i < operators.length; i++) {
    let num = randomNumber(range.min, range.max);
    let operator = operators[i];
    if (operator === '/' && prevOperator === '*') {
      num = 1;
    }
    expression += ` ${num} ${operator}`;
    prevOperator = operator;
  }
  expression += ` ${randomNumber(range.min, range.max)}`;
  return expression;
}

export function generateProblem() {
  const operatorsCount = randomNumber(2, 4);
  const operators = Array.from({ length: operatorsCount }, () => randomOperator());

  const numberRange = { min: 1, max: 30 };

  const correctSolution = generateExpression(operators, numberRange);
  const shuffledOperators = operators.sort(() => Math.random() - 0.5);
  const displayText = generateExpression(shuffledOperators, numberRange);

  return {
    displayText,
    correctSolution,
    operators: shuffledOperators,
  };
}

export function checkSolution(problem) {
  try {
    const userResult = eval(problem.displayText);
    const correctResult = eval(problem.correctSolution);
    return userResult === correctResult;
  } catch (error) {
    console.error('Error evaluating expressions:', error);
    return false;
  }
}
