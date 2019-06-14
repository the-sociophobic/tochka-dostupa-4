import React, { Component } from 'react';
import Link from 'react-router-dom';
import './../css/App.css';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: undefined,
      placemarks: [],
    };
  }

  recursiveTimeOut(ms, iterations) {
    if (iterations <= 0)
      return;
    setTimeout(() => {
      const yandex = window.ymaps;
      if (!yandex)
        this.recursiveTimeOut(iterations - 1)
      else {
        yandex.ready(() => {
          const location = this.props.location;
          if (location) {
            yandex.geocode(this.lang(["Россия, Санкт-Петербург, ", "Russia, Saint-Petersburg, "]) + location).then(result => {
              let position = result.geoObjects.get(0).geometry._coordinates;
              let myMap = new yandex.Map("map",
              {
                center: position,
                zoom: 15,
              });

              let myPlacemark = new yandex.Placemark(position, {});
              myMap.geoObjects.add(myPlacemark);
              this.pinLocation(location, myMap);
              this.setState({map: myMap});
            });
          }

          const locations = this.props.locations;
          if (locations) {
            let myMap;
            if (locations.length === 2)
              myMap = new yandex.Map("map",
              {
                center: [59.999352, 29.731338],
                zoom: 12,
              });
            else
              myMap = new yandex.Map("map",
              {
                center: [59.941054, 30.312907],
                zoom: 9,
              });

            locations.forEach(location => {
              yandex.geocode(this.lang(["Россия, Санкт-Петербург, ", "Russia, Saint-Petersburg, "]) + location.place[0]).then(result => {
                let position = result.geoObjects.get(0).geometry._coordinates;

                let myPlacemark = new yandex.Placemark(position,
                  {iconCaption: this.lang(location.name), balloonContent: this.lang(location.description)},
                  {preset: 'islands#circleIcon', iconColor: '#ffa300'});
                // myPlacemark.events.observe
                // myPlacemark.Event.manager('click', (e) => {alert(e)});
                myMap.geoObjects.add(myPlacemark);
                // this.pinLocation(location.place, myMap);
                this.setState({
                  placemarks: this.state.placemarks.slice().push({
                    address: location,
                    placemark: myPlacemark,
                  }),
                  map: myMap,
                });
                // alert(this.state.placemarks);
              });
            });
          }
        });
      }
    }, 300);
  }
  setCenter(location) {
    const yandex = window.ymaps;
    yandex.geocode(this.lang(["Россия, Санкт-Петербург, ", "Russia, Saint-Petersburg, "]) + location).then(result => {
      let position = result.geoObjects.get(0).geometry._coordinates;
      this.state.map.setCenter(position, 14);
      // this.state.placemarks.forEach(placemark => {
      //   if (true)
      //     placemark.placemark.options.set({visible: false});
      // });
    });
  }

  lang(param) {
    if (Array.isArray(param))
      return param[this.props.lang];
    return param;
  }

  componentDidMount() {
    this.recursiveTimeOut(10);
  }

  render() {
    var locations = this.props.locations;
    // alert(JSON.parse(locations));
    var locationsMapped;
    if (locations) {
      locations = locations.map(location =>
        <button
          className="yellow-link special"
          onClick={() => this.setCenter(this.lang(location.place))}
          key={location.label}
        >
          {location.label ? this.lang(location.label) : this.lang(location.name)}
        </button>
      );
      if (window.innerWidth > 900)
        locationsMapped = <div className="row">
          <div className="half">
            {locations.slice(0, locations.length / 2)}
          </div>
          <div className="half">
            {locations.slice(locations.length / 2)}
          </div>
        </div>;
      else
        locationsMapped = locations;
    }
    return <div className="map">
      <div id="map"></div>
      {this.props.links ? locationsMapped : ""}
    </div>;
  }
}

export default Map;
