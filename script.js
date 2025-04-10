function updateValue(id, value) {
    document.getElementById(id).textContent = value;
}

function applySettings() {
    const settings = {
        temperature: document.getElementById('temperature').value,
        humidity: document.getElementById('humidity').value,
        light: document.getElementById('light').value
    };

    // Simuler l'enregistrement en JSON (console log ici)
    const jsonSettings = JSON.stringify(settings, null, 2);
    console.log("Paramètres appliqués (JSON):\n" + jsonSettings);

    alert(`Paramètres appliqués:\nTempérature: ${settings.temperature}°C\nHumidité: ${settings.humidity}%\nLuminosité: ${settings.light}%`);
}