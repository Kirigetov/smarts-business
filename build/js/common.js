$(document).ready(function() {

	$('.js-select').select2({
		placeholder: "Выберите город",
		allowClear: true
	});


    // scroll sidebar
    $('.js-scroll-sidebar').perfectScrollbar();

	// show/hide dropdown in navigation
	function initSubmenuToggle() {
		var navLink = $('.js-nav-link'),
			subnavLink = $('.js-subnav-link'),
			navDrop = $('.js-navdrop'),
			active = 'is-active',
			subDrop = $('.js-subnav-drop');

		var hideCurrentNavDrop = function() {
			navLink.removeClass(active);
			navDrop.removeClass(active);
		};

		var showNavDrop = function(el) {

			$(el).addClass(active);
			$(el).parent().find(navDrop).addClass(active);
		};

		navLink.click(function(evt) {

			if ( $(this).siblings(navDrop).length ) {
				evt.preventDefault();
				var isActive = $(this).hasClass(active);

				hideCurrentNavDrop();
				if ( !isActive ) showNavDrop($(this));
			} else {
				hideCurrentNavDrop();
				$(this).addClass(active);
			}
		});


		subnavLink.click(function(evt) {
			if ( $(this).siblings(subDrop).length ) {
				evt.preventDefault();

				$(this).toggleClass(active);
				$(this).siblings(subDrop).toggleClass(active);
			}
		});
	};
 
    function switchSidebarTab() {
        
        $('.js-tabs-item').each(function() {

            $(this).on('click', function(e) {

                var targetLink = $(e.currentTarget),
                    idLink = targetLink.index(),
                    parentLink = targetLink.closest( $('.js-sidebar-tabs') ),
                    links = parentLink.find( $('.js-tabs-item') ),
                    content = parentLink.find( $('.js-tabs-content') ),
                    // content = parentLink.find(`${'.js-tabs-content'}:not(:nth-child(${idLink+1}))`),
                    toShow = parentLink.find(content).eq(idLink),
                    active = 'is-active';

                    links.removeClass(active);
                    targetLink.addClass(active);

                    content.hide();
                    toShow.fadeIn('fast');

                    e.preventDefault();
            });
        });
    }    

    jQuery.fn.exists = function() {return this.length>0;}

    // quantity
    if ($('.js-quantity').exists()) {
    
        $('.js-quantity').jqxNumberInput({
            spinButtons: true,
            inputMode: 'advanced',
            digits: 3,
            decimalDigits: 0,
            min: 0,
            promptChar: "",
            width: 50,
            height: "25px"
        });
    };

    (function reasonTabs() {
        $('.js-toggle-item').click(function(e) {
            e.preventDefault();

            var _this = $(this),
                p = _this.parent(),
                siblings = p.siblings();

            siblings.find( $('.js-toggle-drop') ).slideUp();
            siblings.find( $('.js-toggle-drop') ).removeClass('is-active');
            p.toggleClass('is-active');
            p.find( $('.js-toggle-drop') ).slideDown();
            siblings.removeClass('is-active');

        });
    })();

    $('.js-drop-popup').on('click', function(){
        $(this).parent().toggleClass('is-active');
    });

    (function init() {
	   initSubmenuToggle();
       switchSidebarTab();
    })();
 
});
