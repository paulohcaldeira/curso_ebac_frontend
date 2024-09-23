document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    let campoA = (document.getElementById("campoA").value);
    let campoB = (document.getElementById("campoB").value);
    let messageDiv = document.getElementById("message");
    
    if (campoB > campoA) {
        messageDiv.textContent = "Formulário válido! O campo B é maior que o campo A.";
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = "Formulário inválido! O campo B deve ser maior que o campo A.";
        messageDiv.className = "message error";
    }
    
});