function performOperation() {
  let num1 = parseFloat(prompt("Введите первое число:"));
  let num2 = parseFloat(prompt("Введите второе число:"));
  let operation = prompt("Введите операцию (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
      alert("Введены некорректные числа. Попробуйте еще раз.");
      performOperation();
  } else {
      let result;
      switch (operation) {
          case '+':
              result = num1 + num2;
              break;
          case '-':
              result = num1 - num2;
              break;
          case '*':
              result = num1 * num2;
              break;
          case '/':
              if (num2 != 0) {
                  result = num1 / num2;
              } else {
                  alert("На ноль делить нельзя!");
                  performOperation();
              }
              break;
          default:
              alert("Введена некорректная операция. Попробуйте еще раз.");
              performOperation();
      }
      console.log(result);
  }
}

performOperation();