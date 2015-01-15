var Gallery = {};

Gallery.init = function() {

  var showImagesList = function(settings) {

    var thumbnailId = settings.thumbnailId,
        name = settings.name,
        decription = settings.description,
        images = settings.images;

    var parent = document.getElementById(thumbnailId).parentNode;

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

    var descriptionOfImages = document.createElement("div");
    descriptionOfImages.id = "description-of-images";
    descriptionOfImages.innerHTML = decription;

    imagesList.appendChild(descriptionOfImages);

    var addImagesToList = function() {
      var i, img;
      for (i = 0; i < images.length; i++) {
        img = document.createElement("img");
        img.src = images[i];
        imagesList.appendChild(img);
      }
    }();

    removeCurrentImagesList();
    parent.insertBefore(imagesList, parent.firstChild);
  }

  var helper = function(settings) {
    return function() {
      showImagesList(settings);
    }
  }

  var thumbnails = [], i;
  for (i = 0; i < arguments.length; i++) {
    var argument = arguments[i];

    thumbnails[i] = document.getElementById(argument.thumbnailId);
    thumbnails[i].onclick = helper(argument);
  }
}
