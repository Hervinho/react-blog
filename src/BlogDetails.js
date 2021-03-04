import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
const { id } = useParams(); // garb route parameters
const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();

const handleClick = () => {
  fetch('http://localhost:8000/blogs/' + blog.id, {
    method: 'DELETE'
  }).then(() => {
    console.log('Blog deleted');
    history.push('/');
  }) 
}

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div> }
      { blog && (
          <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
              <button onClick={handleClick}>delete</button>
          </article>
      ) } 
    </div>
  );
}
 
export default BlogDetails;