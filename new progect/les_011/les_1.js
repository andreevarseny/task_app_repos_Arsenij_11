const money = 80;
const time = 5;
const day = 5;
const totalTime = 40;
const TotalDay = 9;

const dayWork =  totalTime / day;
const yesOrNot = dayWork <= TotalDay;
console.log('Успеем {yesOrNot}');