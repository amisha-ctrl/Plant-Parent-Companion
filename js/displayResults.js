import ayurvedicMedicinalUses from '../ayurvedicData.js';

const displayResults = (data, plantName) => {
    console.log('Fetched Data:', data); // Log the data to verify structure
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Filter the results to match the exact plant name entered
    const filteredData = data.data.filter(item => item.common_name.toLowerCase() === plantName.toLowerCase());

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const itemDiv = document.createElement('div');
            
            // Retrieve Ayurvedic use and format it properly
            const ayurvedicUseData = ayurvedicMedicinalUses[item.common_name];
            let ayurvedicUse = 'No Ayurvedic medicinal uses available.';
            if (ayurvedicUseData && typeof ayurvedicUseData === 'object') {
                ayurvedicUse = `
                    Use: ${ayurvedicUseData.use || 'Not available.'} <br>
                    Recipe: ${ayurvedicUseData.recipe || 'Not available.'}
                `;
            } else if (typeof ayurvedicUseData === 'string') {
                ayurvedicUse = ayurvedicUseData;
            }

            itemDiv.classList.add('plant-card');
            itemDiv.innerHTML = `
                <h3>${item.common_name || 'No common name available'}</h3>
                <p>Scientific Name: ${item.scientific_name}</p>
                <p>Family: ${item.family || 'No family information available'}</p>
                <p>Ayurvedic Medicinal Use: <br>${ayurvedicUse}</p>
                <div class="image-container">
                    <img src="${item.image_url || ''}" alt="${item.common_name}">
                </div>
            `;
            resultsDiv.appendChild(itemDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found for the specified plant.</p>';
    }
};

export default displayResults;
