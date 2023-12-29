import Products from "../../components/Products";
import Data from "./FollowedShop.json";
import CompetitionDetails from "../../components/CompetitionDetails";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import api from "../../services/api.js"


function Home()
{
    const [loading, setLoading] = useState(true);
    const [competitions, setCompetitions] = useState([]);
    const [products , setProducts] = useState([]);
  
    
    const getComptetions = async () => {
        const response = await api.getCompetions();
        if(response.data){
            setCompetitions(response.data);
        }
    }

    const getProducts = async () => {
        const response = await api.getProducts();
        if(response.data){
            setProducts(response.data);
        }
    }
    
    //RETRIVING DATA FROM API
    useEffect(() => {
        setLoading(true);
        getComptetions();
        getProducts();
    }, []);
    
    return <> 
        <Navbar/>
        
        {competitions.map((compitetion,Key)=>{
            return<div key={Key}>
             <CompetitionDetails competition={compitetion} IsSeller={0}/>
             </div>
        })}

        < Products Products={products} IsSeller={0}/>
    </>
}

export default Home;