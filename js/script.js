function myFunction() {
    var myStringDate = document.getElementById("dateProvided").Value;
     var days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myDate = new Date(myStringDate);
   var dayOfWeek = myDate.getDay();


  var day = document.getElementById("day").value;
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var gladys = newDate();
gladys.setDate (parseInt(day));
gladys.setMonth (parseInt(month));
gladys.setYear (parseInt(year));
var g = gladys.getDay();


    var gender = document.querySelector('input[name="gender"]:checked').value;
    if (gender[0].checked == true) {
        gender == "male";
    }else if(gender[1].checked ==true){
        gender = "female";
    }
    else {

    }
    switch(gender){
        case "male":

    }if(g==0) {
alert("I was born on Sunday");
} else if(g==1) {
   alert("I was born on Monday");
} else if(g==2) {
    alert("I was born on Tuesday");
} else if(g==3) {
    alert("I was born on Wednesday");
}  else if(g==4) {
    alert("I was born Thursday");
} else if(g==5) {
    alert("I was born Friday");
} else if(g==6) {
    alert("I was born on Sunday");