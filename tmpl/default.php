<?php

/*
 * Шаблон модуля "Тест на подкаблучника".
 */

defined('_JEXEC') or die; ?>

<?php
// Подключение javascript файлов
$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/questions.js');

$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/start.js');

$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/select.js');

$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/button.js');
?>

<!-- Абзац, куда будет вставляться вопрос пользователю. -->
<p id="question"></p>

<!-- Абзац, куда будет вставляться ссылки на изображения для выбора пользователя. -->
<p align="center"><img id="img_1" src="" style="padding: 5px;" /></p>

<p align="center"><img id="img_2" src="" style="padding: 5px;" /></p>

<p align="center"><img id="img_3" src="" style="padding: 5px;" /></p>

<!-- Абзац, куда будет вставляться комментарий в результате выбора пользователя, а по завершению игру итоговое колличество баллов. -->
<p id="result"></p>

<button id="next">Далее</button>

