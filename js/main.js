// Sistema principal de navegação e funcionalidades gerais
class RodinApp {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupSectionObserver();
        this.initializeModals();
        this.setupTimelineToggle();
    }

    // Configura o clique nos links para rolar suavemente até a seção
    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        
        document.querySelector('.logo-link')?.addEventListener('click', this.handleScrollLink);
        document.querySelector('.btn-primary')?.addEventListener('click', this.handleScrollLink);
    }
    
    handleScrollLink = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Configura o observador que atualiza o link ativo conforme a rolagem
    setupSectionObserver() {
        const options = {
            root: null,
            rootMargin: `-${this.header.offsetHeight}px 0px -50% 0px`,
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    this.updateActiveLink(sectionId);
                }
            });
        }, options);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    updateActiveLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Gerencia o fechamento de todos os modais
    initializeModals() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeAllModals();
                }
            });
            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeAllModals());
            }
        });
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }

    // Configura o botão de expandir/retrair da linha do tempo
    setupTimelineToggle() {
        if (window.innerWidth > 1024) {
            const timelineSection = document.querySelector('#linha-tempo .container');
            const timelineContainer = timelineSection.querySelector('.timeline-container');
            
            const btn = document.createElement('button');
            btn.className = 'timeline-toggle-btn';
            btn.textContent = 'Mostrar Linha do Tempo';
            timelineSection.insertBefore(btn, timelineContainer);

            timelineContainer.style.maxHeight = '0';
            timelineContainer.style.opacity = '0';
            timelineContainer.style.pointerEvents = 'none';
            let expanded = false;

            btn.addEventListener('click', () => {
                expanded = !expanded;
                if (expanded) {
                    timelineContainer.style.maxHeight = timelineContainer.scrollHeight + 'px';
                    timelineContainer.style.opacity = '1';
                    timelineContainer.style.pointerEvents = 'auto';
                    btn.textContent = 'Ocultar Linha do Tempo';
                } else {
                    timelineContainer.style.maxHeight = '0';
                    timelineContainer.style.opacity = '0';
                    timelineContainer.style.pointerEvents = 'none';
                    btn.textContent = 'Mostrar Linha do Tempo';
                }
            });
        }
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    window.rodinApp = new RodinApp();
    console.log('🎨 Livro Digital de Rodin (One-Page) inicializado com sucesso!');
});