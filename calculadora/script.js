function somar() {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 + num2;
        document.getElementById('resultado').innerText = resultado;
    } else {
        alert('Por favor, insira números válidos!');
    }
}

function subtrair() {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 - num2;
        document.getElementById('resultado').innerText = resultado;
    } else {
        alert('Por favor, insira números válidos!');
    }
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 * num2;
        document.getElementById('resultado').innerText = resultado;
    } else {
        alert('Por favor, insira números válidos!');
    }
}

function dividir() {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            const resultado = num1 / num2;
            document.getElementById('resultado').innerText = resultado;
        } else {
            alert('Não é possível dividir por zero!');
        }
    } else {
        alert('Por favor, insira números válidos!');
    }
}



