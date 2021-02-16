export default function Signet(props){
    return(
        <div className="signet">
            <h1>{props.nom}</h1>
            <p>{props.date}</p>
            <img src={'image-signets/' + props.id + '.webp'} alt="thisIsImg"/>
            <button className="boutonAjouter"></button>
        </div>
    )
}