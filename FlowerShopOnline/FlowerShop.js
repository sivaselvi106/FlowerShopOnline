function validateCardNumber() {
    
  var x = document.getElementById("cardNo").value;
  if(x.length !=16) {
      document.getElementById("cardnumber").innerHTML = "Please Enter 16 digit number";
  } 
  else {
      document.getElementById("cardnumber").innerHTML = "";   
  }
}

function validateSecurityCode() {
    
  var x = document.getElementById("security").value;
  var pattern = /^[0-9]+$/;
  if(x.length !=4 ) {
      document.getElementById("scode").innerHTML = "Please Enter 4 digit number";
  } 
  if(!x.match(pattern)) {
    document.getElementById("scode").innerHTML = "Please enter numbers";
} 
  else {
      document.getElementById("scode").innerHTML = "";   
  }
}

function validatePinCode() {
    
  var x = document.getElementById("pincode").value;
  if(x.length !=6) {
      document.getElementById("pin").innerHTML = "Please Enter 6 digit number";
  } 
  else {
      document.getElementById("pin").innerHTML = "";   
  }
}

function validateMobileNumber() {
    
  var x = document.getElementById("phone").value;
  if(x.length !=10) {
      document.getElementById("Telephone").innerHTML = "Please Enter 10 digit number";
  } 
  else {
      document.getElementById("Telephone").innerHTML = "";   
  }
}
function validateFax() {
    
  var x = document.getElementById("fax").value;
  if(x.length !=10) {
      document.getElementById("faxValue").innerHTML = "Please Enter 10 digit number";
  } 
  else {
      document.getElementById("faxValue").innerHTML = "";  
  }
}
function ValidateEmail() {
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = document.getElementById("email").value;
  if(!email.match(pattern)) {
      document.getElementById("mailId").innerHTML = "Please Enter valid MailId";
  }
  else {
      document.getElementById("mailId").innerHTML = "";
  }
  }
  function ValidateName(){
    var pattern = /^[A-Za-z]+$/;
    var name = document.getElementById("name").value;
    if(!name.match(pattern)){
      document.getElementById("HolderName").innerHTML = "Please enter valid name";
    }
    else {
        document.getElementById("mailId").innerHTML = "";
    }
  }
  function ValidateNullField(){
    var comment = "Value cannot be empty";
    if(cardNo.value == ""){
      cardnumber.innerHTML = comment;
    }
    if(security.value == ""){
      scode.innerHTML = comment;
    }
    if(name.value == ""){
      Holdername.innerHTML = comment;
    }
    if(Address1.value == ""){
      address.innerHTML =comment;
    }
    if(town.value == ""){
      townId.innerHTML =comment;
    }
    if(pincode.value == ""){
      pin.innerHTML = comment;
    }
    if(email.value == ""){
      mailId.innerHTML = comment;
    }
  }