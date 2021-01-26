import './Header.css'
import Search from './Search'
import AuthHeader from './AuthHeader'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__info">
                    <div className="logo">
                        <img src='/images/sign.svg' alt="Logo" className="logo__img" />
                        <div className="logo__name">Видеосервис</div>
                    </div>
                    <Search />      
                    <AuthHeader />              
                </div>
            </div>
        </header>
    );
}

export default Header;