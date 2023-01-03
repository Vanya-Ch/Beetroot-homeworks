import {useParams} from 'react-router-dom';

function BlogItem(){
    const {id, slug} = useParams();
    console.log(id, slug)
    return <div>Blog item id {id} slug is {slug}</div>
}

export default BlogItem