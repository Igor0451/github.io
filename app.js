//let name = "Igor";

/*const getNumberExplanation = (num) => {
  switch (num) {
    case 666:
      return 'devil number';
    case 42: 
      return 'answer for everything';
    case 7:
      return 'prime number';
    default:
      return null;
  }
}
console.log(getNumberExplanation(''));
*/

/*const multiplyNumberFromRange = (start, finish) => {

  let i = start;
  let sum = 1;

  while (i <= finish) {
    sum = sum * i;
    i = i + 1;
  }
  return sum;
}

console.log(multiplyNumberFromRange(2, 5));
*/

/*const joinNumbersFromRange = (start, finish) => {
  let result = '';
  let i = start;

  while (i <= finish) {
    result = `${result}${i}`;
    i = i + 1;
  }
return result;

}

console.log(joinNumbersFromRange(2,5));
*/

/* const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  const lowCaseStr = str.toLowerCase();
  const lowCaseChar = char.toLowerCase();

  while (i < lowCaseStr.length) {
    if (lowCaseStr[i] === lowCaseChar) {
      count = count + 1;
    }
    i = i + 1;
  }

  return count;
}

console.log(countChars('hexlet', 'E'));
*/

 /* const reverse = (str) => {
  let i = str.length - 1;
  let result = '';
  while (0 <= i) {
    // Соединяем в обратном порядке
    result = `${result}${str[i]}`;
    i = i - 1;
  }

  return result;
}

console.log(reverse('Igor'));
*/

/* const filterString = (str, char) => {
  let i = 0;
  let result = '';

  while (i < str.length) {
    if (str[i] !== char) {
      result = `${result}${str[i]}`;
    }
      i += 1;
    }
  return result;
}

console.log(filterString('If I look back I am lost', 'o'));
*/

/*console.log(makeItFunny('I never look back', 2));


const encrypt = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i += 2) {
    result = `${text[i]}${result}`;
  }
  return result;
}

console.log(encrypt("hello"));
*/
