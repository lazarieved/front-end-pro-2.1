var height_cylinder = prompt('Укажите высоту цилинда:');
var radius_cylinder = prompt('Укажите радиус цилинда:');
var volume_cylinder = Math.PI * Math.pow(radius_cylinder, 2) * height_cylinder;
var square_round = Math.PI * Math.pow(radius_cylinder, 2);

document.write('Обьем цилиндра с площадью основы '+ square_round +', радиусом ' + radius_cylinder + ' и высотой ' + height_cylinder + ' равен: ' + volume_cylinder + ' = результат.');