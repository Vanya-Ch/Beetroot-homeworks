import BlogPost from "./BlogPost"

export default function Blog (){
    return (
        <div className="main__blog">
            <div className="main__blog-title">Blog</div>
            <div className="main__blog-post">
            <BlogPost text="Наповненно"></BlogPost>
            <BlogPost text="за"></BlogPost>
            <BlogPost text="допомогою"></BlogPost>
            <BlogPost text="пропсів"></BlogPost>
            </div>
            
        </div>
    )
}