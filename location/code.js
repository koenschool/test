function pak(){
// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
  // Prompt user for permission to access their location
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    (position) => {
      // Get the user's latitude and longitude coordinates
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      // /www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393
      // Do something with the location data, e.g. display on a map
      location.replace(`https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`);
      // console.log(` ${lat}, ${lng}`);
      // ?entry=ttu
    },
    // Error callback function
    (error) => {
      // Handle errors, e.g. user denied location sharing permissions
      console.error("Error getting user location:", error);
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}
}