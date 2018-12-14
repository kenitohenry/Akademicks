import React, { Component } from 'react';
import './home.css';
class Home extends Component{
 constructor(){
     super();
     this.state={
    
    }

 }
render(){
 return(
     <div className='home'>
       <img src='/logo/logo.png' alt='logo'height='55' width='300' style={{"margin-top":"50px","position":"static"}}/>
       
       <h2>Find All the Resources you Need to Excel</h2>
       <Quotes/>
       <div className="home-body"  >

       
      
       <p>On this site find the resources you need, no signup required and there is no charge for accesing or distributing the notes found here.&nbsp; Math and Physics dossen't have to be hard, but you have to work hard&nbsp;&nbsp; </p>
             </div>
            </div>
      

    
 )

}


}
const Quotes=function(){
    const quotes=["Pure mathematics is, in its way, the poetry of logical ideas (Albert Einstien)",
        `Do not worry about your difficulties in Mathematics. I can assure you mine are still greater (ALbert Einstien)`,
        "Mathematics takes us still further from what is human, into the region of absolute necessity, to which not only the actual world, but every possible world, must conform. (Bertrand Russell)",
        "Some things that satisfy the rules of algebra can be interesting to mathematicians even though they don't always represent a real situation. (Richard P. Feynman)",
        "Our minds are finite, and yet even in those circumstances of finitude, we are surrounded by possibilities that are infinite, and the purpose of human life is to grasp as much as we can out of that infinitude. (Alfred North Whitehead)",
        "One reason why mathematics enjoys special esteem, above all other sciences, is that its propositions are absolutely certain and indisputable, ... How can it be that mathematics, being after all a product of human thought which is independent of experience, is so admirably appropriate to the objects of reality. (Albert Einstein)"]
   
   let q=quotes[Math.floor(Math.random()*quotes.length)];
   console.log(q);
   return <div className="quote">{q}</div>
}
export default Home;