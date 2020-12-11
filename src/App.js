import React from 'react';
import './App.css';

class TechList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}


/*
Si utilizo los componentes basado en clase solo pueden ir metodos y variables sin definir
Utilizar la palabra this para el props pasado

Para utilizar los estados es necesario utilizar un objecto llamado state
this.setState(destructuracion) para actualizar el valor

*/

class Welcome extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    //console.log(props)
  }

  state = {
    count: 0,
    stringChange: 'Cambiare al dar click'
  }

  sayHello = () => {
    console.log('Datos pasados', this.props)
  }


  render() {
    const { name } = this.props
    const { stringChange, count } = this.state
    return (
      < div >
        <ShowAnimal />
        <h1>Welcome {name}</h1>
        <h1>Texto alternativo {stringChange}</h1>
        <button onClick={this.sayHello}>Click to Say Hello</button>
        <button onClick={() => this.setState({ stringChange: 'Lets go' })}>Cambiar Texto</button>
        <button onClick={() => this.setState({ count: count + 1 })}>Contador</button>
        <h1>Contador actual {count}</h1>
      </div >
    )
  }
}

class ShowAnimal extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    //console.log(props)
  }

  state = {
    imageURL: '',
    alt: '',
    loading: false
  }

  searchDog = async () => {
    this.setState({ loading: true })
    const response = await fetch('https://random.dog/woof.json')
    if (!response.ok) { 
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    console.log(data)
    const { url } = data
    this.setState({ imageURL: url, alt: 'Se ha cargado un perro' })
    this.setState({ loading: false })
  }

  searchCat = () => {
    this.setState({ loading: true })
    fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(data => {
        const { file } = data
        this.setState({ imageURL: file, alt: 'Se ha cargado un gato' })
        console.log(data, file)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { imageURL, alt, loading } = this.state
    return (
      <div>
        <div>
          <img src={imageURL} alt={alt} style={{ width: '350px', height: '350px' }}></img>
        </div>
        <h4>{loading ? 'Cargando' : 'Cargado'}</h4>
        <button onClick={this.searchDog}>Cargar Perro</button>
        <button onClick={this.searchCat}>Cargar Gato</button>
      </div>
    )
  }


}


// class base component
class Header extends React.Component {
  // the code inside the constructor run before any other code
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header>
          <Welcome name='Calogero' />
          <TechList />
          <div className='header-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 7, 2020</small>
          </div>
        </header>
      </div>
    )
  }
}


export {Header, ShowAnimal};
