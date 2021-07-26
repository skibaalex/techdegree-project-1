/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * quotes array 
***/

const quotes = [
  {
    quote: 'You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them—two variables can refer to the same value.',
    source: 'Marijn Haverbeke',
    citation: 'Eloquent JavaScript: A Modern Introduction to Programming',
    year: '2010'
  },
  {
    quote: 'jQuery is by far the most widely used library for JavaScript. It is used on more than 50% of websites. Many frameworks, such as Backbone and Twitter’s Bootstrap, are built on top of jQuery. Being able to extend and write plugins for jQuery can not only save lots of time, but also makes code much cleaner and easier to maintain.',
    source: 'Robert Duchnik',
    citation: 'jQuery Plugin Development In 30 Minutes',
    year: '2014'
  },
  {
    quote: 'Java is to JavaScript as ham is to hamster.',
    source: 'Jeremy Keith',
    citation: 'Resilient Web Design',
    tags: ['humor', 'Java', 'JavaScript']
  },
  {
    quote: 'JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with surfaces when you do.',
    source: 'Dmitry Baranovskiy',
  },
  {
    quote: 'Javascript is the duct tape of the Internet.',
    source: 'Charlie Campbell',
    year: '2015'
  },
]




/**
 * function to recieve a random quote from the quotes array
 * @returns quote
 */
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * Generate a tags html code
 */

const generateTags = (tags) => {
  let html = ''
  tags.forEach(tag => {
    html += `<li>${tag}</li>`
  });
  return tags
}

/**
 * random Background color
 * Source of the random color generation code
 * https://css-tricks.com/snippets/javascript/random-hex-color/
 */

const changeBackgroundColor = () => {
  document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`
}


/**
 * Generate a quote html text and insery it into the document
 */

const printQuote = () => {
  const quoteObj = getRandomQuote();
  const html = `
    <p class="quote">${quoteObj.quote}</p>
    <p class="source">${quoteObj.source}
    ${quoteObj.citation ? `<span class="citation">${quoteObj.citation}</span>` : ''}
    ${quoteObj.year ? `<span class="year">${quoteObj.year}</span>` : ''}
    ${quoteObj.tags ? `<ul class="tags">${generateTags(quoteObj.tags)}</ul>` : ''}
    </p>
  `
  changeBackgroundColor();
  document.getElementById('quote-box').innerHTML = html;
}


//auto refresh the quote
setInterval(printQuote, 20000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);