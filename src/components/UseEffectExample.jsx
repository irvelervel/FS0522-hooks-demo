// useEffect is another hook coming from the React library
// it will take care of implementing lifecycle methods equivalents into
// functional components
// more precisely it can "replace":
// - componentDidMount
// - componentDidUpdate
// - componentWillUnmount (which we didn't speak about)

import { Button, ListGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react'

// RULES OF HOOKS
// 1) use useEffect or any other hook just in functional components
// 2) put them at the top level of the component, before the return
// and outside of any loop, function, if/else, etc.

const UseEffectComponent = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Mario')

  // useEffect takes up to 2 arguments: a callback, and an optional ARRAY of DEPENDENCIES
  // the function is going to be called every time there's a change in an element in the
  // array of dependencies
  // useEffect is LISTENING on the elements in the array of deps, and is going
  // to trigger the function again every time anyone of them changes

  // 1) like componentDidUpdate() without a condition, or like render()
  useEffect(() => {
    console.log('generic useEffect triggered!')
  })
  // this useEffect will invoke the callback EVERY TIME ANY UPDATE happens
  // in the component (not very useful)

  // 2) like componentDidMount()
  useEffect(() => {
    console.log('like componentDidMount!')
  }, [])
  // useEffect is going to watch every element put into the deps array, and
  // whenever a change in any of them is detected, the callback will be re-triggered
  // since we want to have a behavior like componentDidMount, we DON'T WANT to
  // re-execute the callback! therefore, our array of deps HAS TO BE EMPTY

  // 3) like componentDidUpdate() but with a condition, real life scenario
  useEffect(() => {
    console.log('this useEffect triggers just when name changes')
  }, [name])
  // this last one will invoke the callback in the first argument initially,
  // because name is set to its initial value, and then every time name changes
  // similar to a componentDidUpdate with the condition:
  // if(prevState.name !== this.state.name){
  //    console.log('this useEffect triggers just when name changes')
  // }

  return (
    <div>
      <div>
        <Button onClick={() => setCounter(counter + 1)}>{counter}</Button>
      </div>
      <div>
        <Button onClick={() => setName(name === 'Mario' ? 'Luigi' : 'Mario')}>
          {name}
        </Button>
      </div>

      <h2>LIST OF USERS</h2>
      <ListGroup></ListGroup>
    </div>
  )
}

export default UseEffectComponent
