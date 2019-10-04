import React from 'react';

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

export default Child;