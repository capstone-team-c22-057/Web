const fruitFreshnessSelection = document.getElementById('fruit-freshness-selection');
const plantHealthSelection = document.getElementById('plant-health-selection');

const beforeChooseDisplay = document.getElementById('before-choose-display');
const fruitFreshnessDisplay = document.getElementById('fruit-freshness-display');
const plantHealthDisplay = document.getElementById('plant-health-display');

const fruitFreshnessImageDetection = document.getElementById('fruit-freshness-image-detection');
const plantHealthImageDetection = document.getElementById('plant-health-image-detection');
const detectionResultContainer = document.getElementById('detection-result-container');

fruitFreshnessSelection.addEventListener('click', function () {
    fruitFreshnessDisplay.removeAttribute('hidden');
    fruitFreshnessSelection.setAttribute('style', 'background-color: whitesmoke;');
    
    beforeChooseDisplay.setAttribute('hidden', true);
    plantHealthDisplay.setAttribute('hidden', true);
    plantHealthSelection.removeAttribute('style');
});

plantHealthSelection.addEventListener('click', function () {
    plantHealthDisplay.removeAttribute('hidden');
    plantHealthSelection.setAttribute('style', 'background-color: whitesmoke;');

    beforeChooseDisplay.setAttribute('hidden', true);
    fruitFreshnessDisplay.setAttribute('hidden', true);
    fruitFreshnessSelection.removeAttribute('style');
});

fruitFreshnessImageDetection.addEventListener('click', function () {
    detectionResultContainer.removeAttribute('hidden');
});

plantHealthImageDetection.addEventListener('click', function () {
    detectionResultContainer.removeAttribute('hidden');
});