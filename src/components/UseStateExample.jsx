import { Button } from 'react-bootstrap'
import { useState } from 'react'

// RULES OF HOOKS:
// 1) use React Hooks just in React Functional Components! (no classes, no generic JS)
// 2) use React Hooks just at the TOP LEVEL of your component!
// this means to not put them into other functions, if statements or loops!
// ...and ofc before the return statement

const UseStateExample = () => {
  // here!!
  // useState creates one state variable in your functional component
  const [counter, setCounter] = useState(0)
  // useState returns an array with 2 elements
  // with this destructuring syntax I'm just declaring these two elements, with a name
  // counter <-- the first element, this is the state property
  // setCounter <-- the second element, this is a FUNCTION. This is the ONLY WAY
  // of updating counter!

  const [isSectionVisible, setIsSectionVisible] = useState(false)
  // the setter function of every useState (the second element of the array)
  // works just like a setState, but a very specific one (since it can update
  // just the variable it comes with)
  // just a suttle difference: while this.setState() MERGES the object you
  // pass into it onto the existing state, the value you're going to invoke
  // any setter function with is instead going to OVERWRITE the existing one

  //   state = {
  //     counter: 0 // <-- I'm declaring this in a functional component
  //   }

  return (
    <div>
      <h1>useState Hook!</h1>
      <h3>Counter value is: {counter}</h3>
      <Button variant="danger" onClick={() => setCounter(counter - 1)}>
        DECREASE
      </Button>
      <Button variant="info" onClick={() => setCounter(counter + 1)}>
        INCREASE!
      </Button>
      <div>
        <Button onClick={() => setIsSectionVisible(!isSectionVisible)}>
          Show Secret Section!
        </Button>
        {isSectionVisible && <p>I'm the secret section :)</p>}
      </div>
    </div>
  )
}

export default UseStateExample

// const names = ['Mario', 'Luigi']
// const [name1, name2] = names
// name1 === 'Mario'
// name2 === 'Luigi'
