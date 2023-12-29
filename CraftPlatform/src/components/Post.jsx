import { useState } from "react";
import Comments from "./Comment";
import style from "./Post.module.css"

// import post from "./Post.json";

function Post(props)
{
    let post=props.post;
    const [LikeButton,setLikeButton]=useState("Like");
    const [inputComment,setinputComment]=useState(0);

    function handleLikeClick()
    {
        (LikeButton=="Like")?setLikeButton("Liked"):setLikeButton("Like")
    }

    function handleCommentClick()
    {
        setinputComment(1);
    }
    
    function hadleAddClick()
    {
        setinputComment(0);
    }

    return <div>
        <div className={style.ShopInfo}>
            <img src={post.Logo} className={style.Logo}/>
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
        <button className="blackBtn" onClick={()=>handleLikeClick()}>{LikeButton}</button>
        <button className="blackBtn" onClick={()=>handleCommentClick()}>Add Comment</button>
        {
            (inputComment)?<div>
            <input type="text" placeholder="Add Comment"/>
            <button onClick={()=>hadleAddClick()}>Add</button>
            </div>:null
        }
        <Comments comments={post.Comments}/>
        </div>:null
        }
    </div>
}
export default Post;