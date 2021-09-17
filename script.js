const innLoggin = "test"; // här gör jag inloggingen
const lösen = "1234";  // och här är lösenordet

document.getElementById("loggUt").style.visibility = "hidden"; // här gömmer jag logga ut knappen

 //localStorage.clear();


    if(localStorage.getItem("inLoggin")  === "test" ){   // här kollar jag om jag fortfarande är in loggad genom att testa ifall inLoggin är samma som test och ifall det stämmer så kör den denna if
        document.getElementById("user").style.visibility = "hidden"; // gömmer använarnamtetkoluen
        document.getElementById("password").style.visibility = "hidden"; //gömmer lösenordetkolumen
        document.getElementById("knapp").style.visibility = "hidden"; // gömmer logga in knappen
        document.getElementById("loggUt").style.visibility = "visible";  // visar logga ut knappen
        document.getElementById("userL").innerHTML = "Välkommen";//visar label cälkomen även om man uppdaterar sidan
        document.getElementById("passwordL").style.visibility = "hidden"; // gömmmer Label             
    }


function test(){
        let username = document.getElementById("user").value;  // hämtar vad användaren skriver in
        let password = document.getElementById("password").value; // hämtar vad användaren skriver in
                if (username === null || username === "") { //här testar jag ifall användar har skrivit in något och ifall den inte har det så kommer det medelande
                    document.getElementById("userL").innerHTML = "Skriv in Användarnamn!";
                    document.getElementById("userL").style.color = "red";
                    document.getElementById("userL").style.fontSize = "20px";
                    return false;
                }
                if (password === null || password === "") { //här testar jag ifall användar har skrivit in något och ifall den inte har det så kommer det medelande
                    document.getElementById("passwordL").innerHTML = "Skriv in Lösenord";
                    document.getElementById("passwordL").style.color = "red";
                    document.getElementById("passwordL").style.fontSize = "20px";
                    return false;
                }
                if (innLoggin !== username ||  password !== lösen) { // här testar jag ifall lösenordet och användaren stämmer med det jag skappade tidigare  här i javascripten och gör det inte de så körs denna if igång
                    document.getElementById("userL").innerHTML = "Fel inloggning försök igen!";
                }
                if (innLoggin === username &&  password === lösen) { // här testar jag ifall det är rätt lösen och användarnamn så körs denna if igång och då så  får man ett välkoms medleande
                    localStorage.setItem("inLoggin", "test");   // samt att  inloggings rutan göms och inloggins knappen göms samt då att logga ut knappen visas
                    document.getElementById("user").style.visibility = "hidden";
                    document.getElementById("password").style.visibility = "hidden";
                    document.getElementById("knapp").style.visibility = "hidden";
                    document.getElementById("userL").style.color = "black";
                    document.getElementById("userL").style.fontSize = "20px";
                    document.getElementById("userL").innerHTML = "Välkommen";
                    document.getElementById("passwordL").style.visibility = "hidden";
                    document.getElementById("loggUt").style.visibility = "visible"; 
                   
               }
}
function loggUtknapp(){ // här är fuktionen för logga ut  knappen och allt som görs då.
    localStorage.removeItem("inLoggin");
    user.value="";
    password.value="";
    document.getElementById("user").style.visibility = "visible";
    document.getElementById("password").style.visibility = "visible";
    document.getElementById("loggUt").style.visibility = "hidden";
    document.getElementById("knapp").style.visibility = "visible";
    document.getElementById("userL").style.visibility = "visible";
    document.getElementById("passwordL").style.visibility = "visible";
    document.getElementById("userL").innerHTML = "Användarnamn";
    document.getElementById("passwordL").innerHTML = "Lösenord"; 
    document.getElementById("passwordL").style.color = "black";
}


