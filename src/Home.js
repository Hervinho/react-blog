import { useState, useEffect } from 'react'; //hook for reactive value
import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = () => {
    //lto modify data dynamically (data binding)
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);
    //const [blogs, setBlogs] = useState(null);
    //const [isPending, setIPending] = useState(true); //for conditional loading
    //const [error, setError] = useState(null);
    const title = "Home Page";

    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    const click = () => {
        //name = 'Luigi';
        setName('Luigi');
        setAge(30);
        console.log(`Hello ${name}, your age is ${age}`);
    };
    

    return (
        <div className="home">
            <h2>{ title }</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ click }>Click Me</button>
            <br></br>
            <button onClick={ () => { setName('Yoshida') } }>Change Name</button>

            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All blogs"/>} {/* show if blogs exists */}

            
        </div>
    );
};

export default Home;