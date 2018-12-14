import React, { Component } from 'react';
import './admin.css';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import AdminSidebar from './admin/admin-sidebar';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import AdminHome from './admin/admin-edit/adminHome';
import AdminCreate from './admin/admin-edit/adminCreate';
import AdminUpdate from './admin/admin-edit/adminUpdate';

class Admin  extends Component {
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
      
      <div className="create-class">
       {/* <AdminSidebar/> */}
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminHome} exact />
          <Route path="/admin/create" component={AdminCreate} />
          <Route path="/admin/update" component={AdminUpdate} />
        </Switch>
      </BrowserRouter>
    
          </div>
      );
  }
}




export default Admin;