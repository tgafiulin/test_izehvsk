import './Comment.css'
import Comment from './Comment'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'

function CommentList (props) {
    const [textComment, editComment] = useState('')
    const [label, editLabel] = useState('')
    const comments = props.comments
    const movie = props.movie
    const login = useSelector(state => state.login.login)
    const firestore = useFirestore()

    const addComment = (e) => {
        e.preventDefault();
        if (login) { 
            if (textComment) {
                const newComment = {
                    id: movie.highCommentId + 1,
                    login: login,
                    text: textComment
                }

                let newComments = [newComment, ...movie.comments]

                updateCommentToFireStore(newComments)
                editComment('')
                editLabel('')
            } else {
                editLabel('Нельзя отправить пустой комментарий')
            }
        } else {
            editLabel('Для добавления комментария необходимо авторизоваться')
        }
    }

    const deleteComment = (id, e) => {
        e.preventDefault(); 
        let newComments = movie.comments.filter((comment) => id !== comment.id);

        updateCommentToFireStore(newComments)
    }
    
    function updateCommentToFireStore (newComments) {
        let db = firestore.collection('movies').doc(movie.id)
        db.update({
            comments: newComments, 
            highCommentId: movie.highCommentId + 1
        })
    }

    return (
        <div className="comments">
            <h2 className="comments__title">Комментарии</h2>
            <div className="comments__header">
                <label htmlFor="comment" className="comments__label">{label}</label>
                <textarea id="comment" rows="5" onChange={(e) => editComment(e.target.value)} className="comments__input" value={textComment} />
                <div className="btn" onClick={addComment}>Опубликовать</div>
            </div>
            {comments.map((comment) =>
                <Comment 
                    owner={(comment.login === login) ? true : false}
                    key={comment.id}
                    handleClick={deleteComment}
                    value={comment} 
                />
            )}
        </div>
    )
}

export default CommentList