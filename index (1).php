<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criptografia e Descriptografia</title>
    <script src="criptografia.js"></script>
</head>
<body>
    <h1>Criptografia e Descriptografia de Arquivos</h1>

    <!-- Seção de Criptografia -->
    <h2>Criptografar Arquivo</h2>
    <input type="file" id="fileEncrypt" accept=".txt">
    <input type="text" id="encryptionKey" placeholder="Chave de criptografia">
    <button onclick="encryptFile()">Criptografar</button>
    <br><br>
    <textarea id="encryptedContent" rows="10" cols="50" placeholder="Conteúdo criptografado..."></textarea>
    <br>
    <a id="downloadEncryptLink" style="display: none;"></a>

    <hr>

    <!-- Seção de Descriptografia -->
    <h2>Descriptografar Arquivo</h2>
    <input type="file" id="fileDecrypt" accept=".txt">
    <input type="text" id="decryptionKey" placeholder="Chave de descriptografia">
    <button onclick="decryptFile()">Descriptografar</button>
    <br><br>
    <textarea id="decryptedContent" rows="10" cols="50" placeholder="Conteúdo descriptografado..."></textarea>
    <br>
    <a id="downloadDecryptLink" style="display: none;"></a>

</body>
</html>
