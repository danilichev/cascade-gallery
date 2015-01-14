var gallery = function (settings) {

  var thumbnailId = settings.thumbnailId,
      name = settings.name,
      decription = settings.decription,
      images = settings.images;

  var imagesList = document.createElement("div");
  imagesList.id = "images-list";

  var removeCurrentImagesList = function() {
    if (parent.firstChild.id === imagesList.id) {
      parent.removeChild(parent.firstChild);
    }
  }

  var header = document.createElement("div");

  var title = document.createElement("div");
  title.id = "title-of-images-list";
  title.innerHTML = name;
  header.appendChild(title);

  var closeButton = document.createElement("div");
  closeButton.id = "close-button-for-images-list";
  closeButton.innerHTML = "X";
  closeButton.onclick = function() { removeCurrentImagesList(); }
  header.appendChild(closeButton);

  imagesList.appendChild(header);

  var addImagesToList = function() {
    var i, img;
    for (i = 0; i < images.length; i++) {
      img = document.createElement("img");
      img.src = images[i];
      imagesList.appendChild(img);
    }
  }();

  var thumbnail = document.getElementById(thumbnailId);
  var parent = thumbnail.parentNode;
  thumbnail.onclick = function(event) {
    removeCurrentImagesList();
    parent.insertBefore(imagesList, parent.firstChild);
  }
}
