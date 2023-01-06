import NewsPost from "./NewsPost"

const news = [
    "Текст наповнено ",
    "за допомогою ",
    "масиву з використанням map "
  ]

export default function News (){
    return (
        <div className="main__news">
            News
            <div className="main__news-post">
                {news.map((index) =>
                    <NewsPost key={index} news={news}/>)
                }


                
            </div>
        </div>
    )
}