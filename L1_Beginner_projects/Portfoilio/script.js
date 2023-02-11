function navmenutoggle(){
    console.log("hello world")
    if (document.getElementById("nav_menu").classList == "nav_menuvis") {
        document.getElementById("nav_menu").classList = "nav_menuvis navmenuhid";
    }
    else if (document.getElementById("nav_menu").classList == "nav_menuvis navmenuhid") {
        document.getElementById("nav_menu").classList = "nav_menuvis";
    }

    if (document.getElementById("b1").classList == "bar") {
        document.getElementById("b1").classList = "bar close c1"
    }
    else if (document.getElementById("b1").classList == "bar close c1") {
        document.getElementById("b1").classList = "bar"
    }

    if (document.getElementById("b2").classList == "bar") {
        document.getElementById("b2").classList = "bar close c2"
    }
    else if (document.getElementById("b2").classList == "bar close c2") {
        document.getElementById("b2").classList = "bar"
    }

    if (document.getElementById("b3").classList == "bar") {
        document.getElementById("b3").classList = "bar close c3"
    }
    else if (document.getElementById("b3").classList == "bar close c3") {
        document.getElementById("b3").classList = "bar"
    }
    
}