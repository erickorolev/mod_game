// Файл для модуля "Тест на подкаблучника".
// Описываются инструкции при нажатии кнопки "Далее".
(function($){
    $(document).ready(function(){
  
		// Действия при нажатии кнопки "Далее"
		$("#next").click(function() {
			// Проверяется не закончились ли вопросы в массиве
			// Если вопросы еще есть
			if (number < questions.length) {
				// Скрывается абзац результата и кнопка "Далее"
				$("#result, #next").hide();
				// Показывается абзац вопроса и 3 изображения
				$("#question, #img_1, #img_2, #img_3").show();
				// В соответствующие абзацы вставляются значения из следующего вопроса: текст и изображения.
				document.getElementById("question").innerHTML = questions[number].text;
				document.getElementById("img_1").src = questions[number].answers[0].image;
				document.getElementById("img_2").src = questions[number].answers[1].image;
				document.getElementById("img_3").src = questions[number].answers[2].image;
			// Если вопросы закончились
			} else {
				// Скрывается кнопка "Далее"
				$("#next").hide();
				// В абзац результата вставляется количество баллов пользователя / количество всех вопросов
				document.getElementById("result").innerHTML = "Ваш счет: " + scores + "/" + questions.length;
				// Раскрывается абзац с предложением подписки и сама форма подписки на рассылку.
				$("#offer, #subscribe").show();
			}
		});   
	});
})(jQuery);