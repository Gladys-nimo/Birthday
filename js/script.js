function myFunction() {
    var myStringDate = document.getElementById("dateProvided").Value;
     var days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var maleAkan = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa","Afua","Ama"]
    var myDate = new Date(myStringDate);
   var dayOfWeek = myDate.getDay();
   var gender = document.querySelector('input[name="gender"]:checked').value;
   document.getElementById("message").innerHTML = "I was born on " + days[dayOfWeek] + "!";
  document.getElementById("message").innerHTML = "my maleAkan name is " + maleAkan[dayOfWeek] + "!";
  document.getElementById("message").innerHTML = "my femaleAkan name is " + femaleAkan[dayOfWeek] + "!";
}
  




   