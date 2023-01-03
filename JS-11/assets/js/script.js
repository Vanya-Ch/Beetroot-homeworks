document.addEventListener('DOMContentLoaded', () =>{
    
    
    setCookie('user', 'John', {'max-age': 60});
    deleteCookie('user')
  
    getInfo('London', 'uk')
    getInfo('Kyiv', 'ua');
    getInfo('Paris', 'fr')

})



function getInfo(city, country){
    let temp;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=fa4daba5896a217ec775b0a6da0830e1`)
    .then((res) => res.json() )
    .then((data) => {
      
        temp = (data.main.temp - 273).toFixed(0);
        
        localStorage.setItem( city , `${temp}`)
        document.querySelector(`.${city}`).textContent = data.name;
        document.querySelector(`.${city}-temp`).innerHTML = `${temp} &deg`;
        document.querySelector(`.${city}-weather`).textContent = data.weather[0]['main'] 
        
        
    })
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      
      "max-age" : 60,
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}
function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
}
