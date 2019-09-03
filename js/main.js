

//add and listen event
function eventListener(){
    //get element from dom
   const menu = document.getElementById('menu');
    
    //add click event
    menu.addEventListener('click' , redirect);
 };

function redirect(e){
    //get clicked element from dom
    let target = e.target;
   
    //redirect to menu page if true
    if(target.tagName = 'BUTTON'){
        window.location.assign('./menu/menu.html');
     }   
};

//call function
eventListener();
