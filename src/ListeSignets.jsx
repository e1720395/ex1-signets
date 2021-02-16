import Signet from "./Signet";
import tabSignets from "./data/listeSignets.json";

export default function listeSignets(props){
    return (
        <div className="ListeSignets">
            <ul>
                {tabSignets.map(signet =>
                <Signet id={signet.id} date={signet.date} nom={signet.nom} couleur={signet.couleur} />
                )}
            </ul>
        </div>
    )
}