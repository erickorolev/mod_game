// Файл для модуля "Тест на подкаблучника".
// Файл описывает то, что происходит в результате нажатия пользователем на выбранное им изображение.
(function($){
        $(document).ready(function(){
			
		// Действия при нажатии первой картинки
		$("#img_1").click(function() {
			// Скрываются все картинки и абзац вопроса
			$("#img_1, #img_2, #img_3, #question").hide();
			// Показывается абзац результата и кнопка "Далее"
			$("#result, #next").show();
			// В абзац результата вставляется текст комментария
			document.getElementById("result").innerHTML = questions[number].answers[0].comment;
			// Пользователю назначаются баллы
			scores += questions[number].answers[0].point;
			// Прибавляется нумерация вопроса
			number ++;
		});

		// Тот же список действий при нажатии второй картинки
		$("#img_2").click(function() {
			$("#img_1, #img_2, #img_3, #question").hide();
			$("#result, #next").show();
			document.getElementById("result").innerHTML = questions[number].answers[1].comment;
			scores += questions[number].answers[1].point;
			number ++;
		});
  
		// Тот же список действий при нажатии третьей картинки
		$("#img_3").click(function() {
			$("#img_1, #img_2, #img_3, #question").hide();
			$("#result, #next").show();
			document.getElementById("result").innerHTML = questions[number].answers[2].comment;
			scores += questions[number].answers[2].point;
			number ++;
		});  
	});
})(jQuery);