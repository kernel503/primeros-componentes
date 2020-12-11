import React, { Component } from 'react';
import './App.css';

/*

const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  return <button onClick={greetPeople}> </button>
}

class App extends Component {
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  render() {
    return <button onClick={this.greetPeople}> </button>
  }
}

class Eventos extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      </div>      
    )
  }
}
*/

const Eventos = () => {
  const greetPeople = (e, value) => {
    console.log(value)
    alert('Welcome to 30 Days Of React Challenge')
  }
  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5, 6].join(', ')}
      </div>
      <button onClick={(e) => greetPeople(e, 'Pasar datos')}>Touch Me</button>
    </div>
  )
}

class App extends Component {
  state = {
    firstName: '',
    message: '',
    key: '',
    countrySelected: ['Chile'],
  }

  handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: 'Welcome to the world of events',
    })
  }

  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
    this.setState({ message: 'mouse is moving' })
  }

  // to get value when an input field changes a value
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }
  // Blurring happens when a mouse leave an input field
  handleBlur = (e) => {
    this.setState({ message: 'Input field has been blurred' })
  }
  // This event triggers during a text copy
  handleCopy = (e) => {
    this.setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cancelado el evento")
  }

  handleOnChange = (e, a) => {
    console.log(a)
    const { value } = e.target
    this.setState({
      message:
        `${value} `,
    })
  }

  multipleSelect = (e) => {
    console.log(e.target.selectedOptions, e.target, e.target.options)
    let selected = []
    for (e of e.target.selectedOptions) {
      console.log(e.value)
      selected.push(e.value)
    }
    //this.setState({countrySelected:[...e.target.selectedOptions].map(e => e.value)})
    this.setState({ countrySelected: selected })
  }

  notDelete = (e) => {
    //e.preventDefault()
    //alert("hi")
  }

  render() {
    return (
      <div>
        <div className="select is-multiple mt-5">
          <select multiple size="5" value={this.state.countrySelected} onChange={this.multipleSelect} onMouseDown={this.notDelete}>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>
        <div className="mt-5">
          {this.state.countrySelected.join(', ')}
        </div>
      </div>
    )
  }
}


/*
          <select multiple size="5" onChange={(e) => this.multipleSelect(e)}>

        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>

        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{this.state.message}</p>

        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        <input type='text' onChange={(e) => this.handleOnChange(e, 'sector')} />
        <br />

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={this.handleBlur} />


        <select multiple>
          {[1, 2, 3, 4, 5, 6].map((option) => <option onChange={(e) => this.handleOnChange(e, 'lista')} key={option} value={option}>{option}</option>)}
        </select>


        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onChange={this.handleChange}
              name='firstName'
              value={this.state.value}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>


*/

export { Eventos, App };
