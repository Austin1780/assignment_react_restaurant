import React from "react";

const Map1 = () => {
  function initMap() {
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById("map1"), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
}(
  <div id="map1">
)

<div id="map">
  <h2>Location of Spinning Plates Bistro:</h2>
  <Map1 />
    <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiEMIMag-18xikDaf0Y0R3ZpnFcpu9C1E&callback=initMap"
    />
</div>


export default Map1;
