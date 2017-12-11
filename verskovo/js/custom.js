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
if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
    document.body.classList.add('ie10');
}
$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    };


    $('body').addClass('js');

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
    }

    var y_offsetWhenScrollDisabled = 0;

    function disabledScroll() {
        y_offsetWhenScrollDisabled = $(window).scrollTop();
        $('body').addClass('scrollDisabled');
        $('html').css('top', -y_offsetWhenScrollDisabled);

    }

    function anabledScroll() {
        $('body').removeClass('scrollDisabled');
        $('html').css('top', 0);
    }

    var viewport_wid = viewport().width;


    /* CHART */
    if ($('#course-chart').length) {

        var colors = ['#3ba2ea', '#ff3642', '#4aad45', '#f2b43c'],
            categories = [
                '<div class="chart-label__container chart-label__item1"><div class="chart-label__data-shadow">40%</div><div class="chart-label__data">40 %</div><div class="chart-label__name">изучение теории и методов</div><div class="chart-label__dot"></div></div>',
                '<div class="chart-label__container chart-label__item2"><div class="chart-label__data-shadow">30%</div><div class="chart-label__data">30 %</div><div class="chart-label__name">домашние задания</div><div class="chart-label__dot"></div></div>',
                '<div class="chart-label__container chart-label__item3"><div class="chart-label__data-shadow">20%</div><div class="chart-label__data">20 %</div><div class="chart-label__name">адаптивная верстка дизайна</div><div class="chart-label__dot"></div></div>',
                '<div class="chart-label__container chart-label__item4"><div class="chart-label__data-shadow">10%</div><div class="chart-label__data">10 %</div><div class="chart-label__name">разработка сайта под ключ</div><div class="chart-label__dot"></div></div>'
            ],
            data = [{
                y: 40,
                color: colors[0],
                drilldown: {
                    name: 'изучение теории и методов',
                    categories: ['40'],
                    data: [40],
                    color: colors[0]
                }
            }, {
                y: 30,
                color: colors[1],
                drilldown: {
                    name: 'домашние задания',
                    categories: ['30'],
                    data: [30],
                    color: colors[1]
                }
            }, {
                y: 20,
                color: colors[2],
                drilldown: {
                    name: 'адаптивная верстка дизайна',
                    categories: ['20'],
                    data: [20],
                    color: colors[2]
                }
            }, {
                y: 10,
                color: colors[3],
                drilldown: {
                    name: 'разработка сайта под ключ',
                    categories: ['10'],
                    data: [10],
                    color: colors[3]
                }
            }],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;


        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
        }

        // Create the chart
        Highcharts.chart('course-chart', {
            chart: {
                type: 'pie',
                height: 330
            },
            title: {
                text: '',
                align: 'center',
                verticalAlign: 'middle',
                y: 0,
                x: 0
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                pie: {
                    borderWidth: 2,
                    innerSize: 137,
                    allowPointSelect: false,
                    cursor: 'pointer',
                    showInLegend: true,
                    dataLabels: {
                        enabled: true,

                        useHTML: true,
                        distance: 0,
                        x: -5,
                        y: -10
                    }
                }
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: true,
                layout: 'horizontal',
                align: 'left',
                verticalAlign: 'bottom',
                useHTML: true,
                left: 0,
                labelFormatter: function() {
                    return '<div class="chart-label-inner__name">' + this.name + '</div><div class="chart-label-inner__data">' + this.y + '%</div>';
                }
            },
            series: [{
                name: '',
                data: versionsData,
                size: '100%',
                type: 'pie',
                data: [{
                        name: 'изучение теории и методов',
                        y: 40,
                        color: '#3ba2ea',
                        dataLabels: {
                            formatter: function() {
                                return '<div class="chart-label__container chart-label__item1"><div class="chart-label__data-shadow">' + this.y + '%</div><div class="chart-label__data">' + this.y + ' %</div><div class="chart-label__name">изучение теории и методов</div><div class="chart-label__dot"></div></div>';
                            }
                        },
                    },
                    {
                        name: 'домашние задания',
                        y: 30,
                        color: '#ff3642',
                        dataLabels: {
                            formatter: function() {
                                return '<div class="chart-label__container chart-label__item2"><div class="chart-label__data-shadow">' + this.y + '%</div><div class="chart-label__data">' + this.y + ' %</div><div class="chart-label__name">домашние задания</div><div class="chart-label__dot"></div></div>';
                            }
                        },
                    },
                    {
                        name: 'адаптивная верстка дизайна',
                        y: 20,
                        color: '#4aad45',
                        dataLabels: {
                            formatter: function() {
                                return '<div class="chart-label__container chart-label__item3"><div class="chart-label__data-shadow">' + this.y + '%</div><div class="chart-label__data">' + this.y + ' %</div><div class="chart-label__name">адаптивная верстка дизайна</div><div class="chart-label__dot"></div></div>';
                            }
                        },
                    },
                    {
                        name: 'разработка сайта под ключ',
                        y: 10,
                        color: '#f2b43c',
                        dataLabels: {
                            formatter: function() {
                                return '<div class="chart-label__container chart-label__item4"><div class="chart-label__data-shadow">' + this.y + '%</div><div class="chart-label__data">' + this.y + ' %</div><div class="chart-label__name">разработка сайта под ключ</div><div class="chart-label__dot"></div></div>';
                            }
                        },
                    }
                ]
            }]
        });
    }

    /* CHART END */

    // focus input
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
    // focus input end

    // accordion
    $('.js-accordion-head').click(function() {
        var el = $(this);
        el
            .next('.js-accordion-body')
            .slideToggle()
            .closest('.js-accordion-item')
            .toggleClass('open');
        return false;
    });

    // show more programms
    $('.js-more-item').click(function() {
        var el = $(this),
            textMore = el.attr('data-more'),
            textLess = el.attr('data-less'),
            textSpan = el.find('.js-more-text');
        el.parent().prev('.js-item-wrap').find('.js-hide').slideToggle();
        textSpan.text(textSpan.text() == textMore ? textLess : textMore);
        return false;
    })

    // carousels
    if ($('.js-teachers').length) {
        $('.js-teachers').slick({
            dots: true,
            arrows: false,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 1
        });
    }

    // / countdown init /
    $('.js-countdown').TimeCircles({
        circle_bg_color: '#2e3138',
        bg_width: 1.1,
        fg_width: 0.03,
        animation: 1,
        time: {
            Days: {
                show: true,
                text: "Дней",
                color: "#ffffff"
            },
            Hours: {
                show: true,
                text: "Часов",
                color: "#ffffff"
            },
            Minutes: {
                show: true,
                text: "Минут",
                color: "#ffffff"
            },
            Seconds: {
                show: false
            }
        }
    });
    /* countdown init end*/

    /* parallax */
    $('.js-parallax-1').parallax({
        speed: 0.5
    });
    $('.js-parallax-2').parallax({
        speed: 0.8
    });
    /*end onscroll animation*/

    // nav scroll
    var height_header = $('header').outerHeight();

    $(".js-nav").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - height_header;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    // end nav scroll

    // all fancybox
    if ($('.js-fancybox').length) {
        if (window.innerWidth > 991) {
            $('.js-fancybox').fancybox({
                margin: 10,
                padding: 0,
                openMethod: 'dropIn',
                openSpeed: 400,
                closeMethod: 'dropOut',
                closeSpeed: 200,
                afterLoad: function() {
                    $('html').addClass("fancybox-lock-two");
                    disabledScroll();
                },
                afterClose: function() {
                    anabledScroll();
                },
            });
        } else {
            $('.js-fancybox').fancybox({
                margin: 0,
                padding: 0,
                scrolling: 'no',
                width: '100%',
                height: '100%',
                afterLoad: function() {
                    $('html').addClass("fancybox-lock-two");
                    disabledScroll();
                },
                afterClose: function() {
                    anabledScroll();
                },
            });
        };
    }
    //end all fancybox

    // video
    $(".js-video-play").click(function() {
        var dataYoutube = $(this).parents('.reviews__video');
        $(this).parents('.reviews__video').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    });
    $(".js-video-play").click(function() {
        var dataYoutube = $(this).parents('.welcome-cont__video');
        $(this).parents('.welcome-cont__video').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    });
    // end video

    new WOW().init();
    // end wow

    // btn animate
    $('.btn-animate')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.btn-animate__animate').css({
                top: relY,
                left: relX
            })
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('.btn-animate__animate').css({
                top: relY,
                left: relX
            })
        });
    // end btn animate

    // validation
    function validateRegExp(regExp) {
        return function(value) {
            return regExp.test(value)
        }
    }

    function validateRequired(value) {
        return !!value;
    }

    function validateElement(data, target) {
        if (!data || !target) return false;

        var name = target.name;
        var value = target.value;
        var isValid = !data[name].some(function(el) {
            return el(value) === false;
        });

        if (isValid) {
            $(target).parent().addClass('valid');
            $(target).parent().removeClass('invalid');
        } else {
            $(target).parent().addClass('invalid');
            $(target).parent().removeClass('valid');
        }

        return isValid
    }

    function forceValidate(data, selector) {
        var key,
            value,
            isValid = true;

        for (key in data) {
            if (!validateElement(data, $('[name=' + key + ']' + selector)[0])) {
                isValid = false;
            }
        }

        return isValid;
    }

    var formData = {
        name: [
            validateRegExp(/^([а-я]|[А-Я]|[a-z]|[A-z]){2,40}$/)
        ],
        email: [
            validateRegExp(/^.+@.+[.].{2,}$/i)
        ],
        phone: [
            validateRegExp(/[\d\- ]{3,12}/)
        ]
    }

    var FORM_SELECTOR = '.form-validation'
    var FORM_SELECTOR2 = '.form-validation-2'
    var FORM_SELECTOR3 = '.form-validation-3'
    var FORM_SELECTOR4 = '.form-validation-4'

    $(FORM_SELECTOR)
        .blur(function(event) {
            validateElement(formData, event.target)
        })

    $('.js-send')
        .click(function(event) {
            event.preventDefault();
            forceValidate(formData, FORM_SELECTOR)
        })
    $('.js-send-2')
        .click(function(event) {
            event.preventDefault();
            forceValidate(formData, FORM_SELECTOR2)
        })
    $('.js-send-3')
        .click(function(event) {
            event.preventDefault();
            forceValidate(formData, FORM_SELECTOR3)
        })
    $('.js-send-4')
        .click(function(event) {
            event.preventDefault();
            forceValidate(formData, FORM_SELECTOR4)
        })
    // end validation

    $('.button-nav').click(function() {
        $(this).toggleClass('active'),
            $('.nav-list').slideToggle().toggleClass('opened');
        $('header').toggleClass('opened-nav');
        return false;
    });


    if ($('.js-slider-offer').length) {
        $('.js-slider-offer').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 1,
            arrows: true,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 50000,
                settings: "unslick"
            }, {
                breakpoint: 991,
                settings: "slick"
            }]
        });
    };

    if ($('.js-slider-counter').length) {
        $('.js-slider-counter').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 3,
            arrows: false,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 50000,
                settings: "unslick"
            }, {
                breakpoint: 650,
                settings: "slick"
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2
                }

            }, {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1
                }

            }]
        });
    };


    // bg-circle animate
    var animation = {

        counter: function() {
            counterIncrement($(".b-counter_number > span:first-child"), 1000)
        },

        addActive: function($el) {
            $el.addClass("active")
        },

        fadein: function($el) {
            $el.addClass("animated fadeInDown")
        },

        textillate: function($el) {
            $el.textillate({ in: {
                    effect: 'rollIn'
                }
            });
        },

        params: {
            counterTimeToComplete: 1500
        }
    };

    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }

    /*onscroll animation*/

    animateElements();

    $(document).on("scroll", animateElements);

    function animateElements() {

        if ($(window).width() <= 1200) {
            $(".scroll-animation").addClass("active")
            return;
        }

        var defaultDistanceFromBottom = 300;

        $(".scroll-animation").each(function() {
            var $this = $(this);
            var scrollFromBottom = $this.data("animation-distance") || defaultDistanceFromBottom;


            if ($(window).height() - this.getBoundingClientRect().top > scrollFromBottom) {

                setTimeout(function() {
                    // $this.css({"transition-duration": $this.data("animation-duration") || "0.5s"});
                    animation[$this.data("animation") || "addActive"]($this);
                    $this.removeClass("scroll-animation");
                }, $this.data("animation-delay") || 0)
            }
        });
    }
    // end bg-circle animate

    /*onscroll animation*/

    animate();

    $(document).on("scroll", animate);

    function animate() {

        if ($(this).scrollTop() > 0) {
            var viewport_wid = viewport().width;
            $("header").addClass("active")
        } else {
            $("header").removeClass("active")
        }
    }

    // media animation
    if (viewport_wid <= 768) {
        if ($('.results-card').length) {
            $('.results-card').removeClass('fadeRight-2').addClass('fadeInUp');
        };
    };
});

var handler = function() {

    var height_header = $('header').outerHeight();
    $('.section-welcome').css({
        'padding-top': height_header
    });

    var viewport_wid = viewport().width;

    if (viewport_wid <= 991) {
        if ($('.js-slider-offer').length) {
            $('.js-slider-offer').slick("getSlick").refresh();
        };
    };
    if (viewport_wid <= 650) {
        if ($('.js-slider-counter').length) {
            $('.js-slider-counter').slick("getSlick").refresh();
        };
    };

}

var Counter = function($) {
    var stepsCount = 300;
    var duration = 1500;
    var currentStep = 0;
    var endValues = [];
    var tickTime = duration / stepsCount;
    var counter = $(".counter");
    var numbers = $(".counter__value");

    function counterTick() {
        numbers.each(function(index, number) {
            var value = Math.round(currentStep * endValues[index] / stepsCount);
            $(number).text(value);
        });

        if (++currentStep < stepsCount) {
            setTimeout(counterTick, tickTime);
        }
    }

    return {
        init: function init() {
            numbers.each(function(index, number) {
                endValues[index] = parseInt($(number).text());
                $(number).text("0");
            });

            var _counter$waypoint = counter.waypoint(function(direction) {
                    counterTick();
                    wp.destroy();
                }, {
                    offset: "75%"
                }),
                _counter$waypoint2 = slicedToArray(_counter$waypoint, 1),
                wp = _counter$waypoint2[0];
        }
    };

}(jQuery);

$(window).load(function() {
    $('body').removeClass('loaded');
});
$(window).on('load', handler);
$(window).on('resize', handler);