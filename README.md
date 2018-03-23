# React App Practice

## Where to Begin:
```
* Be sure to take a look at the README.md inside of boilerplate-ui and follow the installation instructions *

* Start at boilerplate-ui > client > src > index.js
** render the App component

* Take a look at boilerplate-ui > client > src > components > sampleData.js
** understand the data format

* Inside of your App's render method, modify the code to properly render the Profile Component
** pass in the userData object as a prop to the child Profile component

* Inside of your Profile component, modify the code to dynamically render the following components: (Name, Birthday, Hobbies)
** ensure to pass the following props to their respective components: 
*** name data to Name component
*** birthday data to Birthday component
*** hobbies data to Hobbies component

* Inside of your Name component, modify the code to dynamically render the name prop passed down from the parent Profile component

* Inside of your Birthday component, modify the code to dynamically set the state for (month, date, and year) so that the render method displays (07/28/93) rather than (MO/DD/YR)
** If done correctly, clicking the "Populate" button should invoke onClickHandler which sets the states of (month, date, and year)

* Inside of your Hobbies component, modify the code to dynamically render a list item (<li>) for each element in the array of hobbies
** If done correctly, upon adding a new hobby using the "Add A Hobby" button, the page should dynamically add the new hobby to the bottom of the rendered list

* Debugging Tips
** Double check if your React component accepts props
** Double check if you're referencing the correct variable name when trying to access props.variable
** Bind functions for onClick handlers