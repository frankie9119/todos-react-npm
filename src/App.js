import React, { Component } from 'react';
import check from './check-green.png';
import x from './x.png';
import './App.css';


class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: " ",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({ value: event.target.value });

    }


    render() {

        return (
            <div className="child">
            <h1>To Do:</h1>
          <form onSubmit = {(event)=> { 
              this.props.formSubmit(event, this.state.value); 
              this.setState({value:""})
            }}>

          <input type="text" onChange={this.handleChange} value = {this.state.value}/>
          <input type="submit"/>
          </form>
        </div>
        )
    }
}




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




class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: [],
            deletedItems: []

        }

        this.formSubmit = this.formSubmit.bind(this)


    }

    formSubmit(event, data) {
        event.preventDefault()
        console.log(data);
        this.setState({
            formData: [...this.state.formData, data]
        })

    }

    moveToDeleted = (value, index) => {
        console.log("test moveToDeletedFunction")


        this.setState({
            formData: this.state.formData.filter((_, i) => i !== index),
            deletedItems: [...this.state.deletedItems, value]
        });



        console.log(value + " is my value")
        // get index and store item. 
        // and update state with item removed.
        // set item in "deletedItems" array

        console.log(this.state.deletedItems)

    }

    moveToTrash = (item, index) => {
            console.log('tove to trashFunction')
            this.setState({
              deletedItems: this.state.deletedItems.filter((_,i)=> i !== index)
            })
        }


    render() {
        return (
            <div className="app">

              <Child formSubmit = {this.formSubmit} />

               <View todos = {this.state.formData} moveToDeleted = {this.moveToDeleted}/>

               <Deleted todosDeleted = {this.state.deletedItems} moveToTrash = {this.moveToTrash}/>

            </div>
        );
    }
}






export default App;