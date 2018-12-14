import React, { Component } from 'react';
import "./admin-sidebar.css";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
class AdminSidebar  extends Component {
 constructor(){
     super();
    this.state={ 
 
        open:window.length>800?true:false,
    }
    this.onOpen=this.onOpen.bind(this);
}
    onOpen(){
        this.setState((prevState)=>({
          open:!prevState.open
        })
        )
      }
    render(){
      return <div  className="sidenav-admin" style={this.state.open?{"width":"300px"}:{"width":"0px"} }id="mySidenav" class="sidenav">
          <ul>
          <OpenClose onOpen={this.onOpen} open={this.state.open}/>
        
              {/* <li>Post</li> */}
             <Link to="/admin/home"><li>Home</li></Link>
              {/* <li>Anouncements</li> */}


          </ul>


        </div>
    }

}
 export default AdminSidebar;
 const OpenClose =(props)=>{
    if(props.open){
    return <div onClick={()=>props.onOpen()} className="close-sidebar"><i class="fas fa-times"></i></div>}
    else {return <div onClick={()=>props.onOpen()} className="open-sidebar"><i class="fas fa-bars"></i></div>
 }
 }