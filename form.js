import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';


class Form extends React.Component{

    constructor(){
        super();
        this.state ={value:' '}
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

   handlechange(event){
    this.setState(function(preState,prop){
       return {
           value : event.target.value
       }
    })
   }
   handlesubmit(event){
 //   event.preventDefault();
     alert(this.state.value);
   }


    render(){
         return   (
           <div>
 <div>{this.props.myage}</div>
<form action="https://www.google.com/search?">
  <label>
    Name:
    <input type="text" name="q" onChange={this.handlechange} />

  </label>
  <input type="submit" value="Submit" onClick={this.handlesubmit} />
</form>
</div>
             )


    }
}
export default Form;