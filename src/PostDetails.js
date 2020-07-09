import React, {Component}  from'react';
import Axios from 'axios';



class PostDetalis extends Component{
            constructor(props){
                super(props);
                this.state={
                    subposts:{}
                }
            }
            componentDidMount(){
                Axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
                .then(response => this.setState({subposts:response.data}));
            }
            render(){
                console.log("post details" ,this.props);
               
               return(
                   <>
                   <h1>post details page</h1>
                   <p>{this.state.subposts.id}</p>
                   <p>{this.state.subposts.userId}</p>
                   <p>{this.state.subposts.title}</p>
                   <p>{this.state.subposts.body}</p>
                   </>
               ); 
                
            }
}
export default PostDetalis;