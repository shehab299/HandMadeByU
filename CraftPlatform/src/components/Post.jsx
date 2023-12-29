import { useState } from "react";
import Comments from "./Comment";
import post from "./Post.json";

function Post()
{
    const [LikeButton,setLikeButton]=useState("Like");

    function handleClick()
    {
        (LikeButton=="Like")?setLikeButton("Liked"):setLikeButton("Like")
    }
    return <div>
        <div>
            <img src={post.Logo}/>
            <p>{post.shop_Name}</p>
        </div>
            <p>{post.Content}</p>
        {
            post.Attachments.map((attachment,index)=>
                {
                    return <div key={index}>
                        <img src={attachment}/>
                    </div>
        })}
        <button onClick={()=>handleClick()}>{LikeButton}</button>
        <Comments comments={post.Comments}/>
    </div>
}
export default Post;