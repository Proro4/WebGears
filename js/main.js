$(document).ready(function(){


 		if($('.slider-box').length > 0){
        var carousel = $("#carousel").featureCarousel({
          // include options like this:
          // (use quotes only for string values, and no trailing comma after last option)
          // option: value,
          // option: value
        });
        }




		var widthBody = $('body').width();
	//info box

		var iBoxWidth = $('.info-box').width();
		var leftIbWidth = (widthBody -iBoxWidth) / 2;
		setTimeout(function(){
			$('.info-box').animate({'left':leftIbWidth},600);
		},1000)
		setTimeout(function(){
			$('.info-box').animate({'left':'5000px'},600);
		},3000);
		$('.foot-info-exit').on('click',function(){
			$('.info-box').animate({'left':'5000px'},600);
		})
	//info box end
        setTimeout(function() {
        $('.tracker-summation-current,.tracker-summation-middle,.tracker-summation-total').css('display','none');
      },500)

	//big-diagonal
		var widthBck = 2287;
		var widthDig = (widthBody - widthBck) / 2;
		$('.services-bck-l,.services-bck-r').css('width',widthDig)



	//header top

	var widthHead = $('.head-top').width();
	var widthLine = (widthBody - widthHead)/2;
	$('.fix-head-left').css({'width': widthLine, 'left':-widthLine})
	$('.fix-head-right').css({'width': widthLine, 'right':-widthLine})

	$('.header-top-menu .header-hidden').offset({left:0});
	$('.header-top-menu').on('click',function(){
		if($('.header-hidden').height()==0){
			$('.header-top-menu .header-hidden').animate({'height':'225px'},200);
			setTimeout(function(){
				$('.header-top-menu .header-hidden').animate({'width':$(window).width()},200);
			},200)
		}else{
				$('.header-top-menu .header-hidden').animate({'width':'25px'},200);
			setTimeout(function(){
			$('.header-top-menu .header-hidden').animate({'height':'0px'},200);
			},200)

		}
	})

	$('.header-top-menu li').css('width',$(window).width());
	$('.header-top-menu li').offset({left:0});
	var profWidth = $('.all-prof').width();
	$('.all-prof').css('width',profWidth+20);
		//arrow-top
		$('.arrow-to-top').on('click',function(){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		})

		$('.tablet-block .arrow-to-top').mouseenter(function(){
			$('.tablet-block .arrow-top').animate({'bottom':'-170px'},200);
		})
		$('.tablet-block .arrow-to-top').mouseleave(function(){
			$('.tablet-block .arrow-top').animate({'bottom':'-190px'},200);
		})

		var heightLang = $('.language').height();
		$('.lang .lang-but').on('click',function(){
	if($('.lang').height() == 20){ 
		$('.lang').css('background','#718BBA');
		$('.lang').animate({'height':heightLang},200);
		$('.lang-but').css('display','none');
		}
	})
$('.lang .lang-but').on('click',function(){
	if($('.lang').height() == 25){ 
		$('.lang').animate({'height':'65px'},200);
		$('.lang-but').css('display','none');
		}
	})
		
	$('.lang').on('click',function(){
	if($('.lang').height() == heightLang){ 
		$('.lang').css('background','url(../img/arrow-lang.png) no-repeat 42px 8px')
		$('.lang').animate({'height':'20px'},200);
		$('.lang-but').css('display','block');
		}
	})
	$('.lang').on('click',function(){
	if($('.lang').height() == 65){ 
		$('.lang').animate({'height':'25px'},200);
		$('.lang-but').css('display','block');
		}
	})
	var bodyWidth = $('body').width();
	var widthl = $('.tb-block').width();
	var c = (bodyWidth - widthl) / 2;
	var tbMenu = $('.tb-name li:eq(0)').offset();
	var tbwidth = $('.tb-name li:eq(0)').width();
	// var fTbMenu = tbMenu.left;
	$('.tb-name').each(function(){
		var widthMenu = $(this).find('li').eq(0).width();
		var posMenu = $(this).eq(0).find('li').offset();
		$(this).addClass('tb-active');
		if($(window).width() <= 1100){
			$(this).parent().find('.tb-line-block').animate({'width': widthMenu,'left': (posMenu.left)+15},300);
		}
		$(this).parent().find('.tb-line-block').animate({'width': widthMenu,'left': (posMenu.left-c)+15},300);
	})
	$('.tb-name li,.tb-name-adaptive li').on('click',function(){
		var widthMenu = $(this).width();
		var posMenu = $(this).offset();
		$('.tb-name li,.tb-name-adaptive li').removeClass('tb-active');
		$(this).addClass('tb-active');
		$(this).parent().parent().parent().find('.tb-line-block').animate({'width': widthMenu,'left': (posMenu.left-c)+15},300);
		// if($(window).width() <= 1100){
		// 	$(this).parent().find('.tb-line-block').animate({'width': widthMenu,'left': (posMenu.left)+15},300)
		// }
		var nameProf = this.id;
		$(this).parent().parent().parent().parent().parent().find('.tb-info').css('display','none');
		$(this).parent().parent().parent().parent().parent().find('.tb-info[name="'+nameProf+'"]').css('display','block');
	})
	//position active menu
		var fMenu = $('.header-menu li a:eq(0)').offset()
		var firstMenu = fMenu.left
		$('.active-menu').css({"left":firstMenu-20-c});
		$('.header-menu li a').on('click',function(){
			var widthMenu = $(this).parent().width();
			var posMenu = $(this).parent().offset();
			$('.active-menu').animate({'width': widthMenu,'left': posMenu.left-c},500);
		if($(window).width() <= 1100){
			$('.active-menu').animate({'width': widthMenu,'left': posMenu.left},500);
		}
		})
  //anchor menu-click scroll
   $('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top -70
		}, 1000);
		e.preventDefault();
		return false;
	});
 	var widthCont = $('.row').width();
  	$('.head-fixed').css('width',widthCont);


})
$(document).ready(function(){

	// POP-UP ACTIVE

		$('.arrow-pop-up, .title-pop-up').on('click',function(){
			var clickPopUp = $(this);
			var heightPopUp =clickPopUp.parent().find('.text-popup p').height();
			if(clickPopUp.parent().find('.text-popup').height() == 0)  {
				$('.text-popup').animate({'height':'0'});
				$('.arrow-pop-up').css('transform','rotate(0deg)');
				clickPopUp.parent().find('.text-popup').animate({'height':heightPopUp+30});
				clickPopUp.parent().find('.arrow-pop-up').css('transform','rotate(90deg)');
			}else{
				clickPopUp.parent().find('.text-popup').animate({'height':'0'});
				clickPopUp.parent().find('.arrow-pop-up').css('transform','rotate(0deg)');
			}

		})

	// POP-UP ACTIVE END


        $(".owl-carousel").owlCarousel({ 
            center:false,
		    margin:10,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        820:{
		            items:3,
		            nav:false
		        },
		        1100:{
		            items:4,
		            nav:false
		        }
		    }
        });
        $(".owl-carousel-top").owlCarousel({ 
            center:false,	
		    margin:10,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        600:{
		            items:1,
		            nav:false
		        },
		        1100:{
		            items:1,
		            nav:false
		        }
		    }
        });
        $(".owl-carousel-p").owlCarousel({ 
            center:false,	
		    margin:10,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        600:{
		            items:1,
		            nav:false
		        },
		        1100:{
		            items:1,
		            nav:false
		        }
		    }
        });

      });

 $(window).scroll(function() {
	var bodyWidth = $('body').width();
	var widthl = $('.tb-block').width();
	var c = (bodyWidth - widthl) / 2;
	if($(window).width() > 1100){
 	if($(this).scrollTop() > 450){
 		$('.head-top').addClass('head-fixed');
 		$('.bottom-left').addClass('bottom-left-h');
 	}
 	else{

 		$('.head-top').removeClass('head-fixed');
 		$('.bottom-left').removeClass('bottom-left-h');
 	}
  if($(this).scrollTop() > 450){
 			$('.head-fixed').animate({'top':'0'},300);
 	}
 	else if($(this).scrollTop() < $('#services').offset().top-100){
 			$('.head-top.head-fixed').animate({'top':'-100px'},300);
 	}
 }

 })

 $(window).resize(function(){
	$('.header-top-menu li').css('width',$(window).width());
 	var widthTb = $('.tb-name').width();
 	if($('.all-prof').width() >= widthTb -200){
 		$('.tb-prof').addClass('min-width');
 		$('.tb-arrows').removeClass('dnone');
 	}
 	else{
 		$('.tb-prof').removeClass('min-width');
 		$('.tb-arrows').addClass('dnone');

 	}
 })
 $(document).ready(function(){
 	$('.tb-name .tb-right').on('click',function(){
 		var widthTbProf = $(this).parent().parent().find('.tb-prof.min-width').width();
 		var widthAllProf = $(this).parent().parent().find('.all-prof').width();
 		$(this).parent().parent().find('.all-prof').animate({'left':widthTbProf-widthAllProf},500);
 	})
 	$('.tb-name .tb-left').on('click',function(){
 		if($(this).parent().parent().find('.all-prof').css('left') != 0){
 		$(this).parent().parent().find('.all-prof').animate({'left':0},500);
 		}
 	})

setTimeout(function(){
 	var widthTb = $('.tb-name').width();
 	if($('.all-prof').width() >= widthTb -200){
 		$('.tb-prof').addClass('min-width');
 		$('.tb-arrows').removeClass('dnone');
 	}
 	
 },500)
		
	$('.tb-name-adaptive').each(function(){
		var lengthLi = $(this).find('li').length;
		var widthLi =   $(this).find('li').width();
		var allWidth = lengthLi*200;
		$(this).find('.all-prof').css('width', allWidth);
	})	
		var idRight = 0;
		var _rightBut = 0;
	$('.tb-name-adaptive .tb-right').on('click',function(){
		var tubB = $(this).parent();
		var _lenghtB = tubB.find('li').length;;
		 _rightBut +=  200; 
		tubB.find('.all-prof').animate({'left':-_rightBut},300	);	
		idRight++;
		console.log(idRight +" : "+ _lenghtB)
		if(idRight == _lenghtB-1){
			$(this).css('display','none');
		}
		else{
			$(this).css('display','block');
		}
		if(idRight == 0){
			tubB.find('.tb-left').css('display','none');
		}
		else{
			tubB.find('.tb-left').css('display','block');
		}
	})
	$('.tb-name-adaptive .tb-left').on('click',function(){
		var tubB = $(this).parent();
		var _lenghtB = tubB.find('li').length;;
		 _rightBut -=  200; 
		tubB.find('.all-prof').animate({'left':-_rightBut},300	);	
		idRight--;
		console.log(idRight +" : "+ _lenghtB)
		if(idRight == 0){
			$(this).css('display','none');
		}
		else{
			$(this).css('display','block');
		}
		if(idRight == _lenghtB-1){
			tubB.find('.tb-right').css('display','none');
		}
		else{
			tubB.find('.tb-right').css('display','block');
		}
	})

 })
 $(window).resize(function(){
 	
	//big-diagonal
		var widthBck = 2287;
		var widthBody = $('body').width();
		var widthDig = (widthBody - widthBck) / 2;
		$('.services-bck-l,.services-bck-r').css('width',widthDig)
	//header top resize

	var widthHead = $('.head-top').width();
	var widthLine = (widthBody - widthHead)/2;
	$('.fix-head-left').css({'width': widthLine, 'left':-widthLine})
	$('.fix-head-right').css({'width': widthLine, 'right':-widthLine})

 })