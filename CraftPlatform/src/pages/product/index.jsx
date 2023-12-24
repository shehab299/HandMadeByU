import Review from "./review";
import reviewsData from "./reviews.json"
import Navbar from "../../components/Navbar";

function Product() {
    return (  
    <div>
        <Navbar />
        <div className = "productInfo">
            <h2>shop name</h2>
            <p>product name</p>
            <p>price</p>
            <p>product description</p>
        </div>
        <div className="productPhoto">
        </div>
        {
            reviewsData.map((reviewObj, index) => (
                <Review reviewObj = {reviewObj} key = {index}/>
            ))
        }
    </div>
    );
}

export default Product