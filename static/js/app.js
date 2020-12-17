//Initialise and declare global variables
var totalCost = 0;

//jQUERY
$(document).ready(function () {
    $("#checkDetailsBtn").click(function () {
        //call javaScript functions
        validateBookingName();
        emailPhone();
        validateServices();
        validateDate();
        //initialise and declare variables
        var userName = $("#bookingName").val();
        var phoneNumber = $("#bookingPhone").val();
        var email = $("#bookingEmail").val();
        var servicesSelected = $("#servicesRequired").val();
        var dateSelected = $("#bookingDate").val().toLocaleString();
        var selectedDate = new Date(dateSelected).toLocaleDateString();
        if (selectedDate == "Invalid Date" || servicesSelected.length == 0 || userName == "" || (!phoneNumber && !email)){
            $("#showBookingDetails").addClass("bookingFormError");
            $("#showBookingDetails").html("Hello " + userName + ". You have not fully completed the booking form.");
        }else{
            $("#showBookingDetails").addClass("bookingFormError");
            $("#showBookingDetails").html("Hello " + userName + ". You want to book for " + selectedDate + "<br>We can contact you at " + phoneNumber
                + " and " + email + ". Your selected service is: <br>" + servicesSelected + "<br>Which brings your cost to &euro;" + totalCost);
            $("#submitDetailsBtn").show();
        }
        //this stops the check details button from submitting the form as that should only be done by the submit button
        return false;
    })
    //service choice to listen for change in selection on book appointment form and add the service cost to the total cost variable
    $("#servicesRequired").change(function () {
        totalCost = 0;
        var servicesSelected = $("#servicesRequired").val();
        //if no services are selected display an error message
        if(servicesSelected === ""){
            console.log("Test");
            $("#bookingServiceOutput").html("You must select at least one service");
        }
        //if car valet is selected add 20 to the total cost
        if (servicesSelected.includes("carValet")){
            totalCost += 20;
        }
        //if clutch replacement is selected add 300 to the total cost
        if (servicesSelected.includes("clutchReplacement")){
            totalCost += 300;
        }
        //if full service is selected add 100 to the total cost
        if (servicesSelected.includes("fullService")){
            totalCost += 100;
        }
        //if tyre fitting is selected add 10 to the total cost
        if (servicesSelected.includes("tyreFitting")){
            totalCost += 10;
        }
        //if wheel alignment is selected add 20 to the total cost
        if (servicesSelected.includes("wheelAlignment")){
            totalCost += 20;
        }
    })
    //if car collection/dropoff box is checked
    $("#carCollection").change(function () {
        if($("#carCollection").is(":checked")){
            $(".hiddenCollectionArea").show();
        }else{
            $(".hiddenCollectionArea").hide();
        }
    })
    //if user knows their car registration
    $("input[name = 'carReg']").change(function () {
        var knowCarReg = $("input[name = 'carReg']:checked").val()
        if(knowCarReg == "Yes"){
            $(".hiddenRegKnownArea").show();
            $(".hiddenRegUnKnownArea").hide();
        }else if(knowCarReg == "No"){
            $(".hiddenRegUnKnownArea").show();
            $(".hiddenRegKnownArea").hide();
        }
    })
})


//This function allows an error message to be shown if the bookingName is empty
function validateBookingName() {
    //assign username variable to empty string which user populates
    var userName = "";
    userName = document.getElementById("bookingName").value;
    //get output p for javascript message
    var output = document.getElementById("bookingNameOutput");
    //if username is not valid display message in red else display alternative message in default color
    if (!userName) {
        output.innerHTML = "*The username field cannot be empty";
    }else{
        output.style.display = "none";
    }
}

//This function allows an error message to be shown if both the email and phone number fields are blank in the booking form
function emailPhone(){
    //assign phoneNumber to empty array which the user populates
    var phoneNumber = [];
    //assign phoneNumber to empty String which the user populates
    var email = "";
    //values user enters for email and phone are assigned to variables
    var phoneNumber = document.getElementById("bookingPhone").value;
    var email = document.getElementById("bookingEmail").value;
    var output = document.getElementById("bookingContactOutput");
    //if both email and phone are empty display error message
    if(phoneNumber == [] && email == ""){
        output.innerHTML = "*You must enter either a contact email or phone number";
    }else{
        output.style.display = "none";
    }
}

//NEEDS MORE WORK
function validateServices(){
    var servicesSelected = document.getElementById("servicesRequired").value;
    var output = document.getElementById("bookingServiceOutput");
    if(servicesSelected == "What service(s) do you want to book?"){
        output.innerHTML = "You must choose at least one service";
    }
}

//NEEDS MORE WORK
function validateDate(){
    //get value of selected date
    var dateSelected = document.getElementById("bookingDate").value;
    var selectedDate = new Date(dateSelected);
    var now = new Date();
    var output = document.getElementById("dateError");
    if(!dateSelected){
        output.innerHTML = "You haven't selected a date yet";
    }else if(selectedDate < now){
        output.innerHTML = "You cannot select a date in the past";
    }else{
        output.style.display = "none";
    }
}


/* Ensures inquiry field in contact us form is not empty and alerts user if it is. Opens new html page if form is succesful */
function inquiryCheck(){
    var subject = document.getElementById("subject");
    if(subject.value == ""){
          alert("Please fill in your Inquiry")
            return false;
         }else{
            window.open("contactFormSubmit.html", "_self");
        }
    }





