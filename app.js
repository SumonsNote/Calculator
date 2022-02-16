function deleteMe() {
    document.getElementById('myResult').value = '';
}

function calculator(value) {
    document.getElementById('myResult').value += value;
}

function answer() {
    let a = document.getElementById('myResult').value;
    let b = eval(a);
    document.getElementById('myResult').value = b;
}