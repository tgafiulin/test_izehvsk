import { Link } from "react-router-dom";

function Movie(props) {
    const {id, imgSrc, name, desc} = props.value;
    const url = `/movie/${id}`;
    return (
        <Link to={url}>
        <div className="movie">
            <div className="movie__info">
                <img src={imgSrc} alt="" className="movie__img" />
                <div className="movie__desc">{desc}</div>
            </div>
            <div className="movie__name">{name}</div>
        </div>
        </Link>
    )
}

export default Movie;