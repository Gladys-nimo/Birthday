
   
    var maleAkanNames = ["Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"]
    function myFunction() {
    var myStringDate = document.getElementById("dateProvided").Value;
     var days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myDate = new Date(myStringDate);
   var dayOfWeek = myDate.getDay();
   console.log("I was born on " + days["1"] + "!" +);
    
   
    
    var gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);
}
   