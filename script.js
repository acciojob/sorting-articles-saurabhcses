const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function sortBands(bands) {
    return bands.sort((a, b) => {
        // Function to remove 'a', 'an', 'the' and return the title for comparison
        const getTitle = (title) => {
            return title.replace(/^(a |an |the )/i, '').trim();
        };
        
        return getTitle(a).localeCompare(getTitle(b));
    });
}

const sortedBands = sortBands(bands);

const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});