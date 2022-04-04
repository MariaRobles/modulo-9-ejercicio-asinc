const getCharacters = require ("./data-business");
const CharacterRow = require("./utils"); 
const character = require("./utils");
const getQuotes = require ("./data-business");
//const listQuote = require("./utils"); 
import "./styles.css";

//getCharacters.getCharacters();
//getQuotes.getQuotes();


getCharacters.getCharacters().then(data => {
    const characters = data;
    const nodes = [];

    for (let user of characters) {
        const node = CharacterRow.createCharacterRow(user);
        node.onclick = function getCharactersDetails (){
            character.showCharacter(user);
        }
        nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
    };
    
    //console.log(data);

    }).catch( error => {
        document.write('Se ha producido un error en la llamada a la API');
    });
   
  /* ----------------Quotes--------------- */

  getQuotes.getQuotes().then(data =>{
      console.log(data);
  })
