# Communication Contract
> The microservice is not hosted so it must be ran locally on your machine simutaneously with the web interface.
Microservice runs on localhost:4000

<h2> How to Setup the Microservice </h2>

  1. Clone the repository onto your local machine
  2. Navigate to the folder and in the console run ```'npm install'```
  3. Microservice can now be utilized.
  4. Microservice runs on LocalHost:4000

<h2> How to REQUEST data from microservice *(UPDATED)* </h2>

In order to request data from the microservice you will need to make a GET request to the 
  local host that the microservice is running on and make sure to include the users input for the
  rgb decimal code.
  
  - The GET request must be made to http://localhost:4000/
  - Make sure to include a string query to the call that includes the RGB decimal code value from the user
    - The RGB decimal code should be proper notation with separation using *','* ex user input *'234,234,234'*

Example call using axios in react:
```
  // One variable to store the rgb code that you will include in the query during GET request
  const [rgb, setRgb] = useState('');
  // One variable to store the res hex from the GET request
  const [hex, setHex] = useState('');

  const fetchHex = async (event) => {
    event.preventDefault()
    const res = await axios.get(`http://localhost:4000?rgb=${rgb}`)
    setHex(res.data)
  };
```

You can then display the hexcode however you like.

<h2> UML Sequence Diagram </h2>
<img src="https://user-images.githubusercontent.com/51865580/198276788-fe4080e4-d5da-4571-984d-02987eefd410.png" width="600" height="300"/>
