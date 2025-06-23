// js/influence.js

const influenceData = {
    'Michelangelo': {
        title: 'Michelangelo Buonarroti',
        details: `A valorização do movimento e da expressividade do corpo, é uma característica que foi marcante em Michelangelo, tornou-se evidente também na obra de Rodin. A dramaticidade dos gestos, a tensão muscular e a angústia visível nas figuras revelam uma ruptura com a idealização clássica, aproximando-se de uma sensibilidade quase que real. Rodin utilizou a técnica do non finito de Michelangelo... No entanto, Rodin transformou o inacabado em linguagem estética, expressando a metamorfose constante da existência.`
    },
    'Donatello': {
        title: 'Donatello',
        details: `Donatello representou para Rodin outro tipo de referência. Uma referência mais voltada ao realismo psicológico e à sutileza narrativa... Foi um dos primeiros a inserir uma profundidade expressiva no interior dos corpos esculpidos, humanizando os personagens bíblicos e os santos com pequenos gestos, expressões sutis e posturas que sugerem um sentimento emocional profundo.`
    },
    'impressionismo': {
        title: 'Tradição clássica, realismo e impressionismo',
        details: `Rodin absorveu influências do realismo e impressionismo, movimentos que estavam em ebulição na Paris do século XIX. Isso influenciou Rodin a criar esculturas que rompiam com a rigidez acadêmica e buscavam captar emoções, instantes e a verdade interior dos personagens.`
    },
    'Outras-referencias': {
        title: 'Outras referências',
        details: `Você também cita o impacto da cena artística da época, com nomes como Adolphe Bouguereau, Gustave Courbet, Jules Dalou, Jean-Baptiste Carpeaux, Gustave Moreau e Paul Gauguin, além do simbolismo e impressionismo, que influenciaram o ambiente em que Rodin cresceu como artista.`
    }
};

class InfluenceSystem {
    constructor() {
        this.modal = document.getElementById('influence-modal');
        if (!this.modal) return;

        this.modalTitle = this.modal.querySelector('.modal-title');
        this.modalContent = this.modal.querySelector('.modal-details');
        this.influenceGrid = document.querySelector('.influencia-grid');

        this.init();
    }

    init() {
        this.bindEvents();
        // Fechar modal ao clicar no botão de fechar
        this.modal.querySelector('.close').addEventListener('click', () => this.hideModal());
        // Fechar modal ao clicar fora do conteúdo
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.hideModal();
        });
    }

    bindEvents() {
        this.influenceGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.influencia-item');
            if (card && card.dataset.influence) {
                this.showModal(card.dataset.influence);
            }
        });
    }

    showModal(influenceId) {
        const data = influenceData[influenceId];
        if (!data) return;
        this.modalTitle.textContent = data.title;
        this.modalContent.textContent = data.details;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o sistema
    window.influenceSystem = new InfluenceSystem();
});
