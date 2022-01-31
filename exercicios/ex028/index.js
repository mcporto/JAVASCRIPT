const data = new Date //newdate() <= parenteses vazios, hora atual.
('2022-01-31 12:19:55.100');
//           h min seg ms

console.log('Dia', data.getDate());
console.log('MÊS', data.getMonth() + 1);
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia-semana', data.getDay());

console.log(data.toString());
