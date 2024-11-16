const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which company developed JavaScript?",
        a: "Mozilla",
        b: "Netscape",
        c: "Microsoft",
        d: "Sun Microsystems",
        correct: "b",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "class",
        c: "font",
        d: "styles",
        correct: "a",
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        a: "React",
        b: "Angular",
        c: "Django",
        d: "Vue",
        correct: "c",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alertBox('Hello World')",
        b: "msg('Hello World')",
        c: "alert('Hello World')",
        d: "msgBox('Hello World')",
        correct: "c",
    },
    {
        question: "Which of the following is a block-level element in HTML?",
        a: "<span>",
        b: "<div>",
        c: "<img>",
        d: "<a>",
        correct: "b",
    },
    {
        question: "Which tag is used to define an image in HTML?",
        a: "<img>",
        b: "<image>",
        c: "<picture>",
        d: "<src>",
        correct: "a",
    },
    {
        question: "What is the correct syntax for referring to an external JavaScript file?",
        a: "<script src='script.js'>",
        b: "<script href='script.js'>",
        c: "<script ref='script.js'>",
        d: "<script link='script.js'>",
        correct: "a",
    },
    {
        question: "Which CSS property is used to change the text color?",
        a: "font-color",
        b: "text-color",
        c: "color",
        d: "text-style",
        correct: "c",
    },
    {
        question: "What does SQL stand for?",
        a: "Stylish Question Language",
        b: "Stylesheet Query Language",
        c: "Statement Question Language",
        d: "Structured Query Language",
        correct: "d",
    },
    {
        question: "Which method can be used to find the length of a string in JavaScript?",
        a: "getLength()",
        b: "length()",
        c: "len()",
        d: "string.length",
        correct: "d",
    },
    {
        question: "Which HTML tag is used to define a table?",
        a: "<table>",
        b: "<tab>",
        c: "<tbl>",
        d: "<t>",
        correct: "a",
    },
    {
        question: "Which property is used to change the background color in CSS?",
        a: "bgcolor",
        b: "background-color",
        c: "color",
        d: "background",
        correct: "b",
    },
    {
        question: "Which of the following is the correct way to declare a JavaScript variable?",
        a: "var myVar",
        b: "variable myVar",
        c: "v myVar",
        d: "myVar variable",
        correct: "a",
    },
    {
        question: "Which built-in method returns the string representation of the number's value in JavaScript?",
        a: "toValue()",
        b: "toNumber()",
        c: "toString()",
        d: "toText()",
        correct: "c",
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        a: "<foot>",
        b: "<footer>",
        c: "<bottom>",
        d: "<section-footer>",
        correct: "b",
    },
    {
        question: "Which of the following is used to write comments in JavaScript?",
        a: "// This is a comment",
        b: "<!-- This is a comment -->",
        c: "# This is a comment",
        d: "' This is a comment",
        correct: "a",
    }
];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})