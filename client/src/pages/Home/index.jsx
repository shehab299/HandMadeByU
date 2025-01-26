import Products from "../../components/Products";
import Data from "./FollowedShop.json";
import CompetitionDetails from "../../components/CompetitionDetails";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import api from "../../services/api.js"

import { useAuthContext } from "../../hooks/useAuthContext.jsx";

import style from './Home.module.css';
import ShopPosts from "../../components/ShopPosts";



function Home(props)
{
    const [loading, setLoading] = useState(true);
    const [competitions, setCompetitions] = useState([]);
    const [products , setProducts] = useState([]);
    const [shopId , setShopId] = useState(null);
    const [createdShop] = useState(false);
    const id = useAuthContext().userId;
    
    const getComptetions = async () => {
        const response = await api.getCompetions();
        if(response.data){
            setCompetitions(response.data);
        }
    }

    const getShop = async () => {
        const response = await api.getShop(id);
        if(response.data){
            setShopId(response.data.SID);
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
        getShop();
    }, []);



    return <> 

        <Navbar createdShop={Boolean(shopId)}/>
        <Navbar/>

        
        {competitions.map((compitetion,Key)=>{
        <Navbar createdShop={props.createdShop}/>
        <div className={style.Container}>
        <div>
            <h1>Competitions</h1>
        {(Data.Competitions)?<div>
        {Data.Competitions.map((compitetion,Key)=>{
            return<div key={Key}>
             <CompetitionDetails competition={compitetion} IsSeller={0}/>
             </div>
        })}


        < Products Products={products} IsSeller={0}/>

        </div>:<p>No Competitions yet</p>}
        </div>
        < Products Products={Data.Products}/>
        </div>
        <ShopPosts/>

    </>
}

export default Home;