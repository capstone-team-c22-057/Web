const fruitFreshnessSelection = document.getElementById('fruit-freshness-selection');
const plantHealthSelection = document.getElementById('plant-health-selection');

const beforeChooseDisplay = document.getElementById('before-choose-display');
const fruitFreshnessDisplay = document.getElementById('fruit-freshness-display');
const plantHealthDisplay = document.getElementById('plant-health-display');

const fruitFreshnessImageDetection = document.getElementById('fruit-freshness-image-detection');
const plantHealthImageDetection = document.getElementById('plant-health-image-detection');
const fruitDetectionResult = document.getElementById('fruit-detection-result');
const plantDetectionResult = document.getElementById('plant-detection-result');
const plantImageResult = document.getElementById('plant-image-result');
const fruitImageResult = document.getElementById('fruit-image-result');

const fruitFreshnessImageDelete = document.getElementById('fruit-freshness-image-delete');
const plantHealthImageDelete = document.getElementById('plant-health-image-delete');
const selectedFruitImage = document.getElementById('selected-fruit-image');
const selectedPlantImage = document.getElementById('selected-plant-image');


//Fungsi Pemilihan Model
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


//Fungsi Deteksi
fruitFreshnessImageDetection.addEventListener('click', function () {
    const fruitImage = selectedFruitImage.getAttribute('src');
    if (fruitImage){
        fruitDetectionResult.removeAttribute('hidden');
        fruitImageResult.setAttribute('src', fruitImage);

        plantDetectionResult.setAttribute('hidden', true);
    } else {
        alert ('Masukkan Gambar Terlebih Dahulu!');
    }
});

plantHealthImageDetection.addEventListener('click', function () {
    const plantImage = selectedPlantImage.getAttribute('src');
    if (plantImage){
        plantDetectionResult.removeAttribute('hidden');
        plantImageResult.setAttribute('src', plantImage);

        fruitDetectionResult.setAttribute('hidden', true);
    } else {
        alert ('Masukkan Gambar Terlebih Dahulu!');
    }
});


//Fungsi Hapus
fruitFreshnessImageDelete.addEventListener('click', function () {
    selectedFruitImage.removeAttribute('src');
});

plantHealthImageDelete.addEventListener('click', function () {
    selectedPlantImage.removeAttribute('src');
});