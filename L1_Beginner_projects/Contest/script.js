function activateTrainers(){

    if (document.getElementById("shops").classList == "navMenuSubList_lis shopvis") {
        document.getElementById("shops").classList= "navMenuSubList_lis"
    }

    if (document.getElementById("pages").classList == "navMenuSubList_lis pagevis") {
        document.getElementById("pages").classList= "navMenuSubList_lis"
    }
    

    if (document.getElementById("trainers").classList == "navMenuSubList_lis") {
        document.getElementById("trainers").classList = "navMenuSubList_lis trainvis"
        
    }
    else{
        document.getElementById("trainers").classList= "navMenuSubList_lis"
    }
}

function activateShop(){
    if (document.getElementById("trainers").classList == "navMenuSubList_lis trainvis") {
        document.getElementById("trainers").classList= "navMenuSubList_lis"
    }

    if (document.getElementById("pages").classList == "navMenuSubList_lis pagevis") {
        document.getElementById("pages").classList= "navMenuSubList_lis"
    }

    if (document.getElementById("shops").classList == "navMenuSubList_lis") {
        document.getElementById("shops").classList = "navMenuSubList_lis shopvis"
    }
    else{
        document.getElementById("shops").classList = "navMenuSubList_lis"
    }
}

function activatePages() {
    if (document.getElementById("pages").classList ==  "navMenuSubList_lis") {
        document.getElementById("pages").classList =  "navMenuSubList_lis pagevis"
    }
    else{
        document.getElementById("pages").classList = "navMenuSubList_lis"
    }

    if (document.getElementById("shops").classList ==  "navMenuSubList_lis shopvis") {
        document.getElementById("shops").classList =  "navMenuSubList_lis"
    }

    if (document.getElementById("trainers").classList ==  "navMenuSubList_lis trainvis") {
        document.getElementById("trainers").classList =  "navMenuSubList_lis"
        
    }
}


function openNavigationMenu(){
    if (document.getElementById("navMenu").classList == "navVisible") {
        document.getElementById("navMenu").classList = "navVisible navHide"
    }
    else if(document.getElementById("navMenu").classList == "navVisible navHide"){
        document.getElementById("navMenu").classList = "navVisible"
    }

}


function foldNavigation() {
    document.getElementById("navMenu").classList = "navVisible navHide"
    
}