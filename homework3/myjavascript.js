var statesArray = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
function formatHours(hour){
    var ampm = hour >= 12 ? 'pm' : 'am';
    var hours = hour % 12;
    hours = hours ? hours : 12; 
    return hours + ':00' + ' ' + ampm;
}
function populateDropDowns(){
    var select = document.getElementById("select_state");
    for(var i = 0; i < statesArray.length; i++) {
        select.options[select.options.length] = new Option(statesArray[i], statesArray[i]);
    }
    var select = document.getElementById("select_time");
    for(var i = 0; i < 24; i++) {
        
        select.options[select.options.length] = new Option(formatHours(i), i);
    }    
}
function reserveClick(){
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
    var selectedState = document.getElementById("select_state").value;
    //alert("selectedState = " + selectedState);
    var taxRate = 8;
    var tax = 0.00;
    var price = 0.00;
    
    if (selectedState == "California"){
        taxRate = 6;
    }
    //alert("tax = " + tax);
    var selectedTime = document.getElementById("select_time").value;
    //alert("selectedTime = " + selectedTime);
    if (selectedTime >= 8 && selectedTime < 12) {
        price = 20;
    } 
    else if (selectedTime >= 12 && selectedTime <= 18){
        price = 25;
    }
    else if (selectedTime > 18 && selectedTime <=22){
        price = 15;
    }
    else {
        alert("This time is not available. Working hours are from 8AM to 10PM");
    }
    //alert("price = " + price);
    document.getElementById("lbl_price").innerHTML = "Price:";
    document.getElementById("price").innerHTML = formatter.format(price);
    document.getElementById("lbl_tax").innerHTML = "Tax (" + taxRate + "%):";
    tax = price*taxRate/100;
    document.getElementById("tax").innerHTML = formatter.format(tax);
    document.getElementById("lbl_total").innerHTML = "Total:";
    document.getElementById("total").innerHTML = formatter.format(price+tax);
    
}