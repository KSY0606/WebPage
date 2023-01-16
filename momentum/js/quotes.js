const quotes = [
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou"
    },
    {
        quote : "This too shall pass.",
        author : "Et hoc transibit"
    },
    {
        quote : "he goal of life is living in agreement with nature.",
        author : "Zeno"
    },
    {
        quote : "All we have is now. ",
        author : "Anonymous"
    },
    {
        quote : "Age is no guarantee of maturity.",
        author : "Lawana Blackwell"
    },
    {
        quote : "Only I can change me life, no one can do it for me.",
        author : "Carol Burnett"
    },
    {
        quote : "When in doubt, choose change.",
        author : "Lily leung"
    },
    {
        quote : "Being happy never goes out of style.",
        author : "Lilly Pulitzer"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;