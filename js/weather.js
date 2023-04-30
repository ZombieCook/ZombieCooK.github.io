let curLocation = {
  lat: 36.119485,
  lon: 128.3445734,
};

function setGeoOk(position) {
  curLocation.lat = position.coords.latitude;
  curLocation.lon = position.coords.longitude;

  displayMap(curLocation);
}

function setGeoNo() {
  console.log("Geolocatio not set");
}

//navigator.geolocation.getCurrentPosition(setGeoOk, setGeoNo, {
//  enableHighAccuracy: true,
//  maximumAge: 10000,
//  timeout: Infinity,
//});

///날씨와 위치는 그냥 기본

///로컬 스토리지를 사용한 투두리스트
///랜덤 배경 이미지
///날씨

///Todo List ( 로그인 연동 )

function displayMap(location) {
  if (location == null) {
    location = curLocation;
  }

  var mapOptions = {
    center: new google.maps.LatLng(location.lat, location.lon),
    zoom: 15,
  };

  var map = new google.maps.Map(document.querySelector(".map-box"), mapOptions);
}
