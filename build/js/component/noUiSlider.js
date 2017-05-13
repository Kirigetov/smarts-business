$(document).ready(function() {

const slider = '.js-slider';
const sliderLine = '.js-slider-line';
const sliderInputFrom = '.js-slider-from';
const sliderInputTo = '.js-slider-to';

$(slider).each(function(i, item) {
    const target = $(item);
    const line = target.find(sliderLine).get(0);
    const inputFrom = target.find(sliderInputFrom);
    const inputTo = target.find(sliderInputTo);
    const inputs = target.find(`${sliderInputFrom}, ${sliderInputTo}`);
    
    const max = target.data('max');
    const min = target.data('min');
    const start = target.data('initial');
    const units = target.data('units');
    
    noUiSlider.create(line, {
        start,
        connect: true,
        range: {
            'min': min,
            'max': max
        },
        tooltips: [true, true],
        format: wNumb({
            decimals: 0,
            postfix: ` ${units}`
        })
    });
    
    line.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        inputFrom.val(parseInt(values[0]));
        inputTo.val(parseInt(values[1]));
    
        inputs.change();
    });
    
    inputs.on('change', function() {
        const target = $(this);
        const value = target.val();
        const i = target.index();
        
        // console.log('hi');
    });
    
    
    function setSliderHandle(i, value) {
        let r = [null,null];
        r[i] = value;
        line.noUiSlider.set(r);
    }

// Listen to keydown events on the input field.
    inputs.toArray().forEach(function(input, handle) {

        input.addEventListener('change', function(){
            console.log('changed');
            setSliderHandle(handle, this.value);
        });

        input.addEventListener('keydown', function( e ) {

            let values = line.noUiSlider.get();
            let value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            let steps = line.noUiSlider.steps();

            // [down, up]
            let step = steps[handle];

            let position;

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



});