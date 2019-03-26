function phone() {
var phone = getElementByName("phone").value;
var patternPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
var result = patternPhone.test(phone);
if(!result) {
    alert("That is not a valid phone number!");
    return false;
}
else
    return true;
}

function id() {
    var ID = getElementByName("id").value;
    var patternID = /\d{8}$/;
    var result = patternID.test(ID);
    if(!result) {
        alert("That is not a valid ID!");
        return false;
    }
    else
         true;
}

funtion program() {
var program = getElementByName("program").value;
var patternProgram = /student_list/;
var result = patternID.test(program);
if(!result){
  alert("Not an Engineering Student");
  return false;
}
else
  true;
}
