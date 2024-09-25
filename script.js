$(document).ready(function() {
    
    // Função para capturar o evento de submit do formulário
    $('#task-form').on('submit', function(event) {
        event.preventDefault();  // Previne o comportamento padrão do submit (recarregar a página)

        // Captura o valor do campo de input
        let task = $('#task-input').val();

        // Se o campo não estiver vazio, adiciona a tarefa à lista
        if (task !== '') {
            $('#task-list').append('<li>' + task + '</li>');  // Adiciona a tarefa como item da lista
            $('#task-input').val('');  // Limpa o campo de input
        }
    });

    // Função para aplicar a linha sobre o texto ao clicar no item da lista
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');  // Adiciona ou remove a classe 'completed'
    });
});
