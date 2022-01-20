console.log ('Task 2 - ')
let nome = "Niedja";
let surname = "Bezerra";
let age = 18;
let iAmHuman = true;
let birthMonth = "April";
if(age>= 18 && iAmHuman == true) {
    console.log("You are 18 or older and you're human. You may come in :) ")
}else{
    console.log("You shall NOT pass")
}
if(birthMonth == 'January' || birthMonth == 'December'){
    console.log("Let's get the PARTY started")
}else{
    console.log("Not yet a birthday girl :'(")
}
if(nome.substring(0,1) == 'R'){
    console.log("Round and round the rugged rocks the ragged rascal ran.")
}else{
    console.log("L-L-L-Laame")
}
if(surname.length> 6 || nome.substring(0,1) == "E" || "e" ){
    console.log("Lovely name!")
}else {
    console.log("Lame")
}
