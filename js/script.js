function myFunction() {
    var myStringDate = document.getElementById("dateProvided").Value;
     var days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myDate = new Date(myStringDate);
   var dayOfWeek = myDate.getDay();


  var day = document.getElementById("day").value;
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//gladys.setDate (parseInt(day));
//gladys.setMonth (parseInt(month));
//gladys.setYear (parseInt(year));
//var g = gladys.getDay();//


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

    if(dayOfWeek==0) {
document.getElementById("myFunction").innerHTML ="Monday" + maleName[0];
} else if(dayOfWeek==1) {
    document.getElementById("myFunction").innerHTML ="Monday" + maleName[1]; ;
} else if(dayOfWeek==2) {
    document.getElementById("myFunction").innerHTML ="Monday" + maleName[2];
} else if(dayOfWeek==3) {
   
}  document.getElementById("myFunction").innerHTML ="Monday" + maleName[3];
else if(g==4) {
    
    document.getElementById("myFunction").innerHTML ="Monday" + maleName[4];
} else if(dayOfWeek==5) {
   
    document.getElementById("myFunction").innerHTML ="Monday" + maleName[5];
} else if(dayOfWeek==6) {
  
    document.getElementById("myFunction").innerHTML ="Monday" + maleName[6];
}
break;
case "female":
    f(dayOfWeek==0) {
        document.getElementById("myFunction").innerHTML ="Monday" + maleName[0];
        } else if(dayOfWeek==1) {
            document.getElementById("myFunction").innerHTML ="Monday" + maleName[1]; ;
        } else if(dayOfWeek==2) {
            document.getElementById("myFunction").innerHTML ="Monday" + maleName[2];
        } else if(dayOfWeek==3) {
           
        }  document.getElementById("myFunction").innerHTML ="Monday" + femaleName[3];
        else if(g==4) {
            
            document.getElementById("myFunction").innerHTML ="Monday" + femaleName[4];
        } else if(dayOfWeek==5) {
           
            document.getElementById("myFunction").innerHTML ="Monday" + femaleName[5];
        } else if(dayOfWeek==6) {
          
            document.getElementById("myFunction").innerHTML ="Monday" + femaleName[6];
        }
        break}