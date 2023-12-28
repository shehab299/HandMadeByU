/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
//import style from "./Competition.module.css"
import { useState } from "react";

function CompetitionDetails(props)
{
    const [ButtonText,setButtonText]=useState("Participate");

    function handleParticipateClicked()
    {
        (ButtonText=="Participate")?setButtonText("Participated"):setButtonText("Participate");
    }

    return <div>
        <div>
            <div>
                <h2>{props.competition.Title}</h2>
                <p>Competition End Date: {props.competition.EndTime}</p>
            </div>
            {(!props.IsSeller)?<button onClick={()=>handleParticipateClicked()}>{ButtonText}</button>:null}
        </div>
        <div>
            <p>{props.competition.Description}</p>
        </div>
    </div>
}

export default CompetitionDetails;