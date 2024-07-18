/* Reference: "CSS StyleDeclaration setProperty() Method." W3Schools, https://www.w3schools.com/jsref/met_cssstyle_setproperty.asp. Accessed July 11, 2024. */
var bigFont = 0;
function adjustFontSize() {

    var HomeDesc = document.getElementsByClassName("text");

    if(!bigFont){
        for (let i = 0; i<HomeDesc.length; i++) {
            HomeDesc[i].style.setProperty("font-size", "25px", "important");
        }
    }
    if (bigFont){
        for (let i = 0; i<HomeDesc.length; i++) {
            HomeDesc[i].style.setProperty("font-size", "18px", "important");
        }
    }


    bigFont = !bigFont;
}

var darkTheme = 0;
function changeColorTheme() {
    var Body = document.getElementsByTagName("body")[0]
    var links = document.getElementsByClassName("link");

    if(!darkTheme) {
        Body.style.backgroundColor = "#242526";
        Body.style.color = "white";
        for (let i = 0; i<links.length; i++) {
            links[i].style.setProperty("color", "yellow", "important");
        }
    }
    if(darkTheme) {
        Body.style.backgroundColor = "white";
        Body.style.color = "black";
        for (let i = 0; i<links.length; i++) {
            links[i].style.setProperty("color", "purple", "important");
        }
    }


    darkTheme = !darkTheme;
}



var readableFont = 0;
function makeReadable() {

    var HomeDescription = document.getElementsByClassName("text");

    if(!readableFont){
        for (let i = 0; i<HomeDescription.length; i++) {
            HomeDescription[i].style.setProperty("font-family", "Times New Roman", "important");
        }
    }
    if (readableFont){
        for (let i = 0; i<HomeDescription.length; i++) {
            HomeDescription[i].style.setProperty("font-family", "cursive", "important");
        }
    }


    readableFont = !readableFont;
}