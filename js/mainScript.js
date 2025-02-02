// js/mainScript.js
import fetchPlants from './fetchPlants.js';
import displayResults from './displayResults.js';

document.getElementById('searchButton').addEventListener('click', async () => {
    const plantName = document.getElementById('plantInput').value;
    console.log('Plant Name:', plantName); // Log the plant name
    const data = await fetchPlants(plantName);
    displayResults(data, plantName); // Pass the plant name to filter the results
});
