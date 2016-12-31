
//MissFit Mayhem Pictures
$('#mfm').click(function(){
  var image = $('#mfmPictures');
  console.log(image.length);
  if ($(image).length >0) {
    $(image).remove();

  }
  else {
    makeMfmPicturesFromXml('mfm.xml')
  };
});


function makeMfmPicturesFromXml(filename){

  $.get(filename, function(data){
    $('#missfitImageContainer').empty();
    $("<div id=\"mfmPictures\"></div>").appendTo("#missfitImageContainer");
    $(data).find('img').each(function(){
      var image = $(this);
      html = '<img src="' + image.text() + '" />';
      $('#mfmPictures').append(html);
    })
  })
};


//Battle of the Bell Pictures

$('#bob').click(function(){
  var image = $('#bobPictures');
  console.log(image.length);
  if ($(image).length >0) {
    $(image).remove();

  }
  else {
    makeBobPicturesFromXml('bob.xml')
  };
});


function makeBobPicturesFromXml(filename){

  $.get(filename, function(data){
    $('#bobImageContainer').empty();
    $("<div id=\"bobPictures\"></div>").appendTo("#bobImageContainer");
    $(data).find('img').each(function(){
      var image = $(this);
      html = '<img src="' + image.text() + '" />';
      $('#bobPictures').append(html);
    })
  })
};


//Murph Pictures

$('#murph').click(function(){
  var image = $('#murphPictures');
  console.log(image.length);
  if ($(image).length >0) {
    $(image).remove();

  }
  else {
    makeMurphPicturesFromXml('murph.xml')
  };
});


function makeMurphPicturesFromXml(filename){

  $.get(filename, function(data){
    $('#murphImageContainer').empty();
    $("<div id=\"murphPictures\"></div>").appendTo("#murphImageContainer");
    $(data).find('img').each(function(){
      var image = $(this);
      html = '<img src="' + image.text() + '" />';
      $('#murphPictures').append(html);
    })
  })
};



//Barbells for BoobsPictures


$('#b4b').click(function(){
  var image = $('#b4bPictures');
  console.log(image.length);
  if ($(image).length >0) {
    $(image).remove();

  }
  else {
    makeB4bPicturesFromXml('b4b.xml')
  };
});


function makeB4bPicturesFromXml(filename){

  $.get(filename, function(data){
    $('#b4bImageContainer').empty();
    $("<div id=\"b4bPictures\"></div>").appendTo("#b4bImageContainer");
    $(data).find('img').each(function(){
      var image = $(this);
      html = '<img src="' + image.text() + '" />';
      $('#b4bPictures').append(html);
    })
  })
};


//Halloween Pictures


$('#halloween').click(function(){
  var image = $('#halloweenPictures');
  console.log(image.length);
  if ($(image).length >0) {
    $(image).remove();

  }
  else {
    makeHalloweenPicturesFromXml('halloween.xml')
  };
});


function makeHalloweenPicturesFromXml(filename){

  $.get(filename, function(data){
    $('#halloweenImageContainer').empty();
    $("<div id=\"halloweenPictures\"></div>").appendTo("#halloweenImageContainer");
    $(data).find('img').each(function(){
      var image = $(this);
      html = '<img src="' + image.text() + '" />';
      $('#halloweenPictures').append(html);
    })
  })
};






