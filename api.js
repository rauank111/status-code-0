mapboxgl.accessToken = 'pk.eyJ1IjoiYW51c2hrYTE3IiwiYSI6ImNsbDQ2cm9tMjAzbDkzZmxiNmtpZ2l3ZWsifQ.X42lWwCQbxecQziN-o5Lvw';

        const input = document.getElementById('location-input');
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'suggestions';
        input.parentNode.appendChild(suggestionsContainer);

        
        input.addEventListener('input', async (e) => {
          const query = e.target.value;

          // Call Mapbox Geocoding API for autocomplete suggestions
          const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`);
          const data = await response.json();

          // Clear previous suggestions
          suggestionsContainer.innerHTML = '';

          // Display autocomplete suggestions
          data.features.forEach((feature) => {
            const suggestion = document.createElement('div');
            suggestion.className = 'suggestion';
            suggestion.textContent = feature.place_name;
            suggestionsContainer.appendChild(suggestion);

            suggestion.addEventListener('click', () => {
              input.value = feature.place_name;
              // Use feature.center for your mapping purposes
            }
            );
          }
          );
        }
        );
      

        // document.getElementById('search-button').addEventListener('click',handleclick);
        const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
      window.location.href = 'https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`';
    });
        // const openApiPage = () => {
        //   window.location.href = 'https://api.mapbox.com/geocoding/v5/mapbox.places/index.html';
        // };

        // const searchButton = document.getElementById('search-button');
        // searchButton.addEventListener('click', openApiPage);