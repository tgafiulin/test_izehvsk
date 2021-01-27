function Comment (props) {
    const comment = props.value
    const owner = props.owner
    
    return (
        <div className="comment">
            { owner ? <div className="remove-btn" onClick={(e) => props.handleClick(comment.id, e)}></div> : '' }
            <div className="comment__login">{comment.login}</div>
            <div className="comment__text">{comment.text}</div>
        </div>
    )
}

export default Comment