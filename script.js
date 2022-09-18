const burger = document.querySelector('.burger')
const ulList = document.querySelector('.header-nav-ul')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')
const modalWrapper = document.querySelector('.modal-wrapper')

burger.addEventListener('click', function(event){
    ulList.classList.toggle('header-nav-ul-active')
    burger.classList.toggle('active')   
    console.log(event)
})

openModal.addEventListener('click', () => {
    modalWrapper.classList.add('show')
}) 

closeModal.addEventListener('click', () =>{
    modalWrapper.classList.remove('show')
})

window.addEventListener("click", function(e) {
    if (e.target.classList.contains("show")) {
     modalWrapper.classList.remove("show");
 }
 })