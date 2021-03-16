import { useEffect, useState } from 'react';
import Display from "./components/Display"
import './App.css';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4c496af33d732297c30b641b3b235e47`)
        .then(res => res.json())
        .then(result => {
          setData(result)
        });
    }
    fetchData();
  }, //eslint-disable-next-line 
    [lat, long])



  return (
    <div className='App'>
      {(typeof data.main != 'undefined') ? (
        <Display weatherData={data} />
      ) : (
        <Dimmer active>
          <Loader>Loading..</Loader>
        </Dimmer>
      )}
    </div>
  );
}

export default App;
