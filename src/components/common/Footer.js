import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__info">
                    <img className="footer__logo" src='/images/logo.svg' />
                    <div className="company">
                        <div className="company__address">
                            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
                        </div>
                        <div className="company__phones">
                            +7 (3412) 93-88-61, 43-29-29
                        </div>
                        <a href="https://htc-cs.ru/" className="company__cite">htc-cs.ru</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;