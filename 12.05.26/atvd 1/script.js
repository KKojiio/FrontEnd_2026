function validaCPF() {
    const resultado = document.getElementById('pop');
    const campo = document.getElementById('line');

    //limpa cpf
    let cpf = campo.value.replace(/\D/g, '');
    

    if (cpf.length !== 11) {
        resultado.textContent = 'Digite os 11 dígitos!';
        return;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        resultado.textContent = 'CPF inválido!';
        return;
    }

    //validacao
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    let dg1 = (soma * 10) % 11;
    if (dg1 >= 10) dg1 = 0;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    let dg2 = (soma * 10) % 11;
    if (dg2 >= 10) dg2 = 0;

    if (dg1 !== parseInt(cpf[9]) || dg2 !== parseInt(cpf[10])) {
        resultado.classList.remove('valido', 'invalido');
        resultado.classList.add('invalido');
        resultado.textContent = 'CPF inválido!';
        return;
    } else {
        resultado.classList.remove('valido', 'invalido');
        resultado.classList.add('valido');
        resultado.textContent = 'CPF válido!';
    }
}

const campo = document.getElementById('line');
campo.addEventListener('input', function () {
    let valor = campo.value.replace(/\D/g, '');

    console.log(valor);

    valor = valor.slice(0, 11);

    if (valor.length > 9) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (valor.length > 6) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (valor.length > 3) {
        valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }

    campo.value = valor;
})

