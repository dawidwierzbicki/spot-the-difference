$(document).ready(function() {
    $('span.difference').click(function() {
        var className = $(this).attr('data-id');
        $("span." + className).addClass('disabled');
        var numberOfDifference = Number($('h3 span').text());
        numberOfDifference += 1;
        $('.actual-progress').css('width', numberOfDifference * 20 + '%');
        $('h3 span').text(numberOfDifference);
        if (numberOfDifference == 5) {
            $('.form').fadeIn();
            clearTimeout(t);
            $('.playTime').val($('h2 span').text());
        }
    });

    $('button').click(function() {
        var newContestant = $('input.user').val();
        var nickRegex = /^([a-zA-Z0-9ąęółśżźćńĄĘÓŁŚŻŹĆŃ]+)$/;
        var timeStamp = $('.playTime').val();
        if (newContestant.match(nickRegex)) {
            $('.rank .scores').append('<span>' + ($('.rank span').length + 1) + '. <b>' + newContestant + '</b> czas: <time>' + timeStamp + '</time></span>');
            $('input.user').val('');
            $('.form').fadeOut();
            $('h3 span').text('0');
            $('span.difference').removeClass('disabled');
            $('.box').css('filter','blur(15px)');
            $('a').show();
        } else {
            alert('Nick powinien składać się tylko z liter i cyfr!');
        }

    });


    var h2 = $('h2 span')[0],
        start = $('a'),
        stop = $('#stop'),
        clear = $('#clear'),
        seconds = 0,
        minutes = 0,
        hours = 0,
        t;
    $(start).click(function() {
        $(h2).text("00:00:00");
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer();
        $('.box').css('filter','blur(0px)');
        $(this).hide();
    });
    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        $(h2).text((hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds));

        timer();
    }

    function timer() {
        t = setTimeout(add, 1000);
    }
});