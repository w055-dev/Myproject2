// Получаем форму по id
const form = document.getElementById('ContactForm');

//Получаем поля ввода имени и email
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");

//Валидация в реальном времени
//На событие ввода (input) будет вызываться функция validateEmail
emailInput.addEventListener('input', validateEmail);

//Функция валидации email
function validateEmail(){
    // [A-Za-z0-9_\.]{3,10}@[a-z0-9.\_]{1-15}\.[a-z]{2,3}
    const emailRegex = /[A-Za-z0-9]{3,10}@[a-z0-9]{1,15}\.[a-z]{2,3}/;
    if (emailRegex.test(emailInput.value)) // Проверка сообщения с регулярным сообщением
    {
        hideError(emailInput); // Убираем ошибку
        return true;
    }
    else
    {
        showError(emailInput, "email должен состоять минимум из 3 символов и содержать домен");
        return false;
    }
}

//Функция отображения ошибки
function showError(input, message){
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error') || document.createElement('div');
    errorControl.className = 'error';
    errorControl.textContent = message;
    formControl.appendChild(errorControl);
    input.style.borderColor = 'red';
    
}

//Функция скрытия ошибки
function hideError(input){
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error');
    if(errorControl){
        formControl.removeChild(errorControl);
    }
    input.style.borderColor = 'green';
}