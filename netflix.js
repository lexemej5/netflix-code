
const scrollContent = document.querySelector(".scroll-content")
const scrollAmount = getAmount()
const right = document.querySelector(".-right-10")
const left = document.querySelector(".-left-10")
const lists = document.querySelector(".accordion")
const buttonAccordions = Array.from(lists.children)
const boxSelect = document.querySelector(".boxselect")
const select = document.querySelector("select")
let prevTarget = null;

addEvent(left, "left");
addEvent(right, "right");

boxSelect.addEventListener("click", ()=>{
select.focus()
select.click();
})


lists.addEventListener("click", (e)=>{
accordionState(prevTarget, "prev")
if(e.target.classList.contains("details")){
const newTarget = e.target;
if(prevTarget === newTarget){
prevTarget = null;
return;
}
accordionState(newTarget, "new")
prevTarget = newTarget;
}
})

function accordionState(element, state){
if(state === "prev" && element){
const content = element.querySelector(".accordion-content")
const buttonIcon = element.querySelector("button i")
content.classList.remove("open")
buttonIcon.classList.remove("bi-x")
return;
}
else if(element){
const content = element.querySelector(".accordion-content")
const buttonIcon = element.querySelector("button i")
content.classList.add("open") 
buttonIcon.classList.add("bi-x")
return;  
}
}

scrollContent.addEventListener("scroll", ()=>{
// console.log("scrollWidth " + scrollContent.scrollWidth)
// console.log("clientWidth " + scrollContent.clientWidth)
// console.log("scrollLeft " + scrollContent.scrollLeft)

scrollContent.scrollLeft > 0? left.setAttribute("data-hidden", true) :
                              left.setAttribute("data-hidden", false);

scrollContent.scrollLeft < scrollContent.scrollWidth - scrollContent.clientWidth - 10? 
                                          right.setAttribute("data-hidden", true) :
                                          right.setAttribute("data-hidden", false);

})

function getAmount(){
const chidlren = Array.from(scrollContent.children)
const widthOfChildren = chidlren[0].getBoundingClientRect().width
const amountToScroll = widthOfChildren + 36 //from the gap-9 = 36px
return amountToScroll;
}


function addEvent(element, direction){
if(direction === "left"){
element.addEventListener("click", ()=>{
scrolling(-scrollAmount)
})
}
else{
element.addEventListener("click", ()=>{
scrolling(scrollAmount)
})
}
}

function scrolling(amount){
scrollContent.scrollBy(amount, 0);
}


//learning

const btn = document.querySelector('.animate-btn');
        const footer = document.querySelector('footer');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    btn.classList.add('visible');
                }
                else{
                 btn.classList.remove('visible');
                }
            });
        }, {
            root: null,
            threshold: 0.5, // Triggers when 50% of the footer is visible
            rootMargin: '0px'
        });
        
        observer.observe(footer);

