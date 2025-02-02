const apiKey = "9wD4dzmzPcGLZ1mULaq6IUoDoosC5OM2cU5zTmSv0qigcOj4vl"; // Ensure this is your real API key

// 📸 Image Preview
function previewImage() {
    const fileInput = document.getElementById("plantImage");
    const preview = document.getElementById("preview");

    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.classList.remove("hidden");
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// 🌱 Identify Plant
async function identifyPlant() {
    const fileInput = document.getElementById("plantImage");
    if (fileInput.files.length === 0) {
        alert("Please select an image.");
        return;
    }

    const imageBase64 = await toBase64(fileInput.files[0]);

    const response = await fetch("https://api.plant.id/v2/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Api-Key": apiKey },
        body: JSON.stringify({
            images: [imageBase64],
            plant_details: ["common_names", "url", "wiki_description"]
        })
    });

    const data = await response.json();
    displayResult(data);
}

// 🖼️ Convert Image to Base64
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
    });
}

// 🌿 Show Plant Info & Save to Local Storage
function displayResult(data) {
    if (data.suggestions && data.suggestions.length > 0) {
        const plant = data.suggestions[0];
        const plantInfo = `
            <div class="plant-card">
                <h3>${plant.plant_name}</h3>
                <p><strong>Common Names:</strong> ${plant.plant_details.common_names.join(", ")}</p>
                <p><a href="${plant.plant_details.url}" target="_blank">More Info</a></p>
            </div>
        `;
        document.getElementById("result").innerHTML = plantInfo;
        
        // 💾 Save to Local Storage
        saveToRecentSearches(plant.plant_name, plant.plant_details.common_names, plant.plant_details.url);
    } else {
        document.getElementById("result").innerHTML = "<p>Plant not recognized. Try another image.</p>";
    }
}

// 🔄 Save & Show Recent Searches
function saveToRecentSearches(name, commonNames, url) {
    let searches = JSON.parse(localStorage.getItem("recentPlants")) || [];
    searches.unshift({ name, commonNames, url });
    searches = searches.slice(0, 5); // Keep only the last 5 searches
    localStorage.setItem("recentPlants", JSON.stringify(searches));
    loadRecentSearches();
}

// 🔄 Load Recent Searches from Storage
function loadRecentSearches() {
    const searches = JSON.parse(localStorage.getItem("recentPlants")) || [];
    const recentDiv = document.getElementById("recentSearches");
    recentDiv.innerHTML = searches.map(plant => `
        <div class="plant-card">
            <h4>${plant.name}</h4>
            <p>Common Names: ${plant.commonNames.join(", ")}</p>
            <a href="${plant.url}" target="_blank">More Info</a>
        </div>
    `).join("");
}

// 🧹 Clear Recent Searches
function clearHistory() {
    localStorage.removeItem("recentPlants");
    loadRecentSearches();  // Refresh the recent searches display
    alert("History has been cleared."); // Notify the user
}

// 🏁 Load past searches on page load
window.onload = loadRecentSearches;
