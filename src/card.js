function Card(props){
    return<div className="cards">
        <h1>{props.title}</h1>
        <h1>{props.price}</h1>
    </div>
}
export default Card;