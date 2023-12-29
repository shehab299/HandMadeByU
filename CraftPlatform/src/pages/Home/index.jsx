import Products from "../../components/Products";
import Data from "./FollowedShop.json";
import CompetitionDetails from "../../components/CompetitionDetails";
import Navbar from "../../components/Navbar";

function Home()
{
    return <> 
        <Navbar/>
        
        {Data.Competitions.map((compitetion,Key)=>{
            return<div key={Key}>
             <CompetitionDetails competition={compitetion} IsSeller={0}/>
             </div>
        })}
        < Products Products={Data.Products}/>
    </>
}

export default Home;