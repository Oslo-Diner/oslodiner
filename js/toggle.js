function closeToggle(e) {
  //target stores clicked dom element
  let target = e.target;

  //check if clicked element is == A
  if (target.tagName == "A") {
    //get input element
    const input = document.querySelector(".navigation__checkbox");

    let regex1 = /#$/.test(target.href);
    let regex2 = /#\w+$/gi.test(target.href);

    //search for patterns
    if (regex1 || regex2) {
      //unchecked input element
      input.checked = false;
    }
  }
}

//listen to event
function eventListener() {
  //get element from dom
  const linkContainer = document.querySelector(".navigation");

  //add event to linkContainer
  linkContainer.addEventListener("click", closeToggle);
}

//call eventListener function
eventListener();
