// Quiz questions data
const quizQuestions = [
    {
        question: "What is the main purpose of a building management system?",
        options: [
            "To manage employee schedules",
            "To control and monitor building systems like HVAC and security",
            "To handle building rent payments",
            "To organize building maintenance schedules"
        ],
        correctAnswer: 1,
        explanation: "A building management system primarily controls and monitors building systems like HVAC, lighting, security, and other critical infrastructure."
    },
    {
        question: "Which database is used in the building management application?",
        options: [
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "SQLite"
        ],
        correctAnswer: 2,
        explanation: "The application uses MySQL as its database system for reliable structured data storage."
    },
    {
        question: "What is the frontend framework used in the application?",
        options: [
            "Angular",
            "Vue.js",
            "React",
            "Svelte"
        ],
        correctAnswer: 2,
        explanation: "React with TypeScript is used as the frontend framework for building the user interface."
    },
    {
        question: "Which of these is NOT a core feature of the building management system?",
        options: [
            "Adding new buildings",
            "Employee payroll management",
            "Temperature control",
            "Editing building details"
        ],
        correctAnswer: 1,
        explanation: "Employee payroll management is not a feature of the system. The core features are CRUD operations for buildings and temperature control."
    },
    {
        question: "What type of API architecture is used in the application?",
        options: [
            "GraphQL",
            "SOAP",
            "gRPC",
            "REST"
        ],
        correctAnswer: 3,
        explanation: "The application uses a RESTful API architecture for communication between frontend and backend."
    },
    {
        question: "What is the main challenge faced during development?",
        options: [
            "First experience with backend development",
            "Complex UI design",
            "Database optimization",
            "Team coordination"
        ],
        correctAnswer: 0,
        explanation: "The main challenge was this being the first backend development experience, requiring learning new concepts and technologies."
    },
    {
        question: "Which security improvement is planned for the application?",
        options: [
            "Biometric authentication",
            "JWT authentication",
            "OAuth2",
            "SAML"
        ],
        correctAnswer: 1,
        explanation: "JWT (JSON Web Token) authentication is planned as a security improvement for the application."
    },
    {
        question: "What tool was used to assist in learning backend development?",
        options: [
            "Stack Overflow",
            "YouTube tutorials",
            "ChatGPT",
            "Online courses"
        ],
        correctAnswer: 2,
        explanation: "ChatGPT was used as a learning tool to understand backend concepts and troubleshoot issues."
    },
    {
        question: "Which of these is a planned future enhancement?",
        options: [
            "Mobile-responsive UI",
            "Blockchain integration",
            "AI-powered predictions",
            "Virtual reality interface"
        ],
        correctAnswer: 0,
        explanation: "A mobile-responsive UI is one of the planned future enhancements for better accessibility."
    },
    {
        question: "What is the backend framework used in the application?",
        options: [
            "Django",
            "Flask",
            "Express.js",
            "Spring Boot"
        ],
        correctAnswer: 2,
        explanation: "Express.js with Node.js is used as the backend framework for the application."
    }
];

// DOM Elements
const sectionList = document.getElementById('sectionList');
const contentDisplay = document.getElementById('contentDisplay');
const currentSectionTitle = document.getElementById('currentSectionTitle');
const recommendedTime = document.getElementById('recommendedTime');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startPractice');
const stopButton = document.getElementById('stopPractice');
const resetButton = document.getElementById('resetPractice');

// State
let currentQuestionIndex = 0;
let score = 0;
let isRunning = false;
let selectedAnswer = null;
let answeredQuestions = new Set();

// Initialize the application
function init() {
    setupEventListeners();
    updateUI();
}

// Setup event listeners
function setupEventListeners() {
    startButton.addEventListener('click', startQuiz);
    stopButton.addEventListener('click', stopQuiz);
    resetButton.addEventListener('click', resetQuiz);
}

function startQuiz() {
    if (isRunning) return;
    isRunning = true;
    score = 0;
    currentQuestionIndex = 0;
    answeredQuestions.clear();
    updateUI();
    updateControls();
}

function stopQuiz() {
    if (!isRunning) return;
    isRunning = false;
    showResults();
    updateControls();
}

function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    answeredQuestions.clear();
    updateUI();
    updateControls();
}

function nextQuestion() {
    if (!isRunning) return;
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
        stopQuiz();
        return;
    }
    selectedAnswer = null;
    updateUI();
}

function checkAnswer(selectedIndex) {
    if (!isRunning || answeredQuestions.has(currentQuestionIndex)) return;
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    selectedAnswer = selectedIndex;
    
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }
    
    answeredQuestions.add(currentQuestionIndex);
    updateUI();
}

function showResults() {
    const percentage = (score / quizQuestions.length) * 100;
    contentDisplay.innerHTML = `
        <div class="results">
            <h2>Quiz Complete!</h2>
            <p>Your score: ${score} out of ${quizQuestions.length} (${percentage.toFixed(1)}%)</p>
            <button onclick="resetQuiz()">Try Again</button>
        </div>
    `;
}

// Update UI elements
function updateUI() {
    if (!isRunning) {
        contentDisplay.innerHTML = '<div class="start-message">Click "Start Quiz" to begin!</div>';
        currentSectionTitle.textContent = 'Building Management Quiz';
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isAnswered = answeredQuestions.has(currentQuestionIndex);
    
    contentDisplay.innerHTML = `
        <div class="quiz-container">
            <div class="progress">Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</div>
            <div class="question">${currentQuestion.question}</div>
            <div class="options">
                ${currentQuestion.options.map((option, index) => `
                    <button 
                        onclick="checkAnswer(${index})"
                        class="option-button ${isAnswered ? (index === currentQuestion.correctAnswer ? 'correct' : (index === selectedAnswer ? 'incorrect' : '')) : ''}"
                        ${isAnswered ? 'disabled' : ''}
                    >
                        ${option}
                    </button>
                `).join('')}
            </div>
            ${isAnswered ? `
                <div class="explanation">
                    <p>${currentQuestion.explanation}</p>
                    ${currentQuestionIndex < quizQuestions.length - 1 ? 
                        `<button onclick="nextQuestion()">Next Question</button>` : 
                        `<button onclick="stopQuiz()">Show Results</button>`}
                </div>
            ` : ''}
        </div>
    `;
}

// Update control buttons state
function updateControls() {
    startButton.disabled = isRunning;
    stopButton.disabled = !isRunning;
    resetButton.disabled = !isRunning && currentQuestionIndex === 0;
}

// Initialize the application
init();
