# Communication Contract
> The microservice is not hosted so it must be ran locally on your machine simutaneously with the web interface.
Microservice runs on localhost:4000

<h2> How to Setup the Microservice </h2>
  1. Clone the repo onto your local machine
  2. Navigate to the folder and in the console and run ```'npm install'```
  3. Microservice can now be utilized.
  4. Microservice runs on LocalHost:4000

<h2> How to REQUEST data from microservice </h2>

In order to request data from the microservice you will need to make a POST request to the 
  local host that the microservice is running on and make sure to include the users input for the
  rgb decimal code.
  
  - The POST request must be made to http://localhost:4000/
  - Make sure to include a body to the call that includes the RGB decimal code value formt he user
    - The RGB decimal code should be proper notation with separation using *','* ex user input '234,234,234'
  
Example call using axios in react:
```
  const RequestData = async (event) => {
    await axios.post('http://localhost:4000/', {
      rgb,
    });
  };
```

Once you have made the request to the microservice the rgb decimal code that you provide will be converted to its hex code 
value and stored within the microservice. 

<h2> How to RECIEVE data from microservice </h2>

In order to recieve data from the microservice you will make a GET request to localhost 4000.
This will retrieve all the hex codes stored in the microservice in an array.

- The GET request must be made to http://localhost:4000/

Example call using axios in react:
```
    const fetchHex = async () => {
        const res = await axios.get('http://localhost:4000/')

        var storeData = res.data
    };
```

You can then display the hexcodes however you like.

<h2> UML Sequence Diagram </h2>
<img src="https://user-images.githubusercontent.com/51865580/198276788-fe4080e4-d5da-4571-984d-02987eefd410.png" width="600" height="300"/>
