function Genre(props) {
    const {icon, name, classGenre} = props.value;
    let className = 'genre';
    if (classGenre) {
        className += ' ' + classGenre;
    }
    return (
        <div className={className}>
            <div className="genre__logo">{icon}</div>
            <div className="genre__name">{name}</div>
        </div>
    )
}

export default Genre;