import './Board.css'
import Card from './Card'
const listaDeCartas = [
    {name: 'slifer', img: 'images/slifer2.jpg'},
    {name: 'obelisk', img: 'images/obelisk.jpg'},
    {name: 'Ra', img: 'images/dragao_ra.jfif'},
    {name: 'blueEyes', img: 'images/blueEyes1.jfif'},
    {name: 'redEyes', img: 'images/redEyes.jpg'},
    {name: 'darkMagician', img: 'images/darkMagician1.jfif'},
    {name: 'darkMagicianGirl', img: 'images/darkMagicianGirl1.jpg'},
    {name: 'mirrorForce', img: 'images/mirrorForce.jfif'},
    {name: 'slifer', img: 'images/slifer2.jpg'},
    {name: 'obelisk', img: 'images/obelisk.jpg'},
    {name: 'Ra', img: 'images/dragao_ra.jfif'},
    {name: 'blueEyes', img: 'images/blueEyes1.jfif'},
    {name: 'redEyes', img: 'images/redEyes.jpg'},
    {name: 'darkMagician', img: 'images/darkMagician1.jfif'},
    {name: 'darkMagicianGirl', img: 'images/darkMagicianGirl1.jpg'},
    {name: 'mirrorForce', img: 'images/mirrorForce.jfif'},
]
let match = null
let board = []
let cardsChosen = []
let cardsChosenId = []
let cardsWin = []
let currentElements = []

function Board() {
    listaDeCartas.sort(()=> Math.random() - 0.5)
    const checkMatch = () =>{
        if(cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]){
            alert('they match :D')
            //console.log(cardsChosen)
            match = true
            cardsWin.push(cardsChosen)
            currentElements[0].setAttribute('src',listaDeCartas[cardsChosenId[0]].img)
            currentElements[1].setAttribute('src',listaDeCartas[cardsChosenId[1]].img)
            currentElements = []
            cardsChosen = []
            cardsChosenId = []
            
        }
        else if(cardsChosenId[0] === cardsChosenId[1]){
            alert('you\'ve clicked in the same card')
            match = false
            currentElements[0].setAttribute('src','images/back.png')
            currentElements = []
            cardsChosen = []
            cardsChosenId = []
        }
        else {
            console.log(cardsChosen)
            alert('they don\'t match :/')
            match = false
            currentElements[0].setAttribute('src','images/back.png')
            currentElements[1].setAttribute('src','images/back.png')
            currentElements = []
            cardsChosen = []
            cardsChosenId = []
    }
    }
    const onClick = (e)=>{
            const element = e.target;
            const cardId = element.id
            const cardImage = listaDeCartas[cardId].img
            currentElements.push(element)
            //console.log(element)
            element.setAttribute('src',cardImage)
            cardsChosen.push(listaDeCartas[cardId].name)
            cardsChosenId.push(cardId)
            if(cardsChosen.length==2){
                setTimeout(checkMatch,500)  
            }
    }

    for(let i = 0; i<16; i++){
        board.push(<Card key={i} image={'images/back.png'} id={i} onClick = {onClick}/>)
    } 
    return (<div className="board">
              {board}
            </div>)
}
export default Board

