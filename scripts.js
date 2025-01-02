function sendMessage(message) {
    Swal.fire(message);
}

const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');
const saida = document.getElementById('saida');
const gerar = document.getElementById('gerar');

gerar.onclick = () => {
    const numero = telefone.value.trim();
    const texto = mensagem.value.trim();

    if (!numero) {
        sendMessage('Por favor, insira um número de telefone.');
        return;
    }

    const link = `https://wa.me/${numero}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;
    saida.value = link;

    navigator.clipboard
        .writeText(link)
        .then(() => sendMessage('Link copiado para a área de transferência!'))
        .catch((err) => {
            sendMessage('Erro ao copiar o link.');
            console.error(err);
        });
};
