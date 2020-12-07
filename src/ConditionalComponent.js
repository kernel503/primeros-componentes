//import React from 'react';
import React from 'react';
import './App.css';
import { Component } from 'react';


/*
Se puede considcionar pero la operacion debe ir antes del render
Se puede condicionar componentes y tuilizar operador ternario en el texto


Este operador puede estar en la parte del render
The && operator render the right JSX operand if the left operand(expression) is true.

En la parte de Render se mete la logica y los componentes condicionados
En el Return ya va los componentes renderizados

Cuando se cambia el estado vuelve a ejecutar tla parte del Render


Para no agregar parent innecesarios similar al template de VUE SIN SER ANIDADOS
<Fragment>
</Fragment>
<React.Fragment>
</React.Fragment>


En los eventos ya va el evento en la variable e

<> </> -> Para las ultimas versiones

*/

class Header extends Component {
  state = {
    titleIsNotInmutable: ''
  }

  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    )
  }
}

class AppCondicional extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    //Este si utilizo para declarar el otro tipo de funciones
    //this.cambioEstado = this.cambioEstado.bind(this);
  }

  state = {
    loggedIn: false,
  }

  cambioEstado = (texto, e) => {
    console.log(texto.nombre)
    console.log(e.target.innerHTML, e.target)
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    let { loggedIn } = this.state
    let status

    if (loggedIn) {
      status = <h1>Welcome to 30 Days Of React</h1>
      //text = 'Logout'
    } else {
      status = <h3>Please Login</h3>
      //text = 'Login'
    }

    // setTimeout(() => {
    //   this.setState({ loggedIn: !loggedIn })
    // }, 1500)
    //    {() => this.handleClick()} Evento click aun no es estandar
    return (
      <div className='app' >
        <Header {...data} />
        <button onClick={(e) => this.cambioEstado({ nombre: 'Hola primera manera' }, e)}>{loggedIn ? 'Logout' : 'Login'}</button>
        <button onClick={this.cambioEstado.bind(this, { nombre: 'Hola usando BIND' })}>{loggedIn ? 'Logout' : 'Login'}</button>
        { status}
      </div>
    )
  }
}

export default AppCondicional;
