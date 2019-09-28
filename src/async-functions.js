module.exports.getTatooineResidents = function getTatooineResidents(params) {
    fetch("https://swapi.co/api/planets/1/")
        .then(response => response.json())
        .then(data => {
            const residentsOnPlanet = data.residents
            return residentsOnPlanet
        })
        .catch(error => alert(error));
};
//getTatooineResidents(); // call function

// or
/*
const getTatooineResidents = async () => {
    try {
        const response = await fetch("https://swapi.co/api/planets/1/")
        const data = await response.json()
        const residentsOnPlanet = data.residents
    } catch (error) {alert(error);
}};*/

