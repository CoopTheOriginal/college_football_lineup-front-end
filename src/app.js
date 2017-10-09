import $ from 'jquery';

$(document).ready(() => {
  $('#IncludeHeader').load('header.html');
  $('#IncludeSignUp').load('sign_up.html');
  $('#IncludeHowToPlay').load('how_to_play.html');
  $('#IncludeFooter').load('footer.html');

  $('body').on('click', '#goHome', () => {
    $('#mainBody').empty()
      .append($('<div>').load('how_to_play.html'))
      .append($('<div>').load('sign_up.html'));
  });

  $('body').on('click', '#leagues', () => {
    $('#mainBody').empty().load('leagues.html');
  });

  $('body').on('click', '#lineUp', () => {
    $('#mainBody').empty().load('line_up.html');
    console.log('lineUp');
  });

  $('body').on('click', '#signUp', () => {
    $('#mainBody').empty().load('sign_up.html');
  });

  $('body').on('click', '#aboutUs', () => {
    $('#mainBody').empty();
    console.log('aboutUs');
  });

  $('body').on('click', '#support', () => {
    $('#mainBody').empty();
    console.log('support');
  });

  $('body').on('click', '#logIn', () => {
    $('#mainBody').empty().load('log_in.html');
  });
});


