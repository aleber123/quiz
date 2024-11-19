// Learning content data
const learningContent = [
    {
        id: 'intro',
        title: 'Introduction',
        timeRange: '2-3',
        keyPoints: [
            {
                question: "What is your background?",
                answer: "I live in Nacka with my sambo and two kids (Harry and Alice), graduated from Borås University in software frontend development, and currently work at CIBT as a visa consultant."
            },
            {
                question: "How did you learn about this position?",
                answer: "Through my brother Jacob who works here as a backend developer. He shared insights about the team, projects, and company culture."
            },
            {
                question: "What tools did you use for the assignment?",
                answer: "This was my first full-stack application. I used ChatGPT as a learning tool to understand backend concepts and troubleshoot issues, while ensuring not to rely on it blindly."
            }
        ],
        summary: "Key Points to Remember:\n- Personal: Live in Nacka, family with two kids\n- Education: Borås University, frontend development\n- Current role: CIBT visa consultant\n- Connection: Brother Jacob works here\n- Tools: ChatGPT for learning"
    },
    {
        id: 'functionality',
        title: 'Application Functionality',
        timeRange: '5',
        keyPoints: [
            {
                question: "What are the core features of the application?",
                answer: "1. Add a Building: Input building details with validation\n2. View All Buildings: Dynamic interface\n3. Edit a Building: Real-time updates\n4. Delete a Building: System removal\n5. Temperature Control: Adjust and monitor"
            },
            {
                question: "Give a practical use case example",
                answer: "A facility manager could use the app to monitor building conditions, adjust temperatures for energy optimization, and deactivate unused buildings."
            },
            {
                question: "What makes your application user-friendly?",
                answer: "- Intuitive interface for building management\n- Real-time monitoring capabilities\n- Streamlined temperature control\n- Easy-to-use CRUD operations"
            }
        ],
        summary: "Remember:\n- 5 core features (CRUD + Temperature)\n- Real-world usage by facility managers\n- Focus on user-friendly interface\n- Emphasis on practical utility"
    },
    {
        id: 'technical',
        title: 'Technical Overview',
        timeRange: '7-8',
        keyPoints: [
            {
                question: "Describe the application architecture",
                answer: "Three main components:\n1. Frontend: React/TypeScript\n2. Backend: Node.js/Express\n3. Database: MySQL\nCommunication via RESTful API calls"
            },
            {
                question: "Why did you choose these technologies?",
                answer: "- REST API: Simple, well-supported, aligned with CRUD\n- MySQL: Reliable for structured data\n- Raw CSS: Direct control, considering frameworks for scaling"
            },
            {
                question: "What are the technical highlights?",
                answer: "- Clean architecture separation\n- RESTful API implementation\n- Structured database design\n- Frontend-backend integration"
            }
        ],
        summary: "Technical Stack:\n- Frontend: React/TypeScript\n- Backend: Node.js/Express\n- Database: MySQL\n- API: REST\n- Styling: Raw CSS"
    },
    {
        id: 'challenges',
        title: 'Challenges and Lessons',
        timeRange: '5-7',
        keyPoints: [
            {
                question: "What were your main challenges?",
                answer: "1. First backend project experience\n2. Implementing robust error handling\n3. Using ChatGPT effectively as a learning tool"
            },
            {
                question: "What were the key lessons learned?",
                answer: "1. Designing and implementing REST APIs\n2. Integrating frontend and backend systems\n3. Managing relational databases\n4. Using AI tools responsibly"
            },
            {
                question: "How did you overcome these challenges?",
                answer: "- Systematic learning approach\n- Leveraging ChatGPT wisely\n- Testing and iteration\n- Research and documentation"
            }
        ],
        summary: "Remember:\n- First backend experience\n- Learning curve with new technologies\n- Importance of error handling\n- Responsible AI tool usage"
    },
    {
        id: 'improvements',
        title: 'Improvements',
        timeRange: '3-5',
        keyPoints: [
            {
                question: "What technical improvements would you make?",
                answer: "1. JWT authentication for security\n2. Environment variables configuration\n3. Database migrations\n4. Docker containerization"
            },
            {
                question: "What future enhancements are planned?",
                answer: "1. Robust form validation\n2. Improved error handling\n3. Mobile-responsive UI\n4. Swagger API documentation"
            },
            {
                question: "Why are these improvements important?",
                answer: "- Enhanced security\n- Better development workflow\n- Improved user experience\n- Better maintainability"
            }
        ],
        summary: "Focus Areas:\n- Security improvements\n- Development workflow\n- User experience\n- Documentation"
    },
    {
        id: 'closing',
        title: 'Closing Reflection',
        timeRange: '2-3',
        keyPoints: [
            {
                question: "What are your main accomplishments?",
                answer: "Successfully delivered a functional full-stack application, learning backend development from scratch while meeting all requirements."
            },
            {
                question: "How have you grown through this project?",
                answer: "Gained confidence in learning new technologies, leveraged tools effectively, and developed full-stack capabilities."
            },
            {
                question: "What makes you a good fit for the role?",
                answer: "- Demonstrated ability to learn quickly\n- Full-stack development experience\n- Problem-solving capabilities\n- Enthusiasm for growth"
            }
        ],
        summary: "Key Messages:\n- Successful project delivery\n- Significant learning growth\n- Full-stack capabilities\n- Ready for challenges"
    },
    {
        id: 'qa',
        title: 'Q&A Preparation',
        timeRange: 'N/A',
        keyPoints: [
            {
                question: "How would you handle scalability?",
                answer: "- Optimize database queries\n- Implement caching strategies\n- Use load balancing\n- Monitor performance metrics"
            },
            {
                question: "What are the risks of using ChatGPT?",
                answer: "Main risk is over-reliance, mitigated by:\n- Critical evaluation of suggestions\n- Understanding the code\n- Testing thoroughly\n- Using it as a learning tool"
            },
            {
                question: "What unique value can you bring?",
                answer: "- Fresh perspective on development\n- Quick learning ability\n- Connection to sustainable construction (through sambo)\n- Enthusiasm for growth"
            }
        ],
        summary: "Prepare for:\n- Technical questions\n- Tool usage justification\n- Personal value proposition\n- Industry knowledge"
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
let currentQuestionIndex = 0;
let isShowingAnswer = false;
let isRunning = false;

// Initialize the application
function init() {
    renderSections();
    setupEventListeners();
    updateControls();
}

// Render section navigation
function renderSections() {
    sectionList.innerHTML = learningContent.map(section => `
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
    sectionList.addEventListener('click', handleSectionClick);
    sectionList.addEventListener('keydown', handleSectionKeydown);
    
    startButton.addEventListener('click', startLearning);
    stopButton.addEventListener('click', stopLearning);
    resetButton.addEventListener('click', resetLearning);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ' && currentSection) {
            e.preventDefault();
            toggleAnswer();
        }
    });
}

function startLearning() {
    if (!currentSection || isRunning) return;
    isRunning = true;
    currentQuestionIndex = 0;
    isShowingAnswer = false;
    updateLearningDisplay();
    updateControls();
}

function stopLearning() {
    if (!isRunning) return;
    isRunning = false;
    updateControls();
}

function resetLearning() {
    stopLearning();
    currentQuestionIndex = 0;
    isShowingAnswer = false;
    updateLearningDisplay();
    updateControls();
}

function toggleAnswer() {
    if (!isRunning) return;
    isShowingAnswer = !isShowingAnswer;
    updateLearningDisplay();
}

function nextQuestion() {
    if (!isRunning) return;
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentSection.keyPoints.length) {
        currentQuestionIndex = 0;
    }
    isShowingAnswer = false;
    updateLearningDisplay();
}

function previousQuestion() {
    if (!isRunning) return;
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = currentSection.keyPoints.length - 1;
    }
    isShowingAnswer = false;
    updateLearningDisplay();
}

// Handle section selection
function handleSectionClick(event) {
    const sectionItem = event.target.closest('.section-item');
    if (sectionItem) {
        const sectionId = sectionItem.dataset.sectionId;
        const section = learningContent.find(s => s.id === sectionId);
        selectSection(section);
    }
}

function handleSectionKeydown(event) {
    if (event.target.classList.contains('section-item')) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const sectionId = event.target.dataset.sectionId;
            const section = learningContent.find(s => s.id === sectionId);
            selectSection(section);
        }
    }
}

function selectSection(section) {
    currentSection = section;
    currentQuestionIndex = 0;
    isShowingAnswer = false;
    updateUI();
    
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
        updateLearningDisplay();
    } else {
        currentSectionTitle.textContent = 'Select a section to begin';
        recommendedTime.textContent = '-';
        contentDisplay.innerHTML = '';
    }
    updateControls();
}

function updateLearningDisplay() {
    if (!currentSection || !isRunning) {
        contentDisplay.innerHTML = currentSection ? currentSection.summary : '';
        return;
    }

    const currentPoint = currentSection.keyPoints[currentQuestionIndex];
    const progress = `Question ${currentQuestionIndex + 1} of ${currentSection.keyPoints.length}`;
    
    contentDisplay.innerHTML = `
        <div class="learning-card">
            <div class="progress">${progress}</div>
            <div class="question">${currentPoint.question}</div>
            ${isShowingAnswer ? `<div class="answer">${currentPoint.answer}</div>` : '<div class="hint">Press SPACE to show answer</div>'}
            <div class="controls">
                <button onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
                <button onclick="toggleAnswer()">${isShowingAnswer ? 'Hide Answer' : 'Show Answer'}</button>
                <button onclick="nextQuestion()">Next</button>
            </div>
        </div>
    `;
}

// Update control buttons state
function updateControls() {
    startButton.disabled = !currentSection || isRunning;
    stopButton.disabled = !isRunning;
    resetButton.disabled = !currentSection || (!isRunning && currentQuestionIndex === 0);
    
    startButton.textContent = 'Start Learning';
    stopButton.textContent = 'Stop';
    resetButton.textContent = 'Reset';
}

// Initialize the application
init();
