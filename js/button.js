// Файл для модуля "Тест на подкаблучника".
// Файл описывает последствия нажатия кнопки "Далее"
(function($){
    $(document).ready(function(){

        // Действия при нажатии кнопки "Далее"
        $("#next").click(function() {
            // Проверяется не закончились ли вопросы в массиве
            // Если вопросы еще есть
            if (number < questions.length) {
                // Скрывается абзац результата и кнопка
                $("#result, #next").hide();
                // Показывается абзац вопроса и 3 изображения
                $("#question, #img_1, #img_2, #img_3").show();
                // В html вставляются значения из следующего вопроса: текст и изображения.
                document.getElementById("question").innerHTML = questions[number].text;
                document.getElementById("img_1").src = questions[number].answers[0].image;
                document.getElementById("img_2").src = questions[number].answers[1].image;
                document.getElementById("img_3").src = questions[number].answers[2].image;
                // Если вопросы закончились
            } else {
                // Скрывается кнопка "Далее"
                $("#next").hide();
                // В абзац результата вставляется количество баллов пользователя / количество всех вопросов
                if (scores > 0) {
                    document.getElementById("result").innerHTML = "Вы подкаблучник.";
                } else {
                    document.getElementById("result").innerHTML = "Вы не подкаблучник.";
                }
            }
        });
    });
})(jQuery);