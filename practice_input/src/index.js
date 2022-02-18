//ввод фио в инпут
// проверка полного фио
// вывод по трем инпутам
///////////////////////////////////////////////////////
let inputFullName = document.getElementById('input-1'),
    inputResult1 = document.getElementById('input-2'),
    inputResult2 = document.getElementById('input-3'),
    inputResult3 = document.getElementById('input-4');  

function onBlur() {
    let splitName = inputFullName.value.split(' ');

    let [lastName, firstName, patronymic] = splitName;

    validateAndChangeInput(lastName, inputResult1, error1, 'Пожалуйста, Ф');
    validateAndChangeInput(firstName, inputResult2, error2, 'Пожалуйста, Ф');
    validateAndChangeInput(patronymic, inputResult3, error3, 'Пожалуйста, O');
}

function validateAndChangeInput(name, inputResult, errorDiv, errorMessage) {
    if(name) {
    inputResult.value = name[0].toUpperCase() + name.slice(1);
    inputResult.classList.remove('invalid');
    errorDiv.innerHTML = '';
    } else {
    inputResult.value = '';
    inputResult.classList.add('invalid');
    errorDiv.innerHTML = errorMessage;
    }
}
  
  inputFullName.addEventListener("blur", onBlur);


//тот же код но длинный /с повторением
/////////////////////////////////////////////////////////////////////////
// let inputFullName = document.getElementById('input-1'),
//   inputResult1 = document.getElementById('input-2'),
//   inputResult2 = document.getElementById('input-3'),
//   inputResult3 = document.getElementById('input-4');  

// function validateAndChangeInput(name, inputResult, errorDiv, errorMessage) {
//   if(lastName) {
//     // replace "lastName[0].toUpperCase() + lastName.slice(1);" with new function
//     // get argument- string
//     // make upper case first latter
//     // slice all after first latter


// function onBlur() {
//   let splitName = inputFullName.value.split(' ');

//   let lastName = splitName[0];
//   let name = splitName[1];
//   let patronymic = splitName[2];

//   if(lastName) {
//     inputResult1.value = lastName[0].toUpperCase() + lastName.slice(1);
//     inputResult1.classList.remove('invalid');
//     error1.innerHTML = '';
//   } else {
//     inputResult1.value = '';
//     inputResult1.classList.add('invalid');
//     error1.innerHTML = errorMessage;
//   }
// 
//   if(name) {
//     inputResult2.value = name[0].toUpperCase() + name.slice(1);
//     inputResult2.classList.remove('invalid');
//     error2.innerHTML = '';
//   } else {
//     inputResult2.value = '';
//     inputResult2.classList.add('invalid');
//     error2.innerHTML = 'Пожалуйста, И';
//   }

//   if(patronymic) {
//     inputResult3.value = patronymic[0].toUpperCase() + patronymic.slice(1);
//     inputResult3.classList.remove('invalid');
//     error3.innerHTML = '';
//   } else {
//     inputResult3.value = '';
//     inputResult3.classList.add('invalid');
//     error3.innerHTML = 'Пожалуйста, О';
//   }
// }

// inputFullName.addEventListener("blur", onBlur);