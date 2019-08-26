function calculate(){
    var pennies = 1;
    for(i=1; i<365; i++){
        pennies *= 2; 
    }
    alert(pennies + " pennies");
}