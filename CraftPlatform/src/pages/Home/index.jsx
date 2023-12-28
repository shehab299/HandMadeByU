import Products from "../../components/Product";
import Data from "./FollowedShop.json";
import CompetitionDetails from "../../components/CompetitionDetails";
import Navbar from "../../components/Navbar";
function Home()
{
    return <> 
        <Navbar/>
        
        {Data.Competitions.map((compitetion,Key)=>{
            return<div key={Key}>
             <CompetitionDetails competition={compitetion}/>
             </div>
        })}
        < Products Products={Data.Products}/>
    </>
}

export default Home;