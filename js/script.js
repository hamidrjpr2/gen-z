let trigger = document.getElementById('trigger')

trigger.addEventListener('click', () => {
    let element = document.getElementById('navbar')
    let trigger = document.getElementById('trigger')
    element.classList.toggle("full")
    trigger.innerHTML("Close")
})
