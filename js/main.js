$(function(){
	
	var clickOut = $('#overlay').on('click', function(e){
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

	$('button#get-involved').on('click', function(){
		$('#overlay').fadeIn(150)
		$('#contact-form').animate({ marginTop : '+125px' })
		$('body').css('overflow', 'hidden')
		clickOut()
		escOut()
	})

	$('.language-options li button').on('click', function(){
		
		var activeLanguage = $(this).text()

		$('#active').removeAttr('id','active')
		$(this).attr('id','active')
		if(activeLanguage === 'Español'){
			$('strong').text('Todos los idiomas del mundo, para todos.')
			$('#summary').text('Wikitongues es un esfuerzo comunitario para que todas las personas puedan acceder a las 7.000 lenguas que existen y también las historias y los sentimientos detrás de ellas. Coordinados con una red de voluntarios, nos dedicamos a enseñar al mundo el verdadero significado de diversidad.')
			$('#get-involved').text('Involúcrate.')
			$('footer p:first-child').hide()
			$('footer p:last-child').before(
				'<p>Hecho con amor internacional por @<a href="http://www.twitter.com/dbudell" target="_blank">dbudell</a>, ' +
                '@<a href=\"http://www.twitter.com/freddieandrade\" target=\"_blank\">freddieandrade</a>, ' +
                '@<a href=\"http://www.twitter.com/@lindiebee\" target=\"_blank\">lindiebee</a> y ' + 
                '@<a href=\"http://www.twitter.com/@fateuser\" target=\"_blank\">fateuser</a>.</p>')
			$('footer p:last-child').text('© 2014 Wikitongues, tots els drets reservats.')
		} else if (activeLanguage === 'Català') {
			$('strong').text('Tots els idiomes del món, per a tothom.')
			$('#summary').text('Wikitongues és un esforç comunitari perquè totes les persones puguin accedir a les 7.000 llengües que existeixen i també les històries i els sentiments darrere d\'elles. Coordinats amb una xarxa de voluntaris, ens dediquem a ensenyar al món el veritable significat de diversitat.')
			$('#get-involved').text('Involucra\'t.')
			$('footer p:first-child').hide()
			$('footer p:last-child').before(
				'<p>Fet amb amor internacional per @<a href="http://www.twitter.com/dbudell" target="_blank">dbudell</a>, ' +
                '@<a href=\"http://www.twitter.com/freddieandrade\" target=\"_blank\">freddieandrade</a>, ' +
                '@<a href=\"http://www.twitter.com/@lindiebee\" target=\"_blank\">lindiebee</a> i ' + 
                '@<a href=\"http://www.twitter.com/@fateuser\" target=\"_blank\">fateuser</a>.</p>')
			$('footer p:last-child').text('© 2014 Wikitongues, todos los derechos reservados.')
		} else {
			console.log('hi')
		}
		
	})

})
