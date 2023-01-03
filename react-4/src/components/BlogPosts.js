import {Link} from 'react-router-dom';



function BlogPosts(props){
    return(
        <div>
            {props.posts.map(post=> <article key={post.id}>
                    <h3>
                        {post.title}
                    </h3>
                    <p>
                        {post.description}
                    </p>
                    <Link to={`/blog/${post.id}/test/${post.slug}`}>
                        More
                    </Link>
                </article>)}
        </div>
    ) 
}

export default BlogPosts;