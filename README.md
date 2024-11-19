# Tech Interview Quiz App

A mobile-friendly quiz application to help prepare for technical interviews. This app features a collection of common technical interview questions with immediate feedback on your answers.

## Features

- Mobile-responsive design
- Randomized questions
- Score tracking
- Immediate feedback on answers
- Clean, modern UI
- Progress tracking

## How to Use

1. Clone this repository to your local machine
2. Open `index.html` in your web browser
3. Click "Start Quiz" to begin
4. Select your answer for each question
5. View your score as you progress
6. Click "Next" to move to the next question
7. At the end, you can restart the quiz to try again

## Adding More Questions

To add more questions, edit the `questions` array in `script.js`. Each question should follow this format:

```javascript
{
    question: "Your question here?",
    answers: [
        { text: "First answer", correct: false },
        { text: "Second answer", correct: false },
        { text: "Correct answer", correct: true },
        { text: "Fourth answer", correct: false }
    ]
}
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Contributing

Feel free to fork this repository and add your own questions or improvements!
