/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
//import style from "./Competition.module.css"
import { useState } from "react";
import styles from './CompetitionDetails.module.css'

function CompetitionDetails(props)
{
    const [ButtonText,setButtonText]=useState("Participate");

    function handleParticipateClicked()
    {
        (ButtonText=="Participate")?setButtonText("Participated"):setButtonText("Participate");
    }

    return <div className={styles.container}>
        <div>
            <div>
                <h2>{props.competition.Title}</h2>
                <p>Competition End Date: {props.competition.End_Date}</p>
            </div>
            {(!props.IsSeller)?<button className="blackBtn" onClick={()=>handleParticipateClicked()}>{ButtonText}</button>:null}
        </div>
        <div>
            <p>{props.competition.Description}</p>
        </div>
    </div>
}

export default CompetitionDetails;