class Car {

    static type = 'Universal'

    constructor(obj) {
        this.name = obj.name
        this.ageAuto = obj.ageAuto
        this.automaticBox = obj.automaticBox
    }
}


const car = new Car({
    name: 'Car',
    ageAuto: 5,
    automaticBox: true
})

console.log(car);

class Mazda extends Car {
    constructor(obj) {
        super(obj)
        this.name = obj.name
        this.ageAuto = obj.ageAuto
        this.automaticBox = obj.automaticBox
        this.price = obj.price
    }
}

const mazda = new Mazda({
    name: 'Mazda',
    ageAuto: 3,
    automaticBox: true,
    price: '35000$'
})

console.log(mazda);









let box = document.querySelector('.scale__room')
let ball = document.querySelector('.nike__FOG')
let mouseEnter = false;
box.addEventListener('mouseenter', (e) => {
    mouseEnter = true;

})
// box.addEventListener('mouseleave', (e) => {
//     ball.style.transform = `scale(1)`;
// })

box.addEventListener('mousemove', (e) => {
    
    if (mouseEnter) {

    const speed = ball.getAttribute('data-speed')
    //   console.log(e);
    //   const x = (window.innerWidth - e.pageX * speed ) / 100
    //   const y = (window.innerWidth - e.pageY * speed ) / 100
    let centerX = box.clientWidth / 2;
    let centerY = box.clientHeight / 2;
    let x = e.offsetX
    let y = e.offsetY


    console.log(x, y);
    ball.style.transform = `translate(${(centerX-x) / 1.6}px, ${(centerY-y) / 1.6}px) scale(1.6)`
    //   ball.style.transition = '.4s'
    ball.style.width = '100%'
    ball.style.height = 'auto'
    }
    
})
box.addEventListener('mouseout', (e) => {
    console.log(1);
    ball.style.transform = `translate(0, 0) scale(1)`
  
    
})

const rate = document.querySelector('.rate')
const star = document.querySelector('.star1')
const star1 = document.querySelector('.star2')
const star2 = document.querySelector('.star3')
const star3 = document.querySelector('.star4')
const star4 = document.querySelector('.star5')



star.addEventListener('click' , function () {
    if (star.innerHTML == '⭐️') {
        // star2.innerHTML = '⭐️'
        star.innerHTML = '✩'
        star.style =           `font-size: 20px;
                                font-weight = 700
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }else {
        star.innerHTML = '⭐️'
        star.style =           `font-size: inherit;
                                font-weight = inherit;
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }
})
star1.addEventListener('click' , function () {
    if (star1.innerHTML == '⭐️') {
        // star2.innerHTML = '⭐️'
        star1.innerHTML = '✩'
        star1.style =           `font-size: 20px;
                                font-weight = 700
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }else {
        star1.innerHTML = '⭐️'
        star1.style =           `font-size: inherit;
                                font-weight = inherit;
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }
})
star3.addEventListener('click' , function () {
    if (star3.innerHTML == '⭐️') {
        // star2.innerHTML = '⭐️'
        star3.innerHTML = '✩'
        star3.style =           `font-size: 20px;
                                font-weight = 700
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }else {
        star3.innerHTML = '⭐️'
        star3.style =           `font-size: inherit;
                                font-weight = inherit;
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }
})
star4.addEventListener('click' , function () {
    if (star4.innerHTML == '⭐️') {
        // star2.innerHTML = '⭐️'
        star4.innerHTML = '✩'
        star4.style =           `font-size: 20px;
                                font-weight = 700
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }else {
        star4.innerHTML = '⭐️'
        star4.style =           `font-size: inherit;
                                font-weight = inherit;
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }
})
star2.addEventListener('click' , function () {
    if (star2.innerHTML == '⭐️') {
        // star2.innerHTML = '⭐️'
        star2.innerHTML = '✩'
        star2.style =           `font-size: 20px;
                                  font-weight = 700
                                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`  
    }else {
        star2.innerHTML = '⭐️'
        star2.style =           `font-size: inherit;
                                font-weight = inherit;
                                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`
    }
})
    

