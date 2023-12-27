/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import competition from "./Competition.json"
import Navbar from "../../components/Navbar";
import CompetitionDetails from '../../components/CompetitionDetails';
import style from "./Competition.module.css";
function Compitetion()
{
    let Participants=competition.Participant
    
    return <>
    <Navbar/>
    <h1 className={style.CompTitle}>{competition.Title}</h1>

    <div className={style.Container}>
    {/* display Shop Info */}
    <div>
    <div className={style.ShopInfo}>
        <img src={competition.Logo_URL} className={style.Logo}/>
        <h3>{competition.Shop_Name}</h3>
        <button>follow</button>
    </div>

    {/* Competition details */}
    <CompetitionDetails competition={competition} />

    </div>

    {/* display Participants  */}
    <div>
    {
        Participants.map((participant)=>{
            return <div key={participant.CID} className={style.ParticipantBox}>
                <FontAwesomeIcon icon={faUser} className={style.UserIcon}/>
                <div>
                     <p>{participant.CustomerName}</p>
                     <p>Response</p>
                </div>
            </div>
    })}
    </div>
    </div>
    </>
  
}

export default Compitetion;