//review slider

var slider = $('#slider'),
	controls = $('#controls'),
	speed = 3000,
	speedFade = 500,
	interval;

function clickControl() {
	clearInterval(interval);
	var cur = $(this).data('num');
	$(slider).children().fadeOut(speedFade).removeClass('active');
	$(slider).find('[data-num = "' + cur + '"]').fadeIn(speedFade).addClass('active');
	checkActive();
}

function checkActive() {
	var activeSlideNum = $('#slider').find('.active').data('num');
	$(controls).children().removeClass('active');
	$(controls).find('[data-num = "' + activeSlideNum + '"]').addClass('active');

}

function autoClick() {
	var activeSlide = $(slider).find('.active');
	$(slider).children().fadeOut(speedFade).removeClass('active');
	if ($(activeSlide).next().length) {
		$(activeSlide).next().fadeIn(speedFade).addClass('active');
	} else {
		$(slider).children().first().fadeIn(speedFade).addClass('active');
	}
	checkActive()
}

$(controls).on('click', '.controls__item', clickControl);
interval = setInterval(autoClick, speed);

//review slider end



//animate counter
var show = true;
$(document).scroll(function () {
		if (!show) return false;

		var e_top = $('.number').offset().top;
		var w_top = $(window).scrollTop();
		var w_height = $(window).height(); // Высота окна браузера
		var d_height = $(document).height(); // Высота всего документа
		var e_height = $('.number').outerHeight(); // Полная высота блока со счетчиками

		if (w_height + w_top == d_height || e_height + e_top < w_height || d_height - w_height - 300 <= w_top) {
			$('.number').spincrement();
			show = false;

		}
	})
	//animate counter end

//anchor

$('a[href^="#"]').click(function () {
	var el = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(el).offset().top
	}, 1000);
	console.log(el);
	return false;
});

//anchor end

function pos(e) {
	var ml = $(e).outerWidth() / 2;
	var mt = $(e).outerHeight() / 2;
	$(e).css({
		marginTop: '-' + mt + 'px',
		marginLeft: '-' + ml + 'px'
	})
}

pos('.popup__login');
pos('.popup__signup');

$('.popup__wrapper').click(function(){
	$(this).fadeOut();
	$('.popup__login').fadeOut(); 
	$('.popup__signup').fadeOut(); 
})

$('#popup__login, #popup__signup').click(function(e){
	e.preventDefault();
	var el = '.'+$(this).attr('id');
	$(el).add('.popup__wrapper').fadeIn(); 
}) 




