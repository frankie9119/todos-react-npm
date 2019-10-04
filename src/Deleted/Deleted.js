import React from 'react';
import x from './x.png';

class Deleted extends React.Component {

    render() {

        return (
            <div className="deleted">
            <h2>To Do Completed</h2>
         <ul>
           {

                this.props.todosDeleted.map((item,index)=>{
                      
                      return <li key={index}> {item} 
<a href="#" onClick={()=>this.props.moveToTrash(item,index)}> 
                      &nbsp;
<img src={x} className="X" alt="x" />
                      </a>
                      </li>
                })
           }
           
         </ul>         
        </div>
        )
    }
}

export default Deleted;