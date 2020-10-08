function myFunction() {
    var myStringDate = document.getElementById("dateProvided").Value;
     var days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myDate = new Date(myStringDate);
   var dayOfWeek = myDate.getDay();
   document.getElementById("message").innerHTML = "I was born on " + days[dayOfWeek] + "!";
  

let akanName;

   maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var gender = document.querySelector('input[name="gender"]:checked').value;
    if (gender[0].checked == true) {
        gender == "male";
        akanName = maleNames[0];
    }else if(gender[1].checked ==true){
        gender = "female";
        akanName = femaleNames[0];
    }
    switch(gender){
        case "male":
         case "maleNames"   

    if(dayOfWeek==0) {
document.getElementById("myFunction").innerHTML ="Sunday" + maleName[0];
} else if(dayOfWeek==1) {
    document.getElementById("myFunction").innerHTML ="Monday" + maleName[1]; 
} else if(dayOfWeek==2) {
    document.getElementById("myFunction").innerHTML ="Tuesday" + maleName[2];
} else if(dayOfWeek==3) {
   
  document.getElementById("myFunction").innerHTML ="Wednesday" + maleName[3];
}else if(dayOfWeek==4) {
    
    document.getElementById("myFunction").innerHTML ="Thursady" + maleName[4];
} else if(dayOfWeek==5) {
   
    document.getElementById("myFunction").innerHTML ="Friday" + maleName[5];
} else if(dayOfWeek==6) {
  
    document.getElementById("myFunction").innerHTML ="Saturday" + maleName[6];
}
break;
case "female":
    if(dayOfWeek==0) {
        document.getElementById("myFunction").innerHTML ="Sunday" + maleName[0];
        } else if(dayOfWeek==1) {
            document.getElementById("myFunction").innerHTML ="Monday" + maleName[1]; 
        } else if(dayOfWeek==2) {
            document.getElementById("myFunction").innerHTML ="Tuesday" + maleName[2];
        } else if(dayOfWeek==3) {
          document.getElementById("myFunction").innerHTML ="Wednesday" + femaleName[3];
        } else if(g==4) {
            document.getElementById("myFunction").innerHTML ="THursady" + femaleName[4];
        } else if(dayOfWeek==5) {
           document.getElementById("myFunction").innerHTML ="Friday" + femaleName[5];
        } else if(dayOfWeek==6) {
         document.getElementById("myFunction").innerHTML ="Saturday" + femaleName[6];
        }

        break;
        default:

    }
}