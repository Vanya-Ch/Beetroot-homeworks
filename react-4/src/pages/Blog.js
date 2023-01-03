import BlogPosts from '../components/BlogPosts'

const posts = [
    {
        id:1,
        title: 'Post 1',
        slug:'slug1',
        description: 'First post description'
    },
    {
        id:2,
        title: 'Post 2',
        slug:'slug2',
        description: 'Second post description'
    },
    {
        id:3,
        title: 'Post 3',
        slug:'slug3',
        description: 'Third post description'
    }
]

function Blog(){
    return(
        <section>
            <h2>Blog</h2>
            <BlogPosts posts={posts}/>


        </section>
    )
}

export default Blog;