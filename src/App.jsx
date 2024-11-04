const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }


  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    <p>So you were propably born {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pähkinä'
  const ika = 39
  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}

export default App