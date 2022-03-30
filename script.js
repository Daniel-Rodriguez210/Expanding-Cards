const panels = document.querySelectorAll('.panel') //Selecting all cards with class of panel

//This code removes the active class from all the cards when clicking on any card with calling removeActiveClasses function. Also, it makes whichever card is clicked active.
panels.forEach((panel) =>{
    panel.addEventListener('click',() =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//This function removes active class from all cards. 
function removeActiveClasses() {
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}