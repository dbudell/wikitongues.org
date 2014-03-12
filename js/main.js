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
				}),
		 frameSet = $('html.js').closest('frameset'),
    		 metaHead = frameSet.prev('head')
         console.log(frameSet)
	 console.log(metaHead)
	 metaHead.append('<meta name="viewport" content="width=device-width, initial-scale=1">')

	$('button#get-involved').on('click', function(){
		$('#overlay').fadeIn(150)
		$('#contact-form').animate({ marginTop : '0px' })
		$('body').css('overflow', 'hidden')
		clickOut()
		escOut()
	})

	$('.language-options li button').on('click', function(){

		var activeLanguage = $(this).text()

		$('#active').removeAttr('id','active')
		$(this).attr('id','active')
		if(activeLanguage === 'Español'){
			$('h4').text('Todos los idiomas del mundo, para todos.')
			$('#summary').text('Wikitongues es un esfuerzo comunitario para que todas las personas puedan acceder a las 7.000 lenguas que existen y también las historias y los sentimientos detrás de ellas. Coordinados con una red de voluntarios, nos dedicamos a enseñar al mundo el verdadero significado de diversidad.')
			$('#get-involved').text('Involúcrate.')
			$('.first').text('Hecho con amor internacional por ')
			$('.second').text(' y')
			$('footer p:last-child').text('© 2014 Wikitongues, todos los derechos reservados.')
		} else if (activeLanguage === 'Català') {
			$('h4').text('Tots els idiomes del món, per a tothom.')
			$('#summary').text('Wikitongues és un esforç comunitari perquè totes les persones puguin accedir a les 7.000 llengües que existeixen i també les històries i els sentiments darrere d\'elles. Coordinats amb una xarxa de voluntaris, ens dediquem a ensenyar al món el veritable significat de diversitat.')
			$('#get-involved').text('Involucra\'t.')
			$('.first').text('Fet amb amor internacional per ')
			$('.second').text(' i')
			$('footer p:last-child').text('© 2014 Wikitongues, tots els drets reservats.')
		} else if (activeLanguage === 'Italiano') {
			$('h4').text('Ogni lingua del mondo, per tutti.')
			$('#summary').text('Wikitongues è una comunità che prova a dare accesso a tutte le persone del mondo a tutte le 7.000 lingue del mondo — storie e sentimenti nascosti dietro ognuna.Con l\'aiuto di una rete di volontari, ci dedichiamo a mostrare al mondo il vero significato di diversità.')
			$('#get-involved').text('Resta coinvolto.')
			$('.first').text('Fatto con amore internazionale da ')
			$('.second').text(' e')
			$('footer p:last-child').text('© 2014 Wikitongues, tutti i diritti riservati.')
		} else if (activeLanguage === 'Deutsch') {
			$('h4').text('Jede Sprache der Welt, für alle.')
			$('#summary').text('Wikitongues ist eine Gemeinschaft deren Anstrengung es ist den Menschen in der Welt Zugang zu allen 7000 Sprachen in der Welt zu geben - die Geschichte und die Gefühle dahinter. In Zusammenarbeit mit einem Netzwerk von Freiwilligen bemühen wir uns der Welt die wahre Bedeutung von Diversität zu zeigen.')
			$('#get-involved').text('Mach mit!')
			$('.first').text('Mit internationaler Liebe gemacht ')
			$('.second').text(' und')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
		} else if (activeLanguage === 'Lietuvių') {
			$('h4').text('Visos pasaulio kalbos - kiekvienam.')
			$('#summary').text('Wikitongues tai organizacija, siekianti suteikti žmonėms prieigą prie visų - 7000 pasaulio kalbų, jas išgirsti ir pajausti. Bendradarbiaujant su gausybę savanorių es dirbame tam, kad parodytume koks įvairus yra pasaulis.')
			$('#get-involved').text('Prisijunk ir Tu!')
			$('.first').text('Tarptautiškumą mylintys ')
			$('.second').text(' ir')
			$('footer p:last-child').text('© 2014 Wikitongues, Visos teisės saugomos.')
		} /*else if (activeLanguage === 'עברית') {
			$('h4').text('.כל שפה בעולם, לכולם')
			$('#summary').text('הינו מאמץ קהילתי שמטרתו לאפשר לכל אדם בעולם גישה לכל 7,000 השפות הקיימות בעולם – הסיפורים והרגש שעומד מאחוריהם. בתיאום עם קהילת מתנדבים, אנחנו מחוייבים להראות לעולם את משמעותו האמיתי של הגִּוּוּן.')
			$('#get-involved').text('Prisijunk ir Tu!')
			$('.first').text('Tarptautiškumą mylintys ')
			$('.second').text(' ir')
			$('footer p:last-child').text('© 2014 Wikitongues, Visos teisės saugomos.')
		} */ else {
			$('h4').text('Every language in the world, for everyone.')
			$('#summary').text('Wikitongues is a community effort to give all the world’s people access to all the world’s 7,000 languages — the stories and the feelings behind them. In coordination with a network of volunteers, we\'re dedicated to showing the world the true meaning of diversity.')
			$('#get-involved').text('Get involved.')
			$('.first').text('Made with international love ')
			$('.second').text(' by')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
		}

	})
})
