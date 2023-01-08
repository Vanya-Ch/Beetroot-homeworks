import bg from '../assets/image/bg.png'


export default function Main(){
    return(
        <main className="main">
            <div className="main__container">
                <div className="main__content">
                    <img src={bg}/>
                </div>
            </div>
        </main>
    )
}