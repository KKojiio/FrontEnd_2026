function revelar() {

    // 1. Altera o src da imagem principal
    const imagem = document.querySelector('.card-img-top');
    imagem.src = 'img/_vinicius_junior.png';
    imagem.alt = 'Vinícius Júnior';

    // 2. Preenche os <span> com as informações do jogador
    document.querySelector('#Nome span:first-child').textContent = 'Vinícius José P. de Oliveira Júnior';
    document.getElementById('Rank').textContent = '9.5';
    document.getElementById('Data_Nas').textContent = '📅 12/07/2000 (25 anos)';
    document.getElementById('Alutra').textContent = '📏 1,76 m';
    document.getElementById('Posição ').textContent = '🏃 Ponta-esquerda / Atacante';

    // 3. Remove a classe placeholder dos elementos afetados
    // 4. Aplica a classe card-text no lugar de placeholder
    const spans = [
        document.querySelector('#Nome span:first-child'),
        document.getElementById('Data_Nas'),
        document.getElementById('Alutra'),
        document.getElementById('Posição ')
    ];

    spans.forEach(el => {
        el.classList.remove('placeholder');
        el.classList.add('card-text');
    });

    // Remove o placeholder-glow dos elementos pai
    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('.card-text.placeholder-glow')?.classList.remove('placeholder-glow');

    // Remove aria-hidden do card para acessibilidade
    document.querySelector('.card').removeAttribute('aria-hidden');
}