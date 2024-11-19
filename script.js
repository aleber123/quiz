const questions = [
    // ... (rest of the questions array remains the same)
];

const presentationSections = [
    {
        id: 1,
        title: "1. Introduction",
        time: "2-3",
        content: `
            Personal Introduction:
            "Hi, I'm Alexander. I live in Nacka with my sambo and our two kids, Harry and Alice. I recently graduated from Borås University, where I studied software frontend development. I currently work at CIBT as a visa and legalization consultant, but I'm eager to transition into a career as a developer."

            Connection to the Company:
            "My brother, Jacob, who works here as a backend developer, encouraged me to apply for this role. He shared a lot about the team, the projects you work on, and the company culture, which made me excited to apply and showcase my skills."

            Acknowledging the Use of ChatGPT:
            "This assignment was my first experience building a full-stack application, and it required me to step outside my comfort zone, especially in backend development. To help me through the process, I used ChatGPT as a learning tool."

            Pros and Cons:
            Pros: "ChatGPT helped me quickly understand backend concepts, troubleshoot issues, and provided practical examples to guide me."
            Cons: "The main challenge was ensuring I didn't rely on it blindly. I reviewed, adapted, and fully understood the solutions it suggested before implementing them."

            Project Overview:
            "The task was to create a full-stack application to manage buildings and their temperature settings. It included CRUD functionality, persistent data storage with MySQL, and a React-based frontend. I implemented a REST API for backend logic and used TypeScript across the stack for type safety and maintainability."

            Setting the Tone:
            "This project was a significant learning experience, and I'm excited to share the details, the challenges I faced, and the lessons I learned along the way."
        `
    },
    {
        id: 2,
        title: "2. Application Functionality",
        time: "5",
        content: `
            Overview of Features:
            "The application allows users to manage buildings, including adding, viewing, editing, and deleting building data. Users can also control and monitor building temperatures."

            Core Features:
            Add a Building:
            "Users can input a building's name, location, status, and temperature. This data is validated and saved to the MySQL database via a POST request."

            View All Buildings:
            "The app fetches all building data from the backend via a GET request. This is displayed in a clean, dynamic interface."

            Edit a Building:
            "Users can update building details, such as temperature or location. The app sends a PATCH request to update the database and reflects the changes immediately in the UI."

            Delete a Building:
            "If a building is no longer needed, users can delete it. This action sends a DELETE request to remove the record from the database."

            Temperature Control:
            "Users can adjust a building's temperature through a slider or input field, ensuring the changes are consistent across the system."

            Practical Use Cases:
            "For example, a facility manager could use the app to monitor building conditions, adjust temperatures to optimize energy usage, or deactivate buildings that are no longer in use."
        `
    },
    {
        id: 3,
        title: "3. Technical Overview",
        time: "7-8",
        content: `
            A. Architecture
            "The application has three main components:"

            Frontend:
            "Built with React and TypeScript for a modular and scalable UI."

            Backend:
            "Built with Node.js and Express, using TypeScript for type safety and better error detection."

            Database:
            "MySQL is used for relational, structured data storage."

            Integration:
            "The frontend communicates with the backend via RESTful API calls, and the backend handles database interactions and business logic."

            B. Key Design Decisions
            REST API:
            "I chose REST for its simplicity and alignment with CRUD operations. It's also well-supported and easy to extend."

            MySQL Database:
            "I selected MySQL because it's reliable and well-suited for structured data. It allowed me to define clear relationships and constraints for building data."

            CSS Styling:
            "I used raw CSS for styling in this project, but for a larger application, I'd consider frameworks like TailwindCSS or Styled Components for scalability."
        `
    },
    {
        id: 4,
        title: "4. Challenges and Lessons",
        time: "5-7",
        content: `
            Key Challenges:

            Learning Backend Development:
            "This was my first backend project. I had to learn how to design APIs, manage a database, and handle data flow between the frontend and backend."

            Error Handling and Debugging:
            "Ensuring robust error handling across the stack was a challenge. For instance, handling invalid form submissions or failed API requests required thoughtful validation and fallback mechanisms."

            Using ChatGPT Effectively:
            "While ChatGPT provided guidance, I made a conscious effort to ensure I fully understood and adapted its suggestions to meet the requirements."

            Key Lessons:
            "I learned how to design and implement REST APIs, integrate frontend and backend systems, and manage a relational database."
            "This project also taught me how to use tools like ChatGPT responsibly, ensuring they enhance learning rather than replace understanding."
        `
    },
    {
        id: 5,
        title: "5. Improvements",
        time: "3-5",
        content: `
            Improvements:

            Security:
            "I'd implement JWT authentication to secure the API and restrict sensitive operations to authorized users."

            Environment Variables:
            "I'd replace hardcoded database configurations with .env files for better flexibility and security."

            Database Migrations:
            "Using tools like sequelize or knex.js would make managing database schema changes easier and more reliable."

            Automation:
            "Containerizing the application with Docker would simplify setup and ensure consistency across environments."

            Future Enhancements:
            "I'd like to add more robust form validation, improve error handling for edge cases, and make the UI more responsive for mobile devices."
            "Dynamic API documentation using Swagger would also make the system easier to understand and extend for future developers."
        `
    },
    {
        id: 6,
        title: "6. Closing Reflection",
        time: "2-3",
        content: `
            Summarize Your Accomplishments:
            "This project pushed me to explore backend development and gain full-stack experience from scratch. Despite the challenges, I successfully delivered a functional application that meets the requirements."

            Highlight Growth:
            "I'm particularly proud of how I approached this project, leveraging tools like ChatGPT and advice from my brother Jacob to grow as a developer. This journey has given me confidence in my ability to learn and contribute meaningfully to development projects."

            Thank the Interviewers:
            "Thank you for this opportunity to present my work. I'd be happy to answer any questions or discuss specific aspects of the project in more detail."
        `
    },
    {
        id: 7,
        title: "7. Q&A Preparation",
        time: "5-10",
        content: `
            Common Questions and Answers:

            Scalability:
            Q: "How would you handle scalability in the future?"
            A: "I'd optimize database queries, introduce caching (e.g., Redis), and use a load balancer to handle increased traffic."

            ChatGPT Usage:
            Q: "What are the risks of using ChatGPT?"
            A: "The main risk is over-reliance, which I mitigated by critically evaluating and adapting its suggestions."

            Brother's Role:
            Q: "What role did Jacob play in your development?"
            A: "Jacob encouraged me to apply for this role and provided insights into the company. However, I independently completed the project to demonstrate my own skills."

            Unique Selling Points:
            "Additionally, my sambo works as an architect and has strong connections within the building industry. Many of her clients are eager to adopt environmentally friendly practices for their projects, especially with the new EU regulations requiring sustainable construction."

            "By working with Nordmatics, I could help bridge these connections and recommend your innovative solutions to her network, which could open up new opportunities for the company in this growing market."
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
    
    // Format the content with proper spacing and quotation marks
    const formattedContent = section.content
        .split('\n')
        .map(line => {
            line = line.trim();
            if (line.startsWith('"') && line.endsWith('"')) {
                // Add a special class for quoted text
                return `<div class="quote">${line}</div>`;
            } else if (line.endsWith(':')) {
                return `<h3>${line}</h3>`;
            } else if (line.startsWith('Q:')) {
                return `<div class="question">${line}</div>`;
            } else if (line.startsWith('A:')) {
                return `<div class="answer">${line}</div>`;
            }
            return `<div>${line}</div>`;
        })
        .filter(line => line.length > 0)
        .join('');
    
    contentDisplay.innerHTML = formattedContent;
    
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
