import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home';
import Admin from './components/admin';
import Math from './components/math';
import Physics from './components/physics';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import './style.css'

class App extends Component {
  render() {
    return (
    
      <BrowserRouter>
        <div className="App">
          <div class="allButFooter">
          <Navbar />
          <Switch >
            <div className="general">
            <Route path="/" component={Home} exact />
            <Route path="/admin" component={Admin} />
            <Route path="/math" component={Math} />
            <Route path="/physics" component={Physics} />
            <Route path="/update" component={Update} />
            </div>
            <Route component={Error1} />
          
          </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

function Error1(){
  return(<div>
   

	<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
      <Link to="/" component={Home} exact > Go to Homepage</Link>
		</div>
	</div>





  </div>)
}
function Update(){
  return (<div className='update'>
    <br/><br/>
  <h1>Page Sucessfully Updated</h1>
  <Link to='/'>Home</Link>
  <hr/>
  <Link to='/admin'>Admin</Link>
  
  </div>)
  
}
 function About(){
   return(
     <div>About</div>
   )
 }
 function Philosophy(){
   return (
  <div>Philosophy</div>
   )

 }