function myFunction() {
    var myStringDate = document.getElementById("dateProvided").Value;
     var days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myDate = new Date(myStringDate);
   var dayOfWeek = myDate.getDay();
   console.log(myDate);


  var day = document.getElementById("day").value;
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];




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
            document.getElementById("myFunction").innerHTML ="Monday" + maleName[1]; ;
        } else if(dayOfWeek==2) {
            document.getElementById("myFunction").innerHTML ="Tuesday" + maleName[2];
        } else if(dayOfWeek==3) {
          document.getElementById("myFunction").innerHTML ="Wednesday" + femaleName[3];
        }else if(g==4) {
            document.getElementById("myFunction").innerHTML ="THursady" + femaleName[4];
        } else if(dayOfWeek==5) {
           
            document.getElementById("myFunction").innerHTML ="Friday" + femaleName[5];
        } else if(dayOfWeek==6) {
          
            document.getElementById("myFunction").innerHTML ="Saturday" + femaleName[6];
        }
        break}