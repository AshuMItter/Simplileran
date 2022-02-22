import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './firstcomponent';
import Form from './form';

class ComponentStateChild extends React.Component{
    constructor(props){
        super(props);
       
    }
    
    
    render(){
   
   return( 
    <>

       <h1>{this.props.age}</h1>

       <Form  myage={this.props.age} />
       
         </>
         
   )

    }
}

export default ComponentStateChild;
