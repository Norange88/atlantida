
// Установка высоты div.portfolio-gallery -------------------------------

(function($) {

	function gallery_resize() {

		var ratio = 2.326; // соотношение длины и ширины блока галереи
    var blocks = $('.portfolio-gallery .images-block');
		var gallery_width = $('.portfolio-gallery').css('width');

    if(parseInt(window.innerWidth) <= 991) {
      ratio = ratio/2;
    }

		var new_height = parseInt(gallery_width)/ratio + 'px';

		blocks.css({
			'height': new_height
		});

	}

	gallery_resize();
	$(window).resize( gallery_resize );
	
})(jQuery);




//  Функционал меню навигации -------------------

(function($) {

  var menu = $('#main-navigation ul');
  var dropdown = $('#main-navigation > div');

  function dropdown_toggle() {
    if(parseInt(window.innerWidth) > 991) {
      menu.removeClass('dropdown-menu');
    } else {
      if(!menu.hasClass('dropdown-menu')) {
        menu.addClass('dropdown-menu');
      }
    }
  }

  dropdown_toggle();
  $(window).resize( dropdown_toggle );

  var menu_button = $('#main-navigation .dropdown-toggle');
  var menu_icon = $('#main-navigation .dropdown-toggle > i');

  // открытие/закрытие меню по кнопке
  menu_button.click(function() {
    if(!dropdown.hasClass('open')) {
      menu_icon.removeClass('icon-menu-open');
      menu_icon.addClass('icon-menu-close');
    } else {
      menu_icon.removeClass('icon-menu-close');
      menu_icon.addClass('icon-menu-open');
    }
  });

  // изменение вида иконки при закрытии меню кликом вне его
  $(document).mouseup(function (e){ 
    if (!menu.is(e.target) && menu.has(e.target).length === 0) { 
      menu_icon.removeClass('icon-menu-close');
      menu_icon.addClass('icon-menu-open');
    }
  });

  // скролл окна при клике по навигации
  var section_links = $('#main-navigation ul a');

  section_links.click(function() {

        var type = $(this).attr('data-name');
        var section = $('section[data-name='+type+']');
        
        if(type == 'home') {
            $('html, body').animate({
            scrollTop: 0 }, 900, 'easeOutCubic');
        } else {
        $('html, body').animate({
            scrollTop: section.offset().top}, 900, 'easeOutCubic');
        }

        menu_icon.removeClass('icon-menu-close');
        menu_icon.addClass('icon-menu-open');
    });

})(jQuery);



// Кнопка скролла next-section ------------------------------------------------------------

$(function() {

    var $next = $('.next-section');
    $next.click(function() {
        $('html, body').animate({
            scrollTop: $('#about-us').offset().top }, 700, 'easeOutCubic')
    });
});   


//  Ресайз about-us шапки -------------------

(function($) {

  var top_img = $('#about-us .header-bg');

  function top_img_resize() {

    if(parseInt(window.innerWidth) <= 767) {
      return false;
    }

    var ratio = 3.6;
    var new_height = parseInt(top_img.css('width'))/ratio + 'px';
    top_img.css('height', new_height);
  }

  top_img_resize();
  $(window).resize( top_img_resize );

})(jQuery);  



//  dotdotdot плагин для обрезки текста services блоков -------------------

(function($) {

  $(document).ready(function() {
      $(".services-item").dotdotdot({
        //  configuration goes here
      });
    });

  //  dotdotdot апдейт обрезки при ресайзе окна
  $(window).resize(function() {
    $(".services-item").trigger("update");
  });
  
})(jQuery);




// Функционал фильтра галереи работ -------------------------------

(function($) {

	var filter = $('.gallery-filter a');
	var works = $('.portfolio-gallery a');

	// Фильтрация контента по нажатию кнопки фильтра
    filter.click(function(event) {

    	event.preventDefault();

    	filter.removeClass('active');
    	$(this).addClass('active');

        var type = $(this).attr('data-type');
        if(type == 'all') {
        	works.removeClass('active');
        	works.removeClass('faded');
        } else {
	        works.removeClass('active');
	        works.addClass('faded');


	    	works.each(function() {
	    		if($(this).attr('data-type') == type) {
	    			$(this).removeClass('faded');
	    			$(this).addClass('active');
	    		}
	    	});
    	}

    });

    // Отмена фильтра при клике по неактивному элементу
    works.click(function(event) {
    	if(!($(this).hasClass('active'))) {

    		event.preventDefault();
    		works.removeClass('active');
        works.removeClass('faded');
        filter.removeClass('active');
        $("a[data-type='all']").addClass('active');

    	}
   	});

    // Эти функции нужны, чтобы :hover анимации не срабатывали на неактивных элементах
   	works.mouseover(function() {
   		if(!($(this).hasClass('faded'))) {
   			$(this).addClass('hovered');
   		}
   	});

   	works.mouseout(function() {
   		$(this).removeClass('hovered');
   	});

    //  dotdotdot плагин для обрезки текста оверлея по размеру окна
    $(document).ready(function() {
      $(".portfolio-gallery a .overlay").dotdotdot({
        //  configuration goes here
      });
    });

    //  dotdotdot апдейт обрезки при ресайзе окна
    $(window).resize(function() {
      $(".portfolio-gallery a .overlay").trigger("update");
    });

})(jQuery);    



// выставление правильной высота блока блогов при загрузке страницы и ресайзе окна -------------------------------

(function($) {

  var posts = $('.post .post-text');

  function blogs_resize() {
    if(parseInt(window.innerWidth) <= 767) {
      return false;
    }
    posts.css('height', posts.css('width'));
  }

  

  blogs_resize();
  $(window).resize( blogs_resize );

  //  dotdotdot плагин для обрезки текста по размеру окна
  $(document).ready(function() {
    $(".post-text").dotdotdot({
      //  configuration goes here
    });
  });

  //  dotdotdot апдейт обрезки при ресайзе окна
  $(window).resize(function() {
    $(".post-text").trigger("update");
  });

})(jQuery);    



// выставление правильной высоты блока с картой при загрузке страницы и ресайзе окна -------------------------------

(function($) {

  var map = $('#map');

  function map_resize() {

    var ratio = 3.1;

    if(parseInt(window.innerWidth) <= 767) {
      ratio = 1.2;
    }

    var new_height = parseInt(map.css('width'))/ratio + 'px';
    map.css('height', new_height);
  }

  map_resize();
  $(window).resize( map_resize );

})(jQuery);  


// "выключение всех <a> на странице" -----------------------------------------------------------------------

$(document).ready(function() {
    $('a').click(function(event){event.preventDefault();});
});



