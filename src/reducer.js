export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_NOTES':
      return {
        ...state,
        notes: payload || []
      }
    case 'ADD_NOTE': {
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          let temperatura = Math.round(data.main.temp);
          let symbol = '';
          if (temperatura > 0) {
            symbol = '+';
          } else if (temperatura < 0) {
            symbol = '+';
          }
          return [
            ...state,
            {
              id: notes.length ? notes[notes.length - 1]['id'] + 1 : 0,
              text: note,
              infoImgSrc: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
              infoImgAlt: `${data.weather[0].main}.`,
              infoTemperature: `${symbol}${temperatura}°C`,
              infoDate: getCurrentDate(),
              infoTime: getCurrentTime()
            }
          ]
        });
    }
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: notes.filter(note => note.id !== id)
      }
    default:
      return state;
  }
}