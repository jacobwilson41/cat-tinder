import $ from 'jquery';
import axios from 'axios';

var animating = false;
var cardsCounter = 0;
var numOfCards = 6;
var decisionVal = 80;
var pullDeltaX = 0;
var deg = 0;
var $card, $cardReject, $cardLike;

export function pullChange() {
  animating = true;
  deg = pullDeltaX / 10;
  $card.css(
    'transform',
    'translateX(' + pullDeltaX + 'px) rotate(' + deg + 'deg)'
  );

  var opacity = pullDeltaX / 100;
  var rejectOpacity = opacity >= 0 ? 0 : Math.abs(opacity);
  var likeOpacity = opacity <= 0 ? 0 : opacity;
  $cardReject.css('opacity', rejectOpacity);
  $cardLike.css('opacity', likeOpacity);
}

async function release(e) {
  if (pullDeltaX >= decisionVal) {
    $card.addClass('to-right');
    await axios
      .post('https://api.thecatapi.com/v1/votes', {
        // code for upvote
        image_id: e.target.id,
        value: 1
      })
      .then((res) => console.log(res));
  } else if (pullDeltaX <= -decisionVal) {
    $card.addClass('to-left');
    await axios
      .post('https://api.thecatapi.com/v1/votes', {
        // code for downvote
        image_id: e.target.id,
        value: 0
      })
      .then((res) => console.log(res));
  }

  if (Math.abs(pullDeltaX) >= decisionVal) {
    $card.addClass('inactive');

    setTimeout(function () {
      $card.addClass('below').removeClass('inactive to-left to-right');
      cardsCounter++;
      if (cardsCounter === numOfCards) {
        cardsCounter = 0;
        $('.gif__card').removeClass('below');
      }
    }, 300);
  }

  if (Math.abs(pullDeltaX) < decisionVal) {
    $card.addClass('reset');
  }

  setTimeout(function () {
    $card
      .attr('style', '')
      .removeClass('reset')
      .find('.gif__card__choice')
      .attr('style', '');

    pullDeltaX = 0;
    animating = false;
  }, 300);
}

$(document).on('mousedown touchstart', '.gif__card:not(.inactive)', function (
  e
) {
  if (animating) return;

  $card = $(this);
  $cardReject = $('.gif__card__choice.m--reject', $card);
  $cardLike = $('.gif__card__choice.m--like', $card);
  var startX = e.pageX || e.originalEvent.touches[0].pageX;

  $(document).on('mousemove touchmove', function (e) {
    var x = e.pageX || e.originalEvent.touches[0].pageX;
    pullDeltaX = x - startX;
    if (!pullDeltaX) return;
    pullChange();
  });

  $(document).on('mouseup touchend', function (e) {
    $(document).off('mousemove touchmove mouseup touchend');
    if (!pullDeltaX) return; // prevents from rapid click events
    release(e);
  });
});
