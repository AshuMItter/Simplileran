import React from 'react';
import ReactDOM from 'react-dom';
import ComponentStateChild from './componentstatechild';

var ctr = 0;
class ComponentState extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count : 0,
            location : 'Pune'
        };

        
       
    

      this.helloworld = this.helloworld.bind(this);
    }


    Hello(name){
        alert(name);
    }

    helloworld(){
        
       
      //  alert(this.props.name+" "+this.props.age+" "+this.props.location);
      
        this.setState( function(prevState, props) {
                                
            return  { 
                     count : prevState.count+ props.countr,
                     location : 'Delhi'
                    
                    }
                
            
            
        });
              } 
    
    render(){
   
   return( 
     <div>
         {ctr= ctr+1}
         <button id="btn1" onClick={this.helloworld}>
             Clicked {this.state.count} times. {this.state.location}
         </button>
         
         </div>
         
   )

    }
}

ComponentState.defaultProps= {
    countr:5
};
export default ComponentState;
