export async function fetchCars() {
      const headers = {
                  'X-RapidAPI-Key': 'fcd535a229mshf5d34f4721c341ap16abeejsn0abce08872f6',
                  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
            headers: headers,
      })

      const result = await response.json();

      return result;
}