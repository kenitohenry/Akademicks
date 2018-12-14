import React, { Component } from 'react';
import './adminCreate.css';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


class AdminCreate  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: '',
        }
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

  render() {
      return (
      
     
     <div className="admin-create">
         <header>Create New Post</header>   
         <p id="create-descriptor">Create new post, be sure to fill out all the fields to allow ease of access</p>
          <div class="container">
  <form action="/create" method="post">
  <ul>
  <li>
  <label className="align" htmlFor="dropdown-subject">
    Subject </label>
  <select name="subject" id="dropdown-subject">
    <option value="math">Mathematics</option>
    <option value="physics">Physics</option>
   
  </select>
 
    </li>
    <li>
  <label className="align" id="module-label" htmlFor="module">
    Module:   </label>
      <input id="topic" name="module" placeholder="Proofs.." type="text" required/>

    </li>

<li>
  <label className="align" id="topic-label" htmlFor="topic">
    Topic:  </label>
      <input type="text" id="topic" name="topic" placeholder="Algebraic proofs" required />
 
    </li>

  
  
    <li><textarea style={{"display":"none"}} id="comments" name="content"  placeholder="type whatever here" value={this.state.content}></textarea>
    </li>  
      
    {/* <li><label>File</label> <input type="file" /></li> */}
    </ul>
    
         <input type="submit" onSubmit={this.handleSubmit} value="Submit"/>
    
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




export default AdminCreate;