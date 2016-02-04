$(document).ready(function(){
	//width all slider
	var widthBlockSlider = $('.sl-top-block').width();
	var lengthBlockSlider = $('.sl-top-block').length;
	widthBlockSlider = widthBlockSlider+30;
	var allSliderWidth = widthBlockSlider * lengthBlockSlider;
	var postLestSlider = lengthBlockSlider -1;
	var lestSlider = widthBlockSlider * postLestSlider;
	$('.sl-top-all').css('width',allSliderWidth);


	//click slider
	var positionSlider = 0;
	var id = 0;
	$('.sl-top-arrow-right').on('click',function(){
		id++;
		positionSlider -= widthBlockSlider
		$('.sl-top-all').animate({'left':positionSlider},500)
		if(id >=lengthBlockSlider){
			positionSlider = 0;
			id=0;
		$('.sl-top-all').animate({'left':positionSlider},500)
		}
	})
	$('.sl-top-arrow-left').on('click',function(){
		id--;
		positionSlider += widthBlockSlider
		$('.sl-top-all').animate({'left':positionSlider},500)
		if(id <= 0 ){
			positionSlider = -lestSlider;
			id=postLestSlider;
		$('.sl-top-all').animate({'left':positionSlider},500)
		}
	})
	setInterval(function(){
		id++;
		positionSlider -= widthBlockSlider
		$('.sl-top-all').animate({'left':positionSlider},500)
		if(id >=lengthBlockSlider){
			positionSlider = 0;
			id=0;
		$('.sl-top-all').animate({'left':positionSlider},500)
		}
	},6000)
})