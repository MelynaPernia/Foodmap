/* *************funcion de type food*************************/
function getTypeFood() {
  return Object.keys(data);
}


function getRestaurant(typeFood) {
  return data[typeFood];
}








function validTypeFood(typeFood) {
  var centinel = false;
  var arrTypeFood = getTypeFood();
  for (var i = 0; i < arrTypeFood.length; i++) {
    if (arrTypeFood[i] === typeFood) {
      centinel = true;
    }
  }
  return centinel;
}

function setRestaurant(typeFood) {
  var arrRestaurant = getRestaurant(typeFood);
  for (var i = 0; i < arrRestaurant.length; i++) {
    // console.log(arrRestaurant[i]['name']);
    // console.log(arrRestaurant[i]['photo']);
    var div = $('<div>');
    var img = $('<img>');
    var nameRestaurant = $('<p>' + arrRestaurant[i]['name'] + '</p>');
    // $('.images-list p').attr('disabled', 'false');
    img.attr('src', '../assets/images/restaurants/' + arrRestaurant[i]['photo']);
    img.attr('class', 'img-responsive');

    img.attr('alt', 'food criolla');
    div.attr('class', 'col-xs-6');
    div.append(nameRestaurant);
    div.append(img);
    $('.images-list').append(div);
  }
  // $('.images-list p:hidden').show(3000);
}

setRestaurant('comida criolla');

$('.images-list img').mouseover(function() {

  $(this).addClass("img-opacity");
}).mouseout(function() {
  $(this).removeClass("img-opacity");
});





function setDataFood(nameRestaurant) {

  var arrTypeFood = getTypeFood();

  for (var i = 0; i < arrTypeFood.length; i++) {
    var arrRestaurant = getRestaurant(arrTypeFood[i]);

    for (var j = 0; j < arrRestaurant.length; j++) {
      // console.log(arrRestaurant[j]['name']);
      if (arrRestaurant[j]['name'] === nameRestaurant) {
        console.log(arrRestaurant[j]['address']);
        console.log(arrRestaurant[j]['price']);
      }
    }
  }
}



$('.images-list img').click(function(){
  // console.log($(this).prev().text());
  var name = $(this).prev().text()
  // var nameFood = $(this).prev().text());
  // var
  setDataFood(name);
})
