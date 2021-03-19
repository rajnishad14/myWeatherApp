import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import "./display.css"

const refresh = () => {
  window.location.reload();
};
const Display = ({ weatherData }) => {
  return (
    <>
      <Card>
        <Card.Header className="header">
          <div className="d-flex justify-content-between">
            <div className="p-2 col-example text-left">
              Weather in: <strong>{weatherData.name}</strong>
            </div>
            <div className="p-2 col-example text-left">
              <Button
                className="button d-flex flex-row-reverse"
                color="black"
                circular
                icon="refresh"
                onClick={refresh}
              />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </Card.Title>
          <Card.Title>{weatherData.weather[0].main}</Card.Title>
          <div className="d-flex justify-content-between">
            <div className="col-example text-left">
              <Card.Title>
                Temperature: {Math.round(weatherData.main.temp - 273)} &deg;C
              </Card.Title>
            </div>
            <div className="col-example text-left">
              <Card.Title>
                min: {Math.round(weatherData.main.temp_min - 273)} &deg;C
              </Card.Title>
            </div>
            <div className="col-example text-left">
              <Card.Title>
                max: {Math.round(weatherData.main.temp_max - 273)} &deg;C
              </Card.Title>
            </div>
          </div>
          <Card.Title>Humidity: {weatherData.main.humidity} %</Card.Title>
          <Card.Title>
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Card.Title>
          <Card.Title>
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Display;
