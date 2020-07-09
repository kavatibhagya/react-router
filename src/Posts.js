import React, {Component}  from'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


class Posts extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({posts:response.data}));
    }
    render(){
        const posts = this.state.posts.map((post) =>{
        return <Link to = {`posts/${post.id}`}><p>{post.title}</p></Link>
        });
        return (
                 <div>
                     <h1>Posts page</h1>
                     {posts}
                 </div>
        );
    }
}

export default Posts; 