import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LikeButton from './LikeButton';
import registerServiceWorker from './registerServiceWorker';

// let likeButton=new LikeButton();
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LikeButton  name="haha"/>, document.getElementById('example'));
registerServiceWorker();
// ReactDOM.render(likeButton.render(), document.getElementById('example'));
