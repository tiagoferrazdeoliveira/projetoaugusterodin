// Substitua pela URL que você copiou do Google Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyr4TEYg_mQp0mLcgQUxTU7JEciaLdvLGiRJpNpOqgTpiwkmOa2BbyUWu5dhtKNmIbF/exec";

const sculpturesData = {
    'idade-bronze': {
        title: 'A Idade do Bronze',
        year: '1876',
        images: [ 'https://i.postimg.cc/gGnJYyKs/The-Age-of-Bronze-1.jpg', 'https://i.postimg.cc/c01CzGgV/The-Age-of-Bronze-2.jpg' ],
        historia: 'Criada em 1876, "A Idade do Bronze" foi a primeira obra-prima de Rodin a ganhar reconhecimento público. A escultura representa um jovem soldado belga, Auguste Neyt, que serviu como modelo. O realismo extremo da obra causou escândalo na época, com críticos acusando Rodin de ter moldado diretamente do corpo humano. Esta controvérsia, embora dolorosa para o artista, trouxe-lhe notoriedade e estabeleceu sua reputação como um revolucionário da escultura.',
        comunica: 'Esta obra comunica o despertar da consciência humana e a transição da juventude para a maturidade. O corpo nu, em posição de movimento ascendente, simboliza a evolução da humanidade. A expressão facial serena contrasta com a tensão muscular, criando uma dualidade entre contemplação e ação.',
        reflexao: 'Observe como Rodin conseguiu capturar um momento de transição. O que você sente ao contemplar esta figura? Como a postura do corpo comunica movimento mesmo estando estática?',
        quiz: [
            { question: 'Por que "A Idade do Bronze" causou escândalo quando foi apresentada?', options: ['Porque retratava nudez masculina', 'Porque o realismo era tão perfeito que acusaram Rodin de moldar diretamente do corpo', 'Porque usava materiais não convencionais'], correct: 1, explanation: 'O realismo extremo da escultura era tão perfeito que os críticos acusaram Rodin de ter feito moldes diretamente do corpo do modelo.' },
            { question: 'Quem foi o modelo para esta escultura?', options: ['Um artista francês', 'O próprio Rodin', 'Auguste Neyt, um soldado belga'], correct: 2, explanation: 'Auguste Neyt, um jovem soldado belga, serviu como modelo para esta obra revolucionária.' },
            { question: 'O que a postura da figura simboliza?', options: ['A dor e o sofrimento', 'O despertar da consciência e evolução humana', 'A guerra e conflito'], correct: 1, explanation: 'A postura ascendente e a expressão serena simbolizam o despertar da consciência humana e a evolução da humanidade.' }
        ]
    },
    'portao-inferno': {
        title: 'Portão do Inferno',
        year: '1880 - 1917',
        images: ['https://i.postimg.cc/R9zGxkhG/Gate-of-hell.jpg'],
        historia: 'Encomendado em 1880, o "Portão do Inferno" foi inspirado na "Divina Comédia" de Dante. Rodin trabalhou nesta obra monumental por 37 anos, até sua morte, e ela se tornou um "viveiro" para muitas de suas obras mais famosas, como "O Pensador" e "O Beijo".',
        comunica: 'Comunica a complexidade da condição humana através das paixões, sofrimentos e êxtases. Cada figura representa diferentes aspectos da experiência humana, criando uma sinfonia visual de emoções.',
        reflexao: 'Contemple a densidade emocional desta obra. Que emoções você identifica nas diferentes figuras? Como esta obra reflete a complexidade dos sentimentos humanos?',
        quiz: [
            { question: 'Qual obra literária inspirou o "Portão do Inferno"?', options: ['O Paraíso Perdido de Milton', 'A Divina Comédia de Dante', 'Fausto de Goethe'], correct: 1, explanation: 'O "Portão do Inferno" foi diretamente inspirado na "Divina Comédia" de Dante Alighieri.' },
            { question: 'Quantos anos Rodin trabalhou nesta obra?', options: ['20 anos', '30 anos', '37 anos'], correct: 2, explanation: 'Rodin trabalhou no "Portão do Inferno" por 37 anos, desde a encomenda em 1880 até sua morte em 1917.' },
            { question: 'Quantas figuras aproximadamente compõem o portal?', options: ['Mais de 100', 'Mais de 150', 'Mais de 180'], correct: 2, explanation: 'O "Portão do Inferno" contém mais de 180 figuras.' }
        ]
    },
    'burgueses-calais': {
        title: 'Os Burgueses de Calais',
        year: '1884',
        images: [ 'https://i.postimg.cc/xY47H0P5/Burgueses-de-Calais.jpg', 'https://i.postimg.cc/jsMvbXgc/Burgueses-de-Calais-1.jpg', 'https://i.postimg.cc/Q8VmxTv3/Burgueses-de-Calais-2.jpg', 'https://i.postimg.cc/VfTRSNcb/Burgueses-de-Calais-3.jpg', 'https://i.postimg.cc/4sc89py4/Burgueses-de-Calais-4.jpg', 'https://i.postimg.cc/7qyKMbJ3/Burgueses-de-Calais-5.jpg', 'https://i.postimg.cc/pPYq0xKg/Burgueses-de-Calais-6.jpg', 'https://i.postimg.cc/KZGQwVN4/Burgueses-de-Calais-7.jpg', 'https://i.postimg.cc/HHRZn6pP/Burgueses-de-Calais-8.jpg' ],
        historia: 'Este monumento revolucionou a arte pública. Rodin rejeitou as convenções, colocando as figuras no mesmo nível do observador, sem pedestal elevado, para comemorar o sacrifício de seis cidadãos de Calais durante o cerco inglês de 1347.',
        comunica: 'A obra comunica coragem, sacrifício e a dignidade humana diante da adversidade. Cada burguês expressa uma emoção diferente, mostrando que não existe uma única forma de enfrentar o sacrifício.',
        reflexao: 'Observe como cada figura reage de forma única ao mesmo destino. Que tipo de coragem cada uma demonstra? Como você reagiria em uma situação de sacrifício pelo bem comum?',
        quiz: [
            { question: 'Que evento histórico este monumento comemora?', options: ['A Revolução Francesa', 'O cerco de Calais pelos ingleses em 1347', 'A Guerra Franco-Prussiana'], correct: 1, explanation: 'O monumento comemora o sacrifício de seis cidadãos de Calais.' },
            { question: 'Como Rodin revolucionou a arte monumental com esta obra?', options: ['Usando novos materiais', 'Colocando as figuras no mesmo nível do observador', 'Criando figuras abstratas'], correct: 1, explanation: 'Rodin revolucionou a arte monumental ao colocar as figuras no mesmo nível do observador.' },
            { question: 'Quantos burgueses compõem o monumento?', options: ['Quatro', 'Cinco', 'Seis'], correct: 2, explanation: 'O monumento representa seis burgueses de Calais.' }
        ]
    },
    'adao': {
        title: 'Adão ou A Criação do Homem',
        year: '1880-1881',
        images: [ 'https://i.postimg.cc/2rRsJ9Nf/Ad-o-ou-A-Cria-o-do-Homem-1.jpg', 'https://i.postimg.cc/MW6wMM3r/Ad-o-ou-A-Cria-o-do-Homem-2.jpg', 'https://i.postimg.cc/4sQS0J1z/Ad-o-ou-A-Cria-o-do-Homem-3.jpg' ],
        historia: 'Criada entre 1880-1881, esta escultura representa Adão no momento de sua criação, despertando para a vida. Rodin capturou o momento de transição entre a matéria inerte e a consciência viva.',
        comunica: 'A obra comunica o despertar da consciência humana. A postura sugere tanto o peso da existência quanto a maravilha da descoberta. Rodin capturou o momento exato em que a humanidade nasce, não apenas fisicamente, mas espiritualmente.',
        reflexao: 'Como Rodin consegue comunicar o momento de transição da inconsciência para a consciência? Que aspectos do "nascer" para a vida esta obra revela?',
        quiz: [
            { question: 'Que momento esta escultura representa?', options: ['Adão no jardim do Éden', 'Adão após a queda', 'O despertar de Adão para a vida'], correct: 2, explanation: 'A escultura representa o momento do despertar de Adão para a vida.' },
            { question: 'Esta obra originalmente fazia parte de qual projeto maior?', options: ['Os Burgueses de Calais', 'O Portão do Inferno', 'O Monumento a Balzac'], correct: 1, explanation: 'Adão foi originalmente concebido como parte do projeto do "Portão do Inferno".' },
            { question: 'O que a postura de Adão principalmente comunica?', options: ['Dor e sofrimento', 'Alegria e celebração', 'O peso da existência e maravilha da descoberta'], correct: 2, explanation: 'A postura comunica tanto o peso da existência quanto a maravilha da descoberta.' }
        ]
    },
    'pensador': {
        title: 'O Pensador',
        year: '1880',
        images: ['https://i.postimg.cc/S4Dxzttd/The-Thinker-1.jpg', 'https://i.postimg.cc/zztDZVR6/The-Thinker-2.jpg'],
        historia: 'Criado em 1880 como parte do "Portão do Inferno", "O Pensador" originalmente representava Dante contemplando os círculos do inferno. Tornou-se o símbolo universal da contemplação intelectual.',
        comunica: 'A obra comunica a profundidade do pensamento humano, a concentração intelectual e o peso da contemplação. A postura curvada sugere tanto o esforço mental quanto a solidão do pensador.',
        reflexao: 'Como a postura física pode expressar atividade mental? Que tipo de pensamentos esta figura parece contemplar?',
        quiz: [
            { question: 'Originalmente, quem "O Pensador" representava?', options: ['Rodin mesmo', 'Um filósofo grego', 'Dante'], correct: 2, explanation: 'Originalmente, "O Pensador" representava Dante Alighieri.' },
            { question: 'De qual obra maior esta escultura fazia parte?', options: ['O Portão do Inferno', 'O Beijo', 'Adão'], correct: 0, explanation: '"O Pensador" foi originalmente criado como parte do "Portão do Inferno".' },
            { question: 'O que "O Pensador" simboliza universalmente?', options: ['A dor humana', 'A contemplação intelectual', 'A força física'], correct: 1, explanation: '"O Pensador" tornou-se o símbolo universal da contemplação intelectual e filosófica.' }
        ]
    },
    'balzac': {
        title: 'Monumento de Balzac',
        year: '1897',
        images: ['https://i.postimg.cc/YpCJc8f2/Balzac-1.jpg', 'https://i.postimg.cc/wqZKQJNq/Balzac-3.jpg','https://i.postimg.cc/tbMHb0MK/Balzac-2.jpg'],
        historia: 'Completado em 1897, este monumento ao escritor Honoré de Balzac foi inicialmente rejeitado por sua forma radical. Rodin buscou capturar não a aparência física, mas sua essência criativa.',
        comunica: 'A obra comunica o poder criativo e a força intelectual do escritor. A forma envolvente do roupão sugere mistério, enquanto a cabeça erguida expressa visão e inspiração.',
        reflexao: 'Como Rodin consegue comunicar energia criativa através da forma? Que aspectos do processo criativo esta obra revela?',
        quiz: [
            { question: 'Por quanto tempo Rodin trabalhou neste monumento?', options: ['Três anos', 'Cinco anos', 'Sete anos'], correct: 2, explanation: 'Rodin trabalhou por sete anos no Monumento a Balzac, criando mais de 50 estudos.' },
            { question: 'Qual foi a reação inicial a esta obra?', options: ['Foi imediatamente aceita', 'Foi rejeitada por sua forma radical', 'Foi ignorada pelo público'], correct: 1, explanation: 'O monumento foi inicialmente rejeitado por sua forma radical e não-convencional.' },
            { question: 'O que Rodin buscou capturar nesta obra?', options: ['A aparência física exata de Balzac', 'A moda da época', 'A essência criativa do escritor'], correct: 2, explanation: 'Rodin buscou capturar não a aparência física de Balzac, mas sua essência criativa e força intelectual.' }
        ]
    },
    'homem-caminha': {
        title: 'O Homem que Caminha',
        year: '1900',
        images: ['https://i.postimg.cc/rq8HWgHG/O-Homem-que-Caminha.jpg','https://i.postimg.cc/6BYmhnsk/O-Homem-que-Caminha-3.jpg'],
        historia: 'Criada em 1900, esta escultura representa a técnica revolucionária de Rodin de usar fragmentos corporais. A figura não possui cabeça nem braços, focando inteiramente no movimento.',
        comunica: 'A obra comunica movimento puro, determinação e a essência da jornada humana. Sem cabeça para pensar ou braços para agir, resta apenas o impulso fundamental de seguir em frente.',
        reflexao: 'Como uma figura "incompleta" pode parecer tão completa em sua expressão? O que o movimento das pernas comunica sobre determinação?',
        quiz: [
            { question: 'O que torna esta escultura revolucionária?', options: ['O uso de bronze', 'O tamanho monumental', 'A ausência de cabeça e braços'], correct: 2, explanation: 'A escultura é revolucionária por demonstrar que uma figura "incompleta" pode comunicar plenamente sua mensagem.' },
            { question: 'O que a obra simboliza principalmente?', options: ['A guerra e conflito', 'O movimento e determinação', 'A contemplação e paz'], correct: 1, explanation: 'A obra simboliza principalmente o movimento, a determinação e a força vital que impulsiona a jornada humana.' },
            { question: 'Que conceito artístico esta obra antecipa?', options: ['O realismo clássico', 'A arte decorativa', 'A arte moderna e o fragmento'], correct: 2, explanation: 'Esta obra antecipa conceitos da arte moderna, especialmente o uso do fragmento como obra completa.' }
        ]
    },
    'ugolino-filhos': {
        title: 'Ugolino e seus Filhos',
        year: '1870',
        images: ['https://upload.wikimedia.org/wikipedia/commons/c/cd/Ugolin_et_ses_enfants_Mus%C3%A9e_Rodin_S.1427_Paris.jpg','https://upload.wikimedia.org/wikipedia/commons/d/d4/Auguste_rodin%2C_ugolino%2C_1906%2C_02.JPG','https://upload.wikimedia.org/wikipedia/commons/6/68/Auguste_rodin%2C_ugolino%2C_1906%2C_01.JPG'],
        historia: 'Baseada no Inferno de Dante, esta obra retrata o Conde Ugolino condenado a morrer de fome com seus filhos. Rodin capturou o momento de desespero absoluto, onde Ugolino contempla o canibalismo para sobreviver.',
        comunica: 'A obra comunica o desespero humano em sua forma mais extrema, o conflito entre amor paternal e instinto de sobrevivência. A tensão emocional é devastadora.',
        reflexao: 'Como Rodin consegue comunicar tanto sofrimento através da postura corporal? Que dilemas morais esta obra apresenta?',
        quiz: [
            { question: 'De qual obra literária esta escultura é inspirada?', options: ['A Ilíada de Homero', 'O Inferno de Dante', 'Édipo Rei de Sófocles'], correct: 1, explanation: 'A escultura é baseada no Canto XXXIII do Inferno, da Divina Comédia de Dante.' },
            { question: 'Quem foi Ugolino della Gherardesca?', options: ['Um poeta italiano', 'Um conde condenado por traição', 'Um escultor contemporâneo de Rodin'], correct: 1, explanation: 'Ugolino della Gherardesca foi um conde italiano condenado a morrer de fome junto com seus filhos e netos.' },
            { question: 'Que conflito emocional a obra retrata?', options: ['Amor versus ódio', 'Fé versus razão', 'Amor paternal versus instinto de sobrevivência'], correct: 2, explanation: 'A obra retrata o conflito devastador entre o amor paternal e o instinto de sobrevivência.' }
        ]
    },
    'eva': {
        title: 'Eva',
        year: '1897',
        images: ['https://i.postimg.cc/rTvYgqbw/eva.jpg','https://upload.wikimedia.org/wikipedia/commons/f/f8/Staedel-Frankfurt-Eva-von-Auguste-Rodin-Ffm-041.jpg','https://upload.wikimedia.org/wikipedia/commons/1/18/Staedel-Frankfurt-Eva-von-Auguste-Rodin-Ffm-042.jpg'],
        historia: 'Criada em 1897, "Eva" representa a primeira mulher, mas interpretada pela visão moderna de Rodin. A figura expressa vergonha e consciência após a queda do paraíso, capturando o peso emocional da culpa.',
        comunica: 'A obra comunica vulnerabilidade, consciência e o peso do conhecimento. A postura curvada e protetiva expressa a vergonha, mas também a dignidade da figura feminina.',
        reflexao: 'Como a postura corporal comunica estados emocionais? Como Rodin consegue expressar tanto vulnerabilidade quanto dignidade na mesma figura?',
        quiz: [
            { question: 'Que momento bíblico esta escultura representa?', options: ['A criação de Eva', 'Eva no jardim do Éden', 'Eva após a queda do paraíso'], correct: 2, explanation: 'A escultura representa Eva após a queda do paraíso, expressando vergonha e consciência da nudez.' },
            { question: 'Que emoções principais a postura de Eva expressa?', options: ['Alegria e celebração', 'Raiva e revolta', 'Vergonha e vulnerabilidade'], correct: 2, explanation: 'A postura curvada e protetiva de Eva expressa principalmente vergonha, vulnerabilidade e o peso da consciência.' },
            { question: 'Como Rodin equilibra elementos contrastantes nesta obra?', options: ['Combinando diferentes materiais', 'Equilibrando fragilidade e dignidade', 'Misturando estilos artísticos'], correct: 1, explanation: 'Rodin consegue equilibrar fragilidade e força, vulnerabilidade e dignidade, criando uma representação complexa da feminilidade.' }
        ]
    },
    'beijo': {
        title: 'O Beijo',
        year: '1888 ~ 1898',
        images: ['https://upload.wikimedia.org/wikipedia/commons/f/f1/Auguste_Rodin%2C_The_Kiss_%28Le_Baiser%29%2C_model_1880-1887%2C_cast_c._1898-1902%2C_NGA_1008.jpg','https://upload.wikimedia.org/wikipedia/commons/4/41/Rodin_The_Kiss_%28detail%29_02.jpg'],
        historia: 'Criado entre 1888-1898, "O Beijo" representa Paolo e Francesca, personagens do Inferno de Dante. A obra se tornou uma das mais famosas do mundo, simbolizando o amor eterno.',
        comunica: 'A obra comunica paixão, intimidade e a união perfeita entre duas almas. O entrelaçamento dos corpos sugere tanto desejo físico quanto conexão espiritual.',
        reflexao: 'Como Rodin consegue comunicar tanto intimidade quanto universalidade? Que aspectos do amor esta obra revela?',
        quiz: [
            { question: 'Quem são os personagens representados em "O Beijo"?', options: ['Adão e Eva', 'Paolo e Francesca', 'Romeu e Julieta'], correct: 1, explanation: '"O Beijo" representa Paolo e Francesca, personagens trágicos do Inferno de Dante Alighieri.' },
            { question: 'Por que Rodin removeu esta obra do "Portão do Inferno"?', options: ['Era muito grande', 'Era muito feliz para o contexto infernal', 'Era muito simples'], correct: 1, explanation: 'Rodin removeu "O Beijo" do "Portão do Inferno" por considerá-la muito feliz e positiva para o contexto sombrio.' },
            { question: 'O que a obra principalmente simboliza?', options: ['A guerra entre os sexos', 'O amor eterno e paixão', 'A juventude perdida'], correct: 1, explanation: 'A obra simboliza principalmente o amor eterno, a paixão e a união perfeita entre duas almas.' }
        ]
    },
    'sao-joao': {
        title: 'São João Batista',
        year: '1880',
        images: ['https://upload.wikimedia.org/wikipedia/commons/b/b9/Rodin_-_Saint_John_the_Baptist_Preaching_-_LACMA.jpg','https://upload.wikimedia.org/wikipedia/commons/5/53/John_the_Baptist_by_Auguste_Rodin%2C_V%26A_London_02.jpg'],
        historia: 'Criado em 1880, "São João Batista" representa o precursor de Cristo em movimento de pregação. Rodin usou como modelo um camponês italiano, capturando movimento e expressão espiritual simultaneamente.',
        comunica: 'A obra comunica fervor religioso, determinação espiritual e a força da fé. O movimento do corpo sugere pregação ativa, enquanto a expressão facial revela convicção interior.',
        reflexao: 'Como o movimento corporal pode expressar convicção espiritual? Que tipo de força interior esta figura demonstra?',
        quiz: [
            { question: 'Quem foi o modelo para esta escultura?', options: ['Um modelo profissional', 'Um camponês italiano', 'O próprio Rodin'], correct: 1, explanation: 'Rodin usou como modelo um camponês italiano que possuía a força física e espiritual que o artista buscava.' },
            { question: 'O que a postura da figura principalmente expressa?', options: ['Contemplação silenciosa', 'Pregação ativa e fervor religioso', 'Dúvida e questionamento'], correct: 1, explanation: 'A postura expressa pregação ativa e fervor religioso, capturando São João Batista em seu papel de pregador.' },
            { question: 'Que aspectos Rodin conseguiu combinar nesta obra?', options: ['Força física e beleza clássica', 'Movimento e expressão espiritual', 'Realismo e abstração'], correct: 1, explanation: 'Rodin conseguiu combinar magistralmente movimento físico e expressão espiritual.' }
        ]
    }
};

class Gallery {
    constructor() {
        this.currentSculpture = null;
        this.modal = document.getElementById('sculpture-modal');
        this.modalBody = this.modal.querySelector('.modal-body');
        this.zoomLevel = 1;
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupZoomControls();
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const sculptureId = galleryItem.dataset.sculpture;
                this.showSculptureModal(sculptureId);
            }
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-button')) {
                this.showTab(e.target.dataset.tab);
            }
        });

        this.modal.addEventListener('submit', (e) => {
            if (e.target.id === 'comment-form') {
                e.preventDefault();
                this.handleCommentSubmit(e.target);
            }
        });
    }

    setupZoomControls() {
        const zoomIn = document.getElementById('zoom-in');
        const zoomOut = document.getElementById('zoom-out');
        const zoomReset = document.getElementById('zoom-reset');

        zoomIn?.addEventListener('click', () => this.zoom(1.2));
        zoomOut?.addEventListener('click', () => this.zoom(0.8));
        zoomReset?.addEventListener('click', () => this.resetZoom());
    }

    showSculptureModal(sculptureId) {
        const sculpture = sculpturesData[sculptureId];
        if (!sculpture || !sculpture.images || sculpture.images.length === 0) {
            console.error(`Dados da escultura '${sculptureId}' estão incompletos ou não foram encontrados.`);
            return;
        }
        
        this.currentSculpture = sculptureId;
        
        document.getElementById('modal-title').textContent = sculpture.title;
        
        const mainImage = document.getElementById('modal-image');
        const thumbnailsContainer = document.getElementById('thumbnails-container');
        
        mainImage.src = sculpture.images[0];
        mainImage.alt = sculpture.title;
        
        thumbnailsContainer.innerHTML = '';
        if (sculpture.images.length > 1) {
            sculpture.images.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `${sculpture.title} - view ${index + 1}`;
                thumb.className = 'thumbnail-img';
                if (index === 0) thumb.classList.add('active');
                
                thumb.addEventListener('click', (e) => {
                    document.getElementById('modal-image').src = e.target.src;
                    document.querySelectorAll('.thumbnail-img').forEach(t => t.classList.remove('active'));
                    e.target.classList.add('active');
                });

                thumbnailsContainer.appendChild(thumb);
            });
        }

        this.loadTabContent(sculptureId);
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.showTab('historia');
        this.resetZoom();
    }

    showTab(tabId) {
        const tabsToHideImage = ['quiz', 'analise'];
        
        if (tabsToHideImage.includes(tabId)) {
            this.modalBody.classList.add('hide-image-view');
        } else {
            this.modalBody.classList.remove('hide-image-view');
        }

        document.querySelectorAll('.modal-tabs .tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

        document.querySelector(`.tab-button[data-tab="${tabId}"]`)?.classList.add('active');
        document.getElementById(`tab-${tabId}`)?.classList.add('active');

        if (tabId === 'analise') {
            this.fetchComments(this.currentSculpture);
        }
    }

    async fetchComments(sculptureId) {
        const commentsContainer = document.getElementById('comments-list');
        commentsContainer.innerHTML = '<p>Carregando comentários...</p>';
        try {
            const response = await fetch(`${SCRIPT_URL}?sculptureId=${sculptureId}`);
            if (!response.ok) throw new Error(`Erro na requisição: ${response.statusText}`);
            const comments = await response.json();
            
            if (comments.length === 0) {
                commentsContainer.innerHTML = '<p>Seja o primeiro a deixar uma análise sobre esta obra!</p>';
                return;
            }
            
            let commentsHTML = '';
            comments.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp)).forEach(comment => {
                commentsHTML += `
                    <div class="comment-item">
                        <strong class="comment-author">${this.sanitizeHTML(comment.name)}</strong>
                        <p class="comment-text">${this.sanitizeHTML(comment.comment)}</p>
                        <span class="comment-date">${new Date(comment.Timestamp).toLocaleDateString('pt-BR')}</span>
                    </div>
                `;
            });
            commentsContainer.innerHTML = commentsHTML;
        } catch (error) {
            commentsContainer.innerHTML = '<p>Não foi possível carregar os comentários. Verifique a configuração da API e as permissões da planilha.</p>';
            console.error('Erro ao buscar comentários:', error);
        }
    }

    async handleCommentSubmit(form) {
        const nameInput = form.querySelector('input[name="name"]');
        const commentInput = form.querySelector('textarea[name="comment"]');
        const submitButton = form.querySelector('button');

        if (!nameInput.value.trim() || !commentInput.value.trim()) {
            alert('Por favor, preencha seu nome e comentário.');
            return;
        }
        
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        const data = {
            sculptureId: this.currentSculpture,
            name: nameInput.value,
            comment: commentInput.value
        };

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                // Usar o modo 'cors' é o ideal se o Apps Script estiver configurado corretamente
                mode: 'cors', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            form.reset();
            // Atualiza a lista imediatamente após o sucesso
            this.fetchComments(this.currentSculpture);

        } catch (error) {
            alert('Ocorreu um erro ao enviar seu comentário. Tente novamente.');
            console.error('Erro ao enviar comentário:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    }
    
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }
    
    loadTabContent(sculptureId) {
        const sculpture = sculpturesData[sculptureId];
        
        // Renderiza as abas existentes
        document.getElementById('historia-content').innerHTML = `<h3>História da Obra</h3><p>${sculpture.historia || 'Informação não disponível.'}</p>`;
        document.getElementById('comunica-content').innerHTML = `<h3>O que Comunica</h3><p>${sculpture.comunica || 'Informação não disponível.'}</p>`;
        document.getElementById('reflexao-content').innerHTML = `<h3>Reflexão</h3><p>${sculpture.reflexao || 'Informação não disponível.'}</p>`;
        
        // **LÓGICA PARA RENDERIZAR A NOVA ABA**
        const specsContent = document.getElementById('especificacoes-content');
        if (sculpture.especificacoes) {
            let specsHTML = '<h3>Ficha Técnica</h3><ul class="spec-list">';
            for (const [label, value] of Object.entries(sculpture.especificacoes)) {
                specsHTML += `
                    <li class="spec-item">
                        <span class="spec-label">${label}:</span>
                        <span class="spec-value">${value}</span>
                    </li>
                `;
            }
            specsHTML += '</ul>';
            specsContent.innerHTML = specsHTML;
        } else {
            specsContent.innerHTML = '<p>Especificações técnicas não disponíveis para esta obra.</p>';
        }
        this.loadQuiz(sculptureId);
    }
    
    loadQuiz(sculptureId) {
        const sculpture = sculpturesData[sculptureId];
        const quizContent = document.getElementById('quiz-content');

        let quizHTML = '<h3>Quiz Interativo</h3>';
        
        (sculpture.quiz || []).forEach((question, index) => {
            quizHTML += `
                <div class="quiz-question" data-question="${index}">
                    <h4>Pergunta ${index + 1}: ${question.question}</h4>
                    <div class="quiz-options">
                        ${(question.options || []).map((option, optionIndex) => `
                            <div class="quiz-option" data-option="${optionIndex}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                    <div class="quiz-feedback" style="display: none;"></div>
                </div>
            `;
        });

        quizHTML += `<button class="quiz-submit">Verificar Respostas</button><div class="quiz-results" style="display: none; margin-top: 20px;"></div>`;
        quizContent.innerHTML = quizHTML;

        quizContent.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const question = e.target.closest('.quiz-question');
                question.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                e.target.classList.add('selected');
            });
        });

        quizContent.querySelector('.quiz-submit').addEventListener('click', () => this.submitQuiz(sculptureId));
    }
    
    submitQuiz(sculptureId) {
        const sculpture = sculpturesData[sculptureId];
        const questions = this.modal.querySelectorAll('#quiz-content .quiz-question');
        let score = 0;
        let totalQuestions = questions.length;

        questions.forEach((questionEl, index) => {
            const selectedOption = questionEl.querySelector('.quiz-option.selected');
            const feedback = questionEl.querySelector('.quiz-feedback');
            const questionData = sculpture.quiz[index];

            if (selectedOption) {
                const selectedIndex = parseInt(selectedOption.dataset.option);
                const isCorrect = selectedIndex === questionData.correct;

                if (isCorrect) {
                    score++;
                    selectedOption.classList.add('correct');
                } else {
                    selectedOption.classList.add('incorrect');
                    const correctOption = questionEl.querySelector(`[data-option="${questionData.correct}"]`);
                    correctOption?.classList.add('correct');
                }
                feedback.innerHTML = `<strong>Explicação:</strong> ${questionData.explanation}`;
                feedback.style.display = 'block';
            }
        });

        const resultsEl = this.modal.querySelector('#quiz-content .quiz-results');
        const percentage = Math.round((score / totalQuestions) * 100);
        resultsEl.innerHTML = `
            <h4>Resultado do Quiz</h4>
            <p>Você acertou <strong>${score} de ${totalQuestions}</strong> perguntas (${percentage}%)</p>
        `;
        resultsEl.style.display = 'block';

        const submitButton = this.modal.querySelector('#quiz-content .quiz-submit');
        submitButton.disabled = true;
        submitButton.textContent = 'Quiz Concluído';
    }

    zoom(factor) {
        this.zoomLevel *= factor;
        this.zoomLevel = Math.max(0.5, Math.min(3, this.zoomLevel));
        document.getElementById('modal-image').style.transform = `scale(${this.zoomLevel})`;
    }

    resetZoom() {
        this.zoomLevel = 1;
        document.getElementById('modal-image').style.transform = 'scale(1)';
    }

    enableImageDrag(image) {
        // ... (código existente sem alterações)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.gallery = new Gallery();
});