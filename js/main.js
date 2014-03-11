$(function(){

	var freezeScroll = $('body').css('overflow', 'hidden'),
		clickOut = $('#overlay').on('click', function(e){
						if (e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA') {
							$('#contact-form').animate({ marginTop : '-725px' }, 300)
							$(this).fadeOut(300)
							$('body').css('overflow', 'visible')
						}
					}),
		escOut = $('body').on('keydown', function(e){
					if ((e.keyCode || e.which) == 27)
				    {
				    	$('#contact-form').animate({ marginTop : '-725px' })
				        $('#overlay').fadeOut(300)
				        $('body').css('overflow', 'visible')
				    }
				})

	$('button').on('click', function(){
		$('#overlay').fadeIn(150)
		$('#contact-form').animate({ marginTop : '+125px' })
		freezeScroll()
		clickOut()
		escOut()
	})
})
