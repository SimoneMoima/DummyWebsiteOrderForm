/*
* This is a java script function that will read the user input from
* the ordering page for computer components and will save the input 
* as a text document.
*/


let saveFile = () => {
  //Functions to get the user input
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  const componentType = document.getElementById("type");
  const manufacturer = document.getElementById("manufacturer");
  const modelnumber = document.getElementById("modelnumber");
  const quantity = document.getElementById("quantity");

  /*
  * data is a variable that saves all the information collected from the user input as a string
  * so that it can be saved in text form in a docuemnt on the pc
  * */

  let data =
    "\r Name: " +
    name.value +
    " \r\n " +
    "Surname: " +
    surname.value +
    " \r\n " +
    "Street: " +
    street.value +
    " \r\n " +
    "City: " +
    city.value +
    " \r\n " +
    "Email: " +
    email.value +
    " \r\n " +
    "Phone: " +
    phone.value +
    " \r\n " +
    "Message: " +
    message.value +
    " \r\n " +
    " \r\n " +
    "The order is: " +
    " \r\n " +
    "Component Type: " +
    componentType.value +
    " \r\n " +
    "Manufacturer: " +
    manufacturer.value +
    " \r\n " +
    "Modelnumber: " +
    modelnumber.value +
    " \r\n " +
    "Quantity: ";
    quantity.value;


  //Convert the text data into blob (binary large object)
  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "formData.txt"; // The file to save the data.

  //create a link and assign the text file as link download property
  let newLink = document.createElement("a");
  newLink.download = sFileName;

  //assign blob as href to the link tag
  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  //Download file to pc 
  newLink.click();
};

