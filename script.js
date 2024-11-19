const questions = [
    {
        question: "What is the difference between 'let' and 'const' in JavaScript?",
        answers: [
            { text: "'let' can be reassigned, 'const' cannot be reassigned", correct: true },
            { text: "There is no difference", correct: false },
            { text: "'const' can be reassigned, 'let' cannot be reassigned", correct: false },
            { text: "'let' is function-scoped, 'const' is block-scoped", correct: false }
        ]
    },
    {
        question: "What is a REST API?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A database management system", correct: false },
            { text: "An architectural style for designing networked applications", correct: true },
            { text: "A type of web browser", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'async/await' keywords in JavaScript?",
        answers: [
            { text: "To make the code run faster", correct: false },
            { text: "To handle asynchronous operations in a synchronous-looking way", correct: true },
            { text: "To create loops", correct: false },
            { text: "To define variables", correct: false }
        ]
    },
    {
        question: "What is the time complexity of binary search?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(n²)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(1)", correct: false }
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A way to close the browser window", correct: false },
            { text: "A function that has access to variables in its outer scope", correct: true },
            { text: "A method to end a loop", correct: false },
            { text: "A way to close a database connection", correct: false }
        ]
    },
    {
        question: "What is the difference between REST API and GraphQL, and why might you choose REST API?",
        answers: [
            { text: "REST API is more flexible with multiple endpoints, GraphQL has a single endpoint. REST is often simpler for basic CRUD operations", correct: true },
            { text: "They are the same thing with different names", correct: false },
            { text: "GraphQL is always faster than REST API", correct: false },
            { text: "REST API only supports GET requests", correct: false }
        ]
    },
    {
        question: "What are environment variables and why are they important?",
        answers: [
            { text: "They're just for storing random data", correct: false },
            { text: "They store configuration that varies between environments and sensitive data like API keys and database credentials", correct: true },
            { text: "They're only used in development", correct: false },
            { text: "They're used to style the environment", correct: false }
        ]
    },
    {
        question: "Why is API versioning important?",
        answers: [
            { text: "It's not important, you can change APIs whenever you want", correct: false },
            { text: "To maintain backward compatibility and prevent breaking changes for existing clients", correct: true },
            { text: "It makes the API look more professional", correct: false },
            { text: "It's only needed for mobile apps", correct: false }
        ]
    },
    {
        question: "What's the purpose of database migrations?",
        answers: [
            { text: "To make the database faster", correct: false },
            { text: "To track and version control database schema changes and make them reproducible", correct: true },
            { text: "To backup the database", correct: false },
            { text: "To delete old data", correct: false }
        ]
    },
    {
        question: "What's the difference between MySQL and PostgreSQL?",
        answers: [
            { text: "MySQL is free, PostgreSQL is paid", correct: false },
            { text: "MySQL is typically simpler to set up and use, while PostgreSQL offers more advanced features and better standards compliance", correct: true },
            { text: "They are exactly the same", correct: false },
            { text: "PostgreSQL can't handle large databases", correct: false }
        ]
    },
    {
        question: "How can you automate the setup of a fullstack application?",
        answers: [
            { text: "It's impossible to automate", correct: false },
            { text: "Using Docker compose or scripts to handle dependencies, database setup, and starting services", correct: true },
            { text: "By hiring more developers", correct: false },
            { text: "By removing all the code", correct: false }
        ]
    },
    {
        question: "What's the difference between GET and LIST operations?",
        answers: [
            { text: "They are exactly the same", correct: false },
            { text: "GET retrieves a single resource by ID, while LIST retrieves multiple resources", correct: true },
            { text: "LIST is not a real operation", correct: false },
            { text: "GET is only for images", correct: false }
        ]
    },
    {
        question: "How can you implement authentication in a REST API?",
        answers: [
            { text: "Using JWT tokens or session-based authentication with middleware", correct: true },
            { text: "Authentication isn't necessary", correct: false },
            { text: "By hoping no one finds the API", correct: false },
            { text: "Only allowing localhost connections", correct: false }
        ]
    },
    {
        question: "What are some alternatives to raw CSS for styling?",
        answers: [
            { text: "There are no alternatives to CSS", correct: false },
            { text: "Styled-components, Tailwind CSS, SASS/SCSS, or CSS-in-JS solutions", correct: true },
            { text: "Using only inline styles", correct: false },
            { text: "Removing all styles", correct: false }
        ]
    },
    {
        question: "How should form validation be implemented?",
        answers: [
            { text: "No validation is needed", correct: false },
            { text: "Client-side validation for UX, server-side validation for security, with clear feedback and reasonable constraints", correct: true },
            { text: "Only server-side validation", correct: false },
            { text: "Only client-side validation", correct: false }
        ]
    },
    {
        question: "How should API documentation be maintained?",
        answers: [
            { text: "Manually updating README files", correct: false },
            { text: "Using tools like Swagger/OpenAPI to automatically generate documentation from code", correct: true },
            { text: "Not documenting the API", correct: false },
            { text: "Letting users figure it out", correct: false }
        ]
    },
    {
        question: "In the Building Control System, what are the minimum version requirements for Node.js and MySQL?",
        answers: [
            { text: "Node.js v12 and MySQL v5.7", correct: false },
            { text: "Node.js v14 or higher and MySQL v8.0 or higher", correct: true },
            { text: "Node.js v16 and MySQL v7.0", correct: false },
            { text: "Any version will work", correct: false }
        ]
    },
    {
        question: "What is the purpose of the .env file in the Building Control System's backend?",
        answers: [
            { text: "To store frontend URLs", correct: false },
            { text: "To store database credentials and configuration (DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE)", correct: true },
            { text: "To store building temperatures", correct: false },
            { text: "To configure the frontend port", correct: false }
        ]
    },
    {
        question: "Which ports are used by default in the Building Control System?",
        answers: [
            { text: "Frontend: 3000, Backend: 3001", correct: true },
            { text: "Frontend: 8080, Backend: 8081", correct: false },
            { text: "Frontend: 5000, Backend: 5001", correct: false },
            { text: "Frontend: 4000, Backend: 4001", correct: false }
        ]
    },
    {
        question: "What columns are defined in the buildings table schema?",
        answers: [
            { text: "Only id and name", correct: false },
            { text: "id, name, temperature, location, status", correct: true },
            { text: "id, title, temp, address, state", correct: false },
            { text: "name, temperature, location only", correct: false }
        ]
    },
    {
        question: "Which testing frameworks are used in both frontend and backend of the Building Control System?",
        answers: [
            { text: "Mocha and Chai", correct: false },
            { text: "Jest", correct: true },
            { text: "Cypress only", correct: false },
            { text: "Selenium", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of Axios in the Building Control System?",
        answers: [
            { text: "For styling components", correct: false },
            { text: "For making API calls between frontend and backend", correct: true },
            { text: "For database management", correct: false },
            { text: "For user authentication", correct: false }
        ]
    },
    {
        question: "What should you do if you encounter a 'Network Error' in the frontend?",
        answers: [
            { text: "Only check if the frontend is running", correct: false },
            { text: "Check backend on port 3001, verify MySQL status, check .env configuration, and ensure port 3001 is available", correct: true },
            { text: "Restart the computer", correct: false },
            { text: "Reinstall Node.js", correct: false }
        ]
    },
    {
        question: "What are the main features of the Building Control System?",
        answers: [
            { text: "Only temperature monitoring", correct: false },
            { text: "Temperature control, CRUD operations for buildings, real-time updates, and persistent storage", correct: true },
            { text: "Just a database interface", correct: false },
            { text: "Only building deletion", correct: false }
        ]
    },
    {
        question: "How is TypeScript used in the Building Control System?",
        answers: [
            { text: "Only in the frontend", correct: false },
            { text: "Both in frontend (with React) and backend (with Node.js/Express)", correct: true },
            { text: "Only in the backend", correct: false },
            { text: "It's not used at all", correct: false }
        ]
    },
    {
        question: "What command is used to verify MySQL status in the Building Control System?",
        answers: [
            { text: "mysql status", correct: false },
            { text: "mysql.server status", correct: true },
            { text: "status mysql", correct: false },
            { text: "systemctl status mysql", correct: false }
        ]
    },
    {
        question: "What is the correct order of setup steps for the Building Control System?",
        answers: [
            { text: "Frontend first, then backend, then database", correct: false },
            { text: "Database setup, then backend setup, then frontend setup", correct: true },
            { text: "Any order works", correct: false },
            { text: "Only backend setup is needed", correct: false }
        ]
    }
];

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const currentQuestionSpan = document.getElementById('current');
const totalQuestionsSpan = document.getElementById('total');
const scoreSpan = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    questionContainer.classList.remove('hide');
    totalQuestionsSpan.textContent = questions.length;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

function showQuestion(question) {
    questionText.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    if (correct) score++;
    scoreSpan.textContent = score;

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.textContent = 'Restart Quiz';
        startButton.classList.remove('hide');
    }

    // Disable all buttons after selection
    Array.from(answerButtonsElement.children).forEach(button => {
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
