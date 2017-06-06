<?php

// Шаблон модуля "Тест на подкаблучника".
 
 defined('_JEXEC') or die; ?>

 <!-- Подключение javascript файлов. -->
<?php
$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/questions.js');

$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/start.js');

$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/select.js');

$document = JFactory::getDocument();
$document->addScript('/modules/mod_game/js/button.js');
?>
 
<!-- Абзац, куда будет вставляться вопрос. -->
<p id="question"></p>

<!-- Абзац, куда будет вставляться ссылки на изображения для выбора пользователя. -->
<p align="center"><img id="img_1" src="" style="padding: 5px;" /></p>

<p align="center"><img id="img_2" src="" style="padding: 5px;" /></p>

<p align="center"><img id="img_3" src="" style="padding: 5px;" /></p>

<!-- Абзац, куда будет вставляться комментарий в результате выбора пользователя, а по завершению игры итоговое колличество баллов. -->
<p id="result"></p>

<button id="next">Далее</button>

<!-- Далее следует часть, которая раскрывается при завершении игры: предложение подписаться на рассылку и форма подписки. -->
<p id="offer">Хотите узнать о себе больше? Подпишитесь на рассылку Школы бабника.</p>

<!-- Форма подписки на рассылку, предоставляемая сервисом  Subscribe.Ru. -->
<form id="subscribe" target="_top" action="http://subscribe.ru/member/quick" method="get">
	<input type="hidden" name="action" value="quick">
	<input type="hidden" name="src" value="list_rest.love.casanovaschool">
		<table border="0" cellspacing="0" cellpadding="2">
			<tr>
				<td align="center" valign="middle">
				<input type="text" class="input-small" name="email" size="18" placeholder="ваш e-mail" onFocus="this.value = '';return false;">
				<input  type="submit" value="Подписаться">
				</td>
			</tr>
		</table>
</form>              

