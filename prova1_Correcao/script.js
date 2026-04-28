function mostraTabela(){
    const area = document.getElementById('area-tabela');

    if(area.querySelector('img')){
        const area = area.querySelector('img');
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
        return; 
    }
    
    const img = document.createElement('img');
    img.src = 'Tabela_Jogos.png';
    img.alt = 'Tabela de jogos da copa';

    area.appendChild(img);
}