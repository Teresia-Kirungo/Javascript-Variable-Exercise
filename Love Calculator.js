name1 = prompt("What is your name?");
name2 = prompt("What is the name of your crush?");

var loveCalc = Math.random() * 100;
loveCalc = Math.floor(loveCalc);

if (loveCalc > 70 ){
  alert("The love percentage between " + name1 + " and " + name2 + " is " + loveCalc +  "%." + " It was meant to be!" );
} else{
  alert("The love percentage between " + name1 + " and " + name2 + " is " + loveCalc +  "%." );
}


