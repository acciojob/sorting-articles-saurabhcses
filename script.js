const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 
    'The Midway State', 'We Came as Romans', 
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
    'Anywhere But Here', 'An Old Dog'
];

function arrange(str) {
    return str.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
    return arrange(a).localeCompare(arrange(b));
});

// Display the sorted bands
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});