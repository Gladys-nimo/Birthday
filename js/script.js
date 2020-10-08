function myFunction() {
    var myStringDate = document.getElementById("dateProvided").Value;
     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var maleAkan = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa","Afua","Ama"];
    var g = new Date(myStringDate);
   var dayOfWeek = g.getDay();
   var gender = document.querySelector('input[name="gender"]:checked').value;
   document.getElementById("message").innerHTML = "I was born on " + days['0', '1', '2', '3', '4', '5', '6'] + "!";
  document.getElementById("message").innerHTML = "my maleAkan name is " + maleAkan['0', '1', '2','3','4', '5', '6'] + "!";
  document.getElementById("message").innerHTML = "my femaleAkan name is " + femaleAkan['0', '1', '2', '3', '4', '5', '6'] + "!";
}
  




   