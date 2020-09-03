const input = document.getElementById('input');

input.addEventListener('keyup', convert);
document.getElementById('output').style.display = 'none'
function convert() {
    document.getElementById('output').style.display = 'block'
    document.getElementById('gram').innerHTML = `${input.value / 1000}`
    document.getElementById('pound').innerHTML = `${input.value * 2.20462}`
    document.getElementById('kilogram').innerHTML = `${input.value * 1}`;

}
