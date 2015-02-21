var gallery = function() {

  var galleryWrapperId = "gallery-wrapper",
      thumbnailsWrapperId = "thumbnails-wrapper",
      imagesWrapperId = "images-wrapper",
      descriptionWrapperId = "description-wrapper",
      titleId = "title",
      closeButtonId = "close-button",
      descriptionId = "description";

  var galleryWrapper = document.getElementById(galleryWrapperId);

  var removeImagesWrapperIfExist = function() {
    var imagesWrapper = document.getElementById(imagesWrapperId);
    if (imagesWrapper != null) galleryWrapper.removeChild(imagesWrapper);
  }

  var addImagesToWrapper = function(wrapper, imagesList) {
    var i, image, lineBreak;
    for (i = 0; i < imagesList.length; i++) {
      image = document.createElement("img");
      image.src = imagesList[i];
      wrapper.appendChild(image);

      lineBreak = document.createElement("br");
      wrapper.appendChild(lineBreak);
    }
  }

  var createDivWithId = function(id) {
    var div = document.createElement("div");
    div.id = id;
    return div;
  }

  var createDescriptionWrapper = function(title, description) {
    var wrapper = createDivWithId(descriptionWrapperId);

    var closeButton = createDivWithId(closeButtonId);
    closeButton.onclick = function() { removeImagesWrapperIfExist(); };
    wrapper.appendChild(closeButton);

    var titleBlock = createDivWithId(titleId);
    titleBlock.innerHTML = title;
    wrapper.appendChild(titleBlock);

    if (description != null) {
      var descriptionBlock = createDivWithId(descriptionId);
      descriptionBlock.innerHTML = description;
      wrapper.appendChild(descriptionBlock);
    }

    return wrapper;
  }

  var showImages = function(settings) {
    var name = settings.name,
        description = settings.description,
        images = settings.images;

    removeImagesWrapperIfExist();

    var imagesWrapper = createDivWithId(imagesWrapperId);

    var descriptionWrapper = createDescriptionWrapper(name, description);
    imagesWrapper.appendChild(descriptionWrapper);

    addImagesToWrapper(imagesWrapper, images);

    var thumbnailsWrapper = document.getElementById(thumbnailsWrapperId);
    galleryWrapper.insertBefore(imagesWrapper, thumbnailsWrapper);
  }

  var showImagesHelper = function(settings) {
    return function() {
      showImages(settings);
    }
  }

  var init = function() {
    if (arguments.length === 0) return;
    var thumbnails = [], i;
    for (i = 0; i < arguments.length; i++) {
      var argument = arguments[i];

      thumbnails[i] = document.getElementById(argument.thumbnailId);
      thumbnails[i].onclick = showImagesHelper(argument);
      thumbnails[i].href = "#";
    }
  }

  return { init: init }
}();
