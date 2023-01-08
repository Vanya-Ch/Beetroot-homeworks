import ProfileSvg from "./ProfileSvg"


export default function Header(){
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__content">
                    <div className="header__menu"><span className="header__menu-line"></span></div>
                    <div className="header__logo">~Posters Galore~</div>
                    <ProfileSvg/>
                </div>
            </div>
        </header>
    )
}