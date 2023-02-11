import Card from "../card/card.component.jsx";
import "./card-list.styles.css";

const Cardlist = ( {monsters} ) =>  {
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return(
          <Card monster={monster} />
          )})}
    </div>
    )
}

export default Cardlist