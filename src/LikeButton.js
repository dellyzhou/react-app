import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends Component{
    constructor(){
        super();
        this.liked=true;
       this.handleClick=this.handleClick.bind(this);
        this.text=this.liked ? '李瑞是傻吊' : '李瑞是超级大傻吊';
    }
    handleClick(props){
        this.text=this.liked ?  '李瑞是超级大傻吊':'李瑞是傻吊' ;
        this.liked=!this.liked;

        ReactDOM.render(<LikeButton  name="haha"/>, document.getElementById('example'));
    }
    render(){

        return (
            <button onClick={this.handleClick} name="hahhahaa">{this.text}
                {/*You {this.text} this. Click to tog.*/}
            </button>
        )
    }
}

export default LikeButton;
