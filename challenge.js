/*Step 17: obtain DOM objects */
const checkBtn = document.getElementById("checkBtn"); // add id
const definition = document.getElementById("swagalicious");
const realWord = document.getElementById("realWord");
const inputText = document.getElementById("inputText");

function apiCall() { 

    definition.textContent = "Validating Word...";

    /*Step 19: Create account with api-ninjas (https://api-ninjas.com/) */
    /*Step 20: Get API url and API Key */

    apiToCall = "https://api.api-ninjas.com/v1/dictionary?word="+inputText.value

    fetch(apiToCall, { // add event request url
        headers: { 'X-Api-Key': 'oYwSM5KwWbsCBCijGdfzMQ==VMcmhocg41cGsWlJ' } // add api key
    })
        // Checks the network response 
        .then(function(response) {

            // If network response was not a success
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(function(data) {

            if (data.valid){ // Valid word
                definition.textContent = data.definition;
                realWord.textContent = "This is a valid word!";
            } else {
                realWord.textContent = "Invalid word!"; // Invalid word
                definition.textContent = ""
            }

        })

        // Handles any errors that occur during the fetch operation
        .catch(function(error) {
            console.error("Error validating word:", error);
            definition.textContent = "An error occurred while validating the word: "+ error;
        });
};


/*Step 18: Create event listener for button click */
checkBtn.addEventListener("click", apiCall)





