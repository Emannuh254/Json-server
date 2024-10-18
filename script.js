// Fetch the milk collection centers from the db.json and display them
document.addEventListener('DOMContentLoaded', () => {
    fetch('db.json')
        .then(response => response.json())
        .then(data => displayCenters(data.centers))
        .catch(error => console.error('Error fetching data:', error));
});

// Function to display the collection centers
function displayCenters(centers) {
    const centerList = document.getElementById('center-list');
    centerList.innerHTML = ''; // Clear any existing content

    centers.forEach(center => {
        // Create a div for each collection center
        const centerDiv = document.createElement('div');
        centerDiv.classList.add('center');

        // Add image
        const centerImage = document.createElement('img');
        centerImage.src = center.image;
        centerImage.alt = `${center.name} Image`;

        // Add name
        const centerName = document.createElement('h3');
        centerName.textContent = center.name;

        // Add location
        const centerLocation = document.createElement('p');
        centerLocation.textContent = `Location: ${center.location}`;

        // Add rating
        const centerRating = document.createElement('p');
        centerRating.textContent = `Rating: ${center.rating}`;

        // Create a reviews section
        const reviewsDiv = document.createElement('div');
        reviewsDiv.classList.add('reviews');

        const reviewsHeader = document.createElement('h4');
        reviewsHeader.textContent = 'Reviews:';
        reviewsDiv.appendChild(reviewsHeader);

        // Add each review
        center.reviews.forEach(review => {
            const reviewP = document.createElement('p');
            reviewP.innerHTML = `<strong>${review.user}:</strong> ${review.comment} (Rating: ${review.rating})`;
            reviewsDiv.appendChild(reviewP);
        });

        // Append all to the centerDiv
        centerDiv.appendChild(centerImage);
        centerDiv.appendChild(centerName);
        centerDiv.appendChild(centerLocation);
        centerDiv.appendChild(centerRating);
        centerDiv.appendChild(reviewsDiv);

        // Append the centerDiv to the centerList
        centerList.appendChild(centerDiv);
    });
}
