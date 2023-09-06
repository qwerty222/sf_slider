const header_1 = document.getElementById('header_1');
const header_2 = document.getElementById('header_2');
const header_3 = document.getElementById('header_3');

const headers = [header_1, header_2, header_3];

const city = document.getElementById('city');
const area = document.getElementById('area');
const time = document.getElementById('time');
const img = document.getElementById('img');
const dot_1 = document.getElementById('dot_1');
const dot_2 = document.getElementById('dot_2');
const dot_3 = document.getElementById('dot_3');

const dots = [dot_1, dot_2, dot_3];

const arrow_left = document.getElementById('arrow_left');
const arrow_right = document.getElementById('arrow_right');

const images = [
    {
        "src": "admiral.png",
        "alt": "Rostov-on-Don, Admiral project photo"
    },
    {
        "src": "sochi.png",
        "alt": "Sochi Thieves project photo"
    },
    {
        "src": "patr.png",
        "alt": "Rostov-on-Don Patriotic project photo"
    }
];

const descriptions = [
    {
        city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m2',
        time: '3.5 months'
    },
    {
        city: 'Sochi<br>Thieves',
        area: '105 m2',
        time: '4 months'
    },
    {
        city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m2',
        time: '3 months'
    }
];

let current = 0;

function setDescription(index) {
    city.innerHTML = descriptions[index].city;
    area.innerHTML = descriptions[index].area;
    time.innerHTML = descriptions[index].time;
    changeImage(index);
}

function changeImage(index) {
    const attrs = images[index];
    Object.keys(attrs).forEach((key) => {
        img.setAttribute(key, attrs[key]);
    });
}

function changeDot(index) {
    const active_dot = document.querySelector('.dot-active');
    active_dot.classList.toggle('dot-active');
    dots[index].classList.toggle('dot-active');
}

function changeHeader(index) {
    const active_header = document.querySelector('.header-active');
    active_header.classList.toggle('header-active');
    headers[index].classList.toggle('header-active');
}

dot_1.addEventListener('click', () => {
    current = 0;
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});

dot_2.addEventListener('click', () => {
    current = 1;
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});

dot_3.addEventListener('click', () => {
    current = 2;
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});

header_1.addEventListener('click', () => {
    current = 0;
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});

header_2.addEventListener('click', () => {
    current = 1;
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});

header_3.addEventListener('click', () => {
    current = 2;
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});

arrow_left.addEventListener('click', () => {
    current -= 1;
    if (current < 0) { current = 2; }
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});

arrow_right.addEventListener('click', () => {
    current += 1;
    if (current > 2) { current = 0; }
    setDescription(current);
    changeDot(current);
    changeHeader(current);
});