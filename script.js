const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const nameValidation = document.getElementById('nameValidation');
const EmailValidation = document.getElementById('EmailValidation');
let nameOutput = document.getElementById('nameOutput');
let EmailOutput = document.getElementById('EmailOutput');
let CounterOutput = document.getElementById('Counter');
const Counter = document.getElementById('Counter');
const btnSubmit = document.querySelector('.btnSubmit');
const progress = document.querySelectorAll('.progress');
const btnSubmitForm = document.querySelectorAll(".btnSubmitForm")
const FormContainer = document.querySelectorAll('.FormContainer')
const option = document.querySelectorAll('.optionCheckbox')

const ul = document.getElementById('ul')
let  counter= 0;
let  regexEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
intiailizedData()

function intiailizedData(){
    if (FormContainer.length > 0 && progress.length) {
        FormContainer[counter].classList.replace('d-none', 'd-flex');
        progress[counter].classList.add('active');
    }
}
function showSlide(index ,array) {
    if (index < 0 || index >= array.length) {
        index = (index < 0) ? array.length - 1 : 0;
        counter = index;
    }

    FormContainer.forEach(form => {
        form.classList.replace('d-flex', 'd-none');
    });

    progress.forEach(span=>{
        span.classList.remove("progressActive")
    })

    FormContainer[index].classList.replace('d-none', 'd-flex');
    progress[index].classList.add("progressActive")
}
option.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        option.forEach(function (checkbox) {
            if (checkbox.checked) {
                checkbox.parentNode.classList.add('optionCheckboxChange');                
            } else {
                checkbox.parentNode.classList.remove('optionCheckboxChange');
            }
        });
    });
});

function takeTheValues() {
    let nameInputValue = nameInput.value;
    let emailInputValue = emailInput.value;
    nameOutput.innerHTML = nameInputValue
    EmailOutput.innerHTML = emailInputValue
}

btnSubmitForm.forEach(btn => {
    btn.addEventListener('click',()=>{
        const emailValue = emailInput.value.trim();
        const nameValue = nameInput.value.trim();
        if (regexEmail.test(emailValue) && nameValue !=='') {
            counter++
            CounterOutput.textContent = counter+1 ;
            if (counter >= FormContainer.length) {
                console.log("Reached the end of the forms");
                counter = 0;
                CounterOutput.textContent = counter+1
              }
            showSlide(counter ,FormContainer)
            showSlide(counter ,progress)
            takeTheValues()
        }else{
            nameValidation.classList.toggle('d-none')
            EmailValidation.classList.toggle('d-none')
        }
    }); 
});


const optionLabels = document.querySelectorAll('label.option');

optionLabels.forEach(label => {
    const checkbox = label.querySelector('.optionCheckbox');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            const value = label.textContent.trim();
            createnewLi(value);
        }
    });
});

function createnewLi(text) {
    const createnewLi = document.createElement('li');
    createnewLi.textContent = text;
    ul.appendChild(createnewLi);
}


