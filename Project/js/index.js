
function get_dog_image(){

    url = "https://dog.ceo/api/breeds/image/random";// variable to hold the url
  
    // Fetching API from the url (request)
    fetch(url)
    .then(function(response)// Accessing the response (Callback function) allows to get a response from the server
    { 
      if(response.ok){
        console.log("Success")
        console.log(response)
      }else{
        console.log("Not Successfull")
      }
      return response.json();// Getting Json file, converting to Json
      
    })
    .then(function(data){  // Getting data
      display_image(data.message);// Function to display the image (.message holds the image url)
      console.log("Image " + data.message)
    })
    .catch(function(fail){
      console.log("Error: " + fail);// Handling server error
    });
  
  
  }
  
  function display_image(image_url){
    document.getElementById("image").src = image_url; // Diplaying the random image
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";// Function to close side bar
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "244px";// Function to open side bar
  }


  
  