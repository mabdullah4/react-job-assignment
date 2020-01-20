# Notes

### How it works
If we look on the config files the pattern is pretty clear. The `Content` key in config is compulsory since it contains the info about the component and it's props. The second key `Children` is optional and if it is there then theses contain the information about the children of that `Content` component.
So, for this problem we can use `React.createElement` api from ReactJs through which we can create elements and add them into the React Dom. For more info please follow this [Link](https://reactjs.org/docs/react-api.html#createelement).

### Components
All components created and saved into the components folder. Each components has a `css` file in it's folder which contains styles related to the component. Components folder name and actual file name should be identical.

### Helper
This folder contains any helper files that are required by the system. Right now it only has `config-parser.js` file and function with same name, which takes an object as an argument. The object parses it and check if it has ant children. if yeah then perform recursive operation on each child and convert it into a React Element using `React.createElement` api. After parsing through child nodes a parent element is created and these child nodes are appended to it. This function perform recursive operation and returns React Element or null if it's invalid.

The `config-parser` uses [React lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) and [Webpack dynamic imports](https://webpack.js.org/guides/code-splitting/) to create elements which gives application more flexibility. The benefit of this approach is that the we can easily create a new component in our component folder and just call it into the config file. No extra configuration or code should be required.

These are the step taken by the system to compile that config file and convert them into React Elements.

1. Read the Config File
2. Check if it has children
3. if yes loop through those `Children` and convert them to React Elements and same these children in an array.
4. Now create an parent element of the `Content` key and append those children to that element.
5. If the whole config has been looped through then it should have a single parent element and all the others as it children.
6. Render the newly created tree to dom.


## JSON Structure
The `JSON structure` can be changed to something like this.

```
{
	type: 'H1Component'
	props: {
		text: 'h1 component',
		styles: {
			borderSize: '2px',
			width:'100px,
			height:'100px,
		},
		classes: ['mt-4', 'mb-3'],
		children: [
			{
				type: 'SmallComponent',
				classes: 'border rounded',
				props: {
					text: 'Small Component'
				}
			}
		]
	}
}
```
### Benefits
* Closest to React Api
* The data has it's own object like styles and classes which is easy to manage and parse as well as gives user flexibility to use any type of style or as much as classes user wants to add.
* No extra nodes like `NavLink` etc but more to the point approach.

### How modal toggle work
A modal-service file is used to make the modal toggle-able. The modal-service has isOpen variable, onChange, toggle function. The onChange function contains the reference of onChange function in `ModalComponent.js` which gets triggered every time `isOpen` value change hence toggling the modal display.


# Note
I added `canOpenModal` props into the configuration file which helps recognized which button can open modal or not. There was not other way for me to know. `For him it is very important to decide which links and buttons are triggering the modal, independent from their location in the JSON file` (Project Description PDF).
