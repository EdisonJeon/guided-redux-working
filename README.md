# Sprint 2 - Module 2 : Redux

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2002%20-%20Advanced%20State%20Management/Module%202%20-%20Redux)

### [Previous Lesson Plan](https://github.com/LambdaSchool/Web_Redux_GuidedProject)

----

## Objectives

By the end of this module, learners should be able to:
* explain what Redux is and the problem it solves
* create a Redux Store and connect it to a React application
* use the connect() function to "connect" React components to the Redux store
* write Actions and Action Creators to describe state changes
* write Reducers to respond to actions and update state

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/LambdaSchool/web-guided-project-redux)
* 🐙 [Guided Project Solution](https://github.com/LambdaSchool/web-guided-project-redux-solution)
* 🐙 [Module Project](https://github.com/LambdaSchool/Car-Sales)
* 🐙 [Module Project Solution](#)

----

## Guided Project Slack Message
> 1. Clone without forking the following repo: https://github.com/LambdaSchool/web-guided-project-redux
> 2. Navigate into root folder and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
>
> git fetch && git reset --hard origin/lecture
>
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> Unit 3 | Sprint 2 | **Module 2: Redux**
> _______________________________________________________
> Zoom Link : *insert zoom link*
> Slido: *insert slido link*
> Guided Project: https://github.com/LambdaSchool/web-guided-project-redux
> Module Project: https://github.com/LambdaSchool/Car-Sales

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

#### What would NOT be considered a benefit of Redux?
* Helps manage large amounts of state in complex apps
* Centralized store for state management
* Predictable state management
* **Making state management modular for different component trees**

#### When you wrap your app in Redux's <Provider> component, what prop do you pass in to it?
* action
* reducer
* **store**
* switch

#### What do you return out of mapStateToProps?
* a new state tree with updated properties
* The old state tree with properties updated with the new data
* **An object whose properties are added to the props of the connected component**
* None of the Above

#### What does an action creator return?
* switch statement
* **an action object**
* redux store
* a reducer function

#### What is the correct syntax for passing the initialState object to a reducer in Redux?
* const state = (reducer, action) => {initialState}
* **const reducer = (state = initialState, action) => {}**
* const reducer = (state, action) => {}
* const reducer = (initialState = state, action) => {}

## Guided Project Outline
### Explaining Redux function
* Discuss Redux's function
* State management

### Explaining Redux's purpose
* Discuss Redux's purpose
* Highlight global state once again.
* Highlight connection to components.
* Redux devtools
* Highlight the centralized store
* Highlight scalablity

#### Adding Redux to a React app
1. Add redux and react-redux as dependencies
2. `import { createStore } from 'redux';`
3. Add a store const, then create a store by invoking `createStore` and passing in a reducer `const store = createStore(reducer);`
4. Import and pass in the title reducer we created in the last module

5. `import { Provider } from 'react-redux';`
6. Wrap `<App />` inside `<Provider></Provider>` and pass our newly created store to `Provider` as the "store" prop 

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
```

#### Connect a component to the Redux store
7. We want to bring our title from the Redux store into the `Title` component, and render that as the title. We will "connect" Title with the connect function.
8. `import { connect } from 'react-redux';`
9. `connect` gets invoked twice
- First invocation it takes in a function and an object (more on those in just a minute)
- Second invocation it takes in the component we are connecting
- Recognize this pattern? It's an HOC!!!

```jsx
export default connect(() => {}, {})(Title);
```

10. Let's talk about the first argument in the first function call.
- The function is a function that will get the entire Redux state tree passed to it as an argument. We will then map whatever pieces of state we need in this function to the props of this function. So we will write a new function call "mapStateToProps", since that is what it is doing.

```js
const mapStateToProps = state => {
  console.log(state);
}
```

- Pass `mapStateToProps` in to connect - `export default connect(mapStateToProps, {})(Title);`
- To "map" the state to `Title`'s props, we return an object. This object's properties will be properties on the props object in `Title`. The value for the object properties will be from state

```js
const mapStateToProps = state => {
  console.log(state);
  return {
    title: state.title
  }
}
```

- Now we have a "title" props in `Title`. Go look in the React tools. Let's rewrite this a bit to make the distinction between on the "titles" more clear:

```jsx
const mapStateToProps = state => {
  console.log(state);
  return {
    titleOnProps: state.title
  }
}
```

- Now we have a "titleOnProps" prop in `Title`. Go look in the React tools.
- In the header, change the hardcoded text to this -\`{this.props.titleOnProps}`

#### Actions, actions types, and action creators
11. Now we have our title from Redux rendering. Let's use the input to give us a way to update our Redux state tree, therefore letting us change the title
12. Add an "actions" folder with an "index.js" file.
13. We are going to add an action creator - a function that creates actions. Write a function called `updateTitle`. It will take in `title` as an argument. Console.log `title` so we can make sure it's working when we go to test this function.

```js
const updateTitle = title => {
  console.log(title);
}
```

14. In `Title.js` - `import { updateTitle } from '../actions';`
- Explain that by calling the file in the actions folder, `index.js`, we can import from the directory now, instead of the file. This helps us a ton later when we have a lot of files in one directory.

15. Now let's discuss the second argument of the first invocation of `connect`. 
- The second argument is an object that takes in action creators and adds them to props for the connected component. Let's add `updateTitle`.

```jsx
export default connect(
  mapStateToProps, 
  { updateTitle } // same as { updateTitle: updateTitle }
)(Title);
```

- In the React tools, check out props. We now have our action creator function passed in as a prop!

16. Add an `onClick` handler on the button that will invoke a function called `updateTitle` (not to be confused with the action creator, which is available in this component as `props.updateTitle`).

17. Create a function on the class called `updateTitle`. It will take in an event, call `preventDefault`, then call `this.props.updateTitle` and pass in the input text

```js
updateTitle = e => {
  e.preventDefault();
  this.props.updateTitle(this.state.newTitleText);
};
```

17. Type in the input, and click the button. You should have your text logged from the action creator function.

18. Back in the actions file. We want the action creator to create and return an action. An action is an object. That's it. This object HAS to have a "type" property, and then sometimes has a "payload" property. The object will tell the store how to update.
19. Let's return the action object from the action creator.

```js
export function updateTitle(title) {
  console.log(title);
  return {
    type: "UPDATE_TITLE",
    payload: title
  };
}
```

20. Since misspelled strings (like "UPDATE_TITLE") can be very very hard to debug, we have a convention we use to help us avoid that bug. We create action types - a variable whose value is the string - and use the action type instead of a string.

```js
export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(title) {
  console.log(title);
  return {
    type: UPDATE_TITLE,
    payload: title
  };
}
```

- This is where some Redux black magic happens. When an action creator returns an action object, that object gets passed into the reducer we made. Let's go handle that now.


#### Dragon Club Members
1. Move the `members` state from the `DragonList` component to the `initialState` object in the
`reducer/index.js` file.
2. Get the list of membersw from state, and render the
list in the DOM. (Can have students lead here)
  - import connect into `DragonList`
  - connect component
  - build `mapStateToProps` function and get membersfrom the state
  - leave the action creators object that you pass into `connect` an empty object for now - `export default connect(mapStateToProps, {})(DragonList)`
  - Show members on props. Map over members and render list
3. Action creator
  - Go to the action creator file and create a new action creator called `addNewMember`.
  - Also create a "ADD_MEMBER" action type
  - import that into the component, and pass it into the connect function
  - Talk about how calling it straight from the import in our code won't dispatch theaction it's returning. It *needs* to be passed into the connect function.
  - Now on the "Add Member" button, invoke an "addMember" function in the component - pass it the event.
  - "addMember" will run `e.preventDefault`, then invoke `this.props.addNewMember` and pass in `this.state.newMember`
  - console.log "member" that is coming in to the action creator
  - the action creator should return an action with that member as the payload.
6. Reducer
  - In the `reducer/index.js` file, import your new action type. Then write the case for the action. Talk through the aspects of immutibility here (Don't forget that the new member you're adding to the array needs to be an object!)

#### (If you have time) Walk through the magic with debugger!
1. In the component, inside the `addFriend` function, write `debugger;` just above the action creator invocation. 
2. Open the project in a new window and open the devtools.
3. Add a friend. This will take you to thedev tools where you will see the code. 
4. Step "into" the function using the down arrow. This takes you into the `bindActionCreator` function. This is inside "connect". It will call your action creator (hover over actionCreator to see the function name), and pass in your arguments (hover over arguments).
5. If you highlight `actionCreator.apply(this, arguments)` you will see the action that is going to be returned when redux calls the action creator.
6. Notice that this is all wrapped inside the `dispatch` function. More on that later...
7. Step into the function call - now we are in the action creator. Hover over newFriend to see your text.
Talk about this returning an action back to where we just were.
8. Click step into a few times until it returns you to the `bindActionCreator` function. Talk about how our action that was just returned is about to be passed into `disptach`.
9. Click step into again until you are inside the dispatch function.
7. First three `if`'s are simply checking that everything is okay (action is an object and has a type property)
8. Press the step over button until you get into the try block. This is the magic sauce.
9. Note that we are going to call our reducer, pass in the current state, and our action. Remind students that a reducer takes in the state and an action. This is where the reducer is actually called!
10. Step into the reducer call. It takes us to our reducer, updates that state, and returns a new state object
11. Step out of the reducer, and hover over currentState on line 211. It will have our updated state. Push resume to get out of debugger mode.
12. Repeat this a couple times going faster and faster each time.

#### Toggle dragon status
1. Add `onClick` handler on the friend element inside the .map in `DragonList`. It will invoke a `this.toggleStatus` function in the class and pass it the event and the index of the friend.
2. Build an action creator for toggling. It should get the index of the member that was clicked on passed into it.
3. Import that into the component and pass it through connect. Then the `toggleStatus` function should invoke it, and pass it the index.
4. Console.log to make sure it's working
5. In the reducer, build out the case. Again, talk through the logic here.
6. You can build out a visual way to see that a member has been clicked on, but I usually just inspect it with the react tab and show that the dragon status is toggled


### Module Project Review
* [Car Sales](https://github.com/LambdaSchool/Car-Sales)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 2:30 - 3:30 Lambda Time. 

Support hours with Aaron are avalible at:
  AM Monday - Friday | 6:00 a.m. - 8:00 a.m. PST
  PM Monday - Thursday | 6:00 p.m. - 8:00 p.m. PST

Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
https://github.com/LambdaSchool/Car-Sales

Module Slides
https://docs.google.com/presentation/d/1d1obD6mw8ZmUuvs5zYOvZvlhS5Nlo_cvI9oLbyx0Mow/edit?usp=sharing

Here is a review of today's material.

Key Terminology
* 📝 *default arguments* - [A means to set what value a javascript function argument should be when it is not defined.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* 📝 *function currying* - [Functions that return other functions](https://www.youtube.com/watch?v=oU3LzOO0OGA)
* 📝 *the connect function* - [A react-redux method that allows for components to be connect to state and dispatch through props.](https://react-redux.js.org/api/connect)
* 📝 *combine reducers* - [A redux method that allows several different reducers used in one application](https://redux.js.org/api/combinereducers/)
* 📝 *mapStateToProps* - [A programmer generated function that gets the application state and connects it to a components props](https://react-redux.js.org/7.1/using-react-redux/connect-mapstate#mapstatetoprops-will-not-run-if-the-store-state-is-the-same)

Key Concepts
* 📝 *Redux* - [A framework used to create and mantain a reducer pattern](https://react-redux.js.org/introduction/why-use-react-redux)