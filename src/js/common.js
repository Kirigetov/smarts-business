$(document).ready(function() {

	$('.js-select').select2({
		placeholder: "Выберите город",
		allowClear: true
	});

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
			// console.log(closestParent);

			$(el).addClass(active);
			$(el).parent().find(navDrop).addClass(active);
		};

		navLink.click(function(evt) {

			if ( $(this).siblings(navDrop).length ) {
				evt.preventDefault();
				var isActive = $(this).hasClass(active);

				// console.log($(this));
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
				// var	closestParent = $(el).closest($('.js-nav-option'));

				$(this).toggleClass(active);
				$(this).siblings(subDrop).toggleClass(active);
			}
		});
	}

    // function switchSidebarTab() {
        
    //     document.on('click', $('.js-tabs-link'), function(e) {

    //         var targetLink = $(e.currentTarget),
    //             idLinkParent = targetLink.closest($('.js-tabs-item')).index(),
    //             parentLink = targetLink.parents(this._opt.container),
    //             links = parentLink.find(this._opt.item),
    //             content = parentLink.find(`${this._opt.content}:not(:nth-child(${id+1}))`),
    //             toShow = parentLink.find(this._opt.content).eq(id),
    //             active = 'is-active';

    //             links.removeClass(active);
    //             target.addClass(active);

    //             content.hide();
    //             toShow.fadeIn('fast');

    //             e.preventDefault();

    //         // function _hide() {
    //         //   links.removeClass(active);
    //         //   content.hide();
    //         // }
    // }

    (function init() {
	   initSubmenuToggle();
       // switchSidebarTab();
    })();


});