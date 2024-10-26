var sqlite3 = require('sqlite3');

// Инициализация БД
var db = new sqlite3.Database('./database.sqlite');
console.log('Connected db:', db)
	
// Получить все записи из таблицы stocks
db.all("SELECT * FROM stocks", [], (err, stocks) => {
	// Если записей нет, создать таблицу stocks с указанными атрибутами
	if (!stocks) db.run("CREATE TABLE stocks (id INT, name TEXT, brend TEXT, sku TEXT, price INT, count INT)")
	else data = stocks
	createdAppHook()
});

// Синтаксис добавления записи в таблицу stocks
//db.run(`INSERT INTO stocks (id, name, brend, sku, price, count) VALUES ("${id}", "${name}", "${brend}", "${sku}", "${price}", "${count}");`)
// Синтаксис удаления записи из stocks по указанному условию
// db.run(`DELETE FROM stocks WHERE id=${this.id};`)

// Функция которая вызывается, после получения данных из БД
function createdAppHook () {
	
}