console.log('############################');
console.log('Welcome to the joke factory!');
console.log('Let me tell you something about programming: \n');

const programmingJokes = [
    {
        id: 0,
        question: "Why don't programmers like nature?",
        answer: "It has too many bugs."
    },
    {
        id: 1,
        question: "Why did the CSS developer go to therapy?",
        answer: "To get rid of his margins."
    },
    {
        id: 2,
        question: "How do you comfort a JavaScript developer?",
        answer: "You console them."
    },
    {
        id: 3,
        question: "Why did the CSS developer leave the restaurant?",
        answer: " Because it had no class."
    },
    {
        id: 4,
        question: "Why did the JavaScript developer go missing?",
        answer: "Because he didn't know when to return."
    },
    {
        id: 5,
        question: "Why did the HTML tag go to the party?",
        answer: "Because it wanted to break the line."
    },
    {
        id: 6,
        question: "Why do JavaScript developers wear glasses?",
        answer: "Because they don't C#."
    },
    {
        id: 7,
        question: "Why don't programmers like to use inline styles?",
        answer: "Because they want to be classy."
    },
    {
        id: 8,
        question: "Why did the CSS selector break up with the HTML element?",
        answer: "It found someone more specific."
    },
    {
        id: 9,
        question:"Why did the CSS developer apply for a job?",
        answer: "They wanted to get a position."
    },
  ];
  
  for(let i =1; i <=2; i++) {
        let randomIndex = Math.floor(Math.random() * programmingJokes.length);
        let randomJoke = programmingJokes[randomIndex];
      

        console.log('Joke #' + randomJoke.id);
        console.log('Question: ' + randomJoke.question);
        console.log('Answer: ' + randomJoke.answer + '\n');

        programmingJokes.splice(randomIndex, 1);
    }  
    
    console.log('Thank you, come again!');
  