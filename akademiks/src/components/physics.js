import React, { Component } from 'react';
import Sidebar from './sidebar';
import { NavLink } from 'react-router-dom';
import './view.css';

class Physics extends Component{
  constructor(props){
    super();
    this.state={
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
    return(<div className='view'>
    <Sidebar selectTopic={this.selectTopic} name={"physics"}/>
    <div className="html-body" dangerouslySetInnerHTML={{__html: this.state.data.content}} />
        
    </div>);
}
}

export default Physics;