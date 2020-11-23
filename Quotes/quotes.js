var quotes = [
       "The way to get started is to quit talking and begin doing. - Walt Disney",
       "If life were predictable it would cease to be life, and be without flavor.- Eleanor Roosevelt",
       "Life is what happens when you are busy making other plans. - John Lennon",
       "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
       "Tell me and I forget. Teach me and I remember. Involve me and I learn - Benjamin Franklin",
       "Whoever is happy will make others happy too. - Anne Frank"]

    function newQuote() {
      var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML= quotes[randomNumber];
    }
