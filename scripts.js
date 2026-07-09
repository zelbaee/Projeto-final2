document.getElementById('btnEnviar').addEventListener('click', function () {

    const servicosMarcados = document.querySelectorAll('input[name="servico"]:checked');
    const servicos = Array.from(servicosMarcados).map(input => input.value);

    if (servicos.length === 0) {
        mostrarErro('Por favor, selecione pelo menos um serviço.');
        return;
    }

    const dataHora = document.getElementById('data').value;

    if (!dataHora) {
        mostrarErro('Por favor, selecione a data e o horário.');
        return;
    }

    const [dataParte, horaParte] = dataHora.split('T');
    const [ano, mes, dia] = dataParte.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const servicosTexto = servicos.join(', ');

    const mensagem = `Olá, eu gostaria de agendar: ${servicosTexto}, no dia ${dataFormatada} às ${horaParte}.`;

    const numeroEmpresa = "5543996362474";

    const link = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;

    document.getElementById('alertaItem').classList.add('d-none');

    window.open(link, '_blank');

    
});

function mostrarErro(mensagem) {
    const alerta = document.getElementById('alertaItem');
    const texto = document.getElementById('textoAlerta');
    
    texto.innerText = mensagem;
    alerta.classList.remove('d-none'); 
}

function fecharAlertaManual() {
    document.getElementById('alertaItem').classList.add('d-none');
}

const elementos = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        // } else {
            // entry.target.classList.remove('visivel');
        }
    });
}, {
    threshold: 0.1
});

elementos.forEach(el => observer.observe(el));