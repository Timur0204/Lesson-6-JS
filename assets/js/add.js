

function transcript() {
    let userInfo = document.querySelector('#userInfo').value;
    let result = document.querySelector('#result');

    let birthDateCode = userInfo.slice(0, 5);
    let orderNumber = userInfo.slice(5, 9);
    let genderDigit = userInfo[9];

    let birthYear = 1899;
    let remainingDays = birthDateCode;

    while (remainingDays > 0) {
        let daysInYear = (birthYear % 4 === 0 && (birthYear % 100 !== 0 || birthYear % 400 === 0)) ? 366 : 365;
        remainingDays -= daysInYear;
        birthYear++;
    }

    let currentDate = new Date();
    let birthDate = new Date(birthYear, 0);

    birthDate.setDate(remainingDays);

    if (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate()) {
        birthDate.setFullYear(currentDate.getFullYear());
    } else {
        birthDate.setFullYear(birthDate.getFullYear() + 1);
    }

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (birthDate.getDate() !== +(userInfo.slice(5, 7), 10)) {
        age--;
    }

    let controlSum = birthDateCode[0] * (-1) + birthDateCode[1] * 5 + birthDateCode[2] * 7 + birthDateCode[3] * 9 + birthDateCode[4] * 4 + orderNumber[0] * 6 + orderNumber[1] * 10 + orderNumber[2] * 5 + orderNumber[3] * 7;
    
    let controlNumber = (controlSum % 11) % 10;

    if (controlNumber !== parseInt(genderDigit, 10)) {
        result.innerHTML = `<p style="color:red">* ИНН не корректный</p>`;
        return;
    }

    birthDate.setDate(birthDate.getDate() - 1);

    const monthNames = [ "января", "февраля", "марта", "апреля", "мая",
    "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    result.innerHTML = `<p style="color:green">Всё верно</p></br><p>Дата рождения: ${birthDate.getDate()} ${monthNames[birthDate.getMonth()]} ${birthDate.getFullYear()} года</p></br><p>Пол: ${(genderDigit % 2 === 0) ? 'мужской' : 'женский'}</p></br><p>Возраст: ${age} лет</p></br>`;
}