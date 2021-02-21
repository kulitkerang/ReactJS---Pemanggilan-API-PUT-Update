import React, { Component } from 'react';
import Blogpost from '../Blogpost/Blogpost';

class Home extends Component {
    render(){
        return(
            <div>
                <p>Blogpost</p>
                <hr/>
                <Blogpost />    
            </div>
        )
    }
}



export default Home;