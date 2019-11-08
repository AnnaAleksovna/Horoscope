let day = document.querySelector('#d');
let month = document.querySelector('#m');
document.querySelector('#result').onclick = result;

function result() {
	let day = d.value;
	let month = m.value;
	if ( (month == 3 && day >= 21 && day <= 31) || (month == 4 && day <= 20) ) {
		document.write('Овен');
	}
	else if ( (month == 4 && day >= 21 && day <= 30) || (month == 5 && day <= 21) ) {
		document.write('Телец');
	}
	else if ( (month == 5 && day >= 22 && day <= 31) || (month == 6 && day <= 21) ) {
		document.write('Близнецы');
	}
	else if ( (month == 6 && day >= 22 && day <= 30) || (month == 7 && day <= 22) ) {
		document.write('Рак');
	}
	else if ( (month == 7 && day >= 23 && day <= 31) || (month == 8 && day <= 23) ) {
		document.write('Лев');
	}
	else if ( (month == 8 && day >= 24 && day <= 31) || (month == 9 && day <= 22) ) {
		document.write('Дева');
	}
	else if ( (month == 9 && day >= 23 && day <= 30) || (month == 10 && day <= 23) ) {
		document.write('Весы');
	}
	else if ( (month == 10 && day >= 24 && day <= 31) || (month == 11 && day <= 22) ) {
		document.write('Скорпион');
	}
	else if ( (month == 11 && day >= 23 && day <= 30) || (month == 12 && day <= 21) ) {
		document.write('Стрелец');
	}
	else if ( (month == 12 && day >= 22 && day <= 31) || (month == 1 && day <= 20) ) {
		document.write('Козерог');
	}
	else if ( (month == 1 && day >= 21 && day <= 31) || (month == 2 && day <= 18) ) {
		document.write('Водолей');
	}
	else if ( (month == 2 && day >= 19 && day <= 29) || (month == 3 && day <= 20) ) {
		document.write('Рыбы');
	}
	else {
		alert('Введите правильные данные!!!');
	}
}


