import React, { Component } from 'react';
import './App.css';
import Deleted from './Deleted/Deleted';
import Child from './Child/Child';
import View from './View/View';


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



        //console.log(value + " is my value")
        // get index and store item. 
        // and update state with item removed.
        // set item in "deletedItems" array

        //console.log(this.state.deletedItems)

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


