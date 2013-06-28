var input = '<input type="text" class="input-large" placeholder="@patrickmnts"><button type="submit" class="btn-success">SUBMIT</button>';
var tweets = [];
              tweets[0] = "#FridaysAreMyFavorite!";
              tweets[1] = "#PortlandCodeSchool";
              tweets[2] = "#SundayFunDay!";
              tweets[3] = "Hip, Hip";
              tweets[4] = "Potatoes come in so many shapes and sizes!";

var favLink = '<a href=#>    favorite<a>';

$(function(){

  $('.container').prepend('<h1>TOP!</h1>');
  $('.span5').addClass('well');
  $('#left').prepend(input);
  $('button').on('click', function() {
    $('#left').append('<ul id="tweets"><li>' + tweets[0] + '</li></ul>');
    $('li').append(favLink);
  });

//My thought here was to add a css to hide the 'favorited' li in place and transfer
//the content over the the right hand div. under the Favorite title.
  $('a').on('click', function() {
    console.log('here');
    $('li').addClass('hidden');
    console.log('hello');
      (this).insertBefore($('#tweetlist'.siblings(':eq(0')));
  });
});



