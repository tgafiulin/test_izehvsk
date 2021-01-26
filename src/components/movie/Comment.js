function Comment (props) {
    const comment = props.value
    const owner = props.owner

    const removeBtn = owner ? <div className="remove-btn" onClick={(e) => props.handleClick(comment.id, e)}></div> : ''
    return (
        <div className="comment">
            { removeBtn }
            <div className="comment__login">{comment.login}</div>
            <div className="comment__text">{comment.text}</div>
        </div>
    )
}

export default Comment