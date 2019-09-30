function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contact1"].elements.length;
        loopCounter++) {
        if (document.forms["contact1"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contact1"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["contact1"]["name"].value = "";
    document.forms["contact1"]["email"].value = "";
    document.forms["contact1"]["phone"].value = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["contact1"]["name"].focus();
}

function validateItems() {
    clearErrors();
    var name = document.forms["contact1"]["name"].value;
    var email = document.forms["contact1"]["email"].value;
    var phone = document.forms["contact1"]["phone"].value;
    var days = [document.forms["contact1"]["days"].value];
    var qst = document.forms["contact1"]["questionnaire"].value;
    var txt = document.forms["contact1"]["info"].value;
    var inquiry = document.forms["contact1"]["inquiry"].value;


    if (name == "" || name.indexOf(" ") < 1 ) {
        alert("Name field must contain first and last name. Please use only letters.");
        document.forms["contact1"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contact1"]["name"].focus();
        return false;
    }

   if (email == "" || email.indexOf(".") < 1 || email.indexOf("@") < 1 ) {
       alert("Please provide your e-mail address.");
       document.forms["contact1"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["contact1"]["email"].focus();
       return false;
   }

   if (phone == "" || isNaN(phone)) {
       alert("Please provide your phone number using numbers only.");
       document.forms["contact1"]["phone"]
          .parentElement.className = "form-group has-error"
       document.forms["contact1"]["phone"].focus();
       return false;
   }

   else {
     alert("Thank you for your submission of: " + name + " | " + email + " | " + phone + " | " + qst + " | " + days + " | " + txt + " | " + inquiry + ".  We will contact you soon!" );
}
}
