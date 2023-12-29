import comments from './Comments.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from "../pages/product/review.module.css"
function Comments(props)
{
    return<>
    {props.comments.map((comment)=>{
    return <div key={comment.CommentId} className={styles.container}>
        <div className={styles.userInfo}>
            <FontAwesomeIcon icon={faUser} className={styles.UserIcon}/>
            <p>{comment.customerName}</p>
        </div>
        <p>{comment.content}</p>
    </div>
    })}
    </>
}
export default Comments;