function affichePyramide(etagevalue) {

    for(var i=0;i<etagevalue;i++) {
        var output="";
            for(var j=0;j<etagevalue-i;j++) {
                output+=" ";
            }
            for(var k=0;k<=i;k++) {    
               output += "* ";
            }
            console.log(output);  
        }  

}
function getNbEtage() {
    var etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu?");
    if (etage > 0) {
        affichePyramide(etage);
    }
}
window.onload = function () {
    getNbEtage();
}