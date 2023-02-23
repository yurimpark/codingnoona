import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다.(1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  // App한테 모든 것이 있어야 자식으로 넘겨줄 수 있다!

  // 버튼 만들어 줄 도시들을 배열에 담아줌
  const cities = ["Seoul", "Sydney", "London", "Wellington", "Toronto"];
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  let [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");

  // 현재위치를 받아오는 위도경도함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      console.log("현재위치", lat, lon);
    });
  };

  // 현재위치로 날씨를 가져오는 함수
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lon}&appid=8c1966f9f037a096abbd6a5c1c57d982`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  // 도시이름으로 날씨 받는 함수
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=8c1966f9f037a096abbd6a5c1c57d982`;
      // 로딩 보여주고
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      // 로딩 숨기고
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  };

  // useEffect()를 2개 만들어서 getCurrentLocation()와 getWeatherByCity()를 따로 해주면 에러가 발생한다.
  // 왜냐하면 const [city, setCity] = useState(null); city의 초기값이 null이기 때문!
  // 그래서 한번에 써주되, 아래처럼 조건식을 넣어준다.
  useEffect(() => {
    if (city == null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // 선택하는 도시 정보 받는 함수
  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : !apiError ? (
        <div className="container">
          <div className="today">Today's Weather 🌞</div>
          <WeatherBox weather={weather} />
          {/* props로 넘겨줌 */}
          <WeatherButton
            cities={cities}
            handleCityChange={handleCityChange}
            selectedCity={city}
          />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;
