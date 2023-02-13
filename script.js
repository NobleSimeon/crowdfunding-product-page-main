console.log("It is working");
const body = document.body;
const header = document.querySelector("header")
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const bookmarkBtn = document.querySelector(".bookmark");
const label = document.querySelectorAll(".modal-content-card label");
const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".open-modal");
const modalClose = document.querySelector(".close-modal-btn");
const modalCard = document.querySelectorAll(".modal-content-card");

const selectBtn = document.querySelectorAll(".card .number__left-btn button")

console.log(document.querySelectorAll(".card .number__left-btn button"))

const finalBtn = document.querySelector(".got-it");


const continueBtns = Array.from(modalCard).reduce((acc, item) => {
    const continueBtn = item.querySelector(".continue");
    return continueBtn ? [...acc, continueBtn] : acc;
  }, []);


// const continueBtn = modalCard.querySelector(".continue")
const modalCompleted = document.querySelector(".modal-completed")

// Menu toggle
function toggleMenu() {
    header.classList.toggle("active")
}
menuOpen.addEventListener("click", toggleMenu)
menuClose.addEventListener("click", toggleMenu)

// Bookmarked toogle
bookmarkBtn.addEventListener("click", function() {
    this.classList.toggle("bookmarked");
})


// Modal toggle

function toggleModal() {
    /* Detect the button class name */
    const overlayOpen = this.className === 'open-modal';
    
    /* Toggle the aria-hidden state on the overlay and the 
       no-scroll class on the body */
       modal.setAttribute('aria-hidden', !overlayOpen);
       body.classList.toggle('noscroll');
   
       /* On some mobile browser when the overlay was previously
          opened and scrolled, if you open it again it doesn't 
          reset its scrollTop property */
    //    overlay.scrollTop = 0;
}
modalOpen.addEventListener("click", toggleModal, false)
modalClose.addEventListener("click", toggleModal, false)

selectBtn.forEach(item => {
    item.addEventListener("click", toggleModal, false)
})

console.log(selectBtn)

// Checked togggle
function checkToggle() {
    const input = this.querySelector("input");
    const label = this.querySelector("label");
    if (input.checked) {
        input.checked = false;
    } else {
        input.checked = true;
    }
}
function borderColorToggle() {
    const input = this.querySelector("input");
    if (input.checked) {
        this.classList.add("active")
    } else {
        this.classList.remove("active")
    }
    
}
modalCard.forEach(item => {
    item.addEventListener("click", checkToggle, false);
    item.addEventListener("click", borderColorToggle, false);
    
})

continueBtns.forEach(item => {
    item.addEventListener("click", () => {
        modalCompleted.classList.toggle("active")
        modal.querySelector(".modal-default").classList.toggle("remove")
    });

    
})

finalBtn.addEventListener("click", () => {
    document.querySelector(".modal[aria-hidden = 'false' ]").setAttribute('aria-hidden', true)
    modal.querySelector(".modal-default").classList.toggle("remove")
    modalCompleted.classList.toggle("active")
})
finalBtn.addEventListener("click", toggleModal, false)

document.addEventListener("click", e => {
    if(e.target == document.querySelector(".modal[aria-hidden = 'false' ]")) {
        document.querySelector(".modal[aria-hidden = 'false' ]").setAttribute('aria-hidden', true);
    }
})

//Pressing the Esc key
document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal[aria-hidden = 'false' ]")) {
        document.querySelector(".modal[aria-hidden = 'false' ]").setAttribute('aria-hidden', true);
    }
})

console.log(modal.querySelector(".modal-default"))