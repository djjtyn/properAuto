//Initialise and declare global variables
var discountApplied = false;
var totalCost = 0;



//jQUERY
$(document).ready(function () {
    //initialise and declare variables
    $("#checkDetailsBtn").click(function () {
        var userName = $("#name").val();
        var phoneNumber = $("#phone").val();
        var email = $("#email").val();
        var servicesSelected = $("#servicesRequired").val();
        console.log(servicesSelected);
        var dateSelected = $("#date").val().toLocaleString();
        var selectedDate = new Date(dateSelected).toLocaleDateString();
        if (selectedDate == "Invalid Date" || servicesSelected.length ==0){
            $("#showBookingDetails").html("Hello " + userName + ". You have not fully completed the booking form.");
        }else{
    $("#showBookingDetails").html("Hello " + userName + ". You want to book for " + selectedDate + "<br>We can contact you at " + phoneNumber
     + " and " + email + ". Your selected service is: <br>" + servicesSelected + "<br>Which brings your cost to &euro;" + totalCost);
    totalCost = 0;
        }
    })
    //service choice to listen for change in selection on book appointment form and add the service cost to the total cost variable
    $("#servicesRequired").change(function () {
        var servicesSelected = $("#servicesRequired").val();
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
    //if the date selected is in the past an error message will be shown
    $("#date").change(function () {
        var dateSelected = $("#date").val();
        if(dateSelected.val() == ""){
            console.log("test");
        }
 
        //get selected date and store in dateSelected variable
        var selectedDate = new Date(dateSelected);
        //get current date and store in now variable
        var now = new Date();
        //if selected date is before current date display error
        if(selectedDate < now){
            $("#dateError").html("You cannot select a date in the Past");
        }else{
            $("#dateError").html("");
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

// //This function will display the users booking preferences after using the book appointment form. It also allows the submit button to be diplayed
// function checkBookingDetails(){
//     //get input values



//     var bookingOutput = document.getElementById("showBookingDetails");
//     bookingOutput.innerHTML = "Hello " + userName
// }




