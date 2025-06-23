// js/influence.js

// Dados detalhados para cada card de influência
const influenceData = {
    'revolucao': {
        title: 'Revolução na Escultura',
        details: `Antes de Rodin, a escultura acadêmica focava em representações idealizadas, mitológicas e alegóricas, com superfícies polidas e poses estáticas. Rodin rompeu com isso de forma dramática. Ele reintroduziu o realismo, não apenas na forma, mas na emoção. Suas figuras são seres humanos de carne e osso, capturados em momentos de paixão, angústia e pensamento profundo. Ele usava a textura da superfície (o "non finito") para capturar a luz e dar vida ao bronze e ao mármore, fazendo com que a forma parecesse emergir da matéria bruta.`
    },
    'fragmento': {
        title: 'Técnica do Fragmento',
        details: `Uma das contribuições mais radicais de Rodin foi a ideia de que um fragmento do corpo — um torso, uma mão, uma cabeça — poderia ser uma obra de arte completa e autônoma. Para a academia, isso era impensável. Para Rodin, um fragmento bem executado continha a essência e a emoção do todo. O "Homem que Caminha", sem cabeça e sem braços, é o exemplo máximo disso: a escultura é puro movimento e determinação. Essa abordagem abriu caminho para a abstração na escultura do século XX.`
    },
    'expressionismo': {
        title: 'Expressionismo Escultórico',
        details: `Rodin é frequentemente chamado de o pai da escultura moderna e um precursor do Expressionismo. Em vez de se ater estritamente à anatomia realista, ele a exagerava e distorcia para intensificar a expressão emocional. Músculos se tensionam de forma impossível, posturas se contorcem sob o peso da emoção. Em obras como "Os Burgueses de Calais", cada figura é um estudo psicológico profundo. Ele não esculpia corpos, ele esculpia sentimentos.`
    },
    'arte-publica': {
        title: 'Arte Pública Moderna',
        details: `Com monumentos como "Os Burgueses de Calais" e o "Monumento a Balzac", Rodin subverteu a ideia do herói no pedestal. Em "Calais", ele coloca os heróis no nível do espectador, tornando seu sacrifício palpável e humano, não divino. Com "Balzac", ele se recusou a criar um retrato literal, optando por uma forma quase abstrata que representava o poder criativo do escritor. Ambas as obras causaram escândalo, mas redefiniram o que um monumento público poderia ser: não apenas uma comemoração, mas uma poderosa declaração artística e emocional.`
    },
    'artistas': {
        title: 'Influência Direta em Artistas',
        details: `O ateliê de Rodin foi um centro de inovação onde trabalharam ou que frequentaram artistas que se tornariam gigantes da arte moderna. Camille Claudel, sua colaboradora e amante, foi profundamente influenciada por ele (e o influenciou). Constantin Brâncuși trabalhou brevemente para Rodin antes de sair, dizendo a famosa frase: "Nada cresce à sombra de grandes árvores". Mesmo em sua rebelião, Brâncuși partiu dos princípios de Rodin para levar a escultura à abstração pura. Artistas como Henri Matisse (em suas esculturas), Alberto Giacometti e Henry Moore devem um débito incalculável a Rodin.`
    },
    'legado': {
        title: 'Legado Contemporâneo',
        details: `A influência de Rodin perdura até hoje. Sua ênfase na materialidade, no processo e na expressão emocional ressoa no trabalho de inúmeros artistas contemporâneos. A ideia de usar o corpo como veículo para a expressão de estados psicológicos é um tema central na arte performática e em muitas instalações. O modo como ele montava e remontava fragmentos para criar novas obras (a técnica da "assemblage") é um precursor direto de muitas práticas artísticas do século XX e XXI. Rodin ensinou ao mundo que a escultura poderia ser tão pessoal, complexa e psicologicamente profunda quanto a poesia ou a música.`
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
    }

    bindEvents() {
        // Event listener no container para pegar cliques nos cards (event delegation)
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
        this.modalContent.innerHTML = `<p>${data.details.replace(/\n/g, '</p><p>')}</p>`;

        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        // This is handled by main.js now
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o sistema
    window.influenceSystem = new InfluenceSystem();
});