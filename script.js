// Presentation sections data
const presentationSections = [
    {
        id: 'intro',
        title: 'Introduction',
        timeRange: '2-3',
        content: `
            <h3>Opening</h3>
            <p>Hello, I'm [Your Name]. Today I'll be presenting a full-stack building management application I developed.</p>
            
            <h3>Project Overview</h3>
            <p>This application helps property managers streamline their operations by providing:</p>
            <ul>
                <li>Real-time monitoring of building systems</li>
                <li>Automated maintenance scheduling</li>
                <li>Tenant communication portal</li>
                <li>Analytics dashboard for property performance</li>
            </ul>
            
            <div class="quote">Key Message: "Our solution transforms building management from a reactive to a proactive process."</div>
        `
    },
    {
        id: 'functionality',
        title: 'Application Functionality',
        timeRange: '5',
        content: `
            <h3>Core Features</h3>
            <ul>
                <li>Real-time monitoring dashboard</li>
                <li>Automated maintenance scheduling system</li>
                <li>Tenant portal with communication features</li>
                <li>Analytics and reporting tools</li>
            </ul>

            <h3>Key Workflows</h3>
            <p>1. Building System Monitoring:</p>
            <ul>
                <li>Real-time sensor data collection</li>
                <li>Automated alert system</li>
                <li>Historical data analysis</li>
            </ul>

            <p>2. Maintenance Management:</p>
            <ul>
                <li>Predictive maintenance scheduling</li>
                <li>Work order automation</li>
                <li>Vendor management</li>
            </ul>

            <p>3. Tenant Interaction:</p>
            <ul>
                <li>Service request portal</li>
                <li>Communication system</li>
                <li>Document management</li>
            </ul>

            <div class="quote">Demo Focus: "Let me show you how the system handles a typical maintenance workflow."</div>
        `
    },
    {
        id: 'technical',
        title: 'Technical Overview',
        timeRange: '7-8',
        content: `
            <h3>Architecture Overview</h3>
            <p>The application follows a microservices architecture with:</p>
            <ul>
                <li>Frontend: React.js with TypeScript</li>
                <li>Backend: Node.js microservices</li>
                <li>Database: PostgreSQL and MongoDB</li>
                <li>Real-time: WebSocket implementation</li>
            </ul>

            <h3>Key Technical Features</h3>
            <p>1. Frontend Architecture:</p>
            <ul>
                <li>Component-based design</li>
                <li>Redux for state management</li>
                <li>Material-UI for consistent styling</li>
            </ul>

            <p>2. Backend Services:</p>
            <ul>
                <li>RESTful API design</li>
                <li>Event-driven architecture</li>
                <li>Microservices communication</li>
            </ul>

            <p>3. Data Management:</p>
            <ul>
                <li>Data normalization strategies</li>
                <li>Caching implementation</li>
                <li>Real-time data processing</li>
            </ul>

            <div class="quote">Technical Highlight: "Our event-driven architecture enables real-time updates while maintaining system scalability."</div>
        `
    },
    {
        id: 'challenges',
        title: 'Challenges and Lessons',
        timeRange: '5-7',
        content: `
            <h3>Key Challenges</h3>
            <p>1. Technical Challenges:</p>
            <ul>
                <li>Real-time data synchronization</li>
                <li>System scalability</li>
                <li>Data consistency across services</li>
            </ul>

            <p>2. Solutions Implemented:</p>
            <ul>
                <li>Optimized WebSocket connections</li>
                <li>Implemented caching strategies</li>
                <li>Developed robust error handling</li>
            </ul>

            <h3>Lessons Learned</h3>
            <ul>
                <li>Importance of early architecture decisions</li>
                <li>Value of comprehensive testing</li>
                <li>Benefits of user feedback integration</li>
            </ul>

            <div class="quote">Key Learning: "The biggest challenge was balancing real-time performance with system reliability."</div>
        `
    },
    {
        id: 'improvements',
        title: 'Improvements',
        timeRange: '3-5',
        content: `
            <h3>Future Enhancements</h3>
            <p>1. Technical Improvements:</p>
            <ul>
                <li>Enhanced ML-based predictions</li>
                <li>Mobile app development</li>
                <li>Advanced analytics features</li>
            </ul>

            <p>2. Feature Additions:</p>
            <ul>
                <li>IoT device integration</li>
                <li>Advanced reporting tools</li>
                <li>API marketplace</li>
            </ul>

            <div class="quote">Vision Statement: "Our roadmap focuses on leveraging AI to provide predictive insights."</div>
        `
    },
    {
        id: 'closing',
        title: 'Closing Reflection',
        timeRange: '2-3',
        content: `
            <h3>Project Impact</h3>
            <ul>
                <li>Improved efficiency for property managers</li>
                <li>Enhanced tenant satisfaction</li>
                <li>Reduced operational costs</li>
            </ul>

            <h3>Personal Growth</h3>
            <ul>
                <li>Technical skill development</li>
                <li>Project management experience</li>
                <li>Problem-solving capabilities</li>
            </ul>

            <div class="quote">Closing Message: "This project demonstrates how technology can transform traditional industries."</div>
        `
    },
    {
        id: 'qa',
        title: 'Q&A Preparation',
        timeRange: 'N/A',
        content: `
            <h3>Technical Questions</h3>
            <p>1. Architecture Decisions:</p>
            <ul>
                <li>Why choose microservices?</li>
                <li>Database selection criteria</li>
                <li>Scaling considerations</li>
            </ul>

            <p>2. Implementation Details:</p>
            <ul>
                <li>Real-time data handling</li>
                <li>Security measures</li>
                <li>Testing strategy</li>
            </ul>

            <p>3. Project Management:</p>
            <ul>
                <li>Timeline and planning</li>
                <li>Team collaboration</li>
                <li>Challenge resolution</li>
            </ul>

            <div class="quote">Remember: Stay confident, be honest about limitations, and focus on learning experiences.</div>
        `
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
let currentSection = null;
let timerInterval = null;
let startTime = null;
let isRunning = false;

// Initialize the application
function init() {
    renderSections();
    setupEventListeners();
    updateControls();
}

// Render section navigation
function renderSections() {
    sectionList.innerHTML = presentationSections.map(section => `
        <div class="section-item" 
             data-section-id="${section.id}"
             role="tab"
             aria-selected="${currentSection?.id === section.id}"
             tabindex="0">
            ${section.title}
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Section selection
    sectionList.addEventListener('click', handleSectionClick);
    sectionList.addEventListener('keydown', handleSectionKeydown);

    // Timer controls
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    // Touch events for mobile
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
}

// Touch handling
let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            // Swipe left - next section
            navigateToNextSection();
        } else {
            // Swipe right - previous section
            navigateToPreviousSection();
        }
    }

    xDown = null;
    yDown = null;
}

// Section navigation
function navigateToNextSection() {
    if (!currentSection) return;
    const currentIndex = presentationSections.findIndex(section => section.id === currentSection.id);
    if (currentIndex < presentationSections.length - 1) {
        selectSection(presentationSections[currentIndex + 1]);
    }
}

function navigateToPreviousSection() {
    if (!currentSection) return;
    const currentIndex = presentationSections.findIndex(section => section.id === currentSection.id);
    if (currentIndex > 0) {
        selectSection(presentationSections[currentIndex - 1]);
    }
}

// Handle section selection via keyboard
function handleSectionKeydown(event) {
    if (event.target.classList.contains('section-item')) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const sectionId = event.target.dataset.sectionId;
            const section = presentationSections.find(s => s.id === sectionId);
            selectSection(section);
        }
    }
}

// Handle section selection via click
function handleSectionClick(event) {
    const sectionItem = event.target.closest('.section-item');
    if (sectionItem) {
        const sectionId = sectionItem.dataset.sectionId;
        const section = presentationSections.find(s => s.id === sectionId);
        selectSection(section);
    }
}

// Select and display section
function selectSection(section) {
    currentSection = section;
    updateUI();
    
    // Update section items' active state
    document.querySelectorAll('.section-item').forEach(item => {
        item.classList.toggle('active', item.dataset.sectionId === section.id);
        item.setAttribute('aria-selected', item.dataset.sectionId === section.id);
    });
}

// Update UI elements
function updateUI() {
    if (currentSection) {
        currentSectionTitle.textContent = currentSection.title;
        recommendedTime.textContent = currentSection.timeRange + ' minutes';
        contentDisplay.innerHTML = currentSection.content;
    } else {
        currentSectionTitle.textContent = 'Select a section to begin';
        recommendedTime.textContent = '-';
        contentDisplay.innerHTML = '';
    }
    updateControls();
}

// Timer functions
function startTimer() {
    if (!currentSection || isRunning) return;
    
    isRunning = true;
    startTime = Date.now();
    updateControls();
    
    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;
        
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Visual feedback based on time ranges
        if (currentSection.timeRange !== 'N/A') {
            const [minTime, maxTime] = currentSection.timeRange.split('-').map(t => parseInt(t, 10));
            const maxSeconds = (maxTime || minTime) * 60;
            
            if (elapsedTime >= maxSeconds) {
                timerDisplay.style.color = 'var(--danger-color)';
            } else if (elapsedTime >= maxSeconds * 0.8) {
                timerDisplay.style.color = 'var(--neutral-color)';
            }
        }
    }, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    
    clearInterval(timerInterval);
    isRunning = false;
    updateControls();
}

function resetTimer() {
    stopTimer();
    timerDisplay.textContent = '00:00';
    timerDisplay.style.color = 'var(--secondary-color)';
    updateControls();
}

// Update control buttons state
function updateControls() {
    startButton.disabled = !currentSection || isRunning;
    stopButton.disabled = !isRunning;
    resetButton.disabled = !currentSection || (timerDisplay.textContent === '00:00');
}

// Initialize the application
init();

const startButtonQuiz = document.getElementById('start-btn');
const nextButtonQuiz = document.getElementById('next-btn');
const questionContainerQuiz = document.getElementById('question-container');
const questionTextQuiz = document.getElementById('question-text');
const answerButtonsElementQuiz = document.getElementById('answer-buttons');
const currentQuestionSpanQuiz = document.getElementById('current');
const totalQuestionsSpanQuiz = document.getElementById('total');
const scoreSpanQuiz = document.getElementById('score');

let shuffledQuestionsQuiz, currentQuestionIndexQuiz, scoreQuiz;

startButtonQuiz.addEventListener('click', startQuiz);
nextButtonQuiz.addEventListener('click', () => {
    currentQuestionIndexQuiz++;
    setNextQuestion();
});

function startQuiz() {
    startButtonQuiz.classList.add('hide');
    shuffledQuestionsQuiz = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndexQuiz = 0;
    scoreQuiz = 0;
    scoreSpanQuiz.textContent = scoreQuiz;
    questionContainerQuiz.classList.remove('hide');
    totalQuestionsSpanQuiz.textContent = questions.length;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestionsQuiz[currentQuestionIndexQuiz]);
    currentQuestionSpanQuiz.textContent = currentQuestionIndexQuiz + 1;
}

function showQuestion(question) {
    questionTextQuiz.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElementQuiz.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButtonQuiz.classList.add('hide');
    while (answerButtonsElementQuiz.firstChild) {
        answerButtonsElementQuiz.removeChild(answerButtonsElementQuiz.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    if (correct) scoreQuiz++;
    scoreSpanQuiz.textContent = scoreQuiz;

    Array.from(answerButtonsElementQuiz.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffledQuestionsQuiz.length > currentQuestionIndexQuiz + 1) {
        nextButtonQuiz.classList.remove('hide');
    } else {
        startButtonQuiz.textContent = 'Restart Quiz';
        startButtonQuiz.classList.remove('hide');
    }

    // Disable all buttons after selection
    Array.from(answerButtonsElementQuiz.children).forEach(button => {
        button.disabled = true;
    });
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
