import React, { Component } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component{
  constructor(props){
    super();
    this.state={
     open:window.length>800?true:false,
     content:[],
    }
    this.onOpen=this.onOpen.bind(this);
    this.Select=this.Select.bind(this);
  }
  onOpen(){
    this.setState((prevState)=>({
      open:!prevState.open
    })
    )
  }
   Select(e){
     let id=e;
    //  console.log(id)
     this.props.selectTopic(id)
  }
  componentDidMount(){
    fetch(`/${this.props.name}`)
    .then(response => response.json())
    .then(data => this.setState({ content: data }));
}
render()
{
  
    return(
    <div>
      
      <div style={this.state.open?{"width":"300px"}:{"width":"0px"} }id="mySidenav" class="sidenav">
        
        <OpenClose onOpen={this.onOpen} open={this.state.open}/>
        
        <Displaylinks Select={this.Select} content={this.state.content}/>
      </div>


    </div>);
}
}
 
const OpenClose =(props)=>{
   if(props.open){
   return <div onClick={()=>props.onOpen()} className="close-sidebar"><i class="fas fa-times"></i></div>}
   else {return <div onClick={()=>props.onOpen()} className="open-sidebar"><i class="fas fa-bars"></i></div>
}
}

const Displaylinks=function(props){
  return <div className="sidebar-module">{props.content.map(i=>{
    return(
    <div>
      <div className="dropdown"> <p className="module-header">{i.module} </p>
      <ul className="module-list-topics">
        {i.items.map(item=>{
          return (<li onClick={()=>props.Select(item._id)} key={item._id}>
           {item.topic}
            </li>)
        })}
      </ul>
      </div>
    </div>)
  })
} </div>
}

const orderArray=function(Arr){
 
 let obj=Arr;
  const object=[]  ;
  const modules=obj.map(o=>o.module);
  const module=modules.filter(function(item, pos) {
    return modules.indexOf(item) === pos;
});
 
  module.forEach(function(value){
    let temp =obj.filter(o=> o.module===value);
    object.push({'module':value,items:temp})
    });
return object;
  
}



export default Sidebar;