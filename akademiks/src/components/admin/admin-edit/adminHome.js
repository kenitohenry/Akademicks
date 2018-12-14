import React, { Component } from 'react';
import './adminHome.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

class AdminHome  extends Component {
    constructor(props) {
        super(props);
        this.state = {
          subject:"",
            content: '',
            data:[],
        }
        this.selectSubject=this.selectSubject.bind(this);
        this.selectTopicToUpdate=this.selectTopicToUpdate.bind(this);

          }

          selectSubject(e){
              let subject= e.target.value
              this.setState({subject:subject})
            // console.log(subject)
            fetch(`/${subject}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
            
          }
         selectTopicToUpdate(e){
           
         }

  render() {
      return (
      
      <div className="admin-home">
         <form  >
            <h2>Select Subject to Edit or click the <i class="fa fa-file new-file" aria-hidden="true" ></i>
       to create new </h2>
             <label htmlFor="subject" style={{"font-size":"20px"}}> Math <input onChange={this.selectSubject} type="radio" name="subject" value="math" /></label>
             <label htmlFor="subject" style={{"font-size":"20px"}}> Physics <input onChange={this.selectSubject} type="radio" name="subject" value="physics"/></label> 
             {/* <input type="submit" value="Find"/> */}
         </form>
         <Link to="/admin/create">
          
           <i class="fa fa-file new-file" aria-hidden="true" ></i>
         </Link>
         <h3>Then Select a topic to edit</h3>
         <div className="">{this.state.data.map(i=>{
    return(
    <div>
      
      <div className="card-containers"> <p className="card-module">{i.module} </p>
      <ul className="module-topics">
        {i.items.map(item=>{
          return (<li /* onClick={()=>this.Select(item._id)} */ className="card" key={item._id}>
           <Link to={{pathname:'/admin/update', state:{subject:this.state.subject, id:item._id}}}> {item.topic} </Link>
            </li>)
        })}
      </ul>
      </div>
    </div>)
  })
} </div>
          </div>
      );
  }
}




export default AdminHome;