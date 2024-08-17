let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
[
    "I want peace.",
    "Humans are weak. They need something to believe in.",
    "It's important to understand the other person's perspective.",
    "Power is everything.",
    "I'm always watching.",
    "Fear is a powerful tool.",
    "You can't escape your fate.",
    "I'm not interested in your dreams.",
    "The world is cruel.",
    "I'll protect you.",
    "Obedience is a virtue.",
    "Humans are so easily manipulated.",
    "I'm not human.",
    "Sacrifice is necessary for the greater good.",
    "I'm in control."
] 

btn.onclick = function(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    output.innerHTML = randomQuote;
};