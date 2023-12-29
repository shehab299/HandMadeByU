/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import competition from "./Competition.json"
import Navbar from "../../components/Navbar";
import CompetitionDetails from '../../components/CompetitionDetails';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api.js"
import style from "./Competition.module.css";
function Compitetion()
{

    const {id} = useParams();
    const [compete, setCompete] = useState({});
    const [loading, setLoading] = useState(true);
    const [participants, setParticipants] = useState([]);

    const getComptetion = async () => {
        const response = await api.getCompetion(id);
        if(response.data){
            setCompete(response.data[0]);
        }
    }

    const getParticipants = async () => {
        const response = await api.getParticipations(id);
        if(response.data){
            setParticipants(response.data);
            setLoading(false);
        }
    
    }

    useEffect(() => {setLoading(true); getComptetion(); getParticipants();} , [id])

    console.log(compete);
    console.log(participants);
    
    return <>
    <Navbar/>
    <h1 className={style.CompTitle}>{compete.Title}</h1>

    <div className={style.Container}>
    {/* display Shop Info */}
    <div>
    <div className={style.ShopInfo}>
        <img src={compete.Logo_URL} className={style.Logo}/>
        <h3>{compete.Name}</h3>
        <button>follow</button>
    </div>

    {/* Competition details */}
    <CompetitionDetails competition={compete} />

    </div>

    {/* display Participants  */}
    <div>
    {
        participants.map((participant)=>{
            return <div key={participant.Username} className={style.ParticipantBox}>
                <FontAwesomeIcon icon={faUser} className={style.UserIcon}/>
                <div>
                     <p>{participant.Username}</p>
                     <p>Response</p>
                </div>
            </div>
    })}
    </div>
    </div>
    </>
  
}

export default Compitetion;