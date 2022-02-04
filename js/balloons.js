//random title
$(document).ready(function(){

    var attentionSeekers = Array("animate__animated animate__bounce","animate__animated animate__flash","animate__animated animate__pulse",
    "animate__animated animate__rubberBand","animate__animated animate__shakeX","animate__animated animate__shakeY",
    "animate__animated animate__headShake","animate__animated animate__swing","animate__animated animate__tada",
    "animate__animated animate__wobble","animate__animated animate__jello","animate__animated animate__heartBeat");

    var item = attentionSeekers[Math.floor(Math.random()*attentionSeekers.length)];

    $("#title").each(function(){
        $(this).addClass(item);
    });

    $(function() {
        $('#red1').hover(function() {
          $('h1').css('color', 'red');
        }, function() {
          $('h1').css('color', '');
        });

        $('#blue1').hover(function() {
            $('h1').css('color', 'blue');
        }, function() {
            $('h1').css('color', '');
        });

        $('#green1').hover(function() {
            $('h1').css('color', 'green');
        }, function() {
            $('h1').css('color', '');
        });


      });

});


$(function(){

    $('#selectAll').on('change',function(){
        $('#redImg').css('visibility', 'visible');
        $('#greenImg').css('visibility', 'visible');
        $('#blueImg').css('visibility', 'visible');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#redImg').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#redImg').addClass('animate__animated animate__bounceOutUp');
         $(this).is(':checked') ?
         $('#greenImg').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#greenImg').addClass('animate__animated animate__bounceOutUp');
         $(this).is(':checked') ?
         $('#blueImg').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#blueImg').addClass('animate__animated animate__bounceOutUp');
    });

    $('#submit').on('click', function(e){
        var checked = $('#checkboxes').find(':checked').length;

        e.preventDefault();

        if (!checked){
            $('#toast').toast({ autohide: false }).toast('show')
        }

    });

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

    });

});