import logo from "../assets/image/Logo.png"

export default function Logo (){
    return (
        <div className="header__logo">
            <img src={logo} alt="logo" placeholder="logo-1"/>
        </div>
    )
}