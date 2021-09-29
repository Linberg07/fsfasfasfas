function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();
$('.date-list__item').mousemove(function(){
	$(this).addClass('ibg');
	ibg();
})
$('.date-list__item').mouseout(function(){
	$(this).removeClass('ibg');
	$(this).css('background','#F7F7F7');
})
$('.product-row__link').click(function(e){
	e.preventDefault();
	$('.popup-number').addClass('active');
})
$('.popup-number__close').click(function(){
	$('.popup-number').removeClass('active');
})
$('.popup-number__bg').click(function(){
	$('.popup-number').removeClass('active');
})

$('.hausner-reg').click(function(e){
	e.preventDefault();
	$('.popupReg').addClass('active');
})
$('.popupReg-close').click(function(){
	$('.popupReg').removeClass('active');
})
$('.popupReg-bg').click(function(){
	$('.popupReg').removeClass('active');
})

$('.postImpres').click(function(e){
	e.preventDefault();
	$('.popupAction').addClass('active');
})
$('.popupAction-close').click(function(){
	$('.popupAction').removeClass('active');
})
$('.pupupAction__bg').click(function(){
	$('.popupAction').removeClass('active');
})