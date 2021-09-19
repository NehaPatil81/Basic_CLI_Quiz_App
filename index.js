var readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.bold.blueBright("Let's see how well do you know me!!\n"));
var userName =readlineSync.question(chalk.magentaBright("Please Enter Your Name Here.."));
console.log(chalk.greenBright("\nHi "+userName+", Choose option(a/b/c) to answer. Good Luck!\n"));
console.log(chalk.yellowBright("-------------------------------------------------\n"))

let score = 0;

const data = [
  {
    "question": "1)Which is my favourite color?\na.Black \nb.Pista \nc.Green",
    "answer": "a"
  },
  {
    "question": "2)Am I Tea/Coffee person?\na.Tea \nb.Coffee \nc.None",
    "answer": "a"
  },
  {
    "question": "3)Where do i work?\na.Tcs \nb.Accenture \nc.Cognizant",
    "answer": "a"
  },
  {
    "question": "4)Where do i live? \na.Pune \nb.Aurangabad \nc.Latur ",
    "answer": "c"
  },
  {
    "question": "5)What is my favourite dessert?\na.Gulab Jamun \nb.Rasgulla \nc.Pedha",
    "answer": "a"
  },
  {
     "question": "6)Which movie is my favourite one?\na.The theory of Everything \nb.The pursuit of happiness \nc.The Intern",
    "answer": "b"
  },
  {
    "question": "7)Which is my favourite sitcom?\na.Big Bang Theory \nb.Brooklyn nine nine \nc.Friends",
    "answer": "c"
  },
  {
    "question": "8)What is my birthdate?\na.8th July \nb.8th Jan \nc.8th May",
    "answer": "b"
  },
  {
     "question": "9)What do I enjoy more?\na.Stand-Up Comedy \nb.Poetry \nc.Drama",
    "answer": "a"
  },
  {
    "question": "10)Who is my favourite stand up comedian?\na.Rahul subramanian \nb.Abhishek Upmanuy \nc.Kanan Gill",
    "answer": "a"
  }
];


function play(data) {
for (let i = 0; i < data.length; i++) {

var answer = readlineSync.question(chalk.cyanBright(data[i].question+"\n"));

    if (data[i].answer === answer) {
      console.log(chalk.greenBright("You are right!"));
      score++;
      
  }
    else {
      console.log(chalk.red("You are wrong!"));
  }

console.log(chalk.yellowBright("Current Score: "+ score));
console.log(chalk.yellowBright("-------------------------------------------------\n"));
  }
}
play(data);

console.log(chalk.yellowBright("Your Final Score is "+score));

const highScore=[
  {
    player:"Neha",
    score:10
  },
   {
    player:"Omkar",
    score:9
  }
];

console.log(chalk.greenBright("\nHigh Score Board"));
for(let i=0;i<highScore.length;i++){
  console.log(chalk.blueBright(highScore[i].player) +"--->" + highScore[i].score);
}

for(let i=0;i<highScore.length;i++){
if(score>=highScore[i].score){
  console.log(chalk.magenta("Congratulations! "+userName+ ", you have beaten the high Score."));
  break;
}
else{
var retry=readlineSync.question(chalk.red("\nYou wanna retry?(yes/no)"));
  if(retry==="yes"){
    score=0;
   console.log(chalk.yellowBright("============================================================\n"));
    play(data);
  }
  else{
    console.log(chalk.yellowBright("Quiz Over"));
  }
  break;
}
}



