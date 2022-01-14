const btn1 = document.querySelector('#clickOne')
const btn2 = document.querySelector('#clickTwo')
const btn3 = document.querySelector('#clickThree')
const btn4 = document.querySelector('#clickFour')
const btn5 = document.querySelector('#clickFive')
const btn6 = document.querySelector('#clickSix')
const btn7 = document.querySelector('#clickSeven')
const btn8 = document.querySelector('#clickEight')
const btn9 = document.querySelector('#clickNine')
const closeOne = document.querySelector('#closeOne')
const closeTwo = document.querySelector('#closeTwo')
const closeThree = document.querySelector('#closeThree')
const closefour = document.querySelector('#closeFour')
const closeFive = document.querySelector('#closeFive')
const closeSix = document.querySelector('#closeSix')
const closeSeven = document.querySelector('#closeSeven')
const closeEight = document.querySelector('#closeEight')
const closeNine = document.querySelector('#closeNine')





btn1.addEventListener("click", function(event){
    const popOne = document.querySelector('.hoppUpOne')
    popOne.style.display= 'block'
    closeOne.onclick = function (event) {
        event.preventDefault();
        popOne.style.display= "none"
    }
})


btn2.addEventListener("click", function(){
    const popTwo = document.querySelector('.hoppUpTwo')
    popTwo.style.display= "block"
    closeTwo.onclick = function () {
        popTwo.style.display = "none"
    }
} )

btn3.addEventListener("click", function(){
    const popThree = document.querySelector('.hoppUpThree')
    popThree.style.display= "block"
    closeThree.onclick = function () {
        popThree.style.display = "none"
    }
})

btn4.addEventListener("click", function() {
    const popFour = document.querySelector('.hoppUpFour')
    popFour.style.display = "block"
    closefour.onclick = function () {
        popFour.style.display = "none"
    }
})

btn5.addEventListener("click", function() {
    const popFive = document.querySelector('.hoppUpFive')
    popFive.style.display = "block"
    closeFive.onclick = function() {
        popFive.style.display = "none"
    }
})

btn6.addEventListener("click", function(){
    const button = document.querySelector('.hoppUpSix')
    button.style.display= "block"
    closeSix.onclick = function () {
        button.style.display = "none"
    }
})

btn7.addEventListener("click", function(){
    const eren = document.querySelector('.hoppUpSeven')
    eren.style.display= 'block'
    closeSeven.onclick = function (event) {
        event.preventDefault();
        eren.style.display= "none"
    }
})

btn8.addEventListener("click", function(){
    const vanitas = document.querySelector('.hoppUpEight')
    vanitas.style.display = "block"
    closeEight.onclick = function(){
        vanitas.style.display= "none"
    }
})

btn9.addEventListener('click', function(){
    const boji = document.querySelector('.hoppUpNine')
    boji.style.display = "block"
    closeNine.onclick = function(){
        boji.style.display = "none"
    }
})