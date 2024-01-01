console.log('Hola Mundo');

const subjects = [
    'mate',
    'pal',
    'buddy',
    'chum',
    'mucker'
];
const quotes = [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It's not whether you get knocked down, it's whether you get up.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to achieve the impossible is to believe it is possible.",
    "The most effective way to do it is to do it.",
    "I'd rather regret the things I've done than regret the things I haven't done.",
    "Do not bring people in your life who weigh you down. And trust your instincts — good relationships feel good. They feel right. They don’t hurt.",
    "You are your best thing.",
    "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    "I don’t know what the future holds, but I do know that I’m going to be positive and not wake up feeling desperate.",
    "If you don’t like the road you’re walking, start paving another one.",
    "The most courageous act is still to think for yourself. Aloud.",
    "I never dreamed about success. I worked for it.",
    "The way to achieve your own success is to be willing to help somebody else get it first."
]
const authors = [
    "Steve Jobs",
    "Theodore Roosevelt",
    "Winston Churchill",
    "Steve Jobs",
    "Franklin D.Roosevelt",
    "Robert Frost",
    "Eleanor Roosevelt",
    "Vince Lombardi",
    "Sam Levenson",
    "Charles Kingsleigh",
    "Amelia Earhart",
    "Lucille Ball",
    "Oprah Winfrey",
    "Toni Morrison",
    "Maya Angelou",
    "Billie Eilish",
    "Dolly Parton",
    "Coco Chanel",
    "Estée Lauder",
    "Iyanla Vanzant"
]

// This gives a random number, you can add a parameter as reference to generate random numbers between that value and 0.
const randomNumber = num => {
    return Math.floor(Math.random()*num);
}

console.log(randomNumber(5));

function randomQuote(){
    const subject = subjects[randomNumber(4)];
    const quote = quotes[randomNumber(20)];
    const author = authors[randomNumber(20)];

    console.log(`I think a ${subject} might have said:\n"${quote}"\nI think that was ${subject} ${author}.`);   
}

randomQuote()