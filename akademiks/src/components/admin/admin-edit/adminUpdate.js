import React, { Component } from 'react';
import './adminCreate.css';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


class AdminUpdate  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.handleDelete=this.handleDelete.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    updateContent = (value) => {
      this.setState({content:value})
  }
  /**
   * @property Jodit jodit instance of native Jodit
   */
jodit;
setRef = jodit => this.jodit = jodit;

config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  "uploader": {
    "insertImageAsBase64URI": true
  }
}
  handleSubmit(e){
    e.preventDefault();
    
  }
  handleDelete(){
      fetch(`/delete/${this.state.id}`)
      .then(response=>response.json())
      .then(data=>this.setState(data))

  }
  handleUpdate(e){
      this.setState({[e.target.name]:[e.target.value]})
  }
componentDidMount(){
    const {id}=this.props.location.state;
    const {subject}=this.props.location.state;
    this.setState({subject:subject})
    let url =`/${subject}/${id}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({module:data[0].module,
                               id:data[0].items[0]._id,
                               content:data[0].items[0].content,
                               topic:data[0].items[0].topic,}))
    // .catch(err=>console.log(err))
}
  render() {
      return (
      
     
     <div className="admin-create">
         <header>Create New Post</header>   
         <button onClick={this.handleDelete}>Delete Post!</button>
         <p id="create-descriptor">Update an  Exsisting Article</p>
          <div class="container">
  <form action="/update" method="post">
  <input type="text" value={this.state.id} name="id" style={{"display":"none"}}/>
  <ul>
  <li>
  <label className="align" htmlFor="dropdown-subject">
    Subject </label>
  <select name="subject" id="dropdown-subject" >
  <option value={this.state.subject}>Select Subject</option> 
    <option value="math">Mathematics</option>
    <option value="physics">Physics</option>
   
  </select>
 
    </li>
    <li>
  <label className="align" id="module-label" htmlFor="module">
    Module:   </label>
      <input id="topic" onChange={this.handleUpdate} value={this.state.module} name="module" placeholder="Proofs.." type="text" required/>

    </li>

<li>
  <label className="align" id="topic-label" htmlFor="topic">
    Topic:  </label>
      <input type="text" onChange={this.handleUpdate} value={this.state.topic} id="topic" name="topic" placeholder="Algebraic proofs" required />
 
    </li>

  
  
    <li><textarea style={{"display":"none"}} id="comments" name="content"  placeholder="type whatever here" value={this.state.content}></textarea>
    </li>  
      
    {/* <li><label>File</label> <input type="file" /></li> */}
    </ul>
    
         <input type="submit" onSubmit={this.handleSubmit} value="Update"/>
    
  </form>
  <JoditEditor
           editorRef={this.setRef}
           value={this.state.content}
           config={this.config}
           onChange={this.updateContent}
          />
</div>
</div>

   
      );
  }
}




export default AdminUpdate;