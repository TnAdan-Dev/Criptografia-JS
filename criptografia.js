// Função para criptografar o arquivo
function encryptFile() {
    const file = document.getElementById('fileEncrypt').files[0];
    const key = document.getElementById('encryptionKey').value.trim();

    if (!file) {
        alert('Por favor, selecione um arquivo para criptografar.');
        return;
    }

    if (!key) {
        alert('Por favor, insira uma chave de criptografia.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        const encryptedContent = encrypt(content, key); // Criptografia com chave inserida
        document.getElementById('encryptedContent').value = encryptedContent;

        // Gerar link para download do arquivo criptografado
        const blob = new Blob([encryptedContent], { type: 'text/plain;charset=utf-8' });
        const link = document.getElementById('downloadEncryptLink');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'arquivo_criptografado.txt';
        link.style.display = 'block';
        link.textContent = 'Baixar Arquivo Criptografado';
    };
    reader.readAsText(file, 'UTF-8'); // Ler como UTF-8
}

// Função para descriptografar o arquivo
function decryptFile() {
    const file = document.getElementById('fileDecrypt').files[0];
    const key = document.getElementById('decryptionKey').value.trim();

    if (!file) {
        alert('Por favor, selecione um arquivo para descriptografar.');
        return;
    }

    if (!key) {
        alert('Por favor, insira uma chave de descriptografia.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const encryptedContent = e.target.result;
        const decryptedContent = decrypt(encryptedContent, key); // Descriptografia com chave inserida
        document.getElementById('decryptedContent').value = decryptedContent;

        // Gerar link para download do arquivo descriptografado
        const blob = new Blob([decryptedContent], { type: 'text/plain;charset=utf-8' });
        const link = document.getElementById('downloadDecryptLink');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'arquivo_descriptografado.txt';
        link.style.display = 'block';
        link.textContent = 'Baixar Arquivo Descriptografado';
    };
    reader.readAsText(file, 'UTF-8'); // Ler como UTF-8
}

// Função de criptografia com a chave definida pelo usuário
function encrypt(text, chave) {
    let posicoesChave = chave
        .split("")
        .map((char) => char.toLowerCase().charCodeAt(0) - 96);

    let textBase64 = btoa(unescape(encodeURIComponent(text))); // Codificar em Base64 para lidar com caracteres especiais

    let decimalText = textBase64
        .split("")
        .map((char) => char.charCodeAt(0));

    let chaveExtendida = [];
    for (let i = 0; i < decimalText.length; i++) {
        chaveExtendida.push(posicoesChave[i % posicoesChave.length]);
    }

    let textoCifradoDecimal = decimalText.map(
        (valor, index) => valor + chaveExtendida[index]
    );

    let textoCifrado = textoCifradoDecimal
        .map((num) => String.fromCharCode(num))
        .join("");

    return textoCifrado;
}

// Função de descriptografia com a chave definida pelo usuário
function decrypt(text, chave) {
    let posicoesChave = chave
        .split("")
        .map((char) => char.toLowerCase().charCodeAt(0) - 96);

    let decimalText = text
        .split("")
        .map((char) => char.charCodeAt(0));

    let chaveExtendida = [];
    for (let i = 0; i < decimalText.length; i++) {
        chaveExtendida.push(posicoesChave[i % posicoesChave.length]);
    }

    let textoOriginalDecimal = decimalText.map(
        (valor, index) => valor - chaveExtendida[index]
    );

    let textoOriginal = textoOriginalDecimal
        .map((num) => String.fromCharCode(num))
        .join("");

    // Decodificar o Base64 para retornar o texto original
    let decodedText = decodeURIComponent(escape(atob(textoOriginal)));

    return decodedText;
}
