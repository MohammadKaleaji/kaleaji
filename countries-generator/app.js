// Vriables 

let button = document.querySelector('#new-country');
let info = document.querySelector('.info');
let country = document.querySelector('.country');


// Function


const random = () => {
    let random = Math.floor(Math.random()*countries.length);
    info.innerHTML = countries[random].info;
    country.innerHTML = countries[random].country;
}


// Event

button.onclick = random;
// or 
// button.addEventListener('click', random);

// Array 

const countries = [{
    info: `Capital: Damascus, Language: Arabic, Currency: Syrian Pound`,
    country: `Syria`
},
{
    info: `Capital: Riyadh, Language: Arabic, Currency: Saudi Riyal`,
    country: `Saudi Arabia`
},
{
    info: `Capital: Abu Dahbi, Language: Arabic, Currency: UAE Derham`,
    country: `United Arab Emirates`
},
{
    info: `Capital: Oattwa, Language: English, French, Currency: Candian Dollar`,
    country: `Canada`
},
{
    info: `Capital: Beirut, Language: Arabic, Currency: Lebanese Pound`,
    country: `Lebanon`
},
{
    info: `Capital: Brasília, Language: Portuguese, Currency: Brazilian real`,
    country: `Brazil`
},];

