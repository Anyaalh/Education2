<! DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <title>Виселица!</title>
 <body>
  <h1>Виселица!</h1>

  <script>
 var words = [
 "программа",
 "макака",
 "прекрасный",
 "оладушек",
 "мама",
 "игра",
 "настоящий",
 "любовь",
 "здание",
 "молодость",
 "висельница",
 "дом",
 "уют",
 "кот",
 "слово",
 "интерес",
 "жизнь",
 "море",
 "солнце",
 "обезьяна",
 "кролик",
 "красота",
 "мозг",
 "йод",
 "ошибка",
 "сок",
 "персик",
 "банан",
 "молоко",
 "йогурт",
 "дочь"
 ];

 var word = words[Math.floor(Math.random() * words.length)];

 var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
 }
 var remainingLetters = word.length;
 var times = 0;
 var loose = 21;

 while (remainingLetters > 0 && times < 20) {
times++;
loose--;
 alert("Осталось попыток: " + loose + ". Загаданное слово: " + answerArray.join(" "));
 var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
 guess = guess.toLowerCase();
 if (guess === null) {
 break;
 } else if (guess.length !== 1) {
 alert("Пожалуйста, введите одиночную букву.");
 } else {

 for (var j = 0; j < word.length; j++) {
 if (word[j] === guess && answerArray[j] === "_") {
 answerArray[j] = guess;
 remainingLetters--;
 } 
 }
 }
 }

if (times >= 20) {
    alert("Упс, Вы проиграли.");
}
 else {
    alert(answerArray.join(" "));
 alert("Отлично! Было загадано слово " + word);
 }
 </script>
</body>
</html>