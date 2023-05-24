const axios = require('axios');


const getCountries = async () => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries?strict=true');
        const mapResponse = response.data.map((element, index) => {
            return {
                id: index,
                label: element.country,
                value: element.countryInfo.iso2,
                flag: element.countryInfo.flag
            }
        });
        console.log(mapResponse)
    } catch (e) {
        console.log(e)
    }
}

const fetchData = async (country) => {
    try {
        const data = await axios.get(`https://disease.sh/v3/covid-19/countries/${country.toLowerCase()}?strict=true`);
        console.log(data)
    } catch (e) {
        console.log(e)
    }

}

// var countries = getCountries();
// var data = fetchData("Denmark")
// console.log(data)

