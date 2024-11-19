const questions = [
    // ... (rest of the questions array remains the same)
];

const presentationSections = [
    {
        id: 1,
        title: "Introduction",
        time: "2-3",
        content: `
            Personal Introduction:
            - Introduce yourself
            - Mention living in Nacka with sambo and kids
            - Recent graduation from Borås University
            - Current work at CIBT
            
            Connection to Company:
            - Mention brother Jacob
            - His role as backend developer
            - His influence on your application
            
            ChatGPT Usage:
            - First full-stack application experience
            - Learning tool for backend development
            - Pros and cons of using ChatGPT
            
            Project Overview:
            - Full-stack application for building management
            - CRUD functionality
            - MySQL database
            - React frontend
        `
    },
    {
        id: 2,
        title: "Application Functionality",
        time: "5",
        content: `
            Overview of Features:
            - Building management system
            - Temperature control functionality
            
            Core Features:
            - Add Building (POST request)
            - View Buildings (GET request)
            - Edit Building (PATCH request)
            - Delete Building (DELETE request)
            - Temperature Control
            
            Practical Use Cases:
            - Facility manager usage
            - Energy optimization
            - Building management
        `
    },
    {
        id: 3,
        title: "Technical Overview",
        time: "7-8",
        content: `
            Architecture:
            - Frontend: React + TypeScript
            - Backend: Node.js + Express
            - Database: MySQL
            
            Key Design Decisions:
            - REST API choice
            - MySQL database selection
            - CSS styling approach
        `
    },
    {
        id: 4,
        title: "Challenges and Lessons",
        time: "5-7",
        content: `
            Key Challenges:
            - Learning backend development
            - Error handling and debugging
            - Effective use of ChatGPT
            
            Key Lessons:
            - REST API design
            - Frontend-backend integration
            - Database management
        `
    },
    {
        id: 5,
        title: "Improvements",
        time: "3-5",
        content: `
            Improvements:
            - JWT authentication
            - Environment variables
            - Database migrations
            - Docker containerization
            
            Future Enhancements:
            - Form validation
            - Error handling
            - Mobile responsiveness
            - API documentation
        `
    },
    {
        id: 6,
        title: "Closing",
        time: "2-3",
        content: `
            Summary:
            - Project accomplishments
            - Personal growth
            - Learning journey
            
            Final Points:
            - Thank the interviewers
            - Express enthusiasm
            - Open for questions
        `
    }
];

const sectionList = document.getElementById('sectionList');
const currentSectionTitle = document.getElementById('currentSectionTitle');
const contentDisplay = document.getElementById('contentDisplay');
const recommendedTime = document.getElementById('recommendedTime');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startPractice');
const stopButton = document.getElementById('stopPractice');
const resetButton = document.getElementById('resetPractice');

let currentSection = null;
let timer = null;
let seconds = 0;

function initializeSections() {
    presentationSections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'section-item';
        sectionElement.textContent = section.title;
        sectionElement.addEventListener('click', () => selectSection(section));
        sectionList.appendChild(sectionElement);
    });
}

function selectSection(section) {
    currentSection = section;
    
    // Update UI
    document.querySelectorAll('.section-item').forEach(item => {
        item.classList.remove('active');
        if (item.textContent === section.title) {
            item.classList.add('active');
        }
    });
    
    currentSectionTitle.textContent = section.title;
    recommendedTime.textContent = `${section.time} minutes`;
    contentDisplay.innerHTML = section.content.split('\n').map(line => {
        line = line.trim();
        if (line.endsWith(':')) {
            return `<strong>${line}</strong>`;
        } else if (line.startsWith('-')) {
            return `<li>${line.substring(1).trim()}</li>`;
        }
        return line;
    }).join('<br>');
    
    resetTimer();
}

function startTimer() {
    if (currentSection) {
        startButton.disabled = true;
        stopButton.disabled = false;
        timer = setInterval(updateTimer, 1000);
    } else {
        alert('Please select a section first');
    }
}

function stopTimer() {
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

initializeSections();
stopButton.disabled = true;

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
