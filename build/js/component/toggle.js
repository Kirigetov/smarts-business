
// const toggleBlock = '.js-toggle-block';
// const toggleBtn = '.js-toggle-btn';
// const toggleText = '.js-toggle-text';

// $(document).on('click', toggleBtn, function(e) {
//     // console.log('11');
//     e.preventDefault();
    
//     const target = $(this);
//     const data = target.data('toggle');
//     const dataText = target.data('text');
//     const toOpen = $(toggleBlock).filter(`[data-toggle="${data}"]`);
//     const isVisible = toOpen.is(':visible');
//     const opacityFrom = isVisible ? 1 : 0;
//     const opacityTo = isVisible ? 0 : 1;
//     // if toggle is button
//     const isBtn = target.data('btn');
//     const textButton = target.find(toggleText).data('text');
//     const changeText = target.find(toggleText).text();

//     let textTmp = target.text();
    
//     if(isBtn) {
//         $(toggleText).text(textButton);
//         $(toggleText).data('text', changeText);
//     } else {
//         target.text(dataText);
//         target.data('text',textTmp);
//     }
    
//     toOpen.stop(true).css('opacity', opacityFrom).slideToggle('fast').animate(
//         {opacity: opacityTo},
//         {queue: false, duration: 'fast'},
//     );
    
// });

