$(document).ready(function () {
    var fixedBlock = $('.fixed-block');
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'about', 'advantages', 'partner', 'know', 'contacts'],
        scrollOverflow: true,
        onLeave: function(index, nextIndex, direction) {
            if (nextIndex == 2) {
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
                $('#lines1').animateNumber({ number: 112, easing: 'easeOutQuart', numberStep: comma_separator_number_step }, 2500);
                $('#lines2').animateNumber({ number: 8475, easing: 'easeOutQuart', numberStep: comma_separator_number_step }, 2500);
                $('#lines3').animateNumber({ number: 87600000, easing: 'easeOutQuart', numberStep: comma_separator_number_step }, 2500);
                $('#lines4').animateNumber({ number: 178915962, easing: 'easeOutQuart', numberStep: comma_separator_number_step }, 2500);
                $('.adv #lines5').animateNumber({ number: 37843287, numberStep: comma_separator_number_step }, 2000);
                $('.adv #lines6').animateNumber({ number: 30000000, numberStep: comma_separator_number_step }, 1500);
                $('.adv #lines7').animateNumber({ number: 75000, numberStep: comma_separator_number_step }, 2500);
                $('.adv #lines8').animateNumber({ number: 250000, numberStep: comma_separator_number_step }, 1900);
            }

            if(nextIndex == 6){
                $('.section-contacts .fp-tableCell').addClass('fp-tableCellBottom');
            }

            if(nextIndex == 2 || nextIndex == 4 || nextIndex == 6){
                $('.main-menu').addClass('grey');
                $('.main-menu .sprite').addClass('grey');
            }else{
                $('.main-menu').removeClass('grey');
                $('.main-menu .sprite').removeClass('grey');
            }

            if(nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5 || nextIndex == 6){
                $(fixedBlock).addClass('scroll');
            }else{
                $(fixedBlock).removeClass('scroll');
            }

        }
    });

});
