/* viewport width */
function viewport() {
  var e = window,
    a = 'inner';
  if (!( 'innerWidth' in window )) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {width: e[a + 'Width'], height: e[a + 'Height']}
}

$(window).load(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $('body').addClass('ios');
  } else {
    $('body').addClass('web');
  }

  $('body').removeClass('loaded');
  if ($('.js-styled').length) {
    $('.js-styled').styler();
  }

/* viewport width */
$(function () {
  /* placeholder*/
  $('input, textarea').each(function () {
    var placeholder = $(this).attr('placeholder');
    $(this).focus(function () {
      $(this).attr('placeholder', '');
    });
    $(this).focusout(function () {
      $(this).attr('placeholder', placeholder);
    });
  });
  /* placeholder*/

  // mask phone
  if ($('.js-mask').length) {
    $('.js-mask').mask('99:99');
  }

  if ($('.sert-psy-slider').length) {
    $('.sert-psy-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: false,
            arrows: false
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            arrows: false
          }
        }
      ]
    });
  }

  if ($('[data-fancybox]').length) {
    $('[data-fancybox]').fancybox({
      buttons: [
        'close'
      ],
    });
  }

  if ($('.js-fancybox').length) {
    $('.js-fancybox').fancybox({
      buttons: [
        'close'
      ],
      beforeShow: function () {
        $('body').addClass('with-fancy')
      },
      afterClose: function () {
        $('body').removeClass('with-fancy')
      }
    });
  }
  $('.block-question__question').click(function () {
    $(this).next('.block-question__text').slideToggle();
    return false;
  });

  $('.link-form-add').click(function () {
    console.log($(this).parents('.box-field-row'));
    $(this).parents('.box-field-row').append('<div><div class="box-field box-field_column box-field_column-label"></div><div class="box-field box-field_column box-field_column-input"><div class="box-field__input"><input type="text" class="form-control"></div></div></div>');
    return false;
  });


  var slider = document.getElementById('rating_slider');
  if ($('#rating_slider').length) {
    noUiSlider.create(slider, {
      start: [85],
      tooltips: true,
      range: {
        'min': [0],
        'max': [100]
      },
      format: wNumb({
        decimals: 0,
        thousand: ''
      })
    });
  }
  var tooltipSlider = document.getElementById('slider-tooltips');

  if ($('#slider-tooltips').length) {
    noUiSlider.create(tooltipSlider, {
      start: [45],
      tooltips: true,
      range: {
        'min': [10],
        'max': [100]
      },
      format: wNumb({
        decimals: 0,
        thousand: '',
        postfix: ' лет'
      })
    });
  }


  // $(".fancybox").fancybox();

  $('.button-nav').click(function () {
    $(this).toggleClass('active'),
      $('.main-nav-list').slideToggle();
    return false;
  });


  $('.jq-selectbox__select').click(function () {
    $('.js-option-mob').slideUp();
    $('.tabs__title.open').removeClass('open');
  });

  $('.tabs__title').click(function () {
    $('.jq-selectbox__dropdown').slideUp();
  });

  // tabs

  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else {
      var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name, "", -1);
  }

  

  $('ul.option-set').each(function (i) {
    var cookie = readCookie('tabCookie' + i);
    if (cookie) {
      $(this).find('li').removeClass('active').eq(cookie).addClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(cookie).addClass('active');
    }
  });

  $('ul.option-set').on('click', 'li:not(.active)', function () {
    var $this = $(this);
    if (window.innerWidth <= 750) {

      // don't proceed if already selected
      if ($this.hasClass('active')) {
        return false;
      }
      var text = $this.html();

      $(this)
        .closest('.tabs-head')
        .find('.tabs__title')
        .html(text)
        .removeClass('open');
      $('.option-set.js-option-mob').slideToggle();
    } 
    $this
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    
    var ulIndex = $('ul.option-set').index($(this).parents('ul.option-set'));
    eraseCookie('tabCookie' + ulIndex);
    createCookie('tabCookie' + ulIndex, $(this).index(), 365);
  });
  
  return false;
});
// tabs end

// slider

if ($('.js-slider').length) {
  $('.js-slider').owlCarousel({
    loop: true,
    dots: false,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        center: true
      },

      650: {
        items: 2
      },

      990: {
        items: 3
      },

      1300: {
        items: 4,
        center: false
      },

      1810: {
        items: 5
      },
      
      2200: {
        items: 6
      }
    }
  });
}
// slider middle
if ($('.js-slider-middle').length) {
  $('.js-slider-middle').owlCarousel({
    loop: true,
    dots: false,
    smartSpeed: 500,
    loop:true,
    responsive: {
      0: {
        items: 1,
        center: true
      },

      650: {
        items: 1
      },

      750: {
        items: 2
      },

      1300: {
        items: 3,
        center: false
      },

      1850: {
        items: 4
      },
      
      2350: {
        items: 5
      }
    }
  });
}

// like
$('.js-like').click(function () {
  $(this).toggleClass('active');
  return false;
});

// link-more
$('.js-link-more').click(function () {
  $('.js-mobe-hide').slideToggle();
  $(this).slideUp();
  return false;
});

// mob-select
$('.tabs__title').click(function () {
  $(this).next('.tabs__caption').slideToggle();
  $(this).toggleClass('open');
  return false;
});

$('.h-user-block__top').click(function () {
  $(this).parents('.h-user-block').toggleClass('active');
  $(this).parents('.h-user-block').find('.h-user-block__links').toggle();
  return false;
});

$(window).scroll(function (event) {
  if ($(window).scrollTop() > 0) {

    if (!$('#header').hasClass('active')) {
      $('#header').addClass('active');
    }
  }
  else {
    if ($('#header').hasClass('active')) {
      $('#header').removeClass('active');
    }
  }
});


if ($('.aside-links-blogs').length) {
  $('.aside-links-blogs').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: "unslick"
      }
    ]
  });
}

// MAPS END

if ($('.article-slider').length) {
  $('.article-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1, 
    slidesToScroll: 1
  });
}

if ($('.custom-slider-articles').length) {
  $('.custom-slider-articles').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          adaptiveHeight: true
        }
      }
    ]
  });
}


if ($('.psy-slider').length) {
  $('.psy-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
}


if ($('.sert-sertificates').length) {
  $('.sert-sertificates').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
}
    
$('.search-btn').click(function () {
    $(this).parent('.h-search-btn').toggleClass('active');
    return false;
});

    $('.js-blog-links-mob').click(function () {
  var el = $(this);
  if ($(this).closest('.blog-links').is('.opened')) {
    setTimeout(function () {
      el.closest('.blog-links').toggleClass('opened');
    }, 301)
  } else {
    el.closest('.blog-links').toggleClass('opened');
  }
  el.next('.js-blog-links-mob-dropdown').fadeToggle();
});



if (window.innerWidth <= 750) {
  $('.modalbox').fancybox({
    width: '100%',
    height: '100%',
    modal: true,
    autoScale: true
  });
} else {
  $.fancybox.close();
  return false;
}


});


$(document).ready(function () {

  var slideout = new Slideout({
    'panel': document.getElementsByClassName("main-wrapper")[0],
    'menu': document.getElementById('menu'),
    'padding': 308,
    'tolerance': 70,
    'side': 'right',
    'touch': false
  });
  $('.toggle-button').on('click', function () {
    slideout.toggle();
    return false;
  });

  var fixed = document.querySelector('#header');
    
    
    if($('#footer').length){
        var fixed_f = document.querySelector('#footer');
    }
    
  

  slideout.on('translate', function (translated) {
    fixed.style.transform = 'translateX(-' + translated + 'px)';
      if($('#footer').length){
        fixed_f.style.transform = 'translateX(-' + translated + 'px)';
      }
  });

  slideout.on('beforeopen', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transfom = 'translateX(-308px)';
      if($('#footer').length){
    fixed_f.style.transition = 'transform 300ms ease';
     
      }
  });

  slideout.on('beforeclose', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(0px)';
      if($('#footer').length){
        fixed_f.style.transition = 'transform 300ms ease';
        fixed_f.style.transform = 'translateX(0px)';
      }
  });

  slideout.on('open', function () {
    fixed.style.transition = '';
      if($('#footer').length){
      fixed_f.style.transition = '';
      }
  });

  slideout.on('close', function () {
    fixed.style.transition = '';
      if($('#footer').length){
      fixed_f.style.transition = '';
      }
  });
  function close(eve) {
    eve.preventDefault();
    slideout.close();
  }

  slideout
    .on('beforeopen', function () {
      this.panel.classList.add('panel-open');
      fixed.classList.add('panel-open');
      if($('#footer').length){
      fixed_f.classList.add('panel-open');
      }
    })
    .on('open', function () {
      this.panel.addEventListener('click', close);
      this.panel.addEventListener('touchstart', close);
      fixed.addEventListener('click', close);
      fixed.addEventListener('touchstart', close);
      if($('#footer').length){
            fixed_f.addEventListener('click', close);
            fixed_f.addEventListener('touchstart', close);
      }
    })
    .on('beforeclose', function () {
      this.panel.classList.remove('panel-open');
      fixed.classList.remove('panel-open');
      if($('#footer').length){
      fixed_f.classList.remove('panel-open');
      }
      this.panel.removeEventListener('click', close);
      fixed.removeEventListener('click', close);
      this.panel.removeEventListener('touchstart', close);
      fixed.removeEventListener('touchstart', close);
      if($('#footer').length){
          fixed_f.removeEventListener('click', close);
          fixed_f.removeEventListener('touchstart', close);
      }
    });

     if($('.sticky').length){
         var sticky = new Sticky('.sticky');         
     }


     // close dropdown
     
    $('body').on('touchstart click', function(e) {
        if ($('.js-blog-links-mob-dropdown').is(':visible')) {

            if ($(e.target).closest('.blog-links').length) {
                return;
            } else {
                $('.js-blog-links-mob-dropdown').fadeOut().closest('.blog-links').removeClass('opened');
                if ($('.js-blog-links-mob').is(':visible')) {
                    $('.js-blog-links-mob').next().fadeOut().closest('.blog-links').removeClass('opened');
                }
            }
        }
        if ($('.js-blog-links-mob').is(':visible')) {
            if ($(e.target).closest('.blog-links-mobile').length) {
                return;
            } else {
                $('.js-blog-links-mob').next().fadeOut().closest('.blog-links').removeClass('opened');
              if ($('.js-blog-links-mob-dropdown').is(':visible'))  {
                $('.js-blog-links-mob-dropdown').next().fadeOut().closest('.blog-links').removeClass('opened');
              }
            }
        }
        if ($('.js-option-mob').is(':visible')) {
            if ($(e.target).closest('.tabs-head').length) {
                return;
            } else {
                $('.js-option-mob').slideUp().prev('.abs__title').removeClass('open');
            }
        }
    });
});

$(window).load(function () {
  if ($(window).scrollTop() > 0) {
    $('#header').addClass("active");
  }
  else {
  }
});

var a = 0;
$(window).load(function () {

  if ($('.counter').length) {
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: ' ',
      decimal: '.',
    };


    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      var tid = $this.attr('id');

      var demo = new CountUp(tid, 0, countTo, 0, 2.5, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
    });
  }

});

var handler = function () {

  var height_footer = $('footer').height();
  var height_header = $('header').height();
  $('.welcome').css({'padding-top': height_header});

  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


$(document).bind("click touchstart",function(event){
    if($(event.target).closest(".h-search-btn").length)return;
    if($('.h-search-btn').hasClass('active')){
        $('.h-search-btn').removeClass('active');
    }
    event.stopPropagation();
});



