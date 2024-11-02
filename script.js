// Handle Fan Zone Story Submission
document.getElementById('fan-story-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const storyText = event.target.querySelector('textarea').value;
    const submittedStories = document.getElementById('submitted-stories');

    const newStory = document.createElement('div');
    newStory.classList.add('story');
    newStory.innerText = storyText;

    submittedStories.appendChild(newStory);
    event.target.reset();
});

// Initialize Google Map
function initMap() {
    const mapOptions = {
        zoom: 2,
        center: { lat: 20.5937, lng: 78.9629 } // Center on India
    };
    
    const map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

    // Example: Add markers for players' hometowns
    const players = [
        { name: "Player Name 1", location: { lat: 28.6139, lng: 77.2090 } }, // New Delhi
        { name: "Player Name 2", location: { lat: 19.0760, lng: 72.8777 } }  // Mumbai
        // Add more players and their hometown coordinates
    ];

    players.forEach(player => {
        new google.maps.Marker({
            position: player.location,
            map: map,
            title: player.name
        });
    });
}

// Load the map
google.maps.event.addDomListener(window, 'load', initMap);