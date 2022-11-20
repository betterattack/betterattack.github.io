pole = document.getElementById('get_calculator');
kurs = document.getElementById('kurs').innerHTML;
function calculator(money) {
    money = money.toString().replace(/\s/g, '');
    pole.innerHTML = Math.floor(Number(money)*10);
}