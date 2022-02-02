// get Elements

const food = document.querySelectorAll('.food');
const allFoods = document.querySelector('.all-foods');

food.forEach(foods => {

    foods.addEventListener('change', function () {

        let allData = document.querySelectorAll('.food:checked');


        let foodsArray = [];

        allData.forEach(data => {
            foodsArray.push(data.value);
        });

        let list = '';
        foodsArray.map(data => {
            list += `<li class="list-group-item">${data}</li>`;
        });

        allFoods.innerHTML = list;

    })


});



// clock

const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');

setInterval(() => {
    let time = new Date();

    let instant_sec = time.getSeconds();
    let instant_min = time.getMinutes();
    let instant_hour = time.getHours();
    sec.style.transform = `rotate(${kata(60, instant_sec)}deg)`;
    min.style.transform = `rotate(${kata(60, instant_min)}deg)`;
    hour.style.transform = `rotate(${kata(12, instant_hour)}deg)`;

})



function kata(time, instant) {
    return (360 * instant) / time;
}



// clock-2
const secc = document.querySelector('.secc');
const minute = document.querySelector('.minute');
const ghonta = document.querySelector('.ghonta');

setInterval(() => {
    let times = new Date();

    let current_secc = times.getSeconds();
    let current_minute = times.getMinutes();
    let current_ghonta = times.getHours();
    secc.style.transform = `rotate(${kata(60, current_secc)}deg)`;
    minute.style.transform = `rotate(${kata(60, current_minute)}deg)`;
    ghonta.style.transform = `rotate(${kata(12, current_ghonta)}deg)`;

})



function katakati(times, current) {
    return (360 * current) / times;
}

// calculator
// get element


let cal_data = [];
let valget = function (val) {

    cal_data.push(val);


    document.querySelector('.top-screen').innerHTML = cal_data.join('');
    document.querySelector('.botom-screen').innerHTML = 0;

}


let allclear = function () {
    cal_data = [];
    document.querySelector('.top-screen').innerHTML = 0;
    document.querySelector('.botom-screen').innerHTML = '';
}

let back = function () {
    cal_data.pop();
    document.querySelector('.top-screen').innerHTML = cal_data.join('');

}

let final_result = function () {

    let cal_string = cal_data.join('');
    document.querySelector('.botom-screen').innerHTML = eval(cal_string);
}