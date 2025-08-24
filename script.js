const buttonRegister = document.querySelector('.button_register');
const inputRegister = document.querySelector('.input_register');
const currentName = document.querySelector('.current_name');

const battleImgContainer = document.querySelector('.battle_img_container');
const battleImg = document.querySelector('.battle_img');
localStorage.getItem('selectedAvatar')

document.addEventListener('DOMContentLoaded', function () {
    const savedAvatar = localStorage.getItem('selectedAvatar')
    battleImg.src = savedAvatar;
})

if (buttonRegister) {
    inputRegister.addEventListener('input', function () {
        if (inputRegister.value !== '') {
            buttonRegister.disabled = false
        }
        else {
            buttonRegister.disabled = true;
        }
    })
    buttonRegister.addEventListener('click', function () {
        let userName = document.getElementById('username').value;
        localStorage.setItem('savedValue', userName)
    })
}

const settingsBtnEdit = document.querySelector('.settings_button_edit');
const settingsInput = document.querySelector('.settings_input');
const settignsSaveBtn = document.querySelector('.settigns_save')

const savedName = localStorage.getItem('savedValue');
currentName.textContent = savedName


if (settignsSaveBtn) {
    settingsBtnEdit.addEventListener('click', function () {
        settingsBtnEdit.classList.toggle('active')
        currentName.classList.toggle('active');
        settingsInput.classList.toggle('active');
        settignsSaveBtn.classList.toggle('active');
    })
    settignsSaveBtn.addEventListener('click', function () {
        settingsBtnEdit.classList.remove('active')
        currentName.classList.remove('active');
        settingsInput.classList.remove('active');
        settignsSaveBtn.classList.remove('active');
    })



    settingsInput.addEventListener('input', function () {
        let userName = document.getElementById('username').value;
        localStorage.setItem('savedValue', userName);
        currentName.textContent = localStorage.getItem('savedValue');
    })
}
const characterContainerImg = document.querySelector('.character_img')
const characterImg = document.querySelector('.character_img img');
const popup = document.querySelector('.character_popup');
const popupClose = document.querySelector('.close_img');
const characterEdit = document.querySelector('.character_edit');
const popupContent = document.querySelector('.popup_content')
const activePopup = document.querySelector('.character_popup.active')
const popupImagesContainers = document.querySelectorAll('.popup_image')
let characterProfileImg = document.querySelector('.character_default')


if (popup) {
    popup.addEventListener('click', (event) => {
        if (event.target.classList.contains('character_popup')) {
            popup.classList.remove('active');
        }
    })
    characterContainerImg.addEventListener('mouseover', function (event) {
        characterEdit.classList.add('active');
    });
    characterContainerImg.addEventListener('mouseleave', function (event) {
        characterEdit.classList.remove('active');

    });

    characterEdit.addEventListener('click', function (event) {
        popup.classList.toggle('active');
        console.log('s')
    })
    popupClose.addEventListener('click', function () {
        popup.classList.remove('active');
    })

}


popupImagesContainers.forEach(popupImagesContainer => {
    const popupEdit = popupImagesContainer.querySelector('.character_edit')
    popupImagesContainer.addEventListener('mouseover', function () {
        popupEdit.classList.add('active');
    })
    popupEdit.addEventListener('click', function () {
        let currentImageContainer = popupImagesContainer.querySelector('img');
        console.log(currentImageContainer)
        characterProfileImg.src = currentImageContainer.src;
        characterProfileImg.alt = currentImageContainer.alt;
        localStorage.setItem('selectedAvatar', currentImageContainer.src);
        localStorage.getItem('selectedAvatar')
    })
    document.addEventListener('DOMContentLoaded', function () {
        const savedAvatar = localStorage.getItem('selectedAvatar')
        characterProfileImg.src = savedAvatar;
    })
})

const attackButton = document.querySelector('.menu_button');
const inputsBattleAttack = document.querySelectorAll('.attack_zone input')
const inputsBattleDefence = document.querySelectorAll('.defence_zone input')
console.log('attackButton')

function isMaxCountInput(inputs, max) {
    return Array.from(inputs).filter(item => item.checked).length == max
}
inputsBattleAttack.forEach(inputBattleAttack => {

    inputBattleAttack.addEventListener('mousedown', function () {
        inputBattleAttack.wasChecked = inputBattleAttack.checked
    })
    inputBattleAttack.addEventListener('click', function () {
        if (inputBattleAttack.wasChecked === true) {
            inputBattleAttack.checked = false

        }
        inputBattleAttack.wasChecked = false
        if (isMaxCountInput(inputsBattleDefence, 2) && (isMaxCountInput(inputsBattleAttack, 1))) {
            attackButton.disabled = false
        }
        else {
            attackButton.disabled = true
        }
    })
})

inputsBattleDefence.forEach(inputBattleDefence => {
    inputBattleDefence.addEventListener('mousedown', function () {
        inputBattleDefence.wasChecked = inputBattleDefence.checked

    })
    inputBattleDefence.addEventListener('click', function () {

        if (inputBattleDefence.wasChecked === true) {
            inputBattleDefence.checked = false
        }
        inputBattleDefence.wasChecked = false

        if (isMaxCountInput(inputsBattleDefence, 2) && (isMaxCountInput(inputsBattleAttack, 1))) {
            attackButton.disabled = false
        }
        else {
            attackButton.disabled = true
        }
    })
})

let enemyName = document.querySelector('.enemy_title');
const enemyImg = document.querySelector('.enemy_img img');
const enemyHealthProgress = document.querySelector('.enemy_health_progress');
const enemyHealthNum = document.querySelector('.enemy_health_num')
let enemies = [
    {
        name: 'ыSpider',
        avatar: 'assets/img/spider_100.png',
        health: 150,
    },
    {
        name: 'Snow troll',
        avatar: 'assets/img/SnowTroll.png',
        health: 200,
    },
];
enemyName.textContent = enemies[0].name;
enemyImg.src = enemies[0].avatar;
enemyHealthNum.textContent = enemies[0].health;

console.log(enemyImg.src)
console.log(enemyName)
console.log(enemyImg)
console.log(enemyHealthNum)

