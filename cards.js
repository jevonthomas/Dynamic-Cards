let inputField = document.getElementById("inputField");
let createButton = document.getElementById("create");

//Event Listener
createButton.addEventListener("click", function() {
	createCard(inputField.value);
});

//Functions
function createCard(userInput) {
	//Create all the HTML elements that will make up the card
	//Create div element
	let cardDiv = document.createElement("div");
	//Create p element
	let parElem = document.createElement("p");
	//Create button element
	let deleteButton = document.createElement("button");
	//Add a class to the delete button, so that i can be selected to add an event to
	deleteButton.className = ("deleteCard");
	//Turn the user input into a text node
	userCreatedInput = document.createTextNode(userInput);
	//Create the "Delete" text that will go into the button tags
	deleteButtonText = document.createTextNode("Delete");
	//Enclose the user's input between p tags
	parElem.appendChild(userCreatedInput);
	//Enclose the "Delete" text between button tags
	deleteButton.appendChild(deleteButtonText);
	//Insert the user's input and delete button in the card div
	cardDiv.appendChild(parElem);
	cardDiv.appendChild(deleteButton);
	//Insert full div with all elements to the DOM
	document.getElementById("output").appendChild(cardDiv);

	//Assign the delete button to a variable
	let deleteArray = document.getElementsByClassName("deleteCard");
	//Use a for loop to capture all delete button array index numbers created by each card
	for (let i = 0; i < deleteArray.length; i++) {
		//Event Listener for delete button
		deleteArray[i].addEventListener("click", function() {
			//Targets the specific button that the event took place on and remove its parent
			// document.getElementById("output").removeChild(event.target.parentNode);
			event.target.parentNode.remove();
		});
	}
}
