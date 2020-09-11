1. What problem does the context API help solve?

The Context API was created to solve a specific problem in react, sharing state down a component tree. Similar to the solution that Redux and React-Redux libraries solve, this solution prevents prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store - keep states, actions - which actions we can do with components, reducers - when we need do this actons

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

component state can to use only insite component

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

All is good.
