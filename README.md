### Hexlet tests and linter status:
[![Actions Status](https://github.com/zyab1ik/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/zyab1ik/frontend-project-44/actions)

### Maintainability:
[![Maintainability](https://api.codeclimate.com/v1/badges/e5541c257e97d9a9d268/maintainability)](https://codeclimate.com/github/zyab1ik/frontend-project-44/maintainability)

### Test Coverage:
[![Test Coverage](https://api.codeclimate.com/v1/badges/e5541c257e97d9a9d268/test_coverage)](https://codeclimate.com/github/zyab1ik/frontend-project-44/test_coverage)

### Games

---
### Игра: "Проверка на чётность"
Необходимо реализовать игру "Проверка на чётность". Суть игры в следующем: пользователю показывается случайное число.
И ему нужно ответить yes, если число чётное, или no — если нечётное. В случае, если пользователь даст неверный ответ,
необходимо завершить игру и вывести сообщение:
``'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!``
В случае, если пользователь ввел верный ответ, нужно отобразить: ``Correct!`` и приступить к следующему числу.

Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:
``Congratulations, ${userName}!``
Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.

#### Реализация:
[![asciicast](https://asciinema.org/a/ldVPHZXu8NUqOkV3pvpQDFRNa.svg)](https://asciinema.org/a/ldVPHZXu8NUqOkV3pvpQDFRNa)

---
### Игра: "Калькулятор"
Необходимо реализовать игру "Калькулятор". Суть игры в следующем: пользователю показывается случайное математическое
выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.
Вывод должен получиться следующий:
```
brain-calc

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```
* Достаточно реализовать следующие операции: ``+, - и *``.
* Операции, как и числа, выбираются случайным образом.

В случае, если пользователь даст неверный ответ, необходимо вывести:
``Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!``

#### Реализация:
[![asciicast](https://asciinema.org/a/dLwiAzMQrbM9E8tnoPzZ8Uyvo.svg)](https://asciinema.org/a/dLwiAzMQrbM9E8tnoPzZ8Uyvo)
