import CompetitionDetails from "./CompetitionDetails";
import Competitions from './Competitions.json'
import { Link } from 'react-router-dom'

export default function ShopCompetitions() {
    return <>
    {
        Competitions.map((competition,index)=>{
            return <CompetitionDetails competition={competition} key={index} IsSeller={1}/>
        })
    }
    <button> <Link to={'/AddComptetion'}> Add Competition </Link></button>
    <button>Edit Competition </button>
    </>
}