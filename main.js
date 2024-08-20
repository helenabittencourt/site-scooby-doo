document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-answer') === 'correct';
        if (isCorrect) {
            this.classList.add('correct');
        } else {
            this.classList.add('wrong');
        }

        // Desativar outros botões
        this.parentElement.querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        });
    });
});
