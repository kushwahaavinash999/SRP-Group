// Function to toggle showing/hiding extra information
function toggleReadMore(sareeId) {
    var button = document.getElementById('readMoreButton' + sareeId);
    var extraInfo = document.getElementById('extraInfo' + sareeId);

    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
        extraInfo.style.display = 'block';
        button.textContent = 'Read less';
    } else {
        extraInfo.style.display = 'none';
        button.textContent = 'Read more';
    }
}

// Attach an event listener to the "Read more" button for a specific saree (e.g., Saree 1)
document.getElementById('readMoreButton1').addEventListener('click', function() {
    toggleReadMore(1);
});

