import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../app/modalReducer'
import { editLogin } from '../../app/loginReducer'

function Header(props) {
    const login = useSelector(state => state.login.login)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login.length ? dispatch(editLogin('')) : dispatch(openModal())
    }

    let authHeader 
    if (login.length) {
        authHeader = <div className="auth-header">
                        <div className="auth-header__login">{login}</div>
                        <button className="btn btn--close" onClick={handleClick}>
                            Выйти
                        </button>
                    </div>
    } else {
        authHeader = <div className="auth-header">
                        <button className="btn" onClick={handleClick}>
                            Войти
                        </button>
                    </div>
    }  

    return (
        <header className="header">
            <div className="container">
                <div className="header__info">
                    <div className="logo">
                        <img src='/images/sign.svg' alt="Logo" className="logo__img" />
                        <div className="logo__name">Видеосервис</div>
                    </div>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Поиск..." />
                        <button className="search__btn">Найти</button>
                    </div>
                    { authHeader }
                    
                </div>
            </div>
        </header>
    );
}

export default Header;