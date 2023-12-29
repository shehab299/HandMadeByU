import Products from "../../components/Products";
import Data from "./FollowedShop.json";
import CompetitionDetails from "../../components/CompetitionDetails";
import Navbar from "../../components/Navbar";
import style from './Home.module.css';


function Home()
{
    return <> 
        <Navbar/>
        <div className={style.Container}>
        <div>
            <h1>Competitions</h1>
        {(Data.Competitions)?<div>
        {Data.Competitions.map((compitetion,Key)=>{
            return<div key={Key}>
             <CompetitionDetails competition={compitetion} IsSeller={0}/>
             </div>
        })}
        </div>:<p>No Competitions yet</p>}
        </div>
        < Products Products={Data.Products}/>
        </div>
    </>
}

export default Home;