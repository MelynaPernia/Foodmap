$(document).ready(function() {
  function getTypeFood() {
    return Object.keys(data);
  }

  function getRestaurant(typeFood) {
    return data[typeFood];
  }

  function clearInput(name) {
    $(name).text('');
  }

  function enabledButton(btn) {
    $(btn).removeAttr('disabled');
  }

  function desabledButton(btn) {
    $(btn).attr('disabled', '');
  }
  // Cargar las imágenes de los restaurantes
  function loadRestaurant() {
    var arrTypeFood = getTypeFood();
    for (var i = 0; i < arrTypeFood.length; i++) {
      var arrRestaurant = getRestaurant(arrTypeFood[i]);
      for (var j = 0; j < arrRestaurant.length; j++) {
        $('.images-list').append(
          '<div class="col-xs-6" data-name = "' + arrTypeFood[i] + '">' +
          '<p style="display:none">' + arrRestaurant[j]['name'] + '</p>' +
          '<img src="../assets/images/restaurants/' + arrRestaurant[j]['photo'] +
          '" alt ="' + arrRestaurant[j]['name'] +
          '" class = "img-responsive" data-toggle = "modal" data-target = "#myModal"' +
          '></div>');
      }
    }
  }
  // Cargar las imágenes con un parámetro
  function loadSelectRestaurant(typeFood) {
    var arrRestaurant = getRestaurant(typeFood);
    var dataName = '[data-name]';
    if (arrRestaurant) {
      $(dataName).css('display', 'none');
      dataName = '[data-name = "' + typeFood + '"]';
      $(dataName).css('display', 'block');
    } else {
      $(dataName).css('display', 'block');
    }
  }
  // Mostrar información del restaurant
  function setDataFood(nameRestaurant) {
    var arrTypeFood = getTypeFood();
    for (var i = 0; i < arrTypeFood.length; i++) {
      var arrRestaurant = getRestaurant(arrTypeFood[i]);
      for (var j = 0; j < arrRestaurant.length; j++) {
        if (arrRestaurant[j]['name'] === nameRestaurant) {
          var photo = arrRestaurant[j]['maps'];
          var address = arrRestaurant[j]['address'];
          var detalles = arrRestaurant[j]['phono'];
          $('.modal-title').text(nameRestaurant);
          $('.modal-address').text(address);
          $('.modal-detalles').text(detalles);
          $('.modal-photo').html('<img src = ' + arrRestaurant[j]['maps'] + ' class="img-responsive">');
        }
      }
    }
  }

  // Inicilizando
  loadRestaurant();
  desabledButton('.btn-search-type-food');

  // Eventos
  $('.input-type-food').keyup(function() {
    var typeFood = $(this).val();
    if (typeFood === '') {
      desabledButton('.btn-search-type-food');
      loadSelectRestaurant();
    } else {
      enabledButton('.btn-search-type-food');
    }
  });

  $('.input-type-food').keypress(function(event) {
    var codeASCII = event.keyCode;
    var CODE_ENTER = 13;
    var typeFood = $(this).val();
    if (codeASCII === CODE_ENTER && typeFood !== '') {
      loadSelectRestaurant(typeFood);
    }
  });

  $('.btn-search-type-food').click(function() {
    var typeFood = $('.input-type-food').val();
    var arrRestaurant = getRestaurant(typeFood);
    loadSelectRestaurant(typeFood);
  });

  $('.images-list img').mouseover(function() {
    $(this).addClass('img-opacity');
    $(this).prev().toggle('hide');
  }).mouseout(function() {
    $(this).removeClass('img-opacity');
    $(this).prev().toggle('hide');
  });

  $('.images-list img').click(function() {
    var name = $(this).prev().text();
    setDataFood(name);
  });
});
