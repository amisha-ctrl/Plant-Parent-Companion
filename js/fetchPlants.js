// js/fetchPlants.js
const fetchPlants = async (plantName) => {
    try {
        const apiKey = '7E8-3BsJdYvloxZz_XStlrIU-zfJ7vDdRO31P78odBI';
        const apiUrl = `https://trefle.io/api/v1/plants?token=${apiKey}&q=${plantName}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

        const response = await fetch(proxyUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const parsedData = JSON.parse(data.contents); // Parse the contents to get the actual JSON data
        console.log('Fetched Data:', parsedData); // Log the fetched data
        return parsedData;
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

// Check if running in terminal environment
if (typeof process !== 'undefined' && process.argv.length > 1) {
    const plantName = process.argv[2] || 'Common nettle'; // Use command line argument or default plant name
    fetchPlants(plantName)
        .then(data => {
            if (data) {
                console.log('Fetched Data:', data);
            } else {
                console.log('No data fetched.');
            }
        })
        .catch(error => console.error('Error:', error));
}

export default fetchPlants;
