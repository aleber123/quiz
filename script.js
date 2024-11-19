const questions = [
    // ... (rest of the questions array remains the same)
];

const presentationContent = {
    introduction: {
        title: "Introduction (2-3 Minutes)",
        content: [
            {
                type: "section",
                title: "Personal Introduction",
                text: "Hi, I'm Alexander. I live in Nacka with my sambo and our two kids, Harry and Alice. I recently graduated from Borås University, where I studied software frontend development. I currently work at CIBT as a visa and legalization consultant, but I'm eager to transition into a career as a developer."
            },
            {
                type: "section",
                title: "Connection to the Company",
                text: "My brother, Jacob, who works here as a backend developer, encouraged me to apply for this role. He shared a lot about the team, the projects you work on, and the company culture, which made me excited to apply and showcase my skills."
            },
            {
                type: "section",
                title: "ChatGPT Usage",
                text: "This assignment was my first experience building a full-stack application, and it required me to step outside my comfort zone, especially in backend development. To help me through the process, I used ChatGPT as a learning tool."
            },
            {
                type: "quote",
                title: "Key Points",
                items: [
                    "Pros: ChatGPT helped understand backend concepts and troubleshoot issues",
                    "Cons: Ensuring not to rely on it blindly, reviewing and understanding solutions",
                    "Project Overview: Full-stack building management application",
                    "Technologies: React, TypeScript, MySQL, REST API"
                ]
            }
        ],
        timeLimit: "3:00"
    },
    functionality: {
        title: "Application Functionality (5 Minutes)",
        content: [
            {
                type: "section",
                title: "Overview",
                text: "The application allows users to manage buildings, including adding, viewing, editing, and deleting building data. Users can also control and monitor building temperatures."
            },
            {
                type: "quote",
                title: "Core Features",
                items: [
                    "Add a Building: Input building details with validation",
                    "View All Buildings: Dynamic interface showing building data",
                    "Edit a Building: Update building details in real-time",
                    "Delete a Building: Remove buildings from the system",
                    "Temperature Control: Adjust and monitor building temperatures"
                ]
            },
            {
                type: "section",
                title: "Use Case Example",
                text: "A facility manager could use the app to monitor building conditions, adjust temperatures to optimize energy usage, or deactivate buildings that are no longer in use."
            }
        ],
        timeLimit: "5:00"
    },
    technical: {
        title: "Technical Overview (7-8 Minutes)",
        content: [
            {
                type: "section",
                title: "Architecture",
                text: "The application has three main components: Frontend (React/TypeScript), Backend (Node.js/Express), and Database (MySQL). The frontend communicates with the backend via RESTful API calls."
            },
            {
                type: "quote",
                title: "Key Design Decisions",
                items: [
                    "REST API: Simple, well-supported, and aligned with CRUD operations",
                    "MySQL Database: Reliable and suited for structured data",
                    "CSS Styling: Raw CSS for this project, considering frameworks for scaling"
                ]
            }
        ],
        timeLimit: "8:00"
    },
    challenges: {
        title: "Challenges and Lessons (5-7 Minutes)",
        content: [
            {
                type: "quote",
                title: "Key Challenges",
                items: [
                    "First backend project experience",
                    "Implementing robust error handling",
                    "Using ChatGPT effectively as a learning tool"
                ]
            },
            {
                type: "quote",
                title: "Key Lessons",
                items: [
                    "Designing and implementing REST APIs",
                    "Integrating frontend and backend systems",
                    "Managing relational databases",
                    "Using AI tools responsibly"
                ]
            }
        ],
        timeLimit: "7:00"
    },
    improvements: {
        title: "Improvements (3-5 Minutes)",
        content: [
            {
                type: "quote",
                title: "Technical Improvements",
                items: [
                    "JWT authentication for security",
                    "Environment variables configuration",
                    "Database migrations with sequelize/knex.js",
                    "Docker containerization"
                ]
            },
            {
                type: "quote",
                title: "Future Enhancements",
                items: [
                    "Robust form validation",
                    "Improved error handling",
                    "Mobile-responsive UI",
                    "Swagger API documentation"
                ]
            }
        ],
        timeLimit: "5:00"
    },
    closing: {
        title: "Closing Reflection (2-3 Minutes)",
        content: [
            {
                type: "section",
                title: "Accomplishments",
                text: "This project pushed me to explore backend development and gain full-stack experience from scratch. Despite the challenges, I successfully delivered a functional application that meets the requirements."
            },
            {
                type: "section",
                title: "Growth",
                text: "I'm particularly proud of how I approached this project, leveraging tools like ChatGPT and advice from my brother Jacob to grow as a developer. This journey has given me confidence in my ability to learn and contribute meaningfully to development projects."
            }
        ],
        timeLimit: "3:00"
    },
    qa: {
        title: "Q&A Preparation",
        content: [
            {
                type: "quote",
                title: "Common Questions",
                items: [
                    "Q: How would you handle scalability?\nA: Optimize queries, implement caching, use load balancing",
                    "Q: What are the risks of using ChatGPT?\nA: Main risk is over-reliance, mitigated by critical evaluation",
                    "Q: What role did Jacob play?\nA: Encouraged application and provided company insights"
                ]
            },
            {
                type: "section",
                title: "Unique Selling Point",
                text: "Additionally, my sambo works as an architect with strong industry connections. Many of her clients are interested in sustainable practices, especially with new EU regulations. This could create opportunities for Nordmatics in the growing sustainable construction market."
            }
        ],
        timeLimit: "5:00"
    }
};

let currentSection = null;
let timer = null;
let timerInterval = null;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer(duration) {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    let timeLeft = duration;
    const timerDisplay = document.getElementById('timer');
    
    timerDisplay.textContent = formatTime(timeLeft);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.style.color = 'red';
        } else if (timeLeft <= 30) {
            timerDisplay.style.color = 'orange';
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = '00:00';
        document.getElementById('timer').style.color = '';
    }
}

function createSectionList() {
    const sectionList = document.getElementById('sectionList');
    sectionList.innerHTML = '';
    
    Object.entries(presentationContent).forEach(([key, section]) => {
        const item = document.createElement('div');
        item.className = 'section-item';
        item.textContent = section.title;
        item.onclick = () => loadSection(key);
        sectionList.appendChild(item);
    });
}

function renderContent(content) {
    let html = '';
    
    content.forEach(item => {
        if (item.type === 'section') {
            html += `<h3>${item.title}</h3><p>${item.text}</p>`;
        } else if (item.type === 'quote') {
            html += `<h3>${item.title}</h3><ul>`;
            item.items.forEach(point => {
                html += `<li class="quote">${point}</li>`;
            });
            html += '</ul>';
        }
    });
    
    return html;
}

function loadSection(sectionKey) {
    currentSection = sectionKey;
    const section = presentationContent[sectionKey];
    
    // Update active section in navigation
    document.querySelectorAll('.section-item').forEach(item => {
        item.classList.remove('active');
        if (item.textContent === section.title) {
            item.classList.add('active');
        }
    });
    
    // Update section title and content
    document.getElementById('currentSectionTitle').textContent = section.title;
    document.getElementById('recommendedTime').textContent = section.timeLimit;
    document.getElementById('contentDisplay').innerHTML = renderContent(section.content);
    
    // Reset timer display
    document.getElementById('timer').style.color = '';
    document.getElementById('timer').textContent = '00:00';
}

function initializeApp() {
    createSectionList();
    
    document.getElementById('startPractice').onclick = () => {
        if (!currentSection) return;
        const timeLimit = presentationContent[currentSection].timeLimit;
        const [minutes, seconds] = timeLimit.split(':').map(Number);
        startTimer(minutes * 60 + seconds);
    };
    
    document.getElementById('stopPractice').onclick = stopTimer;
    
    document.getElementById('resetPractice').onclick = () => {
        stopTimer();
        if (currentSection) {
            loadSection(currentSection);
        }
    };
}

document.addEventListener('DOMContentLoaded', initializeApp);

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
