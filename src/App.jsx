const Hello = (props) => {
  const name = props.name
  const age = props.age

  const bornYear = () => new Date().getFullYear() - age


  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
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