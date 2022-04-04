



//createCharacterRow, showCharacter

function getCharacters() {
    return fetch("https://breakingbadapi.com/api/characters")
      .then ( response => {
        return (response.json()); //esto devuelve otra promesa
      })
};
        

function getQuotes() {
  return fetch("https://breakingbadapi.com/api/quotes")
    .then ( response => {
      return (response.json()); 
  });
};
        /*.then(data => {
          const quotes = data;
          const nodesQuote = [];
      
          for (let quote of quotes) {
              const node = CharacterRow.createCharacterRow(quote);
              node.onclick = function getQuoteDetails (){
                quotesDetails.listQuotes(quote);
              }
              nodesQuote.push(node);
          }
      
          for (let node of nodesQuote) {
              document.getElementById("root").append(node);
          }
            console.log(data); 

        }).catch ( error => {
            document.write("Se ha producido un error en la llamada a la API");
        })
      }*/
  
  module.exports = { getCharacters, getQuotes }