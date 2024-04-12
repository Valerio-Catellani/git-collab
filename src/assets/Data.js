let cocktailData;

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta HTTP: ' + response.status);
        }
        return response.json();
    })
    .then((data) => {
        cocktailData = data;
        console.log(cocktailData);
    })
    .catch((error) => {
        console.error('Si è verificato un errore durante il recupero dei dati:', error);
    });


export { cocktailData }