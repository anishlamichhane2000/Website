
		function validateForm()
		{
			var fname = document.forms["messageForm"]["firstname"].value;
			
			var lname = document.forms["messageForm"]["lastname"].value;
			
			var message = document.forms["messageForm"]["message"].value;
			

			if (fname == "" || lname == "" || message=="") {
				alert("Please fill required information");
			}

			else
			{
				alert("Thank you for your feedback");
			}
			}
		
