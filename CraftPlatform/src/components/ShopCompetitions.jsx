import CompetitionDetails from "./CompetitionDetails";
import Competitions from './Competitions.json'
import { Link } from 'react-router-dom'

export default function ShopCompetitions() {
    return <div>
    {
        Competitions.map((competition,index)=>{
            return (
            <>
                <CompetitionDetails competition={competition} key={index} IsSeller={1}/>
                <Link to={'/EditCompetition'}><button className="blackBtn">Edit Competition</button></Link>
            </>)
        })
    }
    <Link to={'/AddComptetion'}><button className="blackBtn">Add Competition</button></Link>
    </div>
}