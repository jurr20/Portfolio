$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } ;
    setTimeout(function() {
        $('body').removeClass('loaded');
    }, 1000);


    // if (window.innerWidth > 768  && !$('body').is('ios')) {

        $('body').removeClass('without-full');
        $('#fullpage').fullpage({
            //anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14', 'page15', 'page16', 'page17', 'page18', 'page19', 'page20', 'page21', 'page22'],
            menu: '#menu',
            slidesNavigation: true,
            scrollingSpeed: 1000,
            //autoScrolling: true,
            autoScrolling:false,
            fitToSection:false,
            navigation: true,
            navigationPosition: 'left',
            onLeave: function(index, nextIndex, direction){
                $('.video').removeAttr('src');
                $('.vid-cov').addClass('close');
                $('.fullpage-wrapper').addClass('ready');
            },
            afterLoad: function(anchorLink, index){         

                $('.section-revs.active .rev-cover').each(function() {
                    var addr = $('.revs').attr('data-addr');
                    if ($(".revs").hasClass('empty')) {
                        $(".revs").attr('src', addr);
                        $(".revs").removeClass('empty');
                    }
                    else{
                        return false;
                    }
                });
                $('.section-contact.active .map').each(function() {
                    if ($(this).hasClass('empty')) {
                        ymaps.ready(init);
                        $(this).removeClass('empty');
                    }
                    else{
                        return false;
                    }
                });
            },
            afterRender: function(){
                
            }      
        });
    // } else {
    //     $('body').addClass('without-full');
    // }

    // $(window).resize(function() {
    //         if (window.innerWidth <= 768  && $('body').is('ios')) {
    //             $('body').addClass('without-full');
    //             // $.fn.fullpage.destroy();
    //         }else  {
    //             $('body').removeClass('without-full');
    //             // $('#fullpage').fullpage();
    //         }
    // });
    //fix-header
    function showDiv() {
        if ($(window).scrollTop() > 0 && $('#header').data('positioned') == 'false') {
            $("#header").data('positioned', 'true');
            $("#header").addClass('fix');
        } else if ($(window).scrollTop() <= 0 && $('#header').data('positioned') == 'true') {
            $("#header").fadeIn(0, function() {
                $("#header").removeClass('fix');
            }).data('positioned', 'false');
        }
    }
    $(window).scroll(showDiv);
    $(window).load(showDiv);
    $('#header').data('positioned', 'false');
    setInterval(function() {
        var t = +$('#countdown').text() - 1;
        if(t > 0) {
            $('#countdown').text(t);
        }
    }, 1000);
    var myMap;
    
    function init () {
                // Создание экземпляра карты и его привязка к контейнеру с
                // заданным id ("map")
                var myMap = new ymaps.Map('map', {
                        // При инициализации карты, обязательно нужно указать
                        // ее центр и коэффициент масштабирования
                        center: [55.717873, 37.688944], // Нижний Новгород
                        zoom: 16
                    });
     
                // Создание метки 
                var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                [55.717873, 37.688944]
                 //{iconContent: 'Нижний Новгород'}
                 );
                //iconContent: 'Нижний Новгород';
                //myPlacemark.name = "Москва";
                //myPlacemark.description = "Столица Российской Федерации";
     
            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
     
     
            }
    var myMap2;
    
    function init () {
                // Создание экземпляра карты и его привязка к контейнеру с
                // заданным id ("map")
                var myMap2 = new ymaps.Map('map2', {
                        // При инициализации карты, обязательно нужно указать
                        // ее центр и коэффициент масштабирования
                        center: [55.77873, 37.688944], // Нижний Новгород
                        zoom: 16
                    });
     
                // Создание метки 
                var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                [55.717873, 37.688944]
                 //{iconContent: 'Нижний Новгород'}
                 );
                //iconContent: 'Нижний Новгород';
                //myPlacemark.name = "Москва";
                //myPlacemark.description = "Столица Российской Федерации";
     
            // Добавление метки на карту
            myMap2.geoObjects.add(myPlacemark);
     
     
            }

    //
    $("#frame").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        fade: false,
        dots: false,
        prevArrow: '<a data-role="none" class="prev-arr" aria-label="Previous">предыдущий<br/>шаг</a>',
        nextArrow: '<a data-role="none" class="next-arr" aria-label="Next">следующий<br/>шаг</a>',
        speed: 500,
        swipe:false
    }); 

    
    $(".js-sm-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        fade: false,
        dots: true,
        swipe:false
    }); 

    //
    $('.file-row input').styler();

    //vid-cov
    $('.vid-cov a').click(function() {
        var src = $(this).attr('href') + "&autoplay=1";
        $(this).next(".video").attr('src', src);        
        $(this).parent().removeClass('close');
        return false;
    });

    //placeholder
    /*
    $('[placeholder]').focus(function() {
        var input = $(this);
        if(input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if(input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if(input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
    */

    //form-steps
    $('.form-step .btn-next').click(function(e) {
        e.preventDefault();
        $('.error-box').hide();
        var $step_box = $(this).closest('.form-step');
        if($step_box.hasClass('form-step1') || $step_box.hasClass('form-step2') || $step_box.hasClass('form-step3')) {
            $('.ierror', $step_box).removeClass('ierror');
            var $input = $step_box.find('label input:checked');
            if(!$input.length) {
                $step_box.find('.error-box').show();
                return false;
            }
            if($input.val() == 'input') {
                var $itext = $step_box.find('.t-inp');
                if($itext.val() == '') {
                    $itext.addClass('ierror');
                    return false;
                }
            }
        }
        //form 1
        if($step_box.hasClass('form-step4')) {
            var f = $step_box;
            $('.ierror', f).removeClass('ierror');

            var name = $('input[name=name]', f).val();
            var company = $('input[name=company]', f).val();
            var email = $('input[name=email]', f).val();
            var keyword = $('#keyword').val();
            var url_site = $('#url_site').val();

            var error = false;
            if(name == '') {
                $('input[name=name]', f).closest('.form-row').addClass('ierror');
                error = true;
            }
            if(company == '') {
                $('input[name=company]', f).closest('.form-row').addClass('ierror');
                error = true;
            }
            if(!is_email(email)) {
                $('input[name=email]', f).closest('.form-row').addClass('ierror');
                error = true;
            }
            if(error) {
                return false;
            }
        }
        //form 2
        if($step_box.hasClass('form-step5')) {
            var f = $step_box;
            $('.ierror', f).removeClass('ierror');

            var s1 = ($('.form-step1 label input:checked').val() == 'input') ? $('.form-step1 input[type=text]').val() : $('.form-step1 label input:checked').closest('label').find('span').text();
            var s2 = ($('.form-step2 label input:checked').val() == 'input') ? $('.form-step2 input[type=text]').val() : $('.form-step2 label input:checked').closest('label').find('span').text();
            var s3 = $('.form-step3 input:checked').closest('label').find('span').text();

            var name = $('.form-step4 input[name=name]').val();
            var company = $('.form-step4 input[name=company]').val();
            var email = $('.form-step4 input[name=email]').val();
            var phone = $('input[name=phone]', f).val();
            var keyword = $('#keyword').val();
            var url_site = $('#url_site').val();


            if(phone == '') {
                $('input[name=phone]', f).closest('.form-row').addClass('ierror');
                return false;
            }

            //data
            var query = 'act=kp';
                query += '&s1=' + encodeURIComponent(s1);
                query += '&s2=' + encodeURIComponent(s2);
                query += '&s3=' + encodeURIComponent(s3);
                query += '&name=' + encodeURIComponent(name);
                query += '&phone=' + encodeURIComponent(phone);
                query += '&email=' + encodeURIComponent(email);
                query += '&company=' + encodeURIComponent(company);
                query += '&keyword=' + encodeURIComponent(keyword);
                query += '&url_site=' + encodeURIComponent(url_site);

            $.ajax({
                type: "POST",
                data: query,
                url: "./sender.php",
                dataType: "json",
                success: function(data) {
                    if(data.result == 'ok') {
                        ga('send', 'event', 'button', 'click');
                        yaCounter44544539.reachGoal('GetForm'); 
                        yaCounter45238764.reachGoal('GetForm'); 
                        //
                    } else {
                        alert('Ошибка! Повторите позже.');
                    }
                }
            });

        }
        $(this).parent().parent('.form-step').next('.form-step').addClass('active');    
        $(this).parent().parent('.form-step').removeClass('active');
    });
    $('.form-step .btn-back').click(function(e) {
        e.preventDefault();
        $(this).parent().parent('.form-step').prev('.form-step').addClass('active');    
        $(this).parent().parent('.form-step').removeClass('active');
    });


    //help-cols
    $('.help-col').hover(function() {
        var idx = $(this).index();
        $(this).siblings('.help-col').addClass('noactive'); 
        $(this).removeClass('noactive');    
        $('.info-drops').removeClass('hid');
        $('.info-drop').eq(idx).addClass('active');
        $('.info-drop').not($('.info-drop').eq(idx)).removeClass('active');
    });
    $('.info-drop .btn-yes').click(function() {
        $('.info-drop').removeClass('active');
        $('.info-drop-yes').addClass('active');
        return false;
    });
    $('.info-drop .btn-no').click(function() {
        $('.info-drop').removeClass('active');
        $('.info-drop-no').addClass('active');
        return false;
    });
    $('.info-drop .btn-back').click(function() {
        $('.info-drop').removeClass('active');
        $('.help-col').removeClass('noactive')
        $('.info-drops').addClass('hid');
        return false;
    });

    //
    $('.fancy').fancybox({
        helpers : {
            overlay : {
                locked: true
            }
        }
    });
    $('.fancy-send').fancybox({
        helpers : {
            overlay : {
                locked: true
            }
        },
        afterShow: function() {
            if ($('#countdown').hasClass('running')) {

            }
            else {
                count();
            }
        },
        afterClose: function () {
            
        }
    });

    //form
    $('a.fancy').click(function() {
        if($(this).attr('href') != '#win-form') return false;
        var form = $(this).data('form');
        $('#win-form input[name=subject]').val(form);
        $('#win-form .ierror').removeClass('ierror');
    });
    $('.btn-yes').click(function() {
        var form = $(this).data('form');
        $('.info-drop-yes input[name=subject]').val(form);
    });
    $('.sform .btn').click(function(e) {
        e.preventDefault();
        $(this).closest('.sform').trigger('submit');
    });
    $('.form-row input[type=text], .form-row textarea').focus(function() {
        $(this).closest('.ierror').removeClass('ierror');
    });
    $('.sform').submit(function(e) {
        e.preventDefault();
        var f = $(this);
        $('.ierror', f).removeClass('ierror');

        var name = $('input[name=name]', f).val();
        var phone = $('input[name=phone]', f).val();
        var subject = $('input[name=subject]', f).val();
        var keyword = $('#keyword').val();
            var url_site = $('#url_site').val();

        var error = false;
        if(name == '') {
            $('input[name=name]', f).closest('.form-row').addClass('ierror');
            error = true;
        }
        if(phone == '') {
            $('input[name=phone]', f).closest('.form-row').addClass('ierror');
            error = true;
        }
        if(error) {
            return false;
        }
            
        var query = 'act=sender';
            query += '&name=' + encodeURIComponent(name);
            query += '&phone=' + encodeURIComponent(phone);
            query += '&subject=' + encodeURIComponent(subject);
            query += '&keyword=' + encodeURIComponent(keyword);
            query += '&url_site=' + encodeURIComponent(url_site);

        $.ajax({
            type: "POST",
            data: query,
            url: "./sender.php",
            dataType: "json",
            success: function(data) {
                if(data.result == 'ok') {
                    $('input[type=text]', f).val('');
                    //echo
                    $.fancybox('#win-send');
                    count();
                        ga('send', 'event', 'button', 'click');
                        yaCounter44544539.reachGoal('GetForm'); 
                        yaCounter45238764.reachGoal('GetForm');
                } else {
                    alert('Ошибка! Повторите позже.');
                }
            }
        });
        return false;
    });

    $('.sform2').submit(function(e) {
        e.preventDefault();
        var f = $(this);
        $('.ierror', f).removeClass('ierror');

        var email = $('input[name=email]', f).val();
        var keyword = $('#keyword').val();
            var url_site = $('#url_site').val();

        var error = false;
        if(!is_email(email)) {
            $('input[name=email]', f).closest('.form-row').addClass('ierror');
            error = true;
        }
        if(error) {
            return false;
        }
            
        var query = 'act=email';
            query += '&email=' + encodeURIComponent(email);
            query += '&keyword=' + encodeURIComponent(keyword);
            query += '&url_site=' + encodeURIComponent(url_site);

        $.ajax({
            type: "POST",
            data: query,
            url: "./sender.php",
            dataType: "json",
            success: function(data) {
                if(data.result == 'ok') {
                    $('input[type=text]', f).val('');
                    //echo
                    $.fancybox('#win-send');
                    count();
                    ga('send', 'event', 'button', 'click');
                        yaCounter44544539.reachGoal('GetForm'); 
                        yaCounter45238764.reachGoal('GetForm');
                } else {
                    alert('Ошибка! Повторите позже.');
                }
            }
        });
        return false;
    });

    $('.form-rads input[type=text]').focus(function() {
        var $label = $(this).closest('.rad').find('label');
        if(!$label.find('input').is(':checked')) {
            $label.trigger('click');
            setTimeout(function() {
                $(this).trigger('focus');
            }, 0);
        }
    });

    //q
    $('.sform3').submit(function(e) {
        e.preventDefault();
        var f = $(this);
        $('.ierror', f).removeClass('ierror');

        var name = $('input[name=name]', f).val();
        var phone = $('input[name=phone]', f).val();
        var email = $('input[name=email]', f).val();
        var text = $('textarea[name=text]', f).val();
        var keyword = $('#keyword').val();
            var url_site = $('#url_site').val();

        var error = false;
        if(name == '') {
            $('input[name=name]', f).closest('.form-row').addClass('ierror');
            error = true;
        }
        if(phone == '') {
            $('input[name=phone]', f).closest('.form-row').addClass('ierror');
            error = true;
        }
        if(!is_email(email)) {
            $('input[name=email]', f).closest('.form-row').addClass('ierror');
            error = true;
        }
        if(text == '') {
            $('textarea[name=text]', f).closest('.form-row').addClass('ierror');
            error = true;
        }
        if(error) {
            return false;
        }

        var query = new FormData(this);
        console.log(query);
        query.append('act', 'q');

        $.ajax({
            type: "POST",
            data: query,
            url: "./sender.php",
            dataType: "json",
            processData: false,
            contentType: false,
            success: function(data) {
                if(data.result == 'ok') {
                    $('input[type=text], textarea, input[type=file]', f).val('');
                    $('input[type=file]', f).trigger('change');
                    //echo
                    $.fancybox('#win-send');
                    count();
                    ga('send', 'event', 'button', 'click');
                        yaCounter44544539.reachGoal('GetForm'); 
                        yaCounter45238764.reachGoal('GetForm');
                } else {
                    alert('Ошибка! Повторите позже.');
                }
            }
        });
        return false;
    });

    $('input[name=phone]').maskinp('+7 (999) 999-99-99');

    
    if ($('#clock').length) {
        // month = month -1, example July = 6
        var currentDate = new Date();
        var startDate = new Date(2017, 5, 27);
        var pastDate  = new Date(2017, 6, 26);
        var period = 30*24*60*60;
        var diff = -(currentDate.getTime() / 1000 - pastDate.getTime() / 1000),
            diffStart = currentDate.getTime() / 1000 - startDate.getTime() / 1000,
            koef = Math.trunc(diffStart/period);
        if (diffStart >= period) {
            diff =  startDate.getTime() / 1000  + (koef +1)*period - currentDate.getTime() / 1000;
        }

        clock = $('#clock').FlipClock(diff, {
            clockFace: 'DailyCounter',
            countdown: true,
            showSeconds: true,
            language: 'ru',
            onStop: function() {
                clock.start();
            }
        });
    }

    $("a[data-rel='fancybox-galary']").each(function(){
        var el = $(this);
        el.attr('rel', el.attr('data-rel'));
    });
    $("a[data-rel=fancybox-galary]").fancybox({
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'titlePosition'     : 'over',
        'touchMove'         : 'true',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
        },
        afterShow: function() {
            $("body").addClass("wrap-galary");
        },
        afterLoad: function() {
        },
        afterClose: function() { 
        	$("body").removeClass("wrap-galary");
        }
    });

    $("a[data-rel='fancybox-galary2']").each(function(){
        var el = $(this);
        el.attr('rel', el.attr('data-rel'));
    });
    $("a[data-rel=fancybox-galary2]").fancybox({
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'titlePosition'     : 'over',
        'touchMove'         : 'true',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
        },
        afterShow: function() {
            $("body").addClass("wrap-galary");
        },
        afterLoad: function() {
        },
        afterClose: function() { 
        	$("body").removeClass("wrap-galary");
        }
    });

    $("a[data-rel='fancybox-galary3']").each(function(){
        var el = $(this);
        el.attr('rel', el.attr('data-rel'));
    });
    $("a[data-rel=fancybox-galary3]").fancybox({
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'titlePosition'     : 'over',
        'touchMove'         : 'true',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
        },
        afterShow: function() {
            $("body").addClass("wrap-galary");
        },
        afterLoad: function() {
        },
        afterClose: function() { 
            $("body").removeClass("wrap-galary");
        }
    });


    if ($('.js-all-sections').length) {
        $('.js-all-sections').slideUp();
    }


});

function trim(str) {
    var newstr = str.replace(/^\s*(.+?)\s*$/, "$1");
    if (newstr == " ") {
        return "";
    }
    return newstr;
}
function drop_spaces(str) {
    var newstr = trim(str);
    return newstr.replace(/(\s)+/g, "");
}
function is_email(email) {
    var template = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;
    email = drop_spaces(email);
    if (template.test(email)) {
        return true;
    }
    return false;
}

function count() {
    var sec = 300;
    $('#countdown').text(sec);
}
var handler = function(){
    // variants content

        $('.js-btn-nomore').click(function() {
            

            $('.js-section-hide2').slideDown();
            $('.js-section-hide1').slideUp();

            setTimeout(function() {
                var id  = $('.js-btn-nomore').attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1500); 

            }, 500);
			return false;
        });

        $('.js-btn-more').click(function() {
            //event.preventDefault();
            
            $('.js-section-hide1').slideDown();
            $('.js-section-hide2').slideDown();

            setTimeout(function() { 
                var id  = $('.js-btn-more').attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1500); 

            }, 500);
			return false;
        });

}
$(window).bind('load', handler);
$(window).bind('resize', handler);
