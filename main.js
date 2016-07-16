/*Here we have a reservation system where people can claim their reservations when they arrive. Finish the claimReservation function. It should:

If the reservation exists and is unclaimed, welcome the user (use alert).
If the reservation exists and is already claimed, inform the user about the situation (use alert).
If there is no reservation, tell the user there is nothing under their name (user alert).
Use 'Bob' and 'Ted' to test your code 
var reservations = {
  'Bob': { 
  	claimed: false 
	},

  'Ted': { 
  	claimed: true 
  	}
};

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  
  if(reservations.hasOwnProperty(name)) {
		  	if(reservations[name]["claimed"] === false){
		  		alert("please get in"); 
		  	}

		  	else if (reservations[name]["claimed"] === true){
		  		alert("no place for you"); 
		  	}
	}

	else{
		alert ("no rservation under this name");
	}
    
};
  


claimReservation();
/*It so happens that our restaurant has a bunch of open tables. Therefore, if someone doesn't have a reservation, 
add it to the reservations 
object and set "claimed" to true for that person. Alert them of their new reservation.*/

var reservations = {
  'Bob': { 
  	claimed: false 
	},

  'Ted': { 
  	claimed: true 
  	}
};

var claimReservation = function () {

	var name = document.getElementById("nameinput").value;	
	alert(name);
  	if(reservations.hasOwnProperty(name)) {
	  	if(reservations[name]["claimed"] === false){
	  		alert("please get in"); 
	  	}

	  	else if (reservations[name]["claimed"] === true){
	  		alert("no place for you"); 
	  	}
	}

   else{
		reservations[name] = { 
  		claimed: true
  		 }
 
	}
};
  
document.getElementById("myBtn").addEventListener("click", claimReservation);


