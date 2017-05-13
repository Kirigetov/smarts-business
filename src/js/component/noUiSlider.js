$(document).ready(function() {

	// var slider = document.getElementById('filter-slider');

	// noUiSlider.create(slider, {
	// 	start: [ 4000, 8000, 12000, 16000 ],
	// 	connect: [false, true, true, true, true],
	// 	range: {
	// 		'min': [  2000 ],
	// 		'max': [ 20000 ]
	// 	}
	// });

	// var connect = slider.querySelectorAll('.noUi-connect');
	// var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

	// for ( var i = 0; i < connect.length; i++ ) {
	//     connect[i].classList.add(classes[i]);
	// } 
	// 


	// Initializing the slider and linking the input
	var keypressSlider = document.getElementById('js-filter-slider');
	var input0 = document.getElementById('input-with-keypress-0');
	var input1 = document.getElementById('input-with-keypress-1');
	var inputs = [input0, input1];

	noUiSlider.create(keypressSlider, {
		start: [1000, 2500],
		connect: true,
		// direction: 'rtl',
		tooltips: true,
		range: {
			'min': [0],
			'max': [5000]
		}, 
		format: wNumb({
			decimals: 0
		})
	});

	keypressSlider.noUiSlider.on('update', function( values, handle ) {
		inputs[handle].value = values[handle];
	});


	function setSliderHandle(i, value) {
		var r = [null,null];
		r[i] = value;
		keypressSlider.noUiSlider.set(r);
	}

	// Listen to keydown events on the input field.
	inputs.forEach(function(input, handle) {

		input.addEventListener('change', function(){
			setSliderHandle(handle, this.value);
		});

		input.addEventListener('keydown', function( e ) {

			var values = keypressSlider.noUiSlider.get();
			var value = Number(values[handle]);

			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
			var steps = keypressSlider.noUiSlider.steps();

			// [down, up]
			var step = steps[handle];

			var position;

			// 13 is enter,
			// 38 is key up,
			// 40 is key down.
			switch ( e.which ) {

				case 13:
					setSliderHandle(handle, this.value);
					break;

				case 38:

					// Get step to go increase slider value (up)
					position = step[1];

					// false = no step is set
					if ( position === false ) {
						position = 1;
					}

					// null = edge of slider
					if ( position !== null ) {
						setSliderHandle(handle, value + position);
					}

					break;

				case 40:

					position = step[0];

					if ( position === false ) {
						position = 1;
					}

					if ( position !== null ) {
						setSliderHandle(handle, value - position);
					}

					break;
			}
		});
	});

}); 

// var keypressSlider = document.getElementById('keypress');
// var input0 = document.getElementById('input-with-keypress-0');
// var input1 = document.getElementById('input-with-keypress-1');
// var inputs = [input0, input1];

	


// keypressSlider.noUiSlider.on('update', function( values, handle ) {
// 	inputs[handle].value = values[handle];
// });
	

// function setSliderHandle(i, value) {
// 	var r = [null,null];
// 	r[i] = value;
// 	keypressSlider.noUiSlider.set(r);
// }

// // Listen to keydown events on the input field.
// inputs.forEach(function(input, handle) {

// 	input.addEventListener('change', function(){
// 		setSliderHandle(handle, this.value);
// 	});

// 	input.addEventListener('keydown', function( e ) {

// 		var values = keypressSlider.noUiSlider.get();
// 		var value = Number(values[handle]);

// 		// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
// 		var steps = keypressSlider.noUiSlider.steps();

// 		// [down, up]
// 		var step = steps[handle];

// 		var position;

// 		// 13 is enter,
// 		// 38 is key up,
// 		// 40 is key down.
// 		switch ( e.which ) {

// 			case 13:
// 				setSliderHandle(handle, this.value);
// 				break;

// 			case 38:

// 				// Get step to go increase slider value (up)
// 				position = step[1];

// 				// false = no step is set
// 				if ( position === false ) {
// 					position = 1;
// 				}

// 				// null = edge of slider
// 				if ( position !== null ) {
// 					setSliderHandle(handle, value + position);
// 				}

// 				break;

// 			case 40:

// 				position = step[0];

// 				if ( position === false ) {
// 					position = 1;
// 				}

// 				if ( position !== null ) {
// 					setSliderHandle(handle, value - position);
// 				}

// 				break;
// 		}
// 	});
// });
// }); 