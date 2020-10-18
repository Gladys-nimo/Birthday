let doc = document.getElementById("form").addEventListener("submit",myFunction)
console.log(doc)


function myFunction(event) {
  event.preventDefault();
  var dayofBirth = document.getElementById("birthday").value.split("-");
  var gender = document.getElementById("gender").value;
  console.log(dayofBirth);
  if (dayofBirth != "") {
      var MM = parseInt(dayofBirth[1]);
      var DD = parseInt(dayofBirth[2]);
      var Year = dayofBirth[0].split("");
      var CC = parseInt(Year[0].concat(Year[1]));
      var YY = parseInt(Year[2].concat(Year[3]));
      var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
      var d1 = Math.floor(d);
      var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kwame"];
      var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
     // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];//


      if (gender === "male" && d1 >= 0 && d1 <= 6) {
          alert("Your Akan name is " + akanMale[d1]);
          document.getElementById("results").innerHTML = " Sunday " + akanMale[d0];
    
          
      }
      else if (gender === "female" && d1 >= 0 && d1 <= 6) {
          alert("Your Akan name is " + akanFemale[d1])
      }
      else {
          alert("invalid input");
      }
  }
  else {
      alert("invalid input");
  }
  document.getElementById("form").reset();
   Selector('input[name="gender"]:checked').value;

  
}