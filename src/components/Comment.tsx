import { HeartStraight } from "phosphor-react";
import { useState } from "react";
import styles from "./Comment.module.css";

interface CommentsProps {
    content: string
}

export function Comment(props : CommentsProps ) {
    const [countLike, setCountLike] = useState(0)

    function handleNewStyleButtonLike() {
       setCountLike((count) => {
        return count + 1
       })
    }

    function handleNewStyleButtonLikeTwo() {
        setCountLike((count) => {
         return count - 1
        })
     }

   return(
        <div className={styles.comment}>
            <p>{props.content}</p>
            <div className={styles.likeBox}>
                <strong>{countLike}</strong>
                <button 
                    className={styles.buttonLike} 
                    onClick={ countLike == 1 ? handleNewStyleButtonLikeTwo : handleNewStyleButtonLike  } 
                >
                    <HeartStraight className={styles.like}  size={32}/>
                </button>
            </div>
        </div>
   )
}