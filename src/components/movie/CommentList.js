import './Comment.css'
import Comment from './Comment'
import { useState } from 'react'
import { updateComment } from '../../app/movieReducer'
import { useSelector, useDispatch } from 'react-redux'

function CommentList (props) {
    const [textComment, editComment] = useState('')
    const comments = props.comments
    const movie = props.movie
    const login = useSelector(state => state.login.login)

    const dispatch = useDispatch();

    const addComment = (e) => {
        e.preventDefault();
        if (textComment) {
            const newComment = {
                id: movie.highCommentId + 1,
                login: login || 'Неизвестный',
                text: textComment
            }

            let newComments = [newComment, ...movie.comments]

            dispatch(updateComment(Object.assign({}, movie, {comments:newComments, highCommentId: movie.highCommentId + 1})))
            editComment('');
        }
    }

    const deleteComment = (id, e) => {
        e.preventDefault(); 
        let newComments = movie.comments.filter((comment) => id !== comment.id);

        dispatch(updateComment(Object.assign({}, movie, {comments:newComments})))
    }

    return (
        <div className="comments-container">
            <div className="comments-header">
                <textarea rows="5" onChange={(e) => editComment(e.target.value)} className="comments-input" value={textComment} />
                <div className="btn" onClick={addComment}>Опубликовать</div>
            </div>
            {comments.map((comment) =>
                <Comment 
                    owner={comment.login === login ? true : false}
                    key={comment.id}
                    handleClick={deleteComment}
                    value={comment} 
                />
            )}
        </div>
    )
}

export default CommentList