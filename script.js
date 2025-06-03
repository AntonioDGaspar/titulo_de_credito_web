function gerarCheque() {
    const emitente = document.getElementById('emitente').value;
    const beneficiario = document.getElementById('beneficiario').value;
    const banco = document.getElementById('banco').value;
    const valor = document.getElementById('valor').value;
    const valorExtenso = document.getElementById('valorExtenso').value;
    const local = document.getElementById('local').value;
    const data = document.getElementById('data').value;
    const assinatura = document.getElementById('assinatura').value;

    const resultado = `
        <h3>Cheque Simulado</h3>
        <p><strong>Banco:</strong> ${banco}</p>
        <p><strong>Emitente:</strong> ${emitente}</p>
        <p><strong>Beneficiário:</strong> ${beneficiario}</p>
        <p><strong>Valor:</strong> ${valor} KZ</p>
        <p><strong>Por extenso:</strong> ${valorExtenso}</p>
        <p><strong>Local:</strong> ${local}</p>
        <p><strong>Data:</strong> ${new Date(data).toLocaleDateString()}</p>
        <p><strong>Assinatura:</strong> ${assinatura}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

function gerarNota_promissoria() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const data = document.getElementById('data').value;
    const venc = document.getElementById('vencimento').value;
    const local = document.getElementById('local').value;

    const resultado = `
      NOTA PROMISSÓRIA

      Eu, ${nome}, comprometo-me a pagar a quantia de ${valor} (Kwanzas),
      no dia ${venc}, no local: ${local}.

      Emitida em ${data}.

      Assinatura: ________________________

      `

    document.getElementById('resultado').innerText = resultado;
}