import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Comment } from "./Comment";
import styles from "./Feedback.module.css";




export function Feedback() {

    const [comments, setComments] = useState([
        'Mano, gostei muito, trouxe varias curiosidades legais'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event : FormEvent) {
        event.preventDefault()
    
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }
    

    function hadleNewCommentchange(event : ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <section className={styles.wrapper}>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder="Deixe seu comentario..."
                    onChange={hadleNewCommentchange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />


                <div className={styles.focusButtonVisible}>
                    <button type="submit" disabled={ isNewCommentEmpty }>Enviar</button>
                </div>
            </form>

            <div>
                {comments.map(item => {
                    return (
                        <Comment
                            key={item}
                            content={item}
                        />
                    )
                })}
            </div>
        </section>
    )
}