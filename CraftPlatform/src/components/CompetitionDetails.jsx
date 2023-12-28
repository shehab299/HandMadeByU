/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
//import style from "./Competition.module.css"
function CompetitionDetails(props)
{
    return <div>
        <div>
            <div>
                <h2>{props.competition.Title}</h2>
                <p>Competition End Date: {props.competition.EndTime}</p>
            </div>
            <button>Participate</button>
        </div>
        <div>
            <p>{props.competition.Description}</p>
        </div>
    </div>
}

export default CompetitionDetails;