  var readlineSync = require('readline-sync');

//getting user name for greeting
  var userName = readlineSync.question("Whats your name? : ");
  //setting initial score to 0 (public)/global
  var score = 0;
//greeting start
  console.log("\n");
  console.log(" 😊 Hey! "+userName+", welcome to the quiz about india!")
  console.log("correct answer adds a 1 to score while wrong answer adds -0.5, so be carefull and think twice, all the best! ")
  console.log("Lets start!!!")
//greeting end

//function start

function eval(q,a){
  var userAns = readlineSync.question(q);
  if(userAns == a){
    score++;
    console.log("updated Score : "+score+" Keep going! "+"\n");
  }
  else{
    score = score - (0.5);
    console.log("updated Score : "+score+" think twice! "+"\n");
  }
}


//function end
//questions and answwers stored in an array of objects
var quesNans = [
  queNans1 = {
    question : "Q1 -> so, how old is the new india? i mean after independence  : ", answer : 76
  },

  queNans2 = {
    question : "Q2 -> who is considered as father of nation? : ", answer : "gandhi"
  },

  queNans3 = {
    question : "Q3 -> which is the national animal of india? let alone it being endangered 🤔 : ",
     answer : "bengaltiger"
  },

  queNans4 = {
    question : "Q4 -> what is capital of india? : ",
     answer : "newdelhi"
  },

  queNans5 = {
    question : "Q5 -> which is the largest city in india? : ",
     answer : "mumbai"
  },

  queNans6 = {
    question : "Q6 -> which is the southermost tip of india? : ", 
    answer : "kanyakumari"
  },

  queNans7 = {
    question : "Q7 -> which nation got divided from us during the independence? : ", 
    answer : "pakistan"
  },

  queNans8 = {
    question : "Q8 -> the most loved sport in india is? : ", 
    answer : "cricket"
  },

  queNans9 = {
    question : "Q9 -> so, silicon valley of india is also locally known as whuch city? : ",
     answer : "bengaluru"
  },

  queNans10 = {
    question : "Q10 -> finally! what is india generally famous from the old era? : ", 
    answer : "spices"
  }
]

for(var i=0; i<quesNans.length; i++){
  eval(quesNans[i].question, quesNans[i].answer);
}

if(score==10){
  console.log("HURRAY 🎉🥳 "+userName+" your anwers were all correct and you socred a perfect 10/10 😄 keep it up! and see ya..👋");
}
else{
  console.log("Nice try "+userName+" Better luck next time 👍")
}

