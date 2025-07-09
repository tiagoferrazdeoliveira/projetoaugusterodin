const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzon8G9Q-0PgOw-_bJ-ZSESRoTWHeumsqxnXrvHfZeRyApdLDIXT8NLnVtO9UYY0wJE/exec";

const sculpturesData = {
    'idade-bronze': {
        title: 'A Idade do Bronze',
        year: '1876',
        images: [ 'https://i.postimg.cc/gGnJYyKs/The-Age-of-Bronze-1.jpg', 'https://i.postimg.cc/c01CzGgV/The-Age-of-Bronze-2.jpg' ],
        especificacoes: {
            "Título Original": "L'Âge d'airain", "Artista": "Auguste Rodin (1840–1917)", "Data": "Modelado em 1876, fundido c. 1906", "Material": "Bronze", "Dimensões": "182.9 x 59.1 x 61.6 cm", "Fonte": "The Metropolitan Museum of Art"
        },
        historia: `Apresentada ao Salão de Paris em 1877, esta obra foi a primeira figura de bronze em tamanho real de Rodin. O realismo da escultura era tão intenso que o júri acusou Rodin de "surmoulage" — de ter feito o molde diretamente de um modelo vivo. Para se defender, Rodin apresentou fotografias de seu modelo, o soldado belga Auguste Neyt, para provar que a obra era resultado de sua maestria escultórica, não de um truque mecânico. A controvérsia, embora dolorosa, validou seu talento e lançou sua carreira.<br><br><em>Fontes: Musée Rodin, The Metropolitan Museum of Art.</em>`,
        comunica: `Rilke descreve esta figura como um despertar lento e profundo: "Algo parecia despertar neste corpo [...] não era um despertar para o pensamento ou para a suspeita, era um despertar para a ação. O olhar estava voltado para dentro, a mão direita se erguia sobre a cabeça e se perdia em algum lugar no vazio... Este gesto permaneceu sem objetivo, vago, como o de alguém que acorda e ainda se encontra submerso por sonhos." Para Rilke, a obra captura o exato momento em que a vida emerge, cheia de hesitação e potencial.<br><br><em>Fonte: Rainer Maria Rilke, "Auguste Rodin" (via Textlog.de).</em>`,
        reflexao: 'A obra foi acusada de ser "real demais". Em um mundo de filtros e idealizações, o que significa ser "real demais" hoje? Onde a autenticidade se torna uma ofensa?',
        quiz: [
            { question: 'Segundo Rilke, o gesto da mão direita da figura é descrito como...', options: ['Um ato de desafio e força', 'Vago e sem objetivo, como o de alguém que acorda de um sonho', 'Uma imitação de estátuas romanas'], correct: 1, explanation: 'Rilke foca na natureza hesitante e sonhadora do gesto, que não busca uma ação externa, mas reflete um despertar interno.' },
            { question: 'Qual foi a principal controvérsia que lançou a carreira de Rodin com esta obra?', options: ['O uso de bronze em vez de mármore', 'A acusação de que ele moldou a escultura diretamente de um corpo vivo', 'O tema da nudez masculina'], correct: 1, explanation: 'A acusação de "surmoulage" foi o escândalo que, paradoxalmente, validou seu incrível talento e o tornou famoso.' },
            { question: 'O que a interpretação de Rilke sugere sobre a "ação" da estátua?', options: ['É uma ação física iminente, como lutar ou correr', 'É uma ação que já aconteceu no passado', 'É um despertar interior, um movimento da alma, e não uma ação externa'], correct: 2, explanation: 'Rilke enfatiza que o movimento é interno, uma transição de estado, e não uma preparação para uma tarefa física no mundo exterior.' }
        ]
    },
    'portao-inferno': {
        title: 'Portão do Inferno',
        year: '1880 - 1917',
        images: [ 'https://i.postimg.cc/SK6C3wD5/Portao-1.jpg', 'https://i.postimg.cc/FRh34D6K/Portao-4.jpg', 'https://i.postimg.cc/QCt7BVhG/Portao-2.jpg', 'https://i.postimg.cc/3R9pJ2MF/Portao-3.jpg' ],
        especificacoes: {
            "Título Original": "La Porte de l'Enfer", "Artista": "Auguste Rodin (1840–1917)", "Data": "Concebido em 1880, nunca completamente finalizado", "Material": "Bronze (fundições póstumas)", "Dimensões": "Aprox. 6m x 4m x 1m", "Inspiração": "A Divina Comédia, de Dante Alighieri"
        },
        historia: `Em 1880, Rodin recebeu uma encomenda do Estado francês para projetar um portal monumental para um novo museu de artes decorativas. Inspirado pela "Divina Comédia" de Dante, Rodin dedicou quase quatro décadas a este projeto colossal, que se tornou o trabalho de sua vida. Embora o museu nunca tenha sido construído e o portal nunca tenha sido fundido em bronze durante sua vida, ele se tornou um "viveiro" para muitas de suas figuras mais famosas, incluindo O Pensador, O Beijo e as Três Sombras.<br><br><em>Fonte: Musée Rodin.</em>`,
        comunica: `Rilke não descreveu o portão como um todo, mas falou sobre as figuras que o compõem, vendo-as como expressões de vida e movimento contínuo. Ele via o trabalho de Rodin como um universo onde cada fragmento continha a totalidade. O Portão, neste sentido, é um cosmos de corpos em movimento, um rio de formas onde a vida humana é retratada em sua totalidade, com todas as suas paixões, dores e tormentos. É a expressão máxima da superfície em constante agitação.<br><br><em>Fonte: Rainer Maria Rilke, "Auguste Rodin" (via Textlog.de).</em>`,
        reflexao: 'O Portão nunca foi "terminado". O que a ideia de uma obra de arte permanentemente "em processo" nos diz sobre a criatividade e a própria vida?',
        quiz: [
            { question: 'O Portão do Inferno serviu a que propósito principal para a carreira de Rodin?', options: ['Foi sua obra mais vendida', 'Serviu como um "laboratório" de onde surgiram muitas de suas esculturas independentes', 'Foi uma crítica direta ao governo francês'], correct: 1, explanation: 'Muitas obras icônicas, como O Pensador, foram originalmente concebidas como parte do Portão.' },
            { question: 'O que a visão de Rilke sobre as figuras do Portão sugere?', options: ['Que elas são meramente decorativas', 'Que cada figura é um universo em si mesma, expressando a totalidade da vida', 'Que elas deveriam ter sido finalizadas'], correct: 1, explanation: 'Para Rilke, a genialidade de Rodin estava em fazer cada fragmento, cada corpo, conter a essência de uma vida inteira, e o Portão é a soma desses universos.' },
            { question: 'Qual o paradoxo central da história do Portão do Inferno?', options: ['Foi inspirado em uma obra italiana, mas é um ícone francês', 'É sua obra mais famosa, mas nunca foi finalizada ou fundida em bronze durante sua vida', 'É uma obra sobre o inferno, mas contém figuras de amantes'], correct: 1, explanation: 'Apesar de ser a obra central de sua carreira, Rodin nunca a viu em sua forma final de bronze; as fundições são todas póstumas.' }
        ]
    },
    'burgueses-calais': {
        title: 'Os Burgueses de Calais',
        year: '1884-1895',
        images: [ 'https://i.postimg.cc/xY47H0P5/Burgueses-de-Calais.jpg', 'https://i.postimg.cc/jsMvbXgc/Burgueses-de-Calais-1.jpg', 'https://i.postimg.cc/Q8VmxTv3/Burgueses-de-Calais-2.jpg', 'https://i.postimg.cc/VfTRSNcb/Burgueses-de-Calais-3.jpg', 'https://i.postimg.cc/4sc89py4/Burgueses-de-Calais-4.jpg', 'https://i.postimg.cc/7qyKMbJ3/Burgueses-de-Calais-5.jpg', 'https://i.postimg.cc/pPYq0xKg/Burgueses-de-Calais-6.jpg', 'https://i.postimg.cc/KZGQwVN4/Burgueses-de-Calais-7.jpg', 'https://i.postimg.cc/HHRZn6pP/Burgueses-de-Calais-8.jpg' ],
        especificacoes: {
            "Título Original": "Les Bourgeois de Calais", "Artista": "Auguste Rodin (1840–1917)", "Data": "Modelado em 1884-1895", "Material": "Bronze", "Dimensões": "209.6 × 238.8 × 190.5 cm", "Evento Histórico": "Cerco de Calais por Eduardo III em 1347"
        },
        historia: `Em 1885, a cidade de Calais encomendou a Rodin um monumento para comemorar um episódio da Guerra dos Cem Anos. Seis cidadãos proeminentes (burgueses) se ofereceram como reféns ao rei Eduardo III da Inglaterra para salvar sua cidade da destruição. Rodin subverteu radicalmente as convenções dos monumentos públicos: em vez de uma figura heróica em um pedestal, ele criou um grupo de seis homens angustiados, vestidos com trapos, no mesmo nível do espectador, forçando uma confrontação emocional e humana com o sacrifício.<br><br><em>Fonte: Musée Rodin.</em>`,
        comunica: `Rilke viu nesta obra a representação da grande caminhada e do sacrifício. Ele escreveu: "Ele os fez a todos do mesmo tamanho... e os entregou ao movimento de suas mãos... Seis homens que se levantaram para ir, e dos quais nenhum consegue realmente ir. Estão um ao lado do outro, como se o vasto pasto da liberdade futura se estendesse diante deles." Ele enfatiza como cada figura é uma solidão, mas juntas formam um organismo de sofrimento e heroísmo.<br><br><em>Fonte: Rainer Maria Rilke, "Auguste Rodin", Sobre os Burgueses de Calais (via Textlog.de).</em>`,
        reflexao: 'Rodin retratou heróis como homens comuns, cheios de medo e resignação. O que isso nos diz sobre a natureza do heroísmo? Ele está na ausência de medo ou no ato de seguir em frente apesar dele?',
        quiz: [
            { question: 'Qual foi a principal inovação de Rodin neste monumento público?', options: ['O uso de bronze polido', 'Apresentar os heróis de forma vulnerável e ao nível do espectador', 'Colocar apenas uma figura em destaque'], correct: 1, explanation: 'Ao remover o pedestal e retratar a angústia em vez da glória, Rodin mudou a forma como o público interage com monumentos.' },
            { question: 'De acordo com a visão de Rilke, qual a principal tensão na obra?', options: ['A beleza das roupas contra a feiura dos rostos', 'O desejo de ir (sacrifício) e a incapacidade de se mover (medo)', 'A luta entre os próprios burgueses'], correct: 1, explanation: 'Rilke foca na dualidade do movimento: eles devem caminhar para a morte, mas seus corpos e expressões mostram a hesitação e o peso da decisão.' },
            { question: 'O que a composição da obra, com seis figuras distintas, permite a Rodin explorar?', options: ['Seis classes sociais diferentes', 'As diferentes reações humanas individuais diante de um destino coletivo', 'Apenas a figura de Eustache de Saint Pierre'], correct: 1, explanation: 'Cada figura é um estudo psicológico único da resignação, medo, determinação e desespero, mostrando que o heroísmo tem muitas faces.' }
        ]
    },
    'adao': {
        title: 'Adão ou A Criação do Homem',
        year: '1880-1881',
        images: [ 'https://i.postimg.cc/2rRsJ9Nf/Ad-o-ou-A-Cria-o-do-Homem-1.jpg', 'https://i.postimg.cc/MW6wMM3r/Ad-o-ou-A-Cria-o-do-Homem-2.jpg', 'https://i.postimg.cc/4sQS0J1z/Ad-o-ou-A-Cria-o-do-Homem-3.jpg' ],
        especificacoes: {
            "Título Original": "Adam", "Artista": "Auguste Rodin (1840–1917)", "Data": "Modelado em 1880-81", "Material": "Bronze", "Dimensões": "199.4 x 77.5 x 77.8 cm", "Fonte": "The Metropolitan Museum of Art"
        },
        historia: `Originalmente, Rodin concebeu "Adão" para flanquear seu monumental "Portão do Inferno". A pose da figura é fortemente influenciada por Michelangelo, especialmente pelo Adão do teto da Capela Sistina. No entanto, Rodin transforma a figura: em vez de receber a vida, seu Adão parece sobrecarregado por ela. O corpo se contorce sob um peso invisível, como se carregasse o fardo de toda a humanidade futura.<br><br><em>Fontes: The Metropolitan Museum of Art, Musée Rodin.</em>`,
        comunica: `Rilke não tem um texto específico sobre o Adão, mas sua análise sobre a obra de Rodin se aplica perfeitamente aqui. Ele falaria sobre como o corpo se torna uma paisagem de sentimentos. O Adão de Rodin não é apenas um corpo, mas a corporificação do esforço, da dor da existência e do despertar para a consciência. Cada músculo tensionado não é apenas anatomia, mas a expressão de uma luta interior, o peso de ser o primeiro homem.<br><br><em>Fonte: Interpretação baseada nos escritos de Rainer Maria Rilke sobre Rodin.</em>`,
        reflexao: 'Michelangelo mostra Adão recebendo a vida. Rodin mostra Adão sendo sobrecarregado por ela. Que visão sobre a condição humana cada artista está apresentando?',
        quiz: [
            { question: 'Qual foi a principal fonte de inspiração de Rodin para a pose de "Adão"?', options: ['A estatuária grega', 'O Adão da Capela Sistina, de Michelangelo', 'As esculturas egípcias'], correct: 1, explanation: 'A conexão com o Adão de Michelangelo é direta e reconhecida, embora Rodin tenha alterado radicalmente seu significado.' },
            { question: 'Qual a principal diferença de sentimento entre o Adão de Rodin e o de Michelangelo?', options: ['O de Rodin é mais atlético', 'O de Rodin transmite um sentimento de peso e angústia, em vez de um despertar gracioso', 'O de Rodin é menos realista'], correct: 1, explanation: 'Enquanto o Adão de Michelangelo está prestes a receber a vida, o de Rodin parece já sentir todo o peso e a dor da existência humana.' },
            { question: 'Onde "Adão" foi originalmente concebido para ser posicionado?', options: ['No centro de Paris', 'Como uma obra independente em um jardim', 'Flanqueando "O Portão do Inferno"'], correct: 2, explanation: 'Adão e Eva foram projetados para ficar em cada lado do Portão, servindo como pilares temáticos da obra.' }
        ]
    },
    'pensador': {
        title: 'O Pensador',
        year: '1880',
        images: ['https://i.postimg.cc/pr6srwNC/O-Pensador.jpg', 'https://i.postimg.cc/zztDZVR6/The-Thinker-2.jpg', 'https://i.postimg.cc/S4Dxzttd/The-Thinker-1.jpg'],
        especificacoes: {
            "Título Original": "Le Penseur", "Artista": "Auguste Rodin (1840–1917)", "Data": "Modelado em 1880, fundido em 1902", "Material": "Bronze", "Dimensões": "Aprox. 186 cm de altura (versão monumental)", "Origem": "Originalmente posicionado no topo de 'O Portão do Inferno'"
        },
        historia: `Originalmente chamado de "O Poeta", esta figura foi criada para ocupar o centro do tímpano do "Portão do Inferno", representando Dante (ou o próprio Rodin) observando os círculos do inferno abaixo. A figura transcendeu sua origem, tornando-se uma obra independente e um ícone universal da filosofia e do esforço intelectual. Sua popularidade foi tão grande que foi ampliada para uma escala monumental em 1904.<br><br><em>Fontes: Musée Rodin, Google Arts & Culture.</em>`,
        comunica: `Rilke interpreta "O Pensador" não como a imagem de um intelectual sereno, mas como a personificação da força bruta do próprio pensamento. Ele escreve: "Ele senta-se em silêncio, ponderando, sobrecarregado com seus pensamentos. Todo o seu corpo se tornou uma cabeça, e todo o sangue em suas veias se tornou cérebro... Ele pensa com todo o seu corpo. A força de um Hércules é necessária para um pensamento tão grande."<br><br><em>Fonte: Rainer Maria Rilke, "Auguste Rodin" (via Textlog.de).</em>`,
        reflexao: 'A imagem popular de "pensar" é de quietude. Rodin o retrata como um esforço físico intenso. Como essa visão desafia nossa ideia sobre o que é o ato de pensar?',
        quiz: [
            { question: 'De acordo com a interpretação de Rilke, o que o corpo de "O Pensador" expressa?', options: ['Relaxamento e meditação', 'O esforço físico e a energia total consumida pelo ato de pensar', 'A dor de uma lesão'], correct: 1, explanation: 'Rilke via a tensão muscular não como um detalhe, mas como a manifestação física da intensidade do pensamento, que exige a força de todo o corpo.' },
            { question: 'Qual era a função original de "O Pensador"?', options: ['Ser um monumento em uma praça', 'Ser a figura central no topo do "Portão do Inferno"', 'Ser um estudo anatômico para estudantes'], correct: 1, explanation: 'Ele foi concebido como "O Poeta" (Dante), observando as cenas do inferno que ele mesmo descreveu, a partir do topo do Portão.' },
            { question: 'O que a transformação de "O Pensador" em uma obra monumental e independente significa?', options: ['Que Rodin desistiu do Portão do Inferno', 'Que a figura possuía uma força simbólica universal que transcendia seu contexto original', 'Que a obra não era popular em sua escala menor'], correct: 1, explanation: 'Seu poder de representar o esforço intelectual e a criatividade humana a tornou um ícone universal, para além de sua origem narrativa.' }
        ]
    },
    'balzac': {
        title: 'Monumento de Balzac',
        year: '1898',
        images: ['https://i.postimg.cc/YpCJc8f2/Balzac-1.jpg', 'https://i.postimg.cc/wqZKQJNq/Balzac-3.jpg','https://i.postimg.cc/tbMHb0MK/Balzac-2.jpg'],
        especificacoes: {
            "Título Original": "Monument à Balzac", "Artista": "Auguste Rodin (1840–1917)", "Data": "1891-1898", "Material": "Bronze (fundições póstumas)", "Dimensões": "270 x 120 x 120 cm", "Status": "Rejeitado pela Société des Gens de Lettres"
        },
        historia: `Encomendado em 1891 pela Société des Gens de Lettres, o monumento ao romancista Honoré de Balzac consumiu Rodin por sete anos. Em vez de um retrato literal, Rodin buscou capturar a essência da força criativa do escritor. Quando o modelo de gesso foi exibido em 1898, causou um escândalo. Foi ridicularizado como um "saco de carvão" e uma "massa informe". A encomenda foi rejeitada, e Rodin instalou a obra em seu jardim em Meudon. O primeiro molde de bronze só foi feito em 1939, muito depois da morte do artista.<br><br><em>Fonte: Musée Rodin.</em>`,
        comunica: `Rilke descreve a obra como a materialização da própria criatividade. Ele não vê apenas um homem, mas a personificação da fertilidade e da criação. Escreve: "Este foi o Balzac, em cuja forma a arrogância da criação se manifestou... Um corpo que era em si mesmo uma criação, e cujo rosto era o ápice de uma humanidade que florescia em sua obra. Ele era a própria criação, que usava a forma de Balzac para aparecer." Para Rilke, o roupão é como a lava de um vulcão, contendo a energia explosiva do gênio.<br><br><em>Fonte: Rainer Maria Rilke, "Auguste Rodin", Sobre Balzac (via Textlog.de).</em>`,
        reflexao: 'A sociedade queria um retrato e Rodin entregou um símbolo da força criativa. Por que muitas vezes temos dificuldade em aceitar representações que vão além do literal?',
        quiz: [
            { question: 'Na visão de Rilke, o que o "Monumento a Balzac" realmente representa?', options: ['Uma caricatura do escritor', 'A personificação da força da própria criação', 'Um fantasma em um lençol'], correct: 1, explanation: 'Rilke via a obra não como um retrato de um homem, mas como a manifestação da força criativa universal, usando a forma de Balzac para se expressar.' },
            { question: 'Qual foi a reação do público e da instituição que encomendou a obra quando ela foi revelada?', options: ['Foi aclamada como uma obra-prima instantânea', 'Foi recebida com indiferença', 'Foi ridicularizada e a encomenda foi oficialmente rejeitada'], correct: 2, explanation: 'A obra causou um dos maiores escândalos da história da arte do século XIX, sendo amplamente ridicularizada pela crítica e rejeitada por quem a encomendou.' },
            { question: 'Por que esta obra é considerada um marco da escultura moderna?', options: ['Porque foi a primeira a ser feita em bronze', 'Porque se afasta do retrato literal para expressar uma ideia ou essência', 'Porque foi a maior escultura já feita por Rodin'], correct: 1, explanation: 'Ao abandonar a semelhança física em favor da expressão de uma força interior, Rodin abriu caminho para a abstração e para a escultura moderna.' }
        ]
    },
    'homem-caminha': {
        title: 'O Homem que Caminha',
        year: '1907',
        images: ['https://i.postimg.cc/rq8HWgHG/O-Homem-que-Caminha.jpg','https://i.postimg.cc/6BYmhnsk/O-Homem-que-Caminha-3.jpg'],
        especificacoes: {
            "Título Original": "L'Homme qui marche",
            "Artista": "Auguste Rodin (1840–1917)",
            "Data": "Modelado em 1907",
            "Material": "Bronze",
            "Dimensões": "213.5 x 71.7 x 156.5 cm",
            "Fonte": "Musée Rodin, Google Arts & Culture"
        },
        historia: `Esta escultura é uma das obras mais radicais de Rodin. Ele a montou combinando um torso fragmentado, que ele havia criado anos antes (baseado em seu estudo para São João Batista), com um par de pernas estudadas separadamente. A figura resultante, sem cabeça e sem braços, é a pura expressão do movimento. Ao apresentar um fragmento montado como uma obra de arte completa e poderosa, Rodin desafiou séculos de tradição escultórica, elevando o inacabado a um status de obra finalizada.<br><br><em>Fonte: Musée Rodin.</em>`,
        comunica: `Para Rilke, esta obra era a essência do movimento. Ele a descreve como "uma nova beleza, que não consistia em ser completa, mas em uma grandeza que não precisava de completude... Este corpo consistia apenas em movimento. O caminhar está nele... não há nada que o segure... ele caminha." Rilke celebra a coragem de Rodin em remover tudo o que não era essencial para a expressão do ato de caminhar, focando na ação pura e na determinação.<br><br><em>Fonte: Rainer Maria Rilke, "Auguste Rodin" (via Textlog.de).</em>`,
        reflexao: 'Ao remover a cabeça (pensamento) e os braços (ação secundária), Rodin nos força a focar no ato puro de "ir em frente". O que essa escultura nos diz sobre determinação e perseverança?',
        quiz: [
            { question: 'O que torna "O Homem que Caminha" uma obra tão radical para sua época?', options: ['O uso de bronze', 'A combinação de fragmentos de estudos diferentes e a apresentação de uma figura "incompleta"', 'Seu tamanho monumental'], correct: 1, explanation: 'A ideia de montar fragmentos e apresentar uma figura sem cabeça ou braços como uma obra finalizada foi uma ruptura revolucionária com a tradição.' },
            { question: 'Na interpretação de Rilke, o que a ausência de cabeça e braços significa?', options: ['Que a obra está inacabada', 'Que Rodin removeu tudo o que não era essencial para expressar o puro ato de caminhar', 'Que a figura é de um soldado ferido'], correct: 1, explanation: 'Rilke via a remoção das partes como um ato de foco e coragem, concentrando toda a energia da escultura no movimento das pernas e do torso.' },
            { question: 'A criação desta obra envolveu qual técnica inovadora de Rodin?', options: ['Fundição em cera perdida', 'A técnica da "assemblage", combinando estudos feitos em épocas diferentes', 'Escultura direta em mármore'], correct: 1, explanation: 'Rodin combinou um torso e pernas de estudos diferentes para criar uma nova obra, uma técnica de montagem que antecipou práticas da arte moderna.' }
        ]
    },
    'ugolino-filhos': {
        title: 'Ugolino e seus Filhos',
        year: '1882',
        images: ['https://upload.wikimedia.org/wikipedia/commons/c/cd/Ugolin_et_ses_enfants_Mus%C3%A9e_Rodin_S.1427_Paris.jpg','https://upload.wikimedia.org/wikipedia/commons/d/d4/Auguste_rodin%2C_ugolino%2C_1906%2C_02.JPG','https://upload.wikimedia.org/wikipedia/commons/6/68/Auguste_rodin%2C_ugolino%2C_1906%2C_01.JPG'],
        especificacoes: {
            "Título Original": "Ugolin et ses enfants",
            "Artista": "Auguste Rodin (1840–1917)",
            "Data": "Modelado em 1882, fundido em 1906",
            "Material": "Bronze",
            "Dimensões": "97.2 x 152.4 x 101.6 cm",
            "Fonte": "The Metropolitan Museum of Art"
        },
        historia: `Baseado no Canto XXXIII do "Inferno" de Dante, esta obra retrata o Conde Ugolino della Gherardesca, aprisionado com seus filhos e netos para morrer de fome. Rodin captura o momento de desespero absoluto, onde Ugolino, rastejando sobre seus descendentes mortos, contempla o canibalismo para sobreviver. A obra foi originalmente projetada para o "Portão do Inferno", mas sua composição horizontal e complexa levou Rodin a exibi-la como uma peça independente.<br><br><em>Fontes: The Metropolitan Museum of Art, Musée Rodin.</em>`,
        comunica: `Rilke veria esta obra como a exploração da "superfície" do corpo levada ao extremo do sofrimento. Ele descreveria como a dor e a fome se tornam a própria forma da escultura. Os corpos se contorcem não por ação, mas pela agonia. O corpo de Ugolino, em vez de um recipiente de alma, torna-se uma prisão de desespero, onde a humanidade é testada em seu limite mais terrível, e a forma física reflete a degradação moral e espiritual.<br><br><em>Fonte: Interpretação baseada nos escritos de Rainer Maria Rilke sobre Rodin.</em>`,
        reflexao: 'A escultura retrata um momento de dilema moral extremo. Como a composição física do grupo — o amontoado de corpos — intensifica a sensação de aprisionamento e desespero psicológico?',
        quiz: [
            { question: 'De qual obra literária esta escultura é inspirada?', options: ['A Ilíada de Homero', 'O Inferno de Dante', 'Édipo Rei de Sófocles'], correct: 1, explanation: 'A escultura é baseada no Canto XXXIII do Inferno, da Divina Comédia de Dante.' },
            { question: 'Que dilema moral extremo Ugolino enfrenta na cena retratada por Rodin?', options: ['Lutar ou render-se', 'A escolha entre a fé e a razão', 'A tentação do canibalismo para sobreviver'], correct: 2, explanation: 'Rodin captura o momento em que Ugolino, cego pela fome, contempla o ato supremo de desespero para sobreviver.' },
            { question: 'Por que esta obra, embora projetada para o "Portão do Inferno", foi tratada como uma peça separada?', options: ['Era grande demais para caber no portão', 'Sua composição horizontal e autossuficiente funcionava melhor como uma escultura independente', 'O tema era considerado muito chocante para o portão'], correct: 1, explanation: 'Sua forte presença narrativa e composição complexa fizeram dela uma obra poderosa por si só, sendo frequentemente exibida separadamente.' }
        ]
    },
    'eva': {
        title: 'Eva',
        year: '1881',
        images: ['https://i.postimg.cc/rTvYgqbw/eva.jpg','https://upload.wikimedia.org/wikipedia/commons/f/f8/Staedel-Frankfurt-Eva-von-Auguste-Rodin-Ffm-041.jpg','https://upload.wikimedia.org/wikipedia/commons/1/18/Staedel-Frankfurt-Eva-von-Auguste-Rodin-Ffm-042.jpg'],
        especificacoes: {
            "Título Original": "Ève",
            "Artista": "Auguste Rodin (1840–1917)",
            "Data": "Modelado em 1881",
            "Material": "Bronze (fundições póstumas)",
            "Dimensões": "Aprox. 173 cm de altura",
            "Fonte": "Musée Rodin"
        },
        historia: `Concebida para flanquear o "Portão do Inferno" junto com "Adão", "Eva" representa a primeira mulher após a Queda. Rodin a retrata em um momento de profunda vergonha e angústia, com o corpo contraído e os braços cruzados para se proteger. A produção da obra foi interrompida quando Rodin descobriu que sua modelo estava grávida, o que o levou a deixar a escultura "inacabada", um estado que ele passou a valorizar esteticamente.<br><br><em>Fonte: Musée Rodin, The Metropolitan Museum of Art.</em>`,
        comunica: `Para Rilke, a "Eva" de Rodin seria a encarnação do recolhimento. Ele diria que, ao contrário do Adão que se expande sob o peso do mundo, Eva se contrai para dentro de si mesma. Seu gesto não é de defesa contra o exterior, mas um mergulho em sua própria profundeza recém-descoberta. "Ela se recolhe em si mesma, longe de todos os céus, nas profundezas de seu próprio futuro. Ela se torna fria e se dobra, como uma fruta congelada pela geada."<br><br><em>Fonte: Interpretação baseada nos escritos de Rainer Maria Rilke sobre Rodin.</em>`,
        reflexao: 'O gesto de Eva é de vergonha ou de proteção? Ou seria um mergulho interior? Como um único gesto pode conter tantas interpretações sobre a condição feminina?',
        quiz: [
            { question: 'Qual evento levou Rodin a deixar a escultura de Eva "inacabada"?', options: ['Falta de material', 'A gravidez de sua modelo', 'Uma encomenda cancelada'], correct: 1, explanation: 'A mudança no corpo da modelo devido à gravidez interrompeu o processo, e Rodin abraçou o estado inacabado da peça como parte de sua expressão.' },
            { question: 'Na interpretação de Rilke, o que o gesto de contração de Eva simboliza?', options: ['Medo do mundo exterior', 'Um mergulho em seu próprio interior e futuro', 'Apenas o frio'], correct: 1, explanation: 'Rilke via o gesto não como defesa, mas como um recolhimento para dentro de si, para o início de sua própria jornada interior.' },
            { question: 'Junto com qual outra escultura "Eva" foi originalmente concebida para o "Portão do Inferno"?', options: ['O Pensador', 'Adão', 'O Beijo'], correct: 1, explanation: 'Adão e Eva foram projetados como as figuras que flanqueariam o Portão, representando a origem do pecado e do sofrimento humano.' }
        ]
    },
    'beijo': {
        title: 'O Beijo',
        year: 'c. 1882',
        images: ['https://i.postimg.cc/tJTrXXc7/O-beijo.jpg','https://i.postimg.cc/4dXLSvb6/O-beijo-2.jpg'],
        especificacoes: {
            "Título Original": "Le Baiser",
            "Artista": "Auguste Rodin (1840–1917)",
            "Data": "Modelado c. 1882",
            "Material": "Mármore e Bronze",
            "Inspiração": 'Paolo e Francesca, da "Divina Comédia" de Dante'
        },
        historia: `Originalmente, este grupo representava Paolo e Francesca, os amantes adúlteros do "Inferno" de Dante, e deveria fazer parte do "Portão do Inferno". No entanto, Rodin percebeu que a representação terna e alegre do amor não se encaixava na tragédia do Portão. Ele removeu o grupo, transformando-o em uma obra autônoma. O título "O Beijo" foi dado pela crítica em 1887. A obra se tornou um dos maiores ícones do amor na arte ocidental.<br><br><em>Fonte: Musée Rodin.</em>`,
        comunica: `Rilke descreveria esta obra como a fusão de duas almas através da forma. Ele não veria apenas dois corpos, mas um único organismo de paixão. Ele poderia dizer: "Aqui, os contornos se perdem. Cada corpo se entrega ao outro, não para se anular, mas para se encontrar em uma unidade maior. O beijo não é o objetivo, mas o selo de uma união que já aconteceu em cada fibra dos seus seres. Eles não se beijam; eles *são* o beijo."<br><br><em>Fonte: Interpretação baseada nos escritos de Rainer Maria Rilke sobre Rodin.</em>`,
        reflexao: 'A obra celebra um amor proibido que, na história original, leva à condenação. Como a escultura consegue isolar o momento de paixão e transformá-lo em um símbolo universal de amor, separado de seu trágico destino?',
        quiz: [
            { question: 'Quem são os personagens que inspiraram "O Beijo"?', options: ['Adão e Eva', 'Paolo e Francesca', 'Romeu e Julieta'], correct: 1, explanation: '"O Beijo" representa Paolo e Francesca, os amantes trágicos do Inferno de Dante Alighieri.' },
            { question: 'Por que Rodin removeu esta obra do "Portão do Inferno"?', options: ['Era tecnicamente muito complexa', 'Sua representação terna e alegre do amor não se encaixava na tragédia do Portão', 'Era grande demais para o portal'], correct: 1, explanation: 'Rodin sentiu que a felicidade e a sensualidade da obra contrastavam demais com o tema sombrio do Portão e a tornou uma peça independente.' },
            { question: 'O que a interpretação no estilo de Rilke sugere sobre o ato do beijo na escultura?', options: ['É um ato pecaminoso', 'É apenas um evento passageiro', 'É a manifestação física de uma união espiritual e total entre os amantes'], correct: 2, explanation: 'A visão poética veria o beijo não como o ato em si, mas como a consequência visível de uma fusão completa entre os dois seres.' }
        ]
    },
    'sao-joao': {
        title: 'São João Batista',
        year: '1878',
        images: ['https://upload.wikimedia.org/wikipedia/commons/5/53/John_the_Baptist_by_Auguste_Rodin%2C_V%26A_London_02.jpg'],
        especificacoes: {
            "Título Original": "Saint Jean Baptiste prêchant",
            "Artista": "Auguste Rodin (1840–1917)",
            "Data": "Modelado em 1878",
            "Material": "Bronze",
            "Dimensões": "Aprox. 200 cm de altura",
            "Fonte": "Musée Rodin, Google Arts & Culture"
        },
        historia: `Após o escândalo de "A Idade do Bronze", Rodin criou seu "São João Batista" deliberadamente maior que o tamanho natural para provar que não dependia de moldes diretos. Ele representa o santo em movimento, no ato de pregar. A inovação radical aqui é que, ao contrário da estatuária clássica, ambos os pés estão firmemente plantados no chão, criando uma sensação de movimento e estabilidade simultaneamente, um momento de "desequilíbrio equilibrado".<br><br><em>Fonte: Musée Rodin.</em>`,
        comunica: `Rilke viu em "São João Batista" a personificação da "Voz". Ele escreveu: "Esta não é a imagem de um homem, mas a imagem da própria pregação. O corpo inteiro se tornou a voz que clama no deserto... O gesto do braço não aponta para algo específico; ele comanda o mundo inteiro a ouvir. A boca está aberta, mas o grito vem de cada músculo. Ele caminha, e seu caminhar é o próprio discurso."<br><br><em>Fonte: Rainer Maria Rilke, "Auguste Rodin", Sobre São João Batista (via Textlog.de).</em>`,
        reflexao: 'Rodin cria a sensação de movimento com ambos os pés firmes no chão. Como isso desafia nossa percepção de como o movimento é representado? Que tipo de força interior essa postura transmite?',
        quiz: [
            { question: 'Na visão de Rilke, o que o corpo de São João Batista se tornou?', options: ['Uma estátua religiosa comum', 'A personificação da própria Voz e do ato de pregar', 'Um retrato de um camponês italiano'], correct: 1, explanation: 'Rilke interpreta a escultura não como um homem, mas como a manifestação física da Voz que prega, onde todo o corpo participa do ato.' },
            { question: 'Qual foi a principal razão técnica para Rodin fazer esta estátua maior que o tamanho natural?', options: ['Para que ela parecesse mais divina', 'Para provar que ele não usava moldes diretos de corpos vivos', 'Para competir com Michelangelo'], correct: 1, explanation: 'Após ser acusado de fazer moldes de um corpo real em "A Idade do Bronze", Rodin criou esta obra em uma escala maior para silenciar os críticos.' },
            { question: 'Qual a inovação na representação do movimento nesta obra?', options: ['A figura está voando', 'A figura tem ambos os pés no chão, mas ainda assim transmite um forte senso de movimento para a frente', 'A figura está sentada'], correct: 1, explanation: 'Tradicionalmente, o movimento era mostrado com um pé levantado. Rodin inovou ao criar uma poderosa sensação de caminhada com ambos os pés no chão.' }
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
    document.getElementById('zoom-in')?.addEventListener('click', () => this.zoom(1.2));
    document.getElementById('zoom-out')?.addEventListener('click', () => this.zoom(0.8));
    document.getElementById('zoom-reset')?.addEventListener('click', () => this.resetZoom());
  }

  showSculptureModal(sculptureId) {
    const sculpture = sculpturesData[sculptureId];
    if (!sculpture || !sculpture.images?.length) {
      console.error(`Dados da escultura '${sculptureId}' não encontrados.`);
      return;
    }
    this.currentSculpture = sculptureId;
    document.getElementById('modal-title').textContent = sculpture.title;

    const mainImage = document.getElementById('modal-image');
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    mainImage.src = sculpture.images[0];
    mainImage.alt = sculpture.title;

    thumbnailsContainer.innerHTML = '';
    sculpture.images.forEach((src, i) => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.alt = `${sculpture.title} - vista ${i + 1}`;
      thumb.className = 'thumbnail-img' + (i === 0 ? ' active' : '');
      thumb.addEventListener('click', () => {
        mainImage.src = src;
        thumbnailsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      thumbnailsContainer.appendChild(thumb);
    });

    this.loadTabContent(sculptureId);
    this.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    this.showTab('historia');
    this.resetZoom();
  }

  showTab(tabId) {
    const hideImage = ['quiz', 'analise'].includes(tabId);
    this.modalBody.classList.toggle('hide-image-view', hideImage);

    this.modal.querySelectorAll('.tab-button').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    this.modal.querySelectorAll('.tab-pane').forEach(pane => pane.classList.toggle('active', pane.id === `tab-${tabId}`));

    if (tabId === 'analise') {
      this.fetchComments(this.currentSculpture);
    }
  }

  async fetchComments(sculptureId) {
    const container = document.getElementById('comments-list');
    container.innerHTML = '<p>Carregando comentários...</p>';
    try {
      const resp = await fetch(`${SCRIPT_URL}?sculptureId=${encodeURIComponent(sculptureId)}`);
      if (!resp.ok) throw new Error(resp.statusText);
      const comments = await resp.json();
      if (!comments.length) {
        container.innerHTML = '<p>Seja o primeiro a deixar uma análise sobre esta obra!</p>';
        return;
      }
      comments.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
      container.innerHTML = comments.map(c => `
        <div class="comment-item">
          <strong class="comment-author">${this.sanitizeHTML(c.name)}</strong>
          <p class="comment-text">${this.sanitizeHTML(c.comment)}</p>
          <span class="comment-date">${new Date(c.Timestamp).toLocaleDateString('pt-BR')}</span>
        </div>
      `).join('');
    } catch (err) {
      console.error('Erro ao buscar comentários:', err);
      container.innerHTML = '<p>Não foi possível carregar os comentários.</p>';
    }
  }

  async handleCommentSubmit(form) {
    const nameInput = form.querySelector('input[name="name"]');
    const commentInput = form.querySelector('textarea[name="comment"]');
    const btn = form.querySelector('button');

    if (!nameInput.value.trim() || !commentInput.value.trim()) {
      alert('Por favor, preencha seu nome e comentário.');
      return;
    }

    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';

    const params = new URLSearchParams();
    params.append('sculptureId', this.currentSculpture);
    params.append('name', nameInput.value.trim());
    params.append('comment', commentInput.value.trim());

    try {
      const resp = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: params
      });
      const json = await resp.json();
      if (json.result === 'success') {
        form.reset();
        this.fetchComments(this.currentSculpture);
      } else {
        throw new Error(json.message || 'Falha ao gravar comentário.');
      }
    } catch (err) {
      console.error('Erro ao enviar comentário:', err);
      alert('Ocorreu um erro ao enviar seu comentário. Tente novamente.');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }

  sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  loadTabContent(sculptureId) {
    const s = sculpturesData[sculptureId];
    document.getElementById('historia-content').innerHTML = `<h3>História da Obra</h3><p>${s.historia}</p>`;
    document.getElementById('comunica-content').innerHTML = `<h3>O que Comunica</h3><p>${s.comunica}</p>`;
    document.getElementById('reflexao-content').innerHTML = `<h3>Reflexão</h3><p>${s.reflexao}</p>`;

    const specs = document.getElementById('especificacoes-content');
    if (s.especificacoes) {
      specs.innerHTML = '<h3>Ficha Técnica</h3><ul class="spec-list">' +
        Object.entries(s.especificacoes).map(([lbl, val]) =>
          `<li class="spec-item"><span class="spec-label">${lbl}:</span> <span class="spec-value">${val}</span></li>`
        ).join('') +
        '</ul>';
    } else {
      specs.innerHTML = '<p>Especificações não disponíveis.</p>';
    }

    this.loadQuiz(sculptureId);
  }

  loadQuiz(sculptureId) {
    const s = sculpturesData[sculptureId];
    const container = document.getElementById('quiz-content');
    let html = '<h3>Quiz Interativo</h3>';
    s.quiz.forEach((q, i) => {
      html += `
        <div class="quiz-question" data-q="${i}">
          <h4>Pergunta ${i+1}: ${q.question}</h4>
          <div class="quiz-options">
            ${q.options.map((opt, idx) =>
              `<div class="quiz-option" data-option="${idx}">${opt}</div>`
            ).join('')}
          </div>
          <div class="quiz-feedback" style="display:none;"></div>
        </div>`;
    });
    html += `<button class="quiz-submit">Verificar Respostas</button>
             <div class="quiz-results" style="display:none;margin-top:20px;"></div>`;
    container.innerHTML = html;

    container.querySelectorAll('.quiz-option').forEach(opt =>
      opt.addEventListener('click', e => {
        const qEl = e.target.closest('.quiz-question');
        qEl.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        e.target.classList.add('selected');
      })
    );
    container.querySelector('.quiz-submit').addEventListener('click', () => this.submitQuiz(sculptureId));
  }

  submitQuiz(sculptureId) {
    const s = sculpturesData[sculptureId];
    const questions = this.modal.querySelectorAll('#quiz-content .quiz-question');
    let score = 0;
    questions.forEach((qEl, i) => {
      const sel = qEl.querySelector('.quiz-option.selected');
      const fb = qEl.querySelector('.quiz-feedback');
      if (!sel) return;
      const chosen = parseInt(sel.dataset.option, 10);
      const correct = s.quiz[i].correct;
      if (chosen === correct) {
        score++;
        sel.classList.add('correct');
      } else {
        sel.classList.add('incorrect');
        qEl.querySelector(`.quiz-option[data-option="${correct}"]`)?.classList.add('correct');
      }
      fb.innerHTML = `<strong>Explicação:</strong> ${s.quiz[i].explanation}`;
      fb.style.display = 'block';
    });

    const total = questions.length;
    const perc = Math.round((score/total)*100);
    const resEl = this.modal.querySelector('#quiz-content .quiz-results');
    resEl.innerHTML = `<h4>Resultado</h4><p>Você acertou <strong>${score} de ${total}</strong> (${perc}%)</p>`;
    resEl.style.display = 'block';
    this.modal.querySelector('#quiz-content .quiz-submit').disabled = true;
  }

  zoom(f) {
    this.zoomLevel = Math.min(3, Math.max(0.5, this.zoomLevel * f));
    document.getElementById('modal-image').style.transform = `scale(${this.zoomLevel})`;
  }

  resetZoom() {
    this.zoomLevel = 1;
    document.getElementById('modal-image').style.transform = 'scale(1)';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.gallery = new Gallery();
});
