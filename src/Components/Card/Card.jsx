import Icon from "../Icon/Icon";
import "./card.css"

function Card({gameEnd,player,onPlay,index}){

    let icon=<Icon/>
   if(player == "x"){
    icon = <Icon name ="cross"/>
   }else if(player == "o"){
    icon = <Icon name ="circle"/>
   }

    return(
        <div  className="card" onClick={()=>!gameEnd && player=="" && onPlay(index)}>
            {icon}
        
        </div>
    )
}
export default Card;