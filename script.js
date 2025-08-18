const buttonRegister = document.querySelector('.button_register');
const inputRegister = document.querySelector('.input_register');
const currentName = document.querySelector('.current_name');
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

const savedName = localStorage.getItem('savedValue');
currentName.textContent = savedName


const settingsBtnEdit = document.querySelector('.settings_button_edit');
const settingsInput = document.querySelector('.settings_input');
const settignsSaveBtn = document.querySelector('.settigns_save')

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

