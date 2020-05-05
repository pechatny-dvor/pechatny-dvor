ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [46.943674, 142.729307],
		zoom: 17,
		controls: []
	}, {
		searchControlProvider: 'yandex#search'
	})
	myMap.controls.add('zoomControl');
	myMap.behaviors.disable('scrollZoom');

	// Создаём макет содержимого.
	MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),


		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Ул. Пограничная д. 65, Южно-Сахалинск, 693006',
			balloonContent: ''
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'images/yandex_map_icon.png',
			// Размеры метки.
			iconImageSize: [103, 72],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-50, -70]
		});

	myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemarkWithContent);

});