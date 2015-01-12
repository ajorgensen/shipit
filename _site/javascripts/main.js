(function() {
  var changeImage, root;

  root = this;

  changeImage = function(image) {
    $('#image_placeholder').append($('<img />', {
      src: image.canonical_url
    }));
    return $('#approval_snippet').append("![approved](" + image.canonical_url + ")");
  };

  $(function() {
    var image, rand_index;
    rand_index = Math.floor(Math.random() * root.images.length);
    image = root.images[rand_index];
    return changeImage(image);
  });

}).call(this);
