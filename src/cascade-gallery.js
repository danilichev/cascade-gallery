var Gallery = {};

Gallery.init = function() {

  var galleryWrapperClassName = "gallery-wrapper",
      imagesWrapperId = "images-wrapper",
      descriptionWrapperClassName = "description-wrapper",
      nameOfImagesId = "name",
      closeButtonId = "close-button",
      descriptionOfImagesId = "description",
      thumbnailsWrapperClassName = "thumbnails-wrapper";


  var showImages = function(settings) {

    var thumbnailId = settings.thumbnailId,
        name = settings.name,
        decription = settings.description,
        images = settings.images;

    var parent =
        document.getElementsByClassName(galleryWrapperClassName)[0];

    var removeCurrentImagesWrapper = function() {
      var currentImagesWrapper = document.getElementById(imagesWrapperId);
      if (currentImagesWrapper != null) {
        parent.removeChild(document.getElementById(imagesWrapperId));
      }
    }

    removeCurrentImagesWrapper();

    var imagesWrapper = document.createElement("div");
    imagesWrapper.id = imagesWrapperId;

    var decriptionWrapper = document.createElement("div");
    decriptionWrapper.className = descriptionWrapperClassName;

    var closeButton = document.createElement("div");
    closeButton.id = closeButtonId;
    closeButton.onclick = function() { removeCurrentImagesWrapper(); }
    decriptionWrapper.appendChild(closeButton);

    var nameOfImages = document.createElement("div");
    nameOfImages.id = nameOfImagesId;
    nameOfImages.innerHTML = name;
    decriptionWrapper.appendChild(nameOfImages);

    if (decription != null) {
      var descriptionOfImages = document.createElement("div");
      descriptionOfImages.id = descriptionOfImagesId;
      descriptionOfImages.innerHTML = decription;

      decriptionWrapper.appendChild(descriptionOfImages);
    }

    imagesWrapper.appendChild(decriptionWrapper);

    var addImagesToImagesWrapper = function() {
      var i, image, lineBreak;
      for (i = 0; i < images.length; i++) {
        image = document.createElement("img");
        image.src = images[i];
        imagesWrapper.appendChild(image);

        lineBreak = document.createElement("br");
        imagesWrapper.appendChild(lineBreak);
      }
    }();

    var thumbnailsWrapper =
        document.getElementsByClassName(thumbnailsWrapperClassName)[0];
    parent.insertBefore(imagesWrapper, thumbnailsWrapper);
  }

  var helper = function(settings) {
    return function() {
      showImages(settings);
    }
  }

  var thumbnails = [], i;
  for (i = 0; i < arguments.length; i++) {
    var argument = arguments[i];

    thumbnails[i] = document.getElementById(argument.thumbnailId);
    thumbnails[i].onclick = helper(argument);
    thumbnails[i].href = "#";
  }
}
