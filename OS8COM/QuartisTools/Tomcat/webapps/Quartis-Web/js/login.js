function cryptPassword() {
    var saisie_password = document.getElementById('form1:saisie_password');
    var passwordLdap = document.getElementById('form1:passwordLdap');
    var passwordQuartis = document.getElementById('form1:passwordQuartis');
    passwordQuartis.value = MD5(saisie_password.value);

    // Encrypt with the public key...
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var encodedEncrypted = encrypt.encrypt(saisie_password.value)
    
    passwordLdap.value = encodedEncrypted;
}