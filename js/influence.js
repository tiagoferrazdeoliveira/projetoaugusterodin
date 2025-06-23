// js/influence.js

const influenceData = {
    'michelangelo': {
        title: 'Influência de Michelangelo: Força e o "Non Finito"',
        details: `A viagem de Rodin à Itália em 1875 foi transformadora, principalmente por seu encontro com as obras de Michelangelo. Ele absorveu a "terribilità" – a força avassaladora e a tensão emocional – presentes em esculturas como o "Davi" e os "Escravos". Rodin herdou de Michelangelo a compreensão do corpo masculino como um veículo para expressar lutas titânicas e uma profunda vida interior.<br><br>
        Além disso, Rodin reinterpretou a técnica do "non finito" (inacabado). Enquanto em Michelangelo isso poderia ser uma consequência do processo, em Rodin tornou-se uma escolha estética deliberada. Ele usava o contraste entre a superfície polida da pele e a aspereza da pedra bruta para sugerir que a figura estava emergindo da matéria, viva e em processo de transformação.<br><br>
        <strong>O Olhar de Rilke:</strong> Rilke não precisava citar Michelangelo para ver sua herança. Ao descrever as obras de Rodin, ele fala de uma força que "se acumula e transborda", de corpos que parecem "maiores que eles mesmos". Essa é a linguagem da influência de Michelangelo, traduzida por Rilke em uma nova poética.<br><br>
        <em>Fontes: Musée Rodin, The Metropolitan Museum of Art, R.M. Rilke - "Auguste Rodin".</em>`
    },
    'donatello': {
        title: 'Influência de Donatello: Realismo Psicológico',
        details: `Se Michelangelo ofereceu a Rodin a lição da força monumental, Donatello lhe ensinou a sutileza do realismo psicológico. Rodin admirava como Donatello, séculos antes, conseguia infundir em suas esculturas uma profundidade emocional e uma individualidade que as tornavam intensamente humanas.<br><br>
        Em obras como o "São João Batista" de Donatello, Rodin viu a capacidade de expressar um mundo interior complexo através de gestos contidos e expressões realistas, sem a necessidade de um drama exagerado. Essa busca por uma "verdade interior", que vai além da simples aparência física, tornou-se uma marca registrada de muitos dos retratos e figuras de Rodin.<br><br>
        <em>Fontes: Google Arts & Culture, Musée Rodin.</em>`
    },
    'impressionismo': {
        title: 'Diálogo com o Impressionismo: A Superfície e a Luz',
        details: `Embora seja principalmente um escultor, Rodin é frequentemente considerado um "impressionista" na escultura. Ele compartilhava com os pintores impressionistas um fascínio pela forma como a luz interage com as superfícies. Em vez de criar formas lisas e idealizadas, Rodin modelava suas esculturas com inúmeras pequenas facetas, depressões e saliências.<br><br>
        Essa técnica fazia com que a superfície do bronze ou do mármore capturasse a luz de maneira vibrante e mutável, criando um efeito de "sfumato" e uma sensação de que a figura estava viva e respirando. A luz não apenas ilumina a obra; ela se torna parte dela, mudando a percepção da forma dependendo do ângulo e da hora do dia.<br><br>
        <strong>O Olhar de Rilke:</strong> Rilke capturou perfeitamente essa qualidade ao escrever sobre as "superfícies" de Rodin: "A superfície era o tema... Ela consistia em inúmeros encontros da luz com a coisa... um reflexo que vinha de dentro do objeto, como se de uma fonte inesgotável."<br><br>
        <em>Fontes: Musée Rodin, R.M. Rilke - "Auguste Rodin" (via Textlog.de).</em>`
    },
    'outras-referencias': {
        title: 'O Contexto Artístico de Paris',
        details: `Rodin não criou no vácuo. Ele foi produto e catalisador da efervescente cena artística de Paris do final do século XIX. Ele absorveu as lições do **Realismo** de Courbet, que valorizava a representação da vida cotidiana e das classes trabalhadoras. Também foi influenciado pela dramaticidade e pelo movimento encontrados em escultores contemporâneos como Jean-Baptiste Carpeaux.<br><br>
        Ao mesmo tempo, Rodin dialogava com o **Simbolismo**, um movimento que buscava expressar ideias e emoções em vez de aparências. Sua capacidade de transformar o corpo em um símbolo de estados da alma, como em "O Pensador", o alinha a essa corrente. Rodin foi, portanto, uma ponte, um artista que sintetizou a tradição clássica, a observação realista e as novas buscas simbólicas e impressionistas para forjar um caminho inteiramente novo para a escultura.<br><br>
        <em>Fonte: Análise baseada em informações do Musée Rodin e Google Arts & Culture.</em>`
    },
        'escultura-gotica': {
        title: 'Influência da Escultura Gótica: A Verdade da Forma',
        details: `Rodin via as catedrais góticas francesas não como monumentos históricos, mas como organismos vivos. Ele admirava profundamente a liberdade e a expressividade dos escultores anônimos da Idade Média. Para ele, a arte gótica continha uma verdade estrutural e uma lógica natural que a arte acadêmica havia perdido.<br><br>
        Ele estudou a forma como as figuras góticas se integravam à arquitetura e como cada detalhe servia a um propósito expressivo. Essa influência é vista na maneira como Rodin compõe seus próprios grupos, como "Os Burgueses de Calais", onde as figuras formam uma arquitetura de emoção. Ele aprendeu com o gótico a valorizar a "lógica da construção" interna de uma escultura.<br><br>
        <strong>O Olhar de Rilke:</strong> Rilke escreveu extensivamente sobre a visão de Rodin das catedrais, descrevendo-as como "corpos" e "florestas". Para ele, a admiração de Rodin pelo gótico era a busca por uma arte que nascia da necessidade e da natureza, não de regras. A catedral era um "todo" harmonioso, um princípio que Rodin aplicaria em suas próprias obras.<br><br>
        <em>Fontes: Musée Rodin, R.M. Rilke - "Auguste Rodin" (via Textlog.de).</em>`
    },
    'literatura': {
        title: 'Influência da Literatura: Dante e Baudelaire',
        details: `A literatura foi um motor central para a imaginação de Rodin. A "Divina Comédia" de Dante Alighieri foi a fonte primária para sua obra-prima, "O Portão do Inferno", fornecendo um universo de paixão, pecado e sofrimento.<br><br>
        Além de Dante, Rodin foi profundamente impactado pela poesia de Charles Baudelaire, especialmente por "As Flores do Mal". Baudelaire ensinou a Rodin a encontrar beleza no "feio", no decadente e no melancólico, temas que se afastavam radicalmente do ideal de beleza clássico. Essa conexão com a literatura moderna permitiu que Rodin criasse esculturas que não apenas narravam histórias, mas que encarnavam estados psicológicos e poéticos complexos.<br><br>
        <em>Fontes: Musée Rodin, Google Arts & Culture.</em>`
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
        this.modal.querySelector('.close').addEventListener('click', () => this.hideModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.hideModal();
        });
    }

    bindEvents() {
        if (!this.influenceGrid) return;
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
        this.modalTitle.innerHTML = data.title;
        this.modalContent.innerHTML = data.details; // Usar innerHTML para renderizar as tags <br> e <strong>
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.influenceSystem = new InfluenceSystem();
});
