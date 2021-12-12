/*Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/
function birthday() {
  var bday = document.getElementById("dob").value;
  var bdayArray = bday.split("-");

  //validation
  if (bdayArray.length !== 3) {
    alert("invalid Date..");
  } else {
    if (
      !bdayArray[0].match(/^\d\d\d\d$/) ||
      !bdayArray[1].match(/^\d\d$/) ||
      !bdayArray[2].match(/^\d\d$/)
    ) {
      alert("invalid Date");
    } else {
      var dow = function (year, century, month, day) {
        var year = parseInt(bdayArray[0]);
        var century = parseInt(bdayArray[0].slice(0, 2));
        var month = parseInt(bdayArray[1]);
        var day = parseInt(bdayArray[2]);
        var result =
          (century / 4 -
            2 * century -
            1 +
            (5 * year) / 4 +
            (26 * (month + 1)) / 10 +
            day) %
          7;
        var theDay = Math.ceil(result);
//day of the week switch
        
        var day;
        switch (theDay) {
          case 0:
            day = "Sunday";
            break;
          case 1:
            day = "Monday";
            break;
          case 2:
            day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";
        }
        //male gender name switch
        document.getElementById("tell").innerHTML = "you wer born on " + day;
        
        var gender = document.querySelector('input[name = "gender"]:checked').value;
        if (gender === "male")
        {
          var name;
          switch (theDay) {
            case 0:
              name = "Kwasi";
              break;
            case 1:
              name = "Kwadwo";
              break;
            case 2:
              name = "Kwabena";
              break;
            case 3:
              name = "Kwaku";
              break;
            case 4:
              name = "Yaw";
              break;
            case 5:
              name = "Kofi";
              break;
            case 6:
              name = "Kwame";
              
          }
          document.getElementById("Akran").innerHTML = "your Akan name is " + name;
        }
        //female gender name switch
        else{

        var name
        switch (theDay) {
          case 0:
            name = "Akosua";
            break;
          case 1:
            name = "Adwoa";
            break;
          case 2:
            name = "Abenaa";
            break;
          case 3:
            name = "Akua";
            break;
          case 4:
            name = "Yaa";
            break;
          case 5:
            name = "Afua";
            break;
          case 6:
            name = "Ama";
             
      }
      document.getElementById("Akran").innerHTML = "your name is " + name;
        }

      };
      dow();

      
    }
  }
}

//function to show menu elements
 var showMenu=function (){
 document.getElementById("navbar_elements").style.right="0px"
 document.getElementById("bar_logo").style.visibility="hidden"                              

}
