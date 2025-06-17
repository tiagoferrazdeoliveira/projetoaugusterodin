// Dados das esculturas
const sculpturesData = {
    pensador: {
        title: "O Pensador",
        image: "images/rodin/o_pensador.jpg",
        content: `
            <h3>A Meditação em Bronze</h3>
            <p>
                "O Pensador" é talvez a obra mais icônica de Auguste Rodin. Originalmente concebida 
                como parte de "A Porta do Inferno", esta figura representa Dante contemplando os 
                círculos do inferno em sua Divina Comédia.
            </p>
            <p>
                A contração muscular expressa não apenas esforço físico, mas o próprio movimento 
                do pensamento e a intensidade de uma angústia existencial. Cada músculo tensionado 
                revela a luta interna entre razão e emoção.
            </p>
            <h4>Características Técnicas:</h4>
            <ul>
                <li><strong>Material:</strong> Bronze</li>
                <li><strong>Altura:</strong> 186 cm</li>
                <li><strong>Período:</strong> 1880-1882</li>
                <li><strong>Localização:</strong> Museu Rodin, Paris</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>O que esta postura corporal comunica sobre o ato de pensar? Como Rodin consegue tornar visível um processo mental através da escultura?</p>
            </div>
        `
    },
    beijo: {
        title: "O Beijo",
        image: "images/rodin/o_beijo.jpg",
        content: `
            <h3>A Paixão Eternizada</h3>
            <p>
                "O Beijo" representa Paolo e Francesca, personagens da Divina Comédia de Dante. 
                A obra captura o momento exato do primeiro beijo entre os amantes, antes de 
                serem descobertos e mortos.
            </p>
            <p>
                Rodin consegue transmitir tanto a paixão quanto a tragédia através da posição 
                dos corpos. O abraço é ao mesmo tempo terno e desesperado, revelando a 
                intensidade do amor proibido.
            </p>
            <h4>Simbolismo:</h4>
            <ul>
                <li>O livro caído representa o momento em que a literatura desperta a paixão</li>
                <li>A posição dos pés mostra hesitação e entrega simultâneas</li>
                <li>As mãos expressam tanto proteção quanto desejo</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Como Rodin equilibra sensualidade e espiritualidade nesta obra? O que a escultura nos diz sobre a natureza do amor?</p>
            </div>
        `
    },
    balzac: {
        title: "Balzac",
        image: "images/rodin/balzac.jpg",
        content: `
            <h3>O Gênio Criativo</h3>
            <p>
                O monumento a Honoré de Balzac foi uma das obras mais controversas de Rodin. 
                Rejeitada inicialmente pela Société des Gens de Lettres, a escultura rompe 
                com as convenções tradicionais de monumentos públicos.
            </p>
            <p>
                O roupão que envolve a figura funciona como uma crisálida, sugerindo 
                transformação e potência criativa. Rodin não retrata o escritor, mas a 
                própria força da criação literária.
            </p>
            <h4>Inovações:</h4>
            <ul>
                <li>Abandono do realismo descritivo</li>
                <li>Foco na essência psicológica</li>
                <li>Uso simbólico das vestes</li>
                <li>Expressão da genialidade através da forma</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Por que esta obra causou tanto escândalo? Como Rodin consegue representar o processo criativo através da escultura?</p>
            </div>
        `
    },
    burgueses: {
        title: "Os Burgueses de Calais",
        image: "images/rodin/burgueses_calais.jpg",
        content: `
            <h3>O Sacrifício Heroico</h3>
            <p>
                Esta obra monumental retrata seis cidadãos de Calais que se ofereceram para 
                morrer em troca da salvação de sua cidade durante o cerco inglês de 1347. 
                Cada figura expressa uma reação diferente diante da morte iminente.
            </p>
            <p>
                Rodin inova ao colocar as figuras no mesmo nível do observador, eliminando 
                o pedestal tradicional. Isso cria uma proximidade emocional única entre 
                espectador e obra.
            </p>
            <h4>Expressões Individuais:</h4>
            <ul>
                <li><strong>Eustache de Saint-Pierre:</strong> Liderança serena</li>
                <li><strong>Jean d'Aire:</strong> Determinação resignada</li>
                <li><strong>Jacques de Wissant:</strong> Angústia controlada</li>
                <li><strong>Pierre de Wissant:</strong> Dor profunda</li>
                <li><strong>Jean de Fiennes:</strong> Desespero jovem</li>
                <li><strong>Andrieu d'Andres:</strong> Aceitação melancólica</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Como cada personagem lida com o sacrifício? O que esta obra nos ensina sobre coragem e humanidade?</p>
            </div>
        `
    },
    "homem-caminha": {
        title: "O Homem que Caminha",
        image: "images/rodin/homem_caminha.jpg",
        content: `
            <h3>O Movimento Puro</h3>
            <p>
                "O Homem que Caminha" é uma das obras mais radicais de Rodin. A figura sem 
                cabeça e braços concentra toda a expressão no movimento do corpo, criando 
                uma sensação de dinamismo e energia pura.
            </p>
            <p>
                A fragmentação não é acidental - é uma escolha estética que intensifica 
                a sensação de movimento. O corpo em desequilíbrio sugere o momento exato 
                entre um passo e outro.
            </p>
            <h4>Técnica Inovadora:</h4>
            <ul>
                <li>Uso expressivo da fragmentação</li>
                <li>Captura do movimento no bronze</li>
                <li>Eliminação do supérfluo</li>
                <li>Foco na essência do gesto</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Como um fragmento pode ser mais expressivo que uma figura completa? O que esta obra nos diz sobre a natureza do movimento?</p>
            </div>
        `
    },
    adao: {
        title: "Adão",
        image: "images/rodin/adao.jpg",
        content: `
            <h3>O Primeiro Homem</h3>
            <p>
                "Adão" representa o primeiro homem após a expulsão do Paraíso. O corpo pesado 
                e o gesto hesitante refletem o fardo da criação e da culpa original. A obra 
                dialoga diretamente com Michelangelo, mas incorpora uma carga psicológica moderna.
            </p>
            <p>
                A postura curvada e o braço que se ergue com dificuldade expressam tanto 
                o peso da consciência quanto o despertar para a condição humana. É uma 
                meditação sobre a origem e o destino do homem.
            </p>
            <h4>Simbolismo Bíblico:</h4>
            <ul>
                <li>A curvatura do corpo sugere o peso do pecado</li>
                <li>O gesto do braço indica despertar da consciência</li>
                <li>A expressão facial revela angústia existencial</li>
                <li>A musculatura tensa mostra luta interna</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Como Rodin reinterpreta o mito bíblico? O que esta obra nos diz sobre a condição humana?</p>
            </div>
        `
    },
    eva: {
        title: "Eva",
        image: "images/rodin/eva.jpg",
        content: `
            <h3>A Primeira Mulher</h3>
            <p>
                "Eva" complementa "Adão" na representação do casal primordial após a queda. 
                A figura feminina expressa vergonha, proteção e uma profunda melancolia. 
                O corpo se dobra sobre si mesmo em um gesto de autoproteção.
            </p>
            <p>
                Rodin captura não apenas a nudez física, mas a nudez emocional - a 
                vulnerabilidade de quem perdeu a inocência. A obra dialoga com Eva 
                em diálogo com Adão, representando a dualidade da experiência humana.
            </p>
            <h4>Expressão Corporal:</h4>
            <ul>
                <li>Postura de autoproteção e vergonha</li>
                <li>Braços que envolvem o próprio corpo</li>
                <li>Cabeça inclinada em melancolia</li>
                <li>Movimento de recolhimento</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Como a postura corporal expressa estados emocionais? O que esta obra revela sobre vulnerabilidade e proteção?</p>
            </div>
        `
    },
    ugolino: {
        title: "Ugolino e seus Filhos",
        image: "images/rodin/ugolino_filhos.jpg",
        content: `
            <h3>O Desespero Paterno</h3>
            <p>
                Baseada no Canto XXXIII do Inferno de Dante, esta obra retrata o Conde 
                Ugolino condenado a morrer de fome junto com seus filhos e netos. A 
                escultura explora os limites da degradação física e moral.
            </p>
            <p>
                Rodin leva a expressão ao extremo, mostrando um pai em agonia diante 
                da morte dos filhos. A obra questiona os limites da resistência humana 
                e a natureza do amor paternal.
            </p>
            <h4>Elementos Dramáticos:</h4>
            <ul>
                <li>Expressão de desespero absoluto</li>
                <li>Corpos entrelaçados em agonia</li>
                <li>Contraste entre força paterna e fragilidade infantil</li>
                <li>Representação crua da condição humana</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Como Rodin representa o sofrimento extremo? O que esta obra nos ensina sobre os limites da resistência humana?</p>
            </div>
        `
    },
    "sao-joao": {
        title: "São João Batista",
        image: "images/rodin/sao_joao_batista.jpg",
        content: `
            <h3>O Profeta em Movimento</h3>
            <p>
                "São João Batista" marca um momento crucial na carreira de Rodin. A obra 
                demonstra sua capacidade de capturar movimento e energia espiritual. 
                O passo largo e o gesto profético revelam uma tensão latente.
            </p>
            <p>
                Mesmo em aparente serenidade, há uma inquietação. O santo caminha com 
                propósito, carregando uma mensagem urgente. A energia interna é visível 
                em cada músculo, como se algo estivesse à beira de se romper.
            </p>
            <h4>Características Espirituais:</h4>
            <ul>
                <li>Movimento direcionado e proposital</li>
                <li>Expressão de missão divina</li>
                <li>Tensão entre serenidade e urgência</li>
                <li>Corpo como veículo da mensagem</li>
            </ul>
            <div class="reflection-box">
                <h4>💭 Para Refletir</h4>
                <p>Como Rodin representa a espiritualidade através do corpo? O que o movimento desta figura comunica sobre fé e missão?</p>
            </div>
        `
    }
};

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeGallery();
    initializeTimeline();
    initializeModal();
    initializeSmoothScroll();
});

// Navegação
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    // Toggle menu mobile
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Animações de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.timeline-item, .sculpture-card, .influence-card, .concept');
    animateElements.forEach(el => observer.observe(el));
}

// Galeria interativa
function initializeGallery() {
    const sculptureCards = document.querySelectorAll('.sculpture-card');
    
    sculptureCards.forEach(card => {
        // Efeito hover aprimorado
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Click para abrir modal
        const exploreBtn = card.querySelector('.btn-explore');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const sculptureId = card.getAttribute('data-sculpture');
                openSculptureModal(sculptureId);
            });
        }

        // Click no card também abre modal
        card.addEventListener('click', function() {
            const sculptureId = this.getAttribute('data-sculpture');
            openSculptureModal(sculptureId);
        });
    });
}

// Timeline interativa
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Animação sequencial dos itens da timeline
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => timelineObserver.observe(item));

    // Efeito hover nos itens da timeline
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        
        item.addEventListener('mouseenter', function() {
            content.style.transform = 'translateY(-10px) scale(1.02)';
            content.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        });

        item.addEventListener('mouseleave', function() {
            content.style.transform = 'translateY(0) scale(1)';
            content.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
}

// Sistema de Modal
function initializeModal() {
    const modal = document.getElementById('sculpture-modal');
    const closeBtn = document.querySelector('.modal-close');

    // Fechar modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSculptureModal);
    }

    // Fechar modal clicando fora
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeSculptureModal();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeSculptureModal();
        }
    });
}

// Abrir modal da escultura
function openSculptureModal(sculptureId) {
    const modal = document.getElementById('sculpture-modal');
    const modalImage = document.getElementById('modal-sculpture-image');
    const modalTitle = document.getElementById('modal-sculpture-title');
    const modalContent = document.getElementById('modal-sculpture-content');

    const sculptureData = sculpturesData[sculptureId];
    
    if (sculptureData) {
        modalImage.src = sculptureData.image;
        modalImage.alt = sculptureData.title;
        modalTitle.textContent = sculptureData.title;
        modalContent.innerHTML = sculptureData.content;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Animação de entrada
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

// Fechar modal da escultura
function closeSculptureModal() {
    const modal = document.getElementById('sculpture-modal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Scroll suave
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efeitos visuais adicionais
function addVisualEffects() {
    // Parallax effect para hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-sculpture');
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Efeito de typing para o título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            heroTitle.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typeWriter);
            }
        }, 100);
    }
}

// Funcionalidades de acessibilidade
function initializeAccessibility() {
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Alto contraste
    const contrastToggle = document.createElement('button');
    contrastToggle.textContent = 'Alto Contraste';
    contrastToggle.className = 'contrast-toggle';
    contrastToggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1001;
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 12px;
    `;

    contrastToggle.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });

    document.body.appendChild(contrastToggle);
}

// Otimizações de performance
function optimizePerformance() {
    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Debounce para eventos de scroll
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 16); // ~60fps
    };
}

// Inicializar funcionalidades adicionais
document.addEventListener('DOMContentLoaded', function() {
    addVisualEffects();
    initializeAccessibility();
    optimizePerformance();
});

// Exportar funções para uso global
window.RodinDigital = {
    openSculptureModal,
    closeSculptureModal,
    sculpturesData
};

