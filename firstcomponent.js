import React from 'react';
import ReactDOM from 'react-dom';
import SecondComponent from './secondcomponent';
import ThirstComponent from './thirdcomponent';
import FirstComponent1 from './firstjsxcomponent';
import {Link} from 'react-router-dom';
import './bootstrap.css'

//var val = <h1> Hello World</h1>
class FirstComponent extends React.Component{
    

    render(){
  
        return (
            
                     <div>
                         <p>
                             {this.props.myage}
                         </p>
                         <ul class="nav justify-content-center nav-tabs">
  <li class="nav-item ">
  <Link to="hello">Form</Link>
  <p></p>
  </li>
  <li class="nav-item">
  <Link to="third">Else</Link>
  </li>
  <li class="nav-item">
  <Link to="events">And Else</Link>
  </li>
  <li class="nav-item">
  <Link to="form">Even And Elses</Link>
  </li>
</ul>
                        
                      </div>
                          

           
       
        )
            
    }
}

export default FirstComponent;