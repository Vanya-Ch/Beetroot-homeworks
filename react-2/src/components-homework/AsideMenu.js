
import dashbord from '../assets/svg/Dashbord.svg'
import sales from '../assets/svg/Sales.svg'
import catalog from '../assets/svg/Catalog.svg'
import news from '../assets/svg/News.svg'


export default function AsideMenu(){
    return(
        <div className="aside-menu">
            <div className="aside-menu__item">
                <div className="aside-menu__svg">
                    <img src={dashbord}/>
                </div>
                <div className="aside-menu__text">
                    Dashboard
                </div>
            </div>
            <div className="aside-menu__item">
                <div className="aside-menu__svg">
                    <img src={news}/>
                </div>
                <div className="aside-menu__text">
                    News
                </div>
            </div>
            <div className="aside-menu__item">
                <div className="aside-menu__svg">
                    <img src={sales}/>
                </div>
                <div className="aside-menu__text">
                    Sales
                </div>
            </div>
            <div className="aside-menu__item">
                <div className="aside-menu__svg">
                    <img src={catalog}/>
                </div>
                <div className="aside-menu__text">
                    Catalog
                </div>
            </div>
        </div>
    )
}