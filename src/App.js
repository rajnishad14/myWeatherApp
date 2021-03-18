import { useEffect, useState } from "react";
import Display from "./components/Display";
import "./App.css";
import { Dimmer, Loader } from "semantic-ui-react";
import { Container } from "react-bootstrap";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=317623db6367401294fc05a548e9ebf8`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
          });
      };
      fetchData();
    }, //eslint-disable-next-line
    [lat, long]
  );

  return (
    <div className="App">
      <Container>
        {typeof data.main != "undefined" ? (
          <Display weatherData={data} />
        ) : (
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        )}
      </Container>
    </div>
  );
}

export default App;
