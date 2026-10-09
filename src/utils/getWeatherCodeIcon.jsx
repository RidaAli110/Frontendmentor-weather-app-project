import sunIcon from '../assets/images/icon-sunny.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';
import overcastIcon from '../assets/images/icon-overcast.webp';
import fogIcon from '../assets/images/icon-fog.webp';
import drizzleIcon from '../assets/images/icon-drizzle.webp';
import rainIcon from '../assets/images/icon-rain.webp';
import snowIcon from '../assets/images/icon-snow.webp';
import stormIcon from '../assets/images/icon-storm.webp';

export default function getWeatherCodeIcon(code) {
  const weatherDescriptions = {
    0: 'Clear skies',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    97: 'Heavy thunderstorm',
    99: 'Thunderstorm with heavy hail',
  };
  const description = weatherDescriptions[code];
  switch (code) {
    case 0:
    case 1:
      return {
        image: sunIcon,
        description: description,
      };

    case 2:
      return {
        image: partlyCloudyIcon,
        description: description,
      };

    case 3:
      return {
        image: overcastIcon,
        description: description,
      };

    case 45:
    case 48:
      return {
        image: fogIcon,
        description: description,
      };

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return {
        image: drizzleIcon,
        description: description,
      };

    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return {
        image: rainIcon,
        description: description,
      };

    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return {
        image: snowIcon,
        description: description,
      };

    case 95:
    case 96:
    case 97:
    case 99:
      return {
        image: stormIcon,
        description: description,
      };

    default:
        return {
        image: sunIcon,
        description: 'Weather information is unavailable',
      };
  }
}
