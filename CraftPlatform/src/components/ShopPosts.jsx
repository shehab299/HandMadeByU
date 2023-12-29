import shopposts from './ShopPosts.json';
import Post from './Post';
import style from "./Post.module.css"

function ShopPosts()
{
    return <div>
    {shopposts.map((post1)=>{
      return <div className={style.container}>
      <Post key={post1.postID} post={post1} ShowComments={0}/>
      <button>Edit</button>
      </div>
    })}
    </div >
}
export default ShopPosts;