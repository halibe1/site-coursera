function upDate(previewPic) {
    // Проверяем, что событие срабатывает
    console.log("Mouse over image");
    console.log("Source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);
    
    // Получаем элемент с id 'image'
    let imageDiv = document.getElementById("image");
    
    // Меняем фоновое изображение и текст
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    // Проверяем, что событие срабатывает
    console.log("Mouse out of image");
    
    // Получаем элемент с id 'image'
    let imageDiv = document.getElementById("image");
    
    // Возвращаем оригинальные значения
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}