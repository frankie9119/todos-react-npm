import React from 'react';
import check from './check-green.png';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDeleted: []
        };
    }


    render() {


        return (
            <div className="view">
            <h2>To Do List:</h2>
         <ul>
           {

                this.props.todos.map((val,index)=>{
                      return <li key={index}> {val} 
                      <a href="#" onClick={()=>this.props.moveToDeleted(val,index)}> 
                      &nbsp;
<img src={check} className="Check" alt="check" />
                      </a>
                      </li>
                })
           }
         </ul>
         </div>
        )
    }

}

export default View;