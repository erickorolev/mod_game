/* Файл для модуля "Тест на подкаблучника".
 * Файл описывает то, что происходит после загрузки страницы до любых действий пользователя.
 * document.getElementById заключен в ready(), чтобы дождаться загрузки всех элементов DOM:
 * https://stackoverflow.com/questions/44104981/part-of-javascript-dont-work-in-joomla
 */

// Начинается отчет нумерации вопросов.
var number = 0;

// Начинается отсчет количества очков пользователя.
var scores = 0;

(function($){
    $(document).ready(function(){

        // При загрузке страницы скрывается кнопка "Далее"
        $("#next").hide();

        // В html вставляются значения из первого вопроса: текст и 3 изображения.
        document.getElementById("question").innerHTML = questions[number].text;
        document.getElementById("img_1").src = questions[number].answers[0].image;
        document.getElementById("img_2").src = questions[number].answers[1].image;
        document.getElementById("img_3").src = questions[number].answers[2].image;

    });
})(jQuery);