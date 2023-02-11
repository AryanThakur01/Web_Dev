function navMenuList(){
    if(document.getElementById('naviMenu').classList == 'navMenu fold'){
        document.getElementById('naviMenu').classList ='navMenu' ;
        console.log('navmenu')
    }
    else if(document.getElementById('naviMenu').classList == 'navMenu'){
        document.getElementById('naviMenu').classList ='navMenu fold';
        console.log('navmenu fold')
    }

    if(document.getElementById('b1').classList == 'bar'){
        document.getElementById('b1').classList ='bar cross1';
    }
    else if(document.getElementById('b1').classList == 'bar cross1'){
        document.getElementById('b1').classList ='bar';
    }
    if(document.getElementById('b2').classList == 'bar'){
        document.getElementById('b2').classList ='bar cross2';
    }
    else if(document.getElementById('b2').classList == 'bar cross2'){
        document.getElementById('b2').classList ='bar';
    }
    if(document.getElementById('b3').classList == 'bar'){
        document.getElementById('b3').classList ='bar cross3';
    }
    else if(document.getElementById('b3').classList == 'bar cross3'){
        document.getElementById('b3').classList ='bar';
    }
}

