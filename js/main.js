$(function(){
	// Logotype resize
	$(".logotype").fitText(.712)

	translate()
})

function translate (){
	$('.language-options li button').on('click', function(){

		var activeLanguage = $(this).text()

		if(activeLanguage === 'Español'){
			$('.slogan').text('Todos los idiomas del mundo, para todos.')
			$('#summary').text('Wikitongues es un esfuerzo comunitario para que todas las personas puedan acceder a las 7.000 lenguas que existen y también las historias y los sentimientos detrás de ellas. Coordinados con una red de voluntarios, nos dedicamos a enseñar al mundo el verdadero significado de diversidad.')
			$('.mobile-text').text('Wikitongues es un esfuerzo comunitario para que todas las personas puedan acceder a las 7.000 lenguas que existen y también las historias y los sentimientos detrás de ellas. Coordinados con una red de voluntarios, nos dedicamos a enseñar al mundo el verdadero significado de diversidad.')
			$('#get-involved').text('Involúcrate.')
			$('.first').text('Hecho con amor internacional por ')
			$('.second').text(' y')
			$('footer p:last-child').text('© 2014 Wikitongues, todos los derechos reservados.')
			$('#name').attr('placeholder','¿Cómo te llamas?')
			$('#email').attr('placeholder','¿Qué es tu correo electrónico?')
			$('#message').attr('placeholder','¿Qué tal?')
			$('#submit').attr('value','Enviar')
		} else if (activeLanguage === 'Català') {
			$('.slogan').text('Tots els idiomes del món, per a tothom.')
			$('#summary').text('Wikitongues és un esforç comunitari perquè totes les persones puguin accedir a les 7.000 llengües que existeixen i també les històries i els sentiments darrere d\'elles. Coordinats amb una xarxa de voluntaris, ens dediquem a ensenyar al món el veritable significat de diversitat.')
			$('.mobile-text').text('Wikitongues és un esforç comunitari perquè totes les persones puguin accedir a les 7.000 llengües que existeixen i també les històries i els sentiments darrere d\'elles. Coordinats amb una xarxa de voluntaris, ens dediquem a ensenyar al món el veritable significat de diversitat.')
			$('#get-involved').text('Involucra\'t.')
			$('.first').text('Fet amb amor internacional per ')
			$('.second').text(' i')
			$('footer p:last-child').text('© 2014 Wikitongues, tots els drets reservats.')
			$('#name').attr('placeholder','Com et dius?')
			$('#email').attr('placeholder','Què es el teu mail?')
			$('#message').attr('placeholder','Què tal?')
			$('#submit').attr('value','Enviar')
		} else if (activeLanguage === 'Italiano') {
			$('.slogan').text('Ogni lingua del mondo, per tutti.')
			$('#summary').text('Wikitongues è una comunità che prova a dare accesso a tutte le persone del mondo a tutte le 7.000 lingue del mondo — storie e sentimenti nascosti dietro ognuna. Con l\'aiuto di una rete di volontari, ci dedichiamo a mostrare al mondo il vero significato di diversità.')
			$('.mobile-text').text('Wikitongues è una comunità che prova a dare accesso a tutte le persone del mondo a tutte le 7.000 lingue del mondo — storie e sentimenti nascosti dietro ognuna. Con l\'aiuto di una rete di volontari, ci dedichiamo a mostrare al mondo il vero significato di diversità.')
			$('#get-involved').text('Resta coinvolto.')
			$('.first').text('Fatto con amore internazionale da ')
			$('.second').text(' e')
			$('footer p:last-child').text('© 2014 Wikitongues, tutti i diritti riservati.')
			$('#name').attr('placeholder','Qual è il tuo nome?')
			$('#email').attr('placeholder','Qual è il tuo indirizzo email?')
			$('#message').attr('placeholder','Il tuo messaggio?')
			$('#submit').attr('value','Inviare')
		} else if (activeLanguage === 'Deutsch') {
			$('.slogan').text('Jede Sprache der Welt, für alle.')
			$('#summary').text('Wikitongues ist eine Gemeinschaft deren Anstrengung es ist den Menschen in der Welt Zugang zu allen 7000 Sprachen in der Welt zu geben - die Geschichte und die Gefühle dahinter. In Zusammenarbeit mit einem Netzwerk von Freiwilligen bemühen wir uns der Welt die wahre Bedeutung von Diversität zu zeigen.')
			$('.mobile-text').text('Wikitongues ist eine Gemeinschaft deren Anstrengung es ist den Menschen in der Welt Zugang zu allen 7000 Sprachen in der Welt zu geben - die Geschichte und die Gefühle dahinter. In Zusammenarbeit mit einem Netzwerk von Freiwilligen bemühen wir uns der Welt die wahre Bedeutung von Diversität zu zeigen.')
			$('#get-involved').text('Mach mit!')
			$('.first').text('Mit internationaler Liebe gemacht ')
			$('.second').text(' und')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
			$('#name').attr('placeholder', 'Wie ist Ihr Name?')
			$('#email').attr('placeholder','Was ist Ihre E-Mail?')
			$('#message').attr('placeholder','Wie geht\'s?')
			$('#submit').attr('value','Senden')
		} else if (activeLanguage === 'Lietuvių') {
			$('.slogan').text('Visos pasaulio kalbos - kiekvienam.')
			$('#summary').text('Wikitongues tai organizacija, siekianti suteikti žmonėms prieigą prie visų - 7000 pasaulio kalbų, jas išgirsti ir pajausti. Bendradarbiaujant su gausybę savanorių es dirbame tam, kad parodytume koks įvairus yra pasaulis.')
			$('.mobile-text').text('Wikitongues tai organizacija, siekianti suteikti žmonėms prieigą prie visų - 7000 pasaulio kalbų, jas išgirsti ir pajausti. Bendradarbiaujant su gausybę savanorių es dirbame tam, kad parodytume koks įvairus yra pasaulis.')
			$('#get-involved').text('Prisijunk ir Tu!')
			$('.first').text('Tarptautiškumą mylintys ')
			$('.second').text(' ir')
			$('footer p:last-child').text('© 2014 Wikitongues, Visos teisės saugomos.')
			$('#name').attr('placeholder','Koks tavo vardas?')
			$('#email').attr('placeholder','Koks jūsų elektroninio pašto?')
			$('#message').attr('placeholder','Kaip reikalai?')
			$('#submit').attr('value','Siųsti')
		} else if (activeLanguage === 'עברית') {
			$('.slogan').text('כל שפה בעולם, לכולם.')
			$('#summary').text('Wikitongues הינו מאמץ קהילתי שמטרתו לאפשר לכל אדם בעולם גישה לכל 7,000 השפות הקיימות בעולם – הסיפורים והרגש שעומד מאחוריהם. בתיאום עם קהילת מתנדבים, אנחנו מחוייבים להראות לעולם את משמעותו האמיתי של הגִּוּוּן.')
			$('.mobile-text').text('Wikitongues הינו מאמץ קהילתי שמטרתו לאפשר לכל אדם בעולם גישה לכל 7,000 השפות הקיימות בעולם – הסיפורים והרגש שעומד מאחוריהם. בתיאום עם קהילת מתנדבים, אנחנו מחוייבים להראות לעולם את משמעותו האמיתי של הגִּוּוּן.')
			$('#get-involved').text('הצטרפו אלינו.')
			$('.first').text('נעשה באהבה ')
			$('.second').text(' ו -')
			$('footer p:last-child').text('© 2014 Wikitongues, כל הזכויות שמורות.')
			$('#name').attr('placeholder','מה שמך?')
			$('#email').attr('placeholder','מה הדוא"ל שלך?')
			$('#message').attr('placeholder','מה קורה?')
			$('#submit').attr('value','מה קורה?')
		} else if (activeLanguage === 'العربية') {
			$('.slogan').text('أي لغة في العالم هي لغة للجميع و')
			$('#summary').text('ويكي تونق هي مجموعة تسعي لمنح كل الناس في العالم امكانية التعرف علي كل لغات العالم و هي سبعة الف لغة \(7000\) و ما ورائها من قصص و احاسيس بالتنسيق مع مجموعة من المتطوعين نحن نركز علي تعريف العالم بالمعني الحقيقي للتنوع')
			$('.mobile-text').text('ويكي تونق هي مجموعة تسعي لمنح كل الناس في العالم امكانية التعرف علي كل لغات العالم و هي سبعة الف لغة \(7000\) و ما ورائها من قصص و احاسيس بالتنسيق مع مجموعة من المتطوعين نحن نركز علي تعريف العالم بالمعني الحقيقي للتنوع')
			$('#get-involved').text('الانضمام إلينا.')
			$('.first').text('شارك و نظم بواسطة ')
			$('.second').text(' ')
			$('footer p:last-child').text('© 2014 جميع الحقوق محفوظة لويكي تونق')
			$('#name').attr('placeholder','ما اسمك?')
			$('#email').attr('placeholder','ما هو بريدك الإلكتروني؟?')
			$('#message').attr('placeholder','ما الأمر؟?')
			$('#submit').attr('value','إرسال?')
		} else if (activeLanguage === 'Português') {
			$('.slogan').text('Todas as linguas do mundo, para todos.')
			$('#summary').text('Wikitongues é uma comunidade com o fim de trazer accesso para as quase 7000 linguas do mundo à todas as pessoas - suas histórias e emoções. Em conjunto a uma rede de voluntários, nos dedicamos a mostrar ao mundo o verdadeiro significado de diversidade.')
			$('.mobile-text').text('Wikitongues é uma comunidade com o fim de trazer accesso para as quase 7000 linguas do mundo à todas as pessoas - suas histórias e emoções. Em conjunto a uma rede de voluntários, nos dedicamos a mostrar ao mundo o verdadeiro significado de diversidade.')
			$('#get-involved').text('Participe.')
			$('.first').text('Feito com amor internacional por ')
			$('.second').text(' e')
			$('footer p:last-child').text('© 2014 Wikitongues, Todos os direitos reservados.')
			$('#name').attr('placeholder','Qual é o seu nome?')
			$('#email').attr('placeholder','Qual é o seu email?')
			$('#message').attr('placeholder','A sua mensagem?')
			$('#submit').attr('value','Enviar')
		} else if (activeLanguage === 'Русский') {
			$('.slogan').text('Каждый язык в мире для всех.')
			$('#summary').text('Wikitongues является результатом коллективного усилия дать всем людям в мире доступ к 7000 языкам мира - к их историям и чувствам, стоящими за ними. Работая с сетью добровольцов, мы стремимся показать миру истинное значение разнообразия.')
			$('.mobile-text').text('Wikitongues является результатом коллективного усилия дать всем людям в мире доступ к 7000 языкам мира - к их историям и чувствам, стоящими за ними. Работая с сетью добровольцов, мы стремимся показать миру истинное значение разнообразия.')
			$('#get-involved').text('Примите участие.')
			$('.first').text('Организаторы ')
			$('.second').text(' и')
			$('footer p:last-child').text('© 2014 Wikitongues, Все права защищены')
			$('#name').attr('placeholder','как вас зовут?')
			$('#email').attr('placeholder','электронный адрес?')
			$('#message').attr('placeholder','как дела?')
			$('#submit').attr('value','послать')
		} else if (activeLanguage === 'Afrikaans') {
			$('.slogan').text('Elke taal in die wêreld, vir almal.')
			$('#summary').text("Wikitongues is 'n gemeenskap poging om vir al die mense in die wêreld toegang te tot al die 7000 wêreldstale en die stories en emoties agter hulle. In samenwerking met 'n netwerk van vrywilligers, is ons toegewyd om aan die wêreld die betekenis van diversiteit te wys.")
			$('.mobile-text').text("Wikitongues is 'n gemeenskap poging om vir al die mense in die wêreld toegang te tot al die 7000 wêreldstale en die stories en emoties agter hulle. In samenwerking met 'n netwerk van vrywilligers, is ons toegewyd om aan die wêreld die betekenis van diversiteit te wys.")
			$('#get-involved').text('Raak betrokke')
			$('.first').text('Gemaak met die internasionale liefde deur ')
			$('.second').text(' en')
			$('footer p:last-child').text('© 2014 Wikitongues, Alle regte voorbehou')
			$('#name').attr('placeholder','Wat is jou naam?')
			$('#email').attr('placeholder','Wat is jou e-pos adres?')
			$('#message').attr('placeholder','Hoe lyk dinge?')
			$('#submit').attr('value','Stuur')
		} else if (activeLanguage === '日本語') {
			$('.slogan').text('世界中の言語を、世界中の人々に。')
			$('#summary').text("ウィキタングス（wikitongues）は、世界で話されている７０００言語と、その裏にある物語や想いへのアクセスを世界中の人々に提供することを目指すコミュニティ活動です。ボランティアのネットワークと協力し、多様性の真の意味を世界に提示しようと尽力しています。")
			$('.mobile-text').text("ウィキタングス（wikitongues）は、世界で話されている７０００言語と、その裏にある物語や想いへのアクセスを世界中の人々に提供することを目指すコミュニティ活動です。ボランティアのネットワークと協力し、多様性の真の意味を世界に提示しようと尽力しています。")
			$('#get-involved').text('あなたも参加しませんか。')
			$('.first').text('Made with international love by')
			$('.second').text(' and')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
			$('#name').attr('placeholder','名前はなんですか？')
			$('#email').attr('placeholder','メールアドレスはなんですか？')
			$('#message').attr('placeholder','あなたの最近の様子や興味関心を教えてください。')
			$('#submit').attr('value','提出する')
		} else if (activeLanguage === '한국어') {
			$('.slogan').text('모두를 위한 전 세계의 언어')
			$('#summary').text("Wikitongues는 세계 모든 사람들에게 이야기와 감성으로 7000개의 전세계 언어를 접할 수 있는 기회를 마련해줄 공동체 프로젝트입니다. 많은 자원 봉사자와 함께 우리는 세상에 다양성의 진정한 의미를 알리기 위해 최선을 다 할 것입니다.")
			$('.mobile-text').text("Wikitongues는 세계 모든 사람들에게 이야기와 감성으로 7000개의 전세계 언어를 접할 수 있는 기회를 마련해줄 공동체 프로젝트입니다. 많은 자원 봉사자와 함께 우리는 세상에 다양성의 진정한 의미를 알리기 위해 최선을 다 할 것입니다.")
			$('#get-involved').text('여러분도 함께 참여하세요')
			$('.first').text('국제 사랑으로 만들었습니다 ')
			$('.second').text(' +')
			$('footer p:last-child').text('2014년 Wikitongues. 모든권리는 저작권에게 있습니다.')
			$('#name').attr('placeholder','이름이 뭐예요?')
			$('#email').attr('placeholder','이메일 주소가 뭐에요?')
			$('#message').attr('placeholder','잘 지내세요?')
			$('#submit').attr('value','보내기')
		} else if (activeLanguage === 'isiZulu') {
			$('.slogan').text('Izilimi zawowonke umuntu emhlabeni jikelele.')
			$('#summary').text("Inhloso ye-Wikitongues ukwazisa abantu  ngezilimi ezingu-7000 ezikhulunywayo emhlabani jikelele - ngokufaka imizwa nezindaba ezihambelana nalezizilimi.Ukuze siphumelele sisebenzisana nabantu abazinikela mahhala (abavolon’thiyayo) ukuze sikhombise umhlaba ukusebenzisana kwabantu bezizwe ezahlukene.")
			$('.mobile-text').text("Inhloso ye-Wikitongues ukwazisa abantu  ngezilimi ezingu-7000 ezikhulunywayo emhlabani jikelele - ngokufaka imizwa nezindaba ezihambelana nalezizilimi.Ukuze siphumelele sisebenzisana nabantu abazinikela mahhala (abavolon’thiyayo) ukuze sikhombise umhlaba ukusebenzisana kwabantu bezizwe ezahlukene.")
			$('#get-involved').text('Woza nawe.')
			$('.first').text('Made with international love by')
			$('.second').text(' and')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
			$('#name').attr('placeholder','Ubani igama lakho?')
			$('#email').attr('placeholder','Sicela I-email yakho?')
			$('#message').attr('placeholder','Unjani namhlanje?')
			$('#submit').attr('value','Thumela.')
		} else if (activeLanguage === 'English') {
			$('.slogan').html('Every language in the world, <span class="no-wrap">for everyone.</span>')
			$('#summary').text('Wikitongues is a community effort to give all the world’s people access to all the world’s 7,000 languages — the stories and the feelings behind them. In coordination with a network of volunteers, we\'re dedicated to showing the world the true meaning of diversity.')
			$('.mobile-text').text('Wikitongues is a community effort to give all the world’s people access to all the world’s 7,000 languages — the stories and the feelings behind them. In coordination with a network of volunteers, we\'re dedicated to showing the world the true meaning of diversity.')
			$('#get-involved').text('Get involved.')
			$('.first').text('Made with international love by')
			$('.second').text('and')
			$('footer p:last-child').text('© 2014 Wikitongues, All Rights Reserved.')
			$('#name').attr('placeholder','What\'s your name?')
			$('#email').attr('placeholder','What\'s your email?')
			$('#message').attr('placeholder','What\'s up?')
			$('#submit').attr('value','Send')
		} else {
			console.log("Something's wrong")
		}
	})
}
