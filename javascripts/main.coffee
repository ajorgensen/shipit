---
---
root = this

changeImage = (image) ->
  $('#image_placeholder').append $('<img />', { src: image.canonical_url })
  $('#approval_snippet').append "![approved](#{image.canonical_url})"

$ ->
  rand_index = Math.floor(Math.random() * root.images.length)
  image = root.images[rand_index]
  changeImage image
