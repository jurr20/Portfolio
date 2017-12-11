//ya.city
	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation;


		var prtnm = geolocation.city;
		//prtnm = "Аскиз";
		$('#f-yacity').val(prtnm);

		var region = geolocation.region;
		$('#f-yaregion').val(region);

		var country = geolocation.country;
		$('#f-yacountry').val(country);
		
		if(region != "Московская область" && region != "Москва" && region != "Москва и Московская область") {
			
			$('.content section:last-child').css('display','none');
			$('#fp-nav ul li:last-child').css('display','none');
		}
		
		switch (prtnm) {
		
		case 'Абаза': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Абакан': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Аскиз': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Балыкса': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Бельтырский': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Бея': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Бискамжа': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Копьево': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Саяногорск': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Таштып': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Черемушки': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Черногорск': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Шира': 
		              $('.geo_in').html('в Абакане');
		               break
		case 'Анадырь': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Беринговский': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Ванкарем': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Лаврентия': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Мыс Шмидта': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Певек': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Провидения': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Усть-Белая': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Эгвекинот': 
		              $('.geo_in').html('в Анадыре');
		               break
		case 'Архангельск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Березник': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Вельск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Верхняя Тойма': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Волошка': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Вычегодский': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Емца': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Илеза': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Ильинско-Подомское': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Каргополь': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Карпогоры': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Кодино': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Коноша': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Коряжма': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Котлас': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Красноборск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Лешуконское': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Мезень': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Новодвинск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Няндома': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Онега': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Пинега': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Плесецк': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Северодвинск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Сольвычегодск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Холмогоры': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Шенкурск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Яренск': 
		              $('.geo_in').html('в Архангельске');
		               break
		case 'Астрахань': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Ахтубинск': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Верхний Баскунчак': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Володарский': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Енотаевка': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Икряное': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Камызяк': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Капустин Яр': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Красный Яр': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Лиман': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Началово': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Харабали': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Черный Яр': 
		              $('.geo_in').html('в Астрахани');
		               break
		case 'Акутиха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Алейск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Алтайский': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Баево': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Барнаул': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Белово': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Белокуриха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Белоярск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Бийск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Благовещенск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Боровлянка': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Бурла': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Бурсоль': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Волчиха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Горняк': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Ельцовка': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Залесово': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Заринск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Змеиногорск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Камень-на-Оби': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Ключи': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Красногорское': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Краснощеково': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Кулунда': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Кытманово': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Мамонтово': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Новичиха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Новоалтайск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Петропавловское': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Поспелиха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Ребриха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Родино': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Рубцовск': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Славгород': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Смоленское': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Солонешное': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Солтон': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Староаллейское': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Табуны': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Тальменка': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Топчиха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Троицкое': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Тюменцево': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Угловское': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Усть-Калманка': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Усть-Чарышская Пристань': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Хабары': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Целинное': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Чарышское': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Шелаболиха': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Шипуново': 
		              $('.geo_in').html('в Барнауле');
		               break
		case 'Алексеевка': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Белгород': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Борисовка': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Валуйки': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Вейделевка': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Волоконовка': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Грайворон': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Губкин': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Ивня': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Короча': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Красногвардейское': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Новый Оскол': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Ракитное': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Ровеньки': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Старый Оскол': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Строитель': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Чернянка': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Шебекино': 
		              $('.geo_in').html('в Белгороде');
		               break
		case 'Биробиджан': 
		              $('.geo_in').html('в Биробиджане');
		               break
		case 'Бира': 
		              $('.geo_in').html('в Биробиджане');
		               break
		case 'Биракан': 
		              $('.geo_in').html('в Биробиджане');
		               break
		case 'Волочаевка Вторая': 
		              $('.geo_in').html('в Биробиджане');
		               break
		case 'Известковый': 
		              $('.geo_in').html('в Биробиджане');
		               break
		case 'Облучье': 
		              $('.geo_in').html('в Биробиджане');
		               break
		case 'Смидович': 
		              $('.geo_in').html('в Биробиджане');
		               break
		case 'Айгунь': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Архара': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Белогорск': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Благовещенск (Амурская обл.)': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Бурея': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Возжаевка': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Екатеринославка': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Ерофей Павлович': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Завитинск': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Зея': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Златоустовск': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Ивановка': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Коболдо': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Магдагачи': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Новобурейский': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Поярково': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Райчихинск': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Ромны': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Свободный': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Серышево': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Сковородино': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Стойба': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Тамбовка': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Тында': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Шимановск': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Экимчан': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Ядрино': 
		              $('.geo_in').html('в Благовещенске');
		               break
		case 'Алтухово': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Белая Березка': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Белые Берега': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Большое Полпино': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Брянск': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Бытошь': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Выгоничи': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Вышков': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Гордеевка': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Дятьково': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Жирятино': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Жуковка': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Злынка': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Ивот': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Карачев': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Клетня': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Климово': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Клинцы': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Кокаревка': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Комаричи': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Красная Гора': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Локоть': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Мглин': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Навля': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Новозыбков': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Погар': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Почеп': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Ржаница': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Рогнедино': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Севск': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Стародуб': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Суземка': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Сураж': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Трубчевск': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Унеча': 
		              $('.geo_in').html('в Брянске');
		               break
		case 'Анциферово': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Батецкий': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Большая Вишера': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Боровичи': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Валдай': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Волот': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Деманск': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Зарубино': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Кресцы': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Любытино': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Малая Вишера': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Марево': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Мошенское': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Новгород': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Окуловка': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Парфино': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Пестово': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Поддорье': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Сольцы': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Старая Русса': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Хвойное': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Холм': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Чудово': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Шимск': 
		              $('.geo_in').html('в Великом новгороде');
		               break
		case 'Анучино': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Арсеньев': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Артем': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Большой Камень': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Валентин': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Владивосток': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Высокогорск': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Горные Ключи': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Горный': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Дальнегорск': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Дальнереченск': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Кавалерово': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Камень-Рыболов': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Лазо': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Лесозаводск': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Лучегорск': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Находка': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Новопокровка': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Ольга': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Партизанск': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Пограничный': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Покровка': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Русский': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Самарга': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Славянка': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Спасск-Дальний': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Терней': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Уссурийск': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Фокино': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Хасан': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Хороль': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Черниговка': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Чугуевка': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Яковлевка': 
		              $('.geo_in').html('в Владивостоке');
		               break
		case 'Алагир': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Ардон': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Беслан': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Бурон': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Владикавказ': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Дигора': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Моздок': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Орджоникидзе': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Чикола': 
		              $('.geo_in').html('в Владикавказе');
		               break
		case 'Александров': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Андреево': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Анопино': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Бавлены': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Балакирево': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Боголюбово': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Великодворский': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Вербовский': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Владимир': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Вязники': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Городищи': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Гороховец': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Гусевский': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Гусь Хрустальный': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Золотково': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Иванищи': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Камешково': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Карабаново': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Киржач': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Ковров': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Кольчугино': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Красная Горбатка': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Меленки': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Муром': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Петушки': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Покров': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Собинка': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Судогда': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Суздаль': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Юрьев-Польский': 
		              $('.geo_in').html('в Владимире');
		               break
		case 'Алексеевская': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Алущевск': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Волгоград': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Волжский': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Городище': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Дубовка': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Елань': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Жирновск': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Иловля': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Калач-на-Дону': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Камышин': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Кириллов': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Клетский': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Котельниково': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Котово': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Кумылженская': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Ленинск': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Михайловка': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Нехаевский': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Николаевск': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Новоаннинский': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Новониколаевский': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Ольховка': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Палласовка': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Рудня': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Светлый Яр': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Серафимович': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Средняя Ахтуба': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Сталинград': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Старая Полтавка': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Суровикино': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Урюпинск': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Фролово': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Чернышковский': 
		              $('.geo_in').html('в Волгограде');
		               break
		case 'Красный Ткач': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Бабаево': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Белозерск': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Великий Устюг': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Верховажье': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Вожега': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Вологда': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Вохтога': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Вытегра': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Грязовец': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Кадников': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Кадуй': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Кичменгский Городок': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Липин Бор': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Никольск': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Нюксеница': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Сокол': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Сямжа': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Тарногский Городок': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Тотьма': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Устюжна': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Харовск': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Чагода': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Череповец': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Шексна': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Шуйское': 
		              $('.geo_in').html('в Вологде');
		               break
		case 'Анна': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Бобров': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Богучар': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Борисоглебск': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Бутурлиновка': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Верхний Мамон': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Верхняя Хава': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Воробьевка': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Воронеж': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Грибановский': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Давыдовка': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Елань-Коленовский': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Калач': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Кантемировка': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Лиски': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Нижнедевицк': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Новая Усмань': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Новохоперск': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Ольховатка': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Острогожск': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Панино': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Поворино': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Подгоренский': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Рамонь': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Репьевка': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Россошь': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Семилуки': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Таловая': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Терновка': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Хохольский': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Эртиль': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Нововоронеж': 
		              $('.geo_in').html('в Воронеже');
		               break
		case 'Акташ': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Горно-Алтайск': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Кош-Агач': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Онгудай': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Турочак': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Усть-Кан': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Усть-Кокса': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Усть-Улаган': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Шебалино': 
		              $('.geo_in').html('в Горно-алтайске');
		               break
		case 'Аргун': 
		              $('.geo_in').html('в Грозном');
		               break
		case 'Грозный': 
		              $('.geo_in').html('в Грозном');
		               break
		case 'Гудермез': 
		              $('.geo_in').html('в Грозном');
		               break
		case 'Наурская': 
		              $('.geo_in').html('в Грозном');
		               break
		case 'Ножай-Юрт': 
		              $('.geo_in').html('в Грозном');
		               break
		case 'Урус-Мартан': 
		              $('.geo_in').html('в Грозном');
		               break
		case 'Шали': 
		              $('.geo_in').html('в Грозном');
		               break
		case 'Алапаевск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Алтынай': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Арамиль': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Арти': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Асбест': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Ачит': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Байкалово': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Басьяновский': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Белоярский': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Богданович': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Буланаш': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Верхний Тагил': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Верхняя Пышма': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Верхняя Салда': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Верхняя Синячиха': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Верхняя Сысерть': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Верхняя Тура': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Верхотурье': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Висим': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Волчанск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Воронцовка': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Гари': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Дегтярск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Екатеринбург': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Ертарский': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Заводоуспенское': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Зыряновский': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Зюзельский': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Ивдель': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Изумруд': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Ирбит': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Ис': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Каменск-Уральский': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Камышлов': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Карпинск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Карпунинский': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Качканар': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Кировград': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Краснотурьинск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Красноуральск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Красноуфимск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Кушва': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Лесной': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Невьянск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Нижние Серги': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Нижний Тагил': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Нижняя Салда': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Нижняя Тура': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Новая Ляля': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Новоуральск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Оус': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Первоуральск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Полевской': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Пышма': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Ревда': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Реж': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Свердловск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Североуральск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Серов': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Сосьва': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Среднеуральск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Сухой Лог': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Сысерть': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Таборы': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Тавда': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Талица': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Тугулым': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Туринск': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Туринская Слобода': 
		              $('.geo_in').html('в Екатеринбурге');
		               break
		case 'Родники': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Архиповка': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Верхний Ландех': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Вичуга': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Гаврилов Посад': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Долматовский': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Дуляпино': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Заволжск': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Заречный': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Иваново': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Иваньковский': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Ильинское-Хованское': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Каминский': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Кинешма': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Комсомольск': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Кохма': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Лух': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Палех': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Пестяки': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Приволжск': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Пучеж': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Савино': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Сокольское': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Тейково': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Фурманов': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Шуя': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Южа': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Юрьевец': 
		              $('.geo_in').html('в Иваново');
		               break
		case 'Алнаши': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Балезино': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Вавож': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Воткинск': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Глазов': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Грахово': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Дебесы': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Игра': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Ижевск': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Кама': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Камбарка': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Каракулино': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Кез': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Кизнер': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Киясово': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Можга': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Сарапул': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Селты': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Сюмси': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Ува': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Устинов': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Шаркан': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Юкаменское': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Якшур-Бодья': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Яр': 
		              $('.geo_in').html('в Ижевске');
		               break
		case 'Волжск': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Дубовский': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Звенигово': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Йошкар-Ола': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Килемары': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Козьмодемьянск': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Куженер': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Мари-Турек': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Медведево': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Морки': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Новый Торьял': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Оршанка': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Параньга': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Сернур': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Советский': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Юрино': 
		              $('.geo_in').html('в Йошкар-оле');
		               break
		case 'Алексеевск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Алзамай': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Алыгжер': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Ангарск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Артемовский': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Атагай': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Байкал': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Байкальск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Балаганск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Баяндай': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Бирюсинск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Бодайбо': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Большая Речка': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Большой Луг': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Бохан': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Братск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Видим': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Витимский': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Вихоревка': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Еланцы': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Ербогачен': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Железногорск-Илимский': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Жигалово': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Забитуй': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Залари': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Звездный': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Зима': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Иркутск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Казачинское': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Качуг': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Квиток': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Киренск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Куйтун': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Култук': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Кутулик': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Мама': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Нижнеудинск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Оса': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Саянск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Слюдянка': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Тайшет': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Тулун': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Усолье-Сибирское': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Усть-Илимск': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Усть-Кут': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Усть-Ордынский': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Усть-Уда': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Черемхово': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Чунский': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Шелехов': 
		              $('.geo_in').html('в Иркутске');
		               break
		case 'Агрыз': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Азнакаево': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Аксубаево': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Актюбинский': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Алексеевское': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Альметьевск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Апастово': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Арск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Бавлы': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Базарные Матаки': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Балтаси': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Богатые Сабы': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Брежнев': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Бугульма': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Буинск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Васильево': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Верхний Услон': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Высокая Гора': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Дербешкинский': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Елабуга': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Заинск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Зеленодольск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Казань': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Камское Устье': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Карабаш': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Кукмод': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Кукмор': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Лаишево': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Лениногорск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Мамадыш': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Менделеевск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Мензелинск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Муслюмово': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Набережные Челны': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Нижнекамск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Новошешминск': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Нурлат': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Пестрецы': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Рыбная Слобода': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Сарманово': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Старое Дрожжаное': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Тетюши': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Чистополь': 
		              $('.geo_in').html('в Казани');
		               break
		case 'Калининград': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Багратионовск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Балтийск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Гвардейск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Гурьевск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Гусев': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Зеленоградск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Знаменск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Кёнигсберг': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Кенисберг': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Мамоново': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Неман': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Нестеров': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Озерск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Полесск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Правдинск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Светлогорск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Светлый': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Славск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Черняховск': 
		              $('.geo_in').html('в Калининграде');
		               break
		case 'Бабынино': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Балабаново': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Барятино': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Белоусово': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Бетлица': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Боровск': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Дугна': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Дудоровский': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Думиничи': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Еленский': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Жиздра': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Износки': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Калуга': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Козельск': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Кондрово': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Людиново': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Малоярославец': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Медынь': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Мещовск': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Мосальск': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Обнинск': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Перемышль': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Спас-Деменск': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Сухиничи': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Таруса': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Ульяново': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Ферзиково': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Хвастовичи': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Юхнов': 
		              $('.geo_in').html('в Калуге');
		               break
		case 'Анжеро-Судженск': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Барзас': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Березовский': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Грамотеино': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Ижморский': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Итатский': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Калтан': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Кедровка': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Кемерово': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Киселевск': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Крапивинский': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Ленинск-Кузнецкий': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Мариинск': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Междуреченск': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Мыски': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Новокузнецк': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Осинники': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Прокопьевск': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Промышленная': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Тайга': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Таштагол': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Тисуль': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Топки': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Тяжинский': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Юрга': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Яшкино': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Яя': 
		              $('.geo_in').html('в Кемерово');
		               break
		case 'Восточный': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Киров': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Арбаж': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Аркуль': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Белая Холуница': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Богородское': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Боровой': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Верхошижемье': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Вятские Поляны': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Зуевка': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Каринторф': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Кикнур': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Кильмезь': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Кирово-Чепецк': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Кирс': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Кобра': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Котельнич': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Кумены': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Ленинское': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Луза': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Малмыж': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Мураши': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Нагорск': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Нема': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Нововятск': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Нолинск': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Омутнинск': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Опарино': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Оричи': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Пижанка': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Подосиновец': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Санчурск': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Свеча': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Слободской': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Советск': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Суна': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Тужа': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Уни': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Уржум': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Фаленки': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Халтурин': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Юрья': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Яранск': 
		              $('.geo_in').html('в Кирове');
		               break
		case 'Антропово': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Боговарово': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Буй': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Волгореченск': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Галич': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Горчуха': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Зебляки': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Кадый': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Кологрив': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Кострома': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Красное-на-Волге': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Макарьев': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Мантурово': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Нерехта': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Нея': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Островское': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Павино': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Парфентьево': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Поназырево': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Солигалич': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Судиславль': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Сусанино': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Чухлома': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Шарья': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Шемятино': 
		              $('.geo_in').html('в Костроме');
		               break
		case 'Абинск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Абрау-Дюрсо': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Анапа': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Апшеронск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Армавир': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Архипо-Осиповка': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Афипский': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Ахтырский': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Ачуево': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Белореченск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Верхнебаканский': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Выселки': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Геленджик': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Горячий Ключ': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Джубга': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Динская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Ейск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Ильский': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Кабардинка': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Калинино': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Калининская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Каневская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Кореновск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Красноармейская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Краснодар': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Кропоткин': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Крыловская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Крымск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Курганинск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Кущевская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Лабинск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Лениградская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Мостовской': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Новороссийск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Отрадная': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Павловская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Приморско-Ахтарск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Северская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Славянск-на-Кубани': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Сочи': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Староминская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Старощербиновская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Тбилисская': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Темрюк': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Тимашевск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Тихорецк': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Туапсе': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Усть-Лабинск': 
		              $('.geo_in').html('в Краснодаре');
		               break
		case 'Бородино': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Абан': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Артемовск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Ачинск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Байкит': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Балахта': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Боготол': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Боград': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Богучаны': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Большая Мурта': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Большой Улуй': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Ванавара': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Верхнеимбатск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Горячегорск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Дзержинское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Дивногорск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Диксон': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Дудинка': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Емельяново': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Енисейск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Ермаковское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Заозерный': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Игарка': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Идринское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Иланский': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Ирбейское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Канск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Каратузское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Караул': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Кежма': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Кодинск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Козулька': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Краснотуранск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Красноярск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Курагино': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Лесосибирск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Минусинск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Мотыгино': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Назарово': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Нижний Ингаш': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Новоселово': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Норильск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Партизанское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Пировское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Северо-Енисейский': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Сосновоборск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Тасеево': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Тура': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Туруханск': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Тюхтет': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Ужур': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Усть-Авам': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Уяр': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Хатанга': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Шалинское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Шарыпово': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Шушенское': 
		              $('.geo_in').html('в Красноярске');
		               break
		case 'Варгаши': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Глядянское': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Далматово': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Каргаполье': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Катайск': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Кетово': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Курган': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Куртамыш': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Лебяжье': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Макушино': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Мишкино': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Мокроусово': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Петухово': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Половинное': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Сафакулево': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Шадринск': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Шатрово': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Шумиха': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Щучье': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Юргамыш': 
		              $('.geo_in').html('в Кургане');
		               break
		case 'Железногорск': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Альменево': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Белая': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Большое Солдатское': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Глушково': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Горшечное': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Дмитриев-Льговский': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Золотухино': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Касторное': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Конышевка': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Коренево': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Курск': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Курчатов': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Кшенский': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Льгов': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Медвенка': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Обоянь': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Поныри': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Пристень': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Прямицыно': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Рыльск': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Суджа': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Тим': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Фатеж': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Хомутовка': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Черемисиново': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Щигры': 
		              $('.geo_in').html('в Курске');
		               break
		case 'Ак-Довурак': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Бай Хаак': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Кызыл': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Самагалтай': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Сарыг-Сеп': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Суть-Холь': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Тоора-Хем': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Туран': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Тээли': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Хову-Аксы': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Чадан': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Шагонар': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Эрзин': 
		              $('.geo_in').html('в Кызыле');
		               break
		case 'Грязи': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Данхов': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Доброе': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Долгоруково': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Елец': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Задонск': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Измалково': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Казинка': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Лебедянь': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Лев Толстой': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Липецк': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Тербуны': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Усмань': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Хлевное': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Чаплыгин': 
		              $('.geo_in').html('в Липецке');
		               break
		case 'Атка': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Балыгычан': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Большевик': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Иульитин': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Кадыкчан': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Магадан': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Ола': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Омонск': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Омсукчан': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Палатка': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Сеймчан': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Синегорье': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Сусуман': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Усть-Омчуг': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Эвенск': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Ягодное': 
		              $('.geo_in').html('в Магадане');
		               break
		case 'Малгобек': 
		              $('.geo_in').html('в Магасе');
		               break
		case 'Назрань': 
		              $('.geo_in').html('в Магасе');
		               break
		case 'Орджоникидзевская': 
		              $('.geo_in').html('в Магасе');
		               break
		case 'Адыгейск': 
		              $('.geo_in').html('в Майкопе');
		               break
		case 'Майкоп': 
		              $('.geo_in').html('в Майкопе');
		               break
		case 'Гиагинская': 
		              $('.geo_in').html('в Майкопе');
		               break
		case 'Каменномостский': 
		              $('.geo_in').html('в Майкопе');
		               break
		case 'Тульский': 
		              $('.geo_in').html('в Майкопе');
		               break
		case 'Шовгеновский': 
		              $('.geo_in').html('в Майкопе');
		               break
		case 'Агвали': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Акуша': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Ахты': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Ачису': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Бабаюрт': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Бежта': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Ботлих': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Буйнакск': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Вачи': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Гергебиль': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Гуниб': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Дагестанские Огни': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Дербент': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Дылым': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Ершовка': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Избербаш': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Карабудахкент': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Карата': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Каспийск': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Касумкент': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Кизилюрт': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Кизляр': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Кочубей': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Кумух': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Курах': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Магарамкент': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Маджалис': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Махачкала': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Мехельта': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Новолакское': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Рутул': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Советское': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Тарумовка': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Терекли-Мектеб': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Тлярата': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Тпиг': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Уркарах': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Хасавюрт': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Хив': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Хунзах': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Цуриб': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Южно-Сухокумск': 
		              $('.geo_in').html('в Махачкале');
		               break
		case 'Москва': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Абрамцево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Алабино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Апрелевка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Архангельское': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Ашитково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Бакшеево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Балашиха': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Барыбино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Белоомут': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Белые Столбы': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Бронницы': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Быково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Валуево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Вербилки': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Верея': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Видное': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Внуково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Вождь Пролетариата': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Волоколамск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Вороново': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Воскресенск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Востряково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Высоковск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Голицино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Деденево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Дедовск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Дзержинский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Дмитров': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Долгопрудный': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Домодедово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Дорохово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Дрезна': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Дубки': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Дубна': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Егорьевск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Железнодорожный': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Жилево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Жуковский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Загорск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Загорянский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Запрудная': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Зарайск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Звенигород': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Зеленоград': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Ивантеевка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Икша': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Ильинский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Истра': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Кашира': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Керва': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Климовск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Клин': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Клязьма': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Кожино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Кокошкино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Коломна': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Колюбакино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Королев': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Косино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Котельники': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Красково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Красногорск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Краснозаводск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Краснознаменск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Крюково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Кубинка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Купавна': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Куровское': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Лесной Городок': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Ликино-Дулево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Лобня': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Лопатинский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Лосино-Петровский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Лотошино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Лукино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Луховицы': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Лыткарино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Львовский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Люберцы': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Малаховка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Михайловское': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Михнево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Можайск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Монино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Муханово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Мытищи': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Нарофоминск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Нахабино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Некрасовка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Немчиновка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Новобратцевский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Новоподрезково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Ногинск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Обухово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Одинцово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Ожерелье': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Озеры': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Октябрьский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Опалиха': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Орехово-Зуево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Павловский Посад': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Первомайский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Пески': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Пироговский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Подольск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Полушкино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Правдинский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Привокзальный': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Пролетарский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Протвино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Пушкино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Пущино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Радовицкий': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Раменское': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Реутов': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Решетниково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Рошаль': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Рублево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Руза': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Салтыковка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Северный': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Сергиев Посад': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Серебряные Пруды': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Серпухов': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Солнечногорск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Солнцево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Софрино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Старая Купавна': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Старбеево': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Ступино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Сходня': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Талдом': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Текстильщик': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Темпы': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Тишково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Томилино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Троицк': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Туголесский Бор': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Тучково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Уваровка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Удельная': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Успенское': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Фирсановка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Фосфоритный': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Фрязино': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Фряново': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Химки': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Хорлово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Хотьково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Черкизово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Черноголовка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Черусти': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Чехов': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Шарапово': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Шатура': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Шатурторф': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Шаховская': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Шереметьевский': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Щелково': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Щербинка': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Электрогорск': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Электросталь': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Электроугли': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Яхрома': 
		              $('.geo_in').html('в Москве');
		               break
		case 'Апатиты': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Африканда': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Верхнетуломский': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Заозерск': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Зареченск': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Зашеек': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Зеленоборский': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Кандалакша': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Кильдинстрой': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Ковдор': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Кола': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Конда': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Мончегорск': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Мурманск': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Мурмаши': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Никель': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Оленегорск': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Полярные Зори': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Полярный': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Североморск': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Снежногорск': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Умба': 
		              $('.geo_in').html('в Мурманске');
		               break
		case 'Баксан': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Майский': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Нальчик': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Нарткала': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Прохладный': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Терек': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Тырныауз': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Чегем-Первый': 
		              $('.geo_in').html('в Нальчике');
		               break
		case 'Амдерма': 
		              $('.geo_in').html('в Нарьян-маре');
		               break
		case 'Нарьян-Мар': 
		              $('.geo_in').html('в Нарьян-маре');
		               break
		case 'Арзамас': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Арья': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Балахна': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Богородск': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Большереченск': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Большое Болдино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Большое Козино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Большое Мурашкино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Большое Пикино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Бор': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Бутурлино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Вад': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Варнавино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Васильсурск': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Вахтан': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Вача': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Велетьма': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Ветлуга': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Виля': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Вознесенское': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Володарск': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Воротынец': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Ворсма': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Воскресенское': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Выездное': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Выкса': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Гагино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Гидроторф': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Горбатов': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Горбатовка': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Городец': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Горький': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Дальнее Константиново': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Дзержинск': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Дивеево': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Досчатое': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Заволжье': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Катунки': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Керженец': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Княгинино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Ковернино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Красные Баки': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Кстово': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Кулебаки': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Лукоянов': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Лысково': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Навашино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Нижний Новгород': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Павлово': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Первомайск': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Перевоз': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Пильна': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Починки': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Саров': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Сергач': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Сеченово': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Сосновское': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Спасское': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Тонкино': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Тоншаево': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Уразовка': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Урень': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Чкаловск': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Шаранга': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Шатки': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Шахунья': 
		              $('.geo_in').html('в Нижнем новгороде');
		               break
		case 'Баган': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Барабинск': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Бердск': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Биаза': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Болотное': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Венгерово': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Довольное': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Завьялово': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Искитим': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Карасук': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Каргат': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Колывань': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Краснозерское': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Крутиха': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Куйбышев': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Купино': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Кыштовка': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Маслянино': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Михайловский': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Мошково': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Новосибирск': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Ордынское': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Северное': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Сузун': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Татарск': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Тогучин': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Убинское': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Усть-Тарка': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Чаны': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Черепаново': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Чистоозерное': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Чулым': 
		              $('.geo_in').html('в Новосибирске');
		               break
		case 'Береговой': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Большеречье': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Большие Уки': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Горьковское': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Знаменское': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Исилькуль': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Калачинск': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Колосовка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Кормиловка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Крутинка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Любинский': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Марьяновка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Муромцево': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Называевск': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Нижняя Омка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Нововаршавка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Одесское': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Оконешниково': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Омск': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Павлоградка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Полтавка': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Русская Поляна': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Саргатское': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Седельниково': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Таврическое': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Тара': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Тевриз': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Тюкалинск': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Усть-Ишим': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Черлак': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Шербакуль': 
		              $('.geo_in').html('в Омске');
		               break
		case 'Болхов': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Верховье': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Глазуновка': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Дмитровск-Орловский': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Долгое': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Залегощь': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Змиевка': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Колпны': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Красная Заря': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Кромы': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Ливны': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Малоархангельск': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Мценск': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Нарышкино': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Новосиль': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Орел': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Покровское': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Сосково': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Тросна': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Хомутово': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Хотынец': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Шаблыкино': 
		              $('.geo_in').html('в Орле');
		               break
		case 'Абдулино': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Адамовка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Айдырлинский': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Акбулак': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Аккермановка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Асекеево': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Беляевка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Бугуруслан': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Бузулук': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Гай': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Грачевка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Домбаровский': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Дубенский': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Илек': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Ириклинский': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Кувандык': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Курманаевка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Матвеевка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Медногорск': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Новоорск': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Новосергиевка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Новотроицк': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Октябрьское': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Оренбург': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Орск': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Переволоцкий': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Пономаревка': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Саракташ': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Соль-Илецк': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Сорочинск': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Ташла': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Тоцкое': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Тюльган': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Шарлык': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Энергетик': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Ясный': 
		              $('.geo_in').html('в Оренбурге');
		               break
		case 'Башмаково': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Беднодемьяновск': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Беково': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Белинский': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Бессоновка': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Вадинск': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Верхозим': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Евлашево': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Земетчино': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Золотаревка': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Исса': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Каменка': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Колышлей': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Кондоль': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Кузнецк': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Лопатино': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Малая Сердоба': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Мокшан': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Наровчат': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Неверкино': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Нижний Ломов': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Пачелма': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Пенза': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Русский Камешкир': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Сердобск': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Сура': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Тамала': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Шемышейка': 
		              $('.geo_in').html('в Пензе');
		               break
		case 'Барда': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Березники': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Большая Соснова': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Верещагино': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Гайны': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Горнозаводск': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Гремячинск': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Губаха': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Добрянка': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Елово': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Зюкайка': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Карагай': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Керчевский': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Кизел': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Коса': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Кочево': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Красновишерск': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Краснокамск': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Кудымкар': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Куеда': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Кунгур': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Лысьва': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Ныроб': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Нытва': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Орда': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Оханск': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Очер': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Пермь': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Соликамск': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Суксун': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Уинское': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Усолье': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Усть-Кишерть': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Чайковский': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Частые': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Чердынь': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Чернореченский': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Чернушка': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Чусовой': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Юрла': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Юсьва': 
		              $('.geo_in').html('в Перми');
		               break
		case 'Амбарный': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Беломорск': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Валаам': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Вирандозеро': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Гирвас': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Деревянка': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Идель': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Импилахти': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Калевала': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Кемь': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Кестеньга': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Кондопога': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Костомукша': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Лахденпохья': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Лоухи': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Медвежьегорск': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Муезерский': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Олонец': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Петрозаводск': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Питкяранта': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Повенец': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Пряжа': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Пудож': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Сегежа': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Сортавала': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Софпорог': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Суоярви': 
		              $('.geo_in').html('в Петрозаводске');
		               break
		case 'Атласово': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Аянка': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Большерецк': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Вилючинск': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Елизово': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Ильпырский': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Каменское': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Кировский': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Крапивная': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Мильково': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Никольское': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Озерновский': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Оссора': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Палана': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Парень': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Пахачи': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Петропавловск-Камчатский': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Тигиль': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Тиличики': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Усть-Большерецк': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Усть-Камчатск': 
		              $('.geo_in').html('в Петропавловске-камчатском');
		               break
		case 'Бежаницы': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Великие Луки': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Гдов': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Дедовичи': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Дно': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Заплюсье': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Идрица': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Красногородское': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Кунья': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Локня': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Невель': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Новоржев': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Новосокольники': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Опочка': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Остров': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Палкино': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Печоры': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Плюсса': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Порхов': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Псков': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Пустошка': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Пушкинские Горы': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Пыталово': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Себеж': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Струги-Красные': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Усвяты': 
		              $('.geo_in').html('в Пскове');
		               break
		case 'Азов': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Аксай': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Алмазный': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Аютинск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Багаевский': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Батайск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Белая Калитва': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Боковская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Большая Мартыновка': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Вешенская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Волгодонск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Восход': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Гигант': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Горняцкий': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Гуково': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Донецк': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Донской': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Дубовское': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Егорлыкская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Жирнов': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Заветное': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Заводской': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Зверево': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Зерноград': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Зимовники': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Кагальницкая': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Казанская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Каменоломни': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Каменск-Шахтинский': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Кашары': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Коксовый': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Константиновск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Красный Сулин': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Куйбышево': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Матвеев Курган': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Мигулинская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Миллерово': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Милютинская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Морозовск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Новочеркасск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Новошахтинск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Обливская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Орловский': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Песчанокопское': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Пролетарск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Ремонтное': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Родионово-Несветайская': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Ростов-на-Дону': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Сальск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Семикаракорск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Таганрог': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Тарасовский': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Тацинский': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Усть-Донецкий': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Целина': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Цимлянск': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Чалтырь': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Чертково': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Шахты': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Шолоховский': 
		              $('.geo_in').html('в Ростове-на-дону');
		               break
		case 'Александро-Невский': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Гусь Железный': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Елатьма': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Ермишь': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Захарово': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Кадом': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Касимов': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Кораблино': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Милославское': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Михайлов': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Пителино': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Пронск': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Путятино': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Рыбное': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Ряжск': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Рязань': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Сапожок': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Сараи': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Сасово': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Скопин': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Спас-Клепики': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Спасск-Рязанский': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Старожилово': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Ухолово': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Чучково': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Шацк': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Шилово': 
		              $('.geo_in').html('в Рязани');
		               break
		case 'Аксарка': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Губкинский': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Казым-Мыс': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Красноселькуп': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Лабытнанги': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Мужи': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Муравленко': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Надым': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Новый Уренгой': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Ноябрьск': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Салехард': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Тазовский': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Тарко-Сале': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Юрибей': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Яр-Сале': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Пуровск': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Тарко': 
		              $('.geo_in').html('в Салехарде');
		               break
		case 'Безенчук': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Богатое': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Богатырь': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Большая Глущица': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Большая Черниговка': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Борское': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Жигулевск': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Зольное': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Исаклы': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Камышла': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Кинель': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Кинель-Черкасы': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Клявлино': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Кошки': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Красноармейское': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Нефтегорск': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Новокуйбышевск': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Октябрьск': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Отрадный': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Пестравка': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Похвистнево': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Приволжье': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Самара': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Сургут (Самарская обл.)': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Сызрань': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Тольятти': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Хворостянка': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Чапаевск': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Челно-Вершины': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Шентала': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Шигоны': 
		              $('.geo_in').html('в Самаре');
		               break
		case 'Санкт-Петербург': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Александровская': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Бокситогорск': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Большая Ижора': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Будогощь': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Вознесенье': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Волосово': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Волхов': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Всеволожск': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Выборг': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Вырица': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Высоцк': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Гатчина': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Дружная Горка': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Дубровка': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Ефимовский': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Зеленогорск': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Ивангород': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Каменногорск': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Кикерино': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Кингисепп': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Кириши': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Кировск': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Кобринское': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Колпино': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Коммунар': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Кронштадт': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Лисий Нос': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Лодейное Поле': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Ломоносов': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Луга': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Павловск': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Парголово': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Петродворец': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Пикалёво': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Подпорожье': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Приозерск': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Пушкин': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Сестрорецк': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Сланцы': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Сосновый Бор': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Тихвин': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Тосно': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Шлиссельбург': 
		              $('.geo_in').html('в Санкт-петербурге');
		               break
		case 'Ардатов': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Атюрьево': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Атяшево': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Большие Березники': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Большое Игнатово': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Выша': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Ельники': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Зубова Поляна': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Инсар': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Кадошкино': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Кемля': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Ковылкино': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Кочкурово': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Краснослободск': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Лямбирь': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Ромоданово': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Рузаевка': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Саранск': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Старое Шайгово': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Темников': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Теньгушево': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Торбеево': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Чамзинка': 
		              $('.geo_in').html('в Саранске');
		               break
		case 'Красноармейск': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Александров Гай': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Аркадак': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Аткарск': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Базарный Карабулак': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Балаково': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Балашов': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Балтай': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Возрождение': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Вольск': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Дергачи': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Духовницкое': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Екатериновка': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Ершов': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Калининск': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Каменский': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Красный Кут': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Лысые Горы': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Маркс': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Мокроус': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Новоузенск': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Новые Бурасы': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Озинки': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Перелюб': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Петровск': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Питерка': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Пугачев': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Ровное': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Ртищево': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Самойловка': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Саратов': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Степное': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Татищево': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Турки': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Хвалынск': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Энгельс': 
		              $('.geo_in').html('в Саратове');
		               break
		case 'Велиж': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Верхнеднепровский': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Ворга': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Вязьма': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Гагарин': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Глинка': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Голынки': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Демидов': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Десногорск': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Дорогобуж': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Духовщина': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Екимовичи': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Ельня': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Ершичи': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Издешково': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Кардымово': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Красный': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Монастырщина': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Новодугино': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Починок': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Рославль': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Сафоново': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Смоленск': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Сычевка': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Угра': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Хиславичи': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Холм-Жирковский': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Шумячи': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Ярцево': 
		              $('.geo_in').html('в Смоленске');
		               break
		case 'Михайловск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Александровское': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Арзгир': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Благодарный': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Буденновск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Георгиевск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Дивное': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Донское': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Ессентуки': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Железноводск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Зеленокумск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Изобильный': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Иноземцево': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Ипатово': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Кисловодск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Кочубеевское': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Курсавка': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Левокумское': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Минеральные Воды': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Невинномысск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Нефтекумск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Новоалександровск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Новоалександровская': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Новопавловск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Новоселицкое': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Пятигорск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Светлоград': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Солнечнодольск': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Ставрополь': 
		              $('.geo_in').html('в Ставрополе');
		               break
		case 'Абезь': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Айкино': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Верхняя Инта': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Визинга': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Водный': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Вожаель': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Воркута': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Вуктыл': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Гешарт': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Елецкий': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Емва': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Заполярный': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Ижма': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Инта': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Ираель': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Каджером': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Кажым': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Кожым': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Койгородок': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Корткерос': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Кослан': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Объячево': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Печора': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Сосногорск': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Сыктывкар': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Троицко-Печерск': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Усинск': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Усогорск': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Усть-Кулом': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Усть-Цильма': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Ухта': 
		              $('.geo_in').html('в Сыктывкаре');
		               break
		case 'Бондари': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Гавриловка Вторая': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Жердевка': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Знаменка': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Инжавино': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Кирсанов': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Котовск': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Мичуринск': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Мордово': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Моршанск': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Мучкапский': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Петровское': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Пичаево': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Рассказово': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Ржакса': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Староюрьево': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Тамбов': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Токаревка': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Уварово': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Умет': 
		              $('.geo_in').html('в Тамбове');
		               break
		case 'Андреаполь': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Бежецк': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Белый': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Белый Городок': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Березайка': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Бологое': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Васильевский Мох': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Выползово': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Вышний Волочек': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Жарковский': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Западная Двина': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Заречье': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Зубцов': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Изоплит': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Калашниково': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Калинин': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Калязин': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Кашин': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Кесова Гора': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Кимры': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Конаково': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Красный Холм': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Кувшиново': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Лесное': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Лихославль': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Максатиха': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Молоково': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Нелидово': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Оленино': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Осташков': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Пено': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Рамешки': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Ржев': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Сандово': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Селижарово': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Сонково': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Спирово': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Старица': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Тверь': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Торжок': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Торопец': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Удомля': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Фирово': 
		              $('.geo_in').html('в Твери');
		               break
		case 'Асино': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Бакчар': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Батурино': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Зырянское': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Итатка': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Каргасок': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Катайга': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Кожевниково': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Колпашево': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Кривошеино': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Мельниково': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Молчаново': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Парабель': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Первомайское': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Подгорное': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Северск': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Стрежевой': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Томск': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Тымск': 
		              $('.geo_in').html('в Томске');
		               break
		case 'Агеево': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Алексин': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Арсеньево': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Барсуки': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Бегичевский': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Белев': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Богородицк': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Болохово': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Велегож': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Венев': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Волово': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Горелки': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Епифань': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Ефремов': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Заокский': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Казановка': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Кимовск': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Киреевск': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Куркино': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Ленинский': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Новомосковск': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Одоев': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Плавск': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Суворов': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Тула': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Узловая': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Щекино': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Ясногорск': 
		              $('.geo_in').html('в Туле');
		               break
		case 'Абатский': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Армизонское': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Аромашево': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Бердюжье': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Большое Сорокино': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Вагай': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Викулово': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Винзили': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Голышманово': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Заводопетровский': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Заводоуковск': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Исетское': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Ишим': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Казанское': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Нижняя Тавда': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Омутинский': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Сладково': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Тобольск': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Тюмень': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Уват': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Упорово': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Ялуторовск': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Ярково': 
		              $('.geo_in').html('в Тюмени');
		               break
		case 'Бабушкин': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Багдарин': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Баргузин': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Баянгол': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Бичура': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Выдрино': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Гусиное Озеро': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Гусиноозерск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Заиграево': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Закаменск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Иволгинск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Илька': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Кабанск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Каменск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Кижинга': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Курумкан': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Кырен': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Кяхта': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Монды': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Мухоршибирь': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Нижнеангарск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Орлик': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Петропавловка': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Романовка': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Северобайкальск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Селенгинск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Сосново-Озерское': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Таксимо': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Турунтаево': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Улан-Удэ': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Хоринск': 
		              $('.geo_in').html('в Улан-удэ');
		               break
		case 'Базарный Сызган': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Барыш': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Большое Нагаткино': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Вешкайма': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Глотовка': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Димитровград': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Игнатовка': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Измайлово': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Инза': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Ишеевка': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Канадей': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Карсун': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Кузоватово': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Майна': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Новая Малыкла': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Новоспасское': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Павловка': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Радищево': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Сенгилей': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Старая Кулатка': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Старая Майна': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Сурское': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Тереньга': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Ульяновск': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Чердаклы': 
		              $('.geo_in').html('в Ульяновске');
		               break
		case 'Аксаково': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Амзя': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Аскино': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Баймак': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Бакалы': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Белебей': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Белорецк': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Бижбуляк': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Бирск': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Большеустьикинское': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Бураево': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Верхнеяркеево': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Верхние Киги': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Верхние Татышлы': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Верхний Авзян': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Давлеканово': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Дуван': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Дюртюли': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Ермекеево': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Ермолаево': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Зилаир': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Зирган': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Иглино': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Инзер': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Исянгулово': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Ишимбай': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Кананикольское': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Кандры': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Караидель': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Караидельский': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Киргиз-Мияки': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Красноусольский': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Кумертау': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Кушнаренково': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Малояз': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Мелеуз': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Месягутово': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Мраково': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Нефтекамск': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Раевский': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Салават': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Сибай': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Старобалтачево': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Старосубхангулово': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Стерлибашево': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Стерлитамак': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Туймазы': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Уфа': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Учалы': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Федоровка': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Чекмагуш': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Чишмы': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Шаран': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Янаул': 
		              $('.geo_in').html('в Уфе');
		               break
		case 'Амурск': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Аян': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Березовый': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Бикин': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Болонь': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Ванино': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Высокогорный': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Вяземский': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Гурское': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Дормидонтовка': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Заветы Ильича': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Иннокентьевка': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Комсомольск-на-Амуре': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Николаевск-на-Амуре': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Охотск': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Переяславка': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Советская Гавань': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Софийск': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Тугур': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Хабаровск': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Чегдомын': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Чумикан': 
		              $('.geo_in').html('в Хабаровске');
		               break
		case 'Белый Яр': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Излучинск': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Когалым': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Кондинское': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Ларьяк': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Мегион': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Нефтеюганск': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Нижневартовск': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Нягань': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Радужный': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Сургут': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Унъюган': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Урай': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Ханты-Мансийск': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Аган': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Игрим': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Лангепас': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Лянтор': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Покачи': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Приобье': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Пыть-Ях': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Югорск': 
		              $('.geo_in').html('в Ханты-мансийске');
		               break
		case 'Алатырь': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Аликово': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Батырева': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Вурнары': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Ибреси': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Канаш': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Киря': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Комсомольское': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Красные Четаи': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Кугеси': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Мариинский Посад': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Моргауши': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Новочебоксарск': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Порецкое': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Урмары': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Цивильск': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Чебоксары': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Шемурша': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Шумерля': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Ядрин': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Яльчики': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Янтиково': 
		              $('.geo_in').html('в Чебоксарах');
		               break
		case 'Агаповка': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Аргаяш': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Аша': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Бакал': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Бреды': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Варна': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Верхнеуральск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Верхний Уфалей': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Еманжелинск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Златоуст': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Карталы': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Касли': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Катав-Ивановск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Копейск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Коркино': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Кунашак': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Куса': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Кыштым': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Магнитогорск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Миасс': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Пласт': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Сатка': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Сим': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Снежинск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Трехгорный': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Увельский': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Уйское': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Усть-Катав': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Фершампенуаз': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Чебаркуль': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Челябинск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Чесма': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Южно-Уральск': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Юрюзань': 
		              $('.geo_in').html('в Челябинске');
		               break
		case 'Домбай': 
		              $('.geo_in').html('в Черкесске');
		               break
		case 'Карачаевск': 
		              $('.geo_in').html('в Черкесске');
		               break
		case 'Преградная': 
		              $('.geo_in').html('в Черкесске');
		               break
		case 'Теберда': 
		              $('.geo_in').html('в Черкесске');
		               break
		case 'Усть-Джегута': 
		              $('.geo_in').html('в Черкесске');
		               break
		case 'Хабез': 
		              $('.geo_in').html('в Черкесске');
		               break
		case 'Черкесск': 
		              $('.geo_in').html('в Черкесске');
		               break
		case 'Агинское': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Аксеново-Зиловское': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Акша': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Александровский Завод': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Амазар': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Арбагар': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Атамановка': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Балей': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Борзя': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Букачача': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Газимурский Завод': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Давенда': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Дарасун': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Дровяная': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Дульдурга': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Жиндо': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Забайкальск': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Итака': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Калга': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Карымское': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Кличка': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Ключевский': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Кокуй': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Краснокаменск': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Красный Чикой': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Кыра': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Моготуй': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Могоча': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Нерчинск': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Нерчинский Завод': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Нижний Часучей': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Оловянная': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Петровск-Забайкальский': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Приаргунск': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Сретенск': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Тупик': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Улеты': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Хилок': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Чара': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Чернышевск': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Чита': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Шелопугино': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Шилка': 
		              $('.geo_in').html('в Чите');
		               break
		case 'Аршань': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Каспийский': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Комсомольский': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Малые Дербеты': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Приютное': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Утта': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Цаган-Аман': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Элиста': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Юста': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Яшалта': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Яшкуль': 
		              $('.geo_in').html('в Элисте');
		               break
		case 'Александровск-Сахалинский': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Анбэцу': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Анива': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Бошняково': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Быков': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Вахрушев': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Взморье': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Гастелло': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Долинск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Катангли': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Корсаков': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Курильск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Макаров': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Невельск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Ноглики': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Оха': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Поронайск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Северо-Курильск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Смирных': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Томари': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Тымовское': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Углегорск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Холмск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Шахтерск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Южно-Курильск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Южно-Сахалинск': 
		              $('.geo_in').html('в Южно-сахалинске');
		               break
		case 'Мирный': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Абый': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Алдан': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Амга': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Батагай': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Бердигестях': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Беркакит': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Бестях': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Борогонцы': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Верхневилюйск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Верхнеколымск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Верхоянск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Вилюйск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Витим': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Власово': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Жиганск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Зырянка': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Кангалассы': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Канкунский': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Ленск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Майя': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Менкеря': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Нерюнгри': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Нычалах': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Нюрба': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Олекминск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Покровск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Сангар': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Саскылах': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Среднеколымск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Сунтар': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Тикси': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Усть-Мая': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Усть-Нера': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Хандыга': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Хонуу': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Черский': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Чокурдах': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Чурапча': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Якутск': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Нелькан': 
		              $('.geo_in').html('в Якутске');
		               break
		case 'Андропов': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Берендеево': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Большое Село': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Борисоглебский': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Брейтово': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Бурмакино': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Варегово': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Волга': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Гаврилов Ям': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Данилов': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Любим': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Мышкино': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Некрасовское': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Новый Некоуз': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Переславль-Залесский': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Пошехонье-Володарск': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Ростов': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Рыбинск': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Тутаев': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Углич': 
		              $('.geo_in').html('в Ярославле');
		               break
		case 'Ярославль': 
		              $('.geo_in').html('в Ярославле');
		               break


		  default:
		  	$('.geo_in').html('по всей России');
		    
		}
	}


	