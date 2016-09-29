$(window).load(function () {
    $('.wrapper-preloader').animate({opacity:'0'},1000).queue(function (){$(this).css({display:'none'});});
    $('.group').click(function () {
        $(this).children('input').focus()
    })
});
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
$(document).ready(function () {
    //INIT


    //ACCORDION

    var ttl = $('.el-accordion__head'),
        dropdown = $('.accordion_dropdown');

    ttl.on('click', function () {

        dropdown.not($(this).next()).slideUp(300);
        $(this).toggleClass('open');
        ttl.not($(this)).removeClass('open');
        $(this).next().slideToggle(200);
    });

    //perfectScrollBar


    //COUNTDOWN

    var note = $('#note'),
        ts = new Date(2015, 9, 9),
        newYear = true;

    if((new Date()) > ts){
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });

    //FANCYBOX

    $('.fancybox').fancybox();

    //FORM STYLER

    $('select').styler();

    $('.el-agree').change(function () {
        if($(this).is(':checked')){
            $('.label-check').addClass('active')
        }
        else{
            $('.label-check').removeClass('active')
        }
    })

    //Full page
    var fixedBlock = $('.fixed-block');
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'about', 'advantages', 'partner', 'know', 'contacts'],
        responsiveWidth: 1650,
        easing: 'swing',
        fadingEffect: true,
        easingcss3: 'cubic-bezier(0.35, -0.15, 0.54, 1.02) ',
        scrollingSpeed: 700,
        afterLoad: function(index, nextIndex, direction) {
            if(nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5 || nextIndex == 6){
                $(fixedBlock).addClass('scroll');
                $('.goBack').addClass('onblock');
                $('.wrapper-fixmenu').addClass('onblock');
            }else{
                $(fixedBlock).removeClass('scroll');
                $('.wrapper-fixmenu').removeClass('onblock');
                $('.goBack').removeClass('onblock');
            }
            if (nextIndex == 2) {
                count();
            }



            if(nextIndex == 2 || nextIndex == 4 || nextIndex == 6){
                $('.main-menu').addClass('grey');
                $('.main-menu .sprite').addClass('grey');
            }else{
                $('.main-menu').removeClass('grey');
                $('.main-menu .sprite').removeClass('grey');
            }


        },
        onLeave: function(index, nextIndex, direction) {
            if(nextIndex == 6){
                $('.section-contacts .fp-tableCell').addClass('fp-tableCellBottom');
            }

        }
    });

    //GRADIENT

    $('.txt-gradient').gradientText({
        colors: ['#ff6d00', '#ff8400', '#ff9f00']
    });

    //VALIDATE

    $('.main-form').validate({
        rules:{
            password:{
                required: true,
                minlength: 4,
                maxlength: 30
            },
            username:{
                required: true,
                email:true
            }
        },
        message:{
            username:{
                required: "Это поле обязательно",
                email: "Введите корректный email"
            },
            password: {
                required: "Это поле обязательно",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                max: "Не более 30 символов"
            }
        }
    });
    $('.btn-enter').click(function () {
        $('.exam').hide()
    });
    $('.group input').focus(function () {
        $(this).siblings('.exam').hide();
    });

    $("#regForm").validate(
        {
            rules: {
                email: {
                    required: true,
                    email: true
                },
                pass: {
                    required: true,
                    rangelength: [6, 12]
                },
                pass2: {
                    required: true,
                    equalTo: "#passwordEnter"
                },
                agree:{
                    required: true
                },
                usd: {
                    require_from_group: [1, '.phone'],
                    number: true
                },
                eur: {
                    require_from_group: [1, '.phone'],
                    number: true
                }
            }
        });

    $('.wrapper-input').on('click','label.error',function () {
        $(this).hide();
    })

    var body = $('body'),
        btnChange = $('.btn-change'),
        themesArea = 1,
        geo = 1, //A
        totalClick = 250, //B1
        totalCpc = 250, //B2
        totalAdv = 500, //B3
        totalClickAdv,  // total click (xxx)
        allClickAdv; // all click (yyy)

    //BODY CHANGE

    $(btnChange).on('click',function (e) {

        e.preventDefault();

        if($(btnChange).not(this)){
            $('.bl-form-body').fadeOut().fadeIn();
        }

        var formAction = $(this).data('action');

        $('.form-registration').attr('action', formAction);

    });

    $('.btn-master').on('click', function () {

        $(body).removeClass('adv');
        $(body).addClass('master');

        $('#choose-select :first').attr("selected", "selected");
        $('.jq-selectbox__dropdown li:first-child').addClass('selected').addClass('sel');
        $('.jq-selectbox__dropdown li:last-child').removeClass('selected').removeClass('sel');
        $('.modal-wrapper .jq-selectbox__select-text').text('вебмастер');

        $('.btn-master').addClass('active');
        $('.btn-adv').removeClass('active');

    });

    $('.btn-adv').on('click', function () {

        $(body).removeClass('master');
        $(body).addClass('adv');

        $('.btn-adv').addClass('active');
        $('.btn-master').removeClass('active');
        $('#choose-select :last').attr("selected", "selected");
        $('.jq-selectbox__dropdown li:first-child').removeClass('selected').removeClass('sel');
        $('.jq-selectbox__dropdown li:last-child').addClass('selected').addClass('sel');
        $('.modal-wrapper .jq-selectbox__select-text').text('рекламодатель');
    });

    $('#choose-select').on('change',function () {

        if($('#choose-select').val() == '1'){
            $(body).removeClass('adv').addClass('master');
            $('.btn-master').addClass('active');
            $('.btn-adv').removeClass('active');
        }else{
            $(body).removeClass('master').addClass('adv');
            $('.btn-master').removeClass('active');
            $('.btn-adv').addClass('active')
        }
    });

    // SECTION PARTNER (CALCULATOR - webmaster);


    $('#themes-area').on('change',function () {
        themesArea = $(this).val();
        calc_webmaster();
    });


    $('.el-area').on('click',function () {
        $(this).toggleClass('active');
        $('.el-area').not($(this)).removeClass('active');
        calc_webmaster();
    });



    $('.bl-wrapper-calc-master .el-btn-total').on('click', function (e) {

        e.preventDefault();

        calc_webmaster();
        $(this).addClass('el-top');

    });

    $('.bl-wrapper-calc-master input').on('keypress', function (e) {
        if (e.charCode && (e.charCode < 48 || e.charCode > 57)){
            return false;
        };
        calc_webmaster();
    });

    var calc_webmaster = function () {
        var amountVisitors = $('.amount-visitors').val(),
            amountPreview = $('.amount-preview').val(),
            elAreaRate = $('.el-area.active').data('amount'),
            totalPrice;
        if(elAreaRate == undefined){
            elAreaRate = 0;
        }

        console.log(amountVisitors, amountPreview, themesArea, elAreaRate);

        if((amountPreview / amountVisitors) <= 4 ){
            totalPrice = amountPreview / 1000  * themesArea * elAreaRate * 7;
            console.log(totalPrice);
        }
        else{
            totalPrice = amountPreview / 1000  * themesArea * elAreaRate * 5;
            console.log(totalPrice);
        }

        $('.bl-wrapper-calc-master .el-btn-amount').text(Math.round(totalPrice) + " руб");
    };

    // SECTION PARTNER (CALCULATOR - adv);

    $('#geo').on('change',function () {
        geo = $(this).val(); //A
        calc_adv();
        calc_adv();
    });


    $('#themes').on('change',function () {
        totalClick = $('#themes :selected').data('click');//B1
        totalCpc =  $('#themes :selected').data('cpc');//B2
        totalAdv =  $('#themes :selected').data('total-adv');//B3
        calc_adv();
    });
    $('.bl-wrapper-calc-adv input').on('keypress', function (e) {

        if (e.charCode && (e.charCode < 48 || e.charCode > 57)){
                return false;
        };
        calc_webmaster();

    });


    var calc_adv = function () {
        var priceClick = $('.amount-visitors').val(), //C
            amountPreviewAdv = $('.amount-preview').val(); //D
        
        console.log(geo, priceClick, amountPreviewAdv, totalClick, totalCpc, totalAdv);

        allClickAdv = geo * totalClick; //yyy

        totalClickAdv = (allClickAdv/totalAdv*amountPreviewAdv)*priceClick/totalCpc;



        $('.bl-wrapper-calc-adv .el-btn-amount').text("Вы получите "+ Math.round(totalClickAdv) + " переходов из " + Math.round(allClickAdv) + " доступных");
    };
    
    $('.bl-wrapper-calc-adv .el-btn-total').on('click', function (e) {
        e.preventDefault();
        calc_adv();
        $(this).addClass('el-top');

    });

    var contact = [
        seva = {
            email:'vsevolod.mileiko@etarg.ru',
            skype:'vsevolod.etarg',
            icq:'674667460'
        },
        alexey = {
            email:'alexey.naumov@etarg.ru',
            skype:'alexey.etarg',
            icq:'653276729'
        },
        alex = {
            email:'alexandr.mironov@etarg.ru',
            skype:'aleksandr.etarg',
            icq:'658138924'
        }
    ];
    var changeContact = function () {
        var rand = Math.floor(Math.random() * contact.length);
        var href_mail = 'mailto:'+ contact[rand].email;
        var href_skype = 'skype:'+ contact[rand].skype + '?call';
        var href_icq = 'http://www.icq.com/whitepages/cmd.php?uin='+ contact[rand].icq + '&action=message';

        $('.el-link__mail')
            .attr('href', href_mail)
            .find('.adv-hidden')
            .addClass('old-link-big').delay(700).queue(function(next){
            $(this).text(contact[rand].email)
                .removeClass("old-link-big");
            next()});

        $('.el-link__skype')
            .attr('href', href_skype)
            .find('.adv-hidden')
            .addClass('old-link').delay(700).queue(function(next){
            $(this).text(contact[rand].skype)
                .removeClass("old-link");
            next()
        });

        $('.el-link__icq')
            .attr('href', href_icq)
            .find('.adv-hidden')
            .addClass('old-link').delay(700).queue(function(next){
            $(this).text(contact[rand].icq)
                .removeClass("old-link");
            next()
        });
    }();

   $('.hamburger').on('click', function () {
       $(this).toggleClass('checked');
       $('body').toggleClass('menu-active');
       $('html').toggleClass('html-hidden');
       $('.fix-content').toggleClass('onblock');
   })
    $('.main-menu a').on('click',function () {
        $('body').removeClass('menu-active');
        $('html').removeClass('html-hidden');
        $('.hamburger').removeClass('checked');
        $('.fix-content').removeClass('onblock')
    })
    $(window).scrollTop(function () {
        $('.hamburger').removeClass('checked');
        $('html').removeClass('html-hidden');
        $('.fix-content').removeClass('onblock');
    })

    $(function() {
        //Enable swiping...
        $(".wrapper-content-abl").swipe( { swipeStatus:pinch, allowPageScroll:"vertical"} );
        function pinch(event, phase, direction, distance) {
            $('body').removeClass('menu-active');
            $('html').removeClass('html-hidden');
            $('.hamburger').removeClass('checked');
            $('.fix-content').removeClass('onblock')
        }
    });
});

