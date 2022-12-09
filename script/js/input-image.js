let base64Image;
$("#upload-fruit-image").change(function() {
    let reader = new FileReader();
    reader.onload = function(e) {
        let dataURL = reader.result;
        $('#selected-fruit-image').attr("src", dataURL);
        base64Image = dataURL.replace("data:image/png;base64,","");
    }
    reader.readAsDataURL($("#upload-fruit-image")[0].files[0]);
});

$("#upload-plant-image").change(function() {
    let reader = new FileReader();
    reader.onload = function(e) {
        let dataURL = reader.result;
        $('#selected-plant-image').attr("src", dataURL);
        base64Image = dataURL.replace("data:image/png;base64,","");
    }
    reader.readAsDataURL($("#upload-plant-image")[0].files[0]);
});
