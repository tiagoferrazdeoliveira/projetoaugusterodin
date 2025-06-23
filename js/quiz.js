// Sistema de Quiz Interativo
class QuizSystem {
    constructor() {
        this.quizzes = {};
        this.userAnswers = {};
        this.init();
    }

    init() {
        this.loadQuizData();
        this.bindEvents();
    }

    loadQuizData() {
        // Os dados dos quizzes já estão em sculpturesData
        // Este método pode ser expandido para carregar dados externos se necessário
        console.log('Sistema de Quiz inicializado');
    }

    bindEvents() {
        // Eventos já são tratados na classe Gallery
        // Este método pode ser usado para funcionalidades adicionais do quiz
    }

    // Método para criar quiz personalizado
    createCustomQuiz(questions, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let quizHTML = '<div class="custom-quiz">';
        
        questions.forEach((question, index) => {
            quizHTML += `
                <div class="quiz-question" data-question="${index}">
                    <h4>Pergunta ${index + 1}: ${question.question}</h4>
                    <div class="quiz-options">
                        ${question.options.map((option, optionIndex) => `
                            <div class="quiz-option" data-option="${optionIndex}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                    <div class="quiz-feedback" style="display: none;"></div>
                </div>
            `;
        });

        quizHTML += `
            <button class="quiz-submit" onclick="quizSystem.submitCustomQuiz('${containerId}')">
                Verificar Respostas
            </button>
            <div class="quiz-results" style="display: none; margin-top: 20px;"></div>
        </div>`;

        container.innerHTML = quizHTML;

        // Bind eventos
        container.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const question = e.target.closest('.quiz-question');
                question.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                e.target.classList.add('selected');
            });
        });
    }

    submitCustomQuiz(containerId) {
        const container = document.getElementById(containerId);
        const questions = container.querySelectorAll('.quiz-question');
        let score = 0;
        let totalQuestions = questions.length;

        questions.forEach((questionEl, index) => {
            const selectedOption = questionEl.querySelector('.quiz-option.selected');
            const feedback = questionEl.querySelector('.quiz-feedback');

            if (selectedOption) {
                const selectedIndex = parseInt(selectedOption.dataset.option);
                // Assumindo que a resposta correta é sempre a primeira opção para quizzes customizados
                // Isso pode ser modificado conforme necessário
                const isCorrect = selectedIndex === 0;

                if (isCorrect) {
                    score++;
                    selectedOption.classList.add('correct');
                } else {
                    selectedOption.classList.add('incorrect');
                }

                feedback.innerHTML = `<strong>Feedback:</strong> Resposta ${isCorrect ? 'correta' : 'incorreta'}!`;
                feedback.style.display = 'block';
            }
        });

        // Mostrar resultados
        const resultsEl = container.querySelector('.quiz-results');
        const percentage = Math.round((score / totalQuestions) * 100);
        resultsEl.innerHTML = `
            <h4>Resultado do Quiz</h4>
            <p>Você acertou <strong>${score} de ${totalQuestions}</strong> perguntas (${percentage}%)</p>
        `;
        resultsEl.style.display = 'block';

        // Desabilitar botão
        container.querySelector('.quiz-submit').disabled = true;
        container.querySelector('.quiz-submit').textContent = 'Quiz Concluído';
    }

    // Método para gerar estatísticas de quiz
    getQuizStatistics() {
        const progress = window.progressTracker?.getProgress();
        if (!progress) return null;

        const stats = {
            totalQuizzes: Object.keys(sculpturesData).length,
            completedQuizzes: progress.quizzesCompleted.length,
            averageScore: 0,
            bestScore: 0,
            worstScore: 100,
            totalQuestions: 0,
            correctAnswers: 0
        };

        if (progress.quizzesCompleted.length > 0) {
            const scores = progress.quizzesCompleted.map(q => q.score);
            const totalPossible = progress.quizzesCompleted.length * 3; // 3 perguntas por quiz
            
            stats.totalQuestions = totalPossible;
            stats.correctAnswers = scores.reduce((sum, score) => sum + score, 0);
            stats.averageScore = Math.round((stats.correctAnswers / stats.totalQuestions) * 100);
            stats.bestScore = Math.max(...scores.map(score => Math.round((score / 3) * 100)));
            stats.worstScore = Math.min(...scores.map(score => Math.round((score / 3) * 100)));
        }

        return stats;
    }

    // Método para exibir estatísticas
    displayStatistics(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const stats = this.getQuizStatistics();
        if (!stats) {
            container.innerHTML = '<p>Nenhuma estatística disponível ainda.</p>';
            return;
        }

        container.innerHTML = `
            <div class="quiz-statistics">
                <h3>Suas Estatísticas de Quiz</h3>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">${stats.completedQuizzes}</div>
                        <div class="stat-label">Quizzes Completados</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${stats.totalQuizzes}</div>
                        <div class="stat-label">Total de Quizzes</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${stats.averageScore}%</div>
                        <div class="stat-label">Pontuação Média</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${stats.bestScore}%</div>
                        <div class="stat-label">Melhor Pontuação</div>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(stats.completedQuizzes / stats.totalQuizzes) * 100}%"></div>
                </div>
                <p class="progress-text">
                    Progresso: ${stats.completedQuizzes} de ${stats.totalQuizzes} quizzes completados
                </p>
            </div>
        `;
    }

    // Método para resetar progresso de quiz
    resetQuizProgress() {
        if (confirm('Tem certeza que deseja resetar todo o progresso dos quizzes?')) {
            window.progressTracker?.resetProgress();
            Utils.showNotification('Progresso dos quizzes resetado!', 'info');
        }
    }

    // Método para exportar resultados
    exportQuizResults() {
        const stats = this.getQuizStatistics();
        const progress = window.progressTracker?.getProgress();
        
        if (!stats || !progress) {
            Utils.showNotification('Nenhum dado para exportar', 'warning');
            return;
        }

        const exportData = {
            statistics: stats,
            detailedResults: progress.quizzesCompleted,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: 'application/json'
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `rodin-quiz-resultados-${Utils.formatDate(new Date())}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        Utils.showNotification('Resultados exportados com sucesso!', 'success');
    }
}

// Funcionalidades de gamificação
class Gamification {
    constructor() {
        this.achievements = {
            'primeiro-quiz': {
                name: 'Primeiro Passo',
                description: 'Complete seu primeiro quiz',
                icon: '🎯',
                unlocked: false
            },
            'metade-quizzes': {
                name: 'Meio Caminho',
                description: 'Complete metade dos quizzes disponíveis',
                icon: '🏃‍♂️',
                unlocked: false
            },
            'todos-quizzes': {
                name: 'Conhecedor de Rodin',
                description: 'Complete todos os quizzes',
                icon: '🏆',
                unlocked: false
            },
            'pontuacao-perfeita': {
                name: 'Perfeccionista',
                description: 'Obtenha 100% em um quiz',
                icon: '⭐',
                unlocked: false
            },
            'explorador': {
                name: 'Explorador',
                description: 'Visite todas as seções do livro',
                icon: '🗺️',
                unlocked: false
            }
        };
        
        this.loadAchievements();
        this.checkAchievements();
    }

    loadAchievements() {
        const saved = Utils.loadFromLocalStorage('rodin-achievements', {});
        Object.keys(saved).forEach(key => {
            if (this.achievements[key]) {
                this.achievements[key].unlocked = saved[key].unlocked;
            }
        });
    }

    saveAchievements() {
        Utils.saveToLocalStorage('rodin-achievements', this.achievements);
    }

    checkAchievements() {
        const progress = window.progressTracker?.getProgress();
        if (!progress) return;

        // Primeiro quiz
        if (progress.quizzesCompleted.length >= 1 && !this.achievements['primeiro-quiz'].unlocked) {
            this.unlockAchievement('primeiro-quiz');
        }

        // Metade dos quizzes
        const totalQuizzes = Object.keys(sculpturesData).length;
        if (progress.quizzesCompleted.length >= Math.ceil(totalQuizzes / 2) && !this.achievements['metade-quizzes'].unlocked) {
            this.unlockAchievement('metade-quizzes');
        }

        // Todos os quizzes
        if (progress.quizzesCompleted.length >= totalQuizzes && !this.achievements['todos-quizzes'].unlocked) {
            this.unlockAchievement('todos-quizzes');
        }

        // Pontuação perfeita
        const perfectScores = progress.quizzesCompleted.filter(q => q.score === 3);
        if (perfectScores.length >= 1 && !this.achievements['pontuacao-perfeita'].unlocked) {
            this.unlockAchievement('pontuacao-perfeita');
        }

        // Explorador
        const totalSections = 6; // inicio, historia, influencia, linha-tempo, galeria, glossario
        if (progress.sectionsVisited.length >= totalSections && !this.achievements['explorador'].unlocked) {
            this.unlockAchievement('explorador');
        }
    }

    unlockAchievement(achievementId) {
        const achievement = this.achievements[achievementId];
        if (!achievement || achievement.unlocked) return;

        achievement.unlocked = true;
        this.saveAchievements();

        // Mostrar notificação de conquista
        this.showAchievementNotification(achievement);
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-text">
                    <div class="achievement-title">Conquista Desbloqueada!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-description">${achievement.description}</div>
                </div>
            </div>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #f4d03f, #f39c12);
            color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            z-index: 3000;
            animation: achievementSlideIn 0.5s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'achievementSlideOut 0.5s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 500);
        }, 4000);
    }

    displayAchievements(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let achievementsHTML = '<div class="achievements-grid">';
        
        Object.entries(this.achievements).forEach(([id, achievement]) => {
            achievementsHTML += `
                <div class="achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}">
                    <div class="achievement-icon">${achievement.icon}</div>
                    <div class="achievement-info">
                        <div class="achievement-name">${achievement.name}</div>
                        <div class="achievement-description">${achievement.description}</div>
                    </div>
                    ${achievement.unlocked ? '<div class="achievement-status">✓</div>' : '<div class="achievement-status">🔒</div>'}
                </div>
            `;
        });

        achievementsHTML += '</div>';
        container.innerHTML = achievementsHTML;
    }
}

// Inicializar sistemas de quiz e gamificação
document.addEventListener('DOMContentLoaded', () => {
    window.quizSystem = new QuizSystem();
    window.gamification = new Gamification();

    // Adicionar estilos para conquistas
    const achievementStyles = `
        @keyframes achievementSlideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes achievementSlideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }

        .achievement-content {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .achievement-icon {
            font-size: 2rem;
        }

        .achievement-title {
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 5px;
        }

        .achievement-name {
            font-weight: 600;
            margin-bottom: 3px;
        }

        .achievement-description {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
        }

        .achievement-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            border-radius: 10px;
            border: 2px solid #ddd;
            transition: all 0.3s ease;
        }

        .achievement-item.unlocked {
            background: linear-gradient(135deg, #f4d03f, #f39c12);
            color: white;
            border-color: #f39c12;
        }

        .achievement-item.locked {
            background: #f8f9fa;
            color: #6c757d;
            opacity: 0.7;
        }

        .achievement-info {
            flex: 1;
        }

        .achievement-status {
            font-size: 1.5rem;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .stat-item {
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: var(--accent-yellow);
            margin-bottom: 5px;
        }

        .stat-label {
            font-size: 0.9rem;
            color: var(--text-gray);
        }

        .progress-bar {
            width: 100%;
            height: 20px;
            background: #e9ecef;
            border-radius: 10px;
            overflow: hidden;
            margin: 20px 0 10px;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--accent-yellow), #f39c12);
            transition: width 0.5s ease;
        }

        .progress-text {
            text-align: center;
            color: var(--text-gray);
            font-size: 0.9rem;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = achievementStyles;
    document.head.appendChild(styleSheet);

    // Verificar conquistas periodicamente
    setInterval(() => {
        window.gamification?.checkAchievements();
    }, 5000);
});

