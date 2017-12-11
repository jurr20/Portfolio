$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
};
/* viewport width */
$(function() {

    $('.js-button-nav').click(function() {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    $('.js-button-aside').click(function() {
        $(this).toggleClass('active'),
            $('.aside-menu-mob').slideToggle();
        return false;
    });

    $('.js-mob-active').click(function() {
        $('.aside-menu-mob').slideToggle();
        $('.js-button-aside').toggleClass('active');
        return false;
    });


    $('body').click(function() {
        if (window.innerWidth < 1100) {
            $('.aside-menu-mob').slideUp();
            $('.js-button-aside').removeClass('active');
        }
    });

    $('.js-accordion-name').click(function() {
        $(this).next('.js-accordion-cont').slideToggle();
        $(this).toggleClass('active');
        return false;
    });

    $('.js-version').click(function() {
        var el = $(this),
            textMore = el.attr('data-more'),
            textLess = el.attr('data-less'),
            textSpan = el.find('.js-version-text');
        el.find('.js-version-btn').toggleClass('btn-version-2');
        $('html').toggleClass('version-2')
        textSpan.text(textSpan.text() == textMore ? textLess : textMore);
        return false;
    });

    if ($('select, .checkbox').length) {
        $('select, .checkbox').styler();
    };

    if ($('.js-h-scroll').length) {
        $(".js-h-scroll").mCustomScrollbar({
            axis: "x",
            documentTouchScroll: true
        });
    }

    // modal
    if ($('.js-fancybox').length) {
        $('.js-fancybox').fancybox({
            margin: 15,
            padding: 0,
            scrolling: 'no',
            height: '100%'
        });
    }

    $('.js-modal-close').click(function() {
        $(".fancybox-close").trigger('click');
    });
    $('.js-modal-btn').click(function() {
        $(".js-form-btn").trigger('click');
        $(".fancybox-close").trigger('click');
    });

    // animation bg
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.2,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#fff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    var hash = $.trim(window.location.hash).replace('#', '');
    if (hash && hash.slice(0, 4) == "tab_" && $('[class*="tab_"]').length) {
        $("[data-href=\"" + hash + "\"]").trigger('click');
    }

    // for tabs
    if ($('.js-link-tab').length) {
        $(".js-link-tab").click(function(e) {
            e.preventDefault();
            var el = $(this),
                href = $(this).attr('data-href'),
                classes = $(this).attr('class'),
                sizeBlock = el.attr('data-size');

            el.addClass("active").parent().siblings().find('a').removeClass("active");

            $('.' + href + '').removeClass("hide").siblings().addClass("hide");
            $('.js-mob-active').find('a').attr('class', '' + classes + ' active').text(el.text());
            if (sizeBlock == "big") {
                $('.js-tabs').addClass('tab-big');
                $('.js-aside').hide()
            } else {
                $('.js-tabs').removeClass('tab-big');
                $('.js-aside').show()
            }
            location.hash = href;
            return false;
        });
    }
    var hash = $.trim(window.location.hash).replace('#', '');
    if (hash && hash.slice(0, 4) == "tab_" && $('[class*="tab_"]').length) {
        $("[data-href=\"" + hash + "\"]").trigger('click');
    }
    // for tabs

    // datepicker
    if ($('#datepicker1').length) {
        $("#datepicker1").datepicker($.extend({}, $.datepicker.regional['ru'], {
            minDate: 0,
            beforeShow: function(input, inst) {
                setTimeout(function() {
                    inst.dpDiv.css({
                        marginLeft: input.offsetWidth - inst.dpDiv.outerWidth() + 'px'
                    });

                }, 10);
            }
        })).datepicker("setDate", "0");
    };

    if ($('#datepicker2').length) {
        $("#datepicker2").datepicker($.extend({}, $.datepicker.regional['ru'], {
            minDate: 0,
            beforeShow: function(input, inst) {
                setTimeout(function() {
                    inst.dpDiv.css({
                        marginLeft: input.offsetWidth - inst.dpDiv.outerWidth() + 'px'
                    });

                }, 10);
            }
        })).datepicker("setDate", "7");
    };

    $('.datepicker-icon').click(function() {
        $(this).prev(".js-hasDatepicker").trigger('focus');
    });

    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });

    // drop
    $('.js-login').click(function() {
        $('#drop1').slideToggle();
        $('.drop-overlay').fadeToggle();
        return false;
    });
    $('.js-register').click(function() {
        $('#drop2').slideToggle();
        $('.drop-overlay').fadeToggle();
        return false;
    });
    $('.js-btn-success').click(function() {
        $('#drop2').slideUp();
        $(".js-btn-register").trigger('click');
    });
    $('.js-btn-call').click(function() {
        $('#drop4').slideToggle();
        $('.drop-overlay').fadeToggle();
    });
    $('.drop-overlay').click(function() {
        $('#drop1, #drop2, #drop3, #drop4').slideUp();
        $(this).fadeOut();
    });

    // validation
    if ($(".form-validation-1").length) {
        $(".form-validation-1").validate({

            rules: {

                login: {
                    required: true,
                },
                password: {
                    required: true,
                },

            },

            messages: {

                login: {
                    required: "Поле не заполнено",
                },

                password: {
                    required: "Поле не заполнено",
                },
            }
        });
    }

    if ($(".form-validation-2").length) {
        $(".form-validation-2").validate({

            rules: {

                emailInviter: {
                    required: true,
                    minlength: 4,
                    email: true,
                },
                emailYour: {
                    required: true,
                    minlength: 4,
                    email: true,
                },

                passwordRegister: {
                    required: true,
                    minlength: 4,
                },

                passwordAgain: {
                    required: true,
                    minlength: 4,
                },

                name: {
                    required: true,
                    minlength: 2,
                },
                checkbox: {
                    required: true,
                },

            },

            messages: {

                emailInviter: {
                    required: "Поле не заполнено",
                    minlength: "Минимум 4 символа",
                    email: "Вы неверно ввели Email",
                },

                emailYour: {
                    required: "Поле не заполнено",
                    minlength: "Минимум 4 символа",
                    email: "Вы неверно ввели Email",
                },

                passwordRegister: {
                    required: "Поле не заполнено",
                    minlength: "Минимум 4 символа",
                },
                passwordAgain: {
                    required: "Поле не заполнено",
                    minlength: "Минимум 4 символа",
                },

                name: {
                    required: "Поле не заполнено",
                    minlength: "Минимум 2 символа",

                },
                checkbox:{
                    required: "Поле не заполнено",
                }
            },
            submitHandler: function(form) {

                $('#drop3').fadeIn();
                $('#drop2').fadeOut();
                console.log("good");
                setTimeout(function() {
                    form.submit();
                }, 5000);
            }
        });
    }

    // my purses
    $('.js-add-purse').click(function() {
        $(this).parents('.block-form.mini').find(".js-purse-holder").append('<div class="block-field"><label class="block-field__label">Кошелек:</label><input type="text" class="block-field__control"></div>');
    })

    // mask phone
    if ($('.mask').length) {
        $('.mask').mask('+7 (  999  ) -  999  -  99  -  99');
    }

    // auto height textarea
   var textarea = document.querySelector('textarea');
   textarea.addEventListener('keydown', autosize);
                
   function autosize(){
     var el = this;
     setTimeout(function(){
       el.style.cssText = 'height:' + el.scrollHeight + 'px';
     },0);
   }

});