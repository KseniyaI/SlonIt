## Базовые команды взаимодействия с Git
---
**1. Настройка Git**
<table border=1>
    <tr>
        <td>git config --global user.name "Ваше Имя"</td>
        <td>Устанавливает имя пользователя для коммитов</td>
    </tr>
    <tr>
        <td>git config --global user.email "Ваш email"</td>
        <td>Устанавливает email пользователя для коммитов</td>
    </tr>
	<tr>
        <td>git config --global core.editor "editor_name"</td>
        <td>Устанавливает текстовый редактор по умолчанию</td>
    </tr>
</table>

**2. Работа с репозиторием**
<table border=1>
    <tr>
        <td>git init</td>
        <td>Инициализация нового локального репозитория</td>
    </tr>
    <tr>
        <td>git clone URL</td>
        <td>Клонирование удалённого репозитория по URL</td>
    </tr>
	<tr>
        <td>git remote add origin URL</td>
        <td>Связывает локальный репозиторий с удалённым (например, на GitHub)</td>
    </tr>
</table>

**3. Отслеживание изменений**
<table border=1>
    <tr>
        <td>git status</td>
        <td>Показывает текущий статус репозитория: отслеживаемые/неотслеживаемые файлы, изменения и т. д.</td>
    </tr>
    <tr>
        <td>git add имя.файла</td>
        <td>Добавляет файл в индекс для коммита</td>
    </tr>
	<tr>
        <td>git add .</td>
        <td>Добавляет все изменения в текущей папке в индекс</td>
    </tr>
	<tr>
        <td>git commit -m "Сообщение коммита"</td>
        <td>Создаёт коммит с указанным сообщением</td>
    </tr>
	<tr>
        <td>git commit -a</td>
        <td>Коммит изменений в отслеживаемых файлах, без необходимости предварительно добавлять их в индекс с помощью git add</td>
    </tr>
</table>

**4. Доп.команды**
<table border=1>
    <tr>
        <td>git mv старое.имя новое.имя</td>
        <td>Меняет имя файла на новое</td>
    </tr>
    <tr>
        <td>git rm путь/к/файлу</td>
        <td>Удаляет файл и добавляет изменения в индекс</td>
    </tr>
	<tr>
        <td>git rm -r путь/к/папке</td>
        <td>Удаляет папку и добавляет изменения в индекс</td>
    </tr>
</table>

**5. Alias (Псевдоним - сокращённые имена для часто используемых команд)**
<table border=1>
    <tr>
        <td>git config --global alias.псевдоним 'команда'</td>
        <td>Длинная "команда" заменяется на короткий/удобный "псевдоним"</td>
    </tr>
    <tr>
        <td>git config --global --unset alias.псевдоним</td>
        <td>Удаляет алиас</td>
    </tr>
	<tr>
        <td>git config --global alias.псевдоним '!команда1; команда2'</td>
        <td>Алиас, состоящий из нескольких команд</td>
    </tr>
</table>


---

![](https://miro.medium.com/v2/resize:fit:1000/1*zw0bLFWkaAP2QPfhxkoDEA.png)

