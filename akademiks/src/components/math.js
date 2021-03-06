import React, { Component } from 'react';
import Sidebar from './sidebar';
import { NavLink } from 'react-router-dom';
import './view.css';

class Math extends Component{
  constructor(props){
    super();
    this.state={
      show:true,
      data:[],
    }
    this.selectTopic=this.selectTopic.bind(this);
  }
  selectTopic(id){
    console.log(id)
    fetch(`/math/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ data: data[0].items[0] }));
    
  }
render()

{
  console.log(this.state.data)
  
      return(<div className='view'>
        <ul>
        <li><Sidebar selectTopic={this.selectTopic} name={"math"}/></li>
        <div className="html-body" dangerouslySetInnerHTML={{__html: this.state.data.content}} />
        <Info show={this.state.show}/>
        </ul>
    </div>);
}

}
export default Math;

function Info(props){
  if(props.show){
    return  <div className="view" style={{"padding-left":"20px"}}>

  <h2> All you need to Know about Math</h2>
  <p> click on the <i class="fas fa-bars"></i> to find lessons or browse below to see Math Applications in society</p>
  <article> Are you afraid of this subject? dont be, like most other things in human history
    it arrose becasue of problems we had as humans. Look below on topics that may make you want to revise your perception of this subject
  </article>
  <h4>Math not discussed in class</h4>
  <iframe src="https://www.listennotes.com/embedded/e/67a7ceff95614b4ab04997fe43d06e72" height="270px" width="400px" frameborder="0" scrolling="no"></iframe>
   <iframe src="https://www.listennotes.com/embedded/e/c87892c783624fbeaf7ce0a4012347d5" height="270px" width="400px" frameborder="0" scrolling="no"></iframe>   </div>
  }
  return null;
}