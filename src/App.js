import { useEffect, useState } from 'react';
import Display from "./components/Display"
import './App.css';
// import { Dimmer, Loader } from 'semantic-ui-react';
import { Form, Button, Container } from 'react-bootstrap';

function App() {

  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    setCityName(event.target.value);
  }
  const handleClick = () => {
    setCity(cityName)
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=317623db6367401294fc05a548e9ebf8`)
        .then(res => res.json())
        .then(result => {
          setData(result)
        });
    }
    fetchData();
  }, //eslint-disable-next-line 
    [city])



  return (
    <div className='App'>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city"
              value={cityName}
              onChange={handleChange} />
            <Form.Text className="text-muted">
              Enter city which weather you wan to fetch.
          </Form.Text>
            {/* <p className="text-danger">{error}</p> */}
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>Submit</Button>
        </Form>
        <br/>
        {(typeof data.main != 'undefined') ? (
          <Display weatherData={data} />
        ) : (
          // <Dimmer active>
          //   <Loader>Loading..</Loader>
          // </Dimmer>
          <div></div>
        )}
      </Container>

    </div>
  );
}

export default App;
