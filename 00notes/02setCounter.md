## how const counter value is changing  
```
const [counter, setCounter] = useState(0); 
decrementCounter() { setCounter(counter - 1);
``` 

## Updating the State:

- The setCounter function provided by useState doesn't modify the counter constant itself.
- Instead, it updates the underlying state value managed by React.
- This updated state value is then reflected in the component, making it seem like the counter constant changed.

## Re-rendering:

When the state value changes using setCounter, React re-renders the component.
During re-render, a new counter constant is created with the updated state value.

# Why --counter gives error assignment to const variable
## Why Not --counter:
- Direct State Mutation: If you were to use --counter, it would directly modify the counter variable but would not trigger a state update in React. 
- This would not work as expected because React would not know that the state has changed and would not re-render the component.
