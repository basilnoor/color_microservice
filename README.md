# Communication Contract
> The microservice is not hosted so it must be ran locally on your machine simutaneously with the web interface.
Microservice runs on localhost:4000

<h2> How to REQUEST data from microservice </h2>

In order to request data from the microservice you will need to make a POST request to the 
  local host that the microservice is running on and make sure to include the users input for the
  rgb decimal code.
  
  - the POST request must be made to http://localhost:4000/
  - must also include the rgb decimal code
  
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

- the GET request must be made to http://localhost:4000/

Example call using axios in react:
```
    const fetchHex = async () => {
        const res = await axios.get('http://localhost:4000/')

        var storeData = res.data
    };
```

You can then display the hexcodes however you like.

<h2> UML sequence diagram </h2>
