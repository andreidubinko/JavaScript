let request = new XMLHttpRequest();
// 1) Создаем объект запроса

request.open("GET", 'server.php', true, login, password);

// 2) Настроили наш запрос (какой метод , кому отправлять , и другие опции)

request.send()
//3) Отправка запроса
request.status // page not found 404 and etc
request.statusText // текстовое описание состояние сервера
request.responseText // Например данные успешно записаны в базу данных
request.readyState //  статус отправки 5 значений , главное DONE
