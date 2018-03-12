
git config --global user.name "Sutormin Evgeniy"
git config --global user.email "sutormin.evgeniy@yandex.ru"

git config --list

cd c:/OpenServer/domains/estemplate

git init

git status

git help log


// добавить все файлы
git add .
// добавить файл
git add ИМЯ_ФАЙЛА


// отмена индексации файла
git reset ИМЯ_ФАЙЛА
git reset HEAD ИМЯ_ФАЙЛА
// удалить файл
git rm ИМЯ_ФАЙЛА
git rm --cached ИМЯ_ФАЙЛА
// удалить папку с файлами
git rm -rf .ИМЯ_ПАПКИ

// переименование/перемещение файла
git mv СТАРОЕ_ИМЯ_ФАЙЛА НОВОЕ_ИМЯ_ФАЙЛА


// откат файла к коммиченной версии
git checkout -- .
git checkout -- ИМЯ_ФАЙЛА

// внесённые изменения в рабочую деррикторию во всех файлах
git diff
// внесённые изменения в рабочую деррикторию
git diff ИМЯ_ФАЙЛА 

// внесённые изменения в буфер во всех файлах
git diff --staged
// внесённые изменения в буфер
git diff --staged ИМЯ_ФАЙЛА 


// создать коммит
git commit -m ИМЯ_КАММИТА
git commit --no-verify -m "[PES-19] Lab report component"
// создать коммит плюс сохранить измененияъ
git commit -am ИМЯ_КАММИТА
// переделать коммит
git commit --amend

// история коммитов (q = выход елибольшой список и тупит)
git log
// более компактный вывод
git log --pretty=format:"%h - %an, %ar : %s"
// с 05.02.16
git log --since=2016-02-05
// за последние 2 недели
git log --since=2.weeks
// последние 2 с полными изменениями
git log -p -2


// создание новой ветки и переключение на нее
git checkout -b ИМЯ_ВЕТКИ
// без переключения на неё
git branch ИМЯ_ВЕТКИ

// переименование ветки
git branch -m СТАРОЕ_ИМЯ_ВЕТКИ НОВОЕ_ИМЯ_ВЕТКИ

// удаление ветки
git branch -d ИМЯ_ВЕТКИ

// переключение на другую ветку
git checkout ИМЯ_ВЕТКИ	

// просмотр имеющихся веток
git branch
git branch -l
git branch -la
// более подробный
git branch -v

// сравнение веток
git diff ИМЯ_ВЕТКИ1..ИМЯ_ВЕТКИ2

// объединение с другой веткой
(git config --global merge.tool kdiff3)
git merge ИМЯ_ВЕТКИ
(git mergetool)
// установим kdiff3 - http://kdiff3.sourceforge.net/
git config --global mergetool.kdiff3.cmd '"С:\\Program Files\\KDiff3\\kdiff3" $BASE $LOCAL $REMOTE -o $MERGED'

// отмена слияния веток
git merge --abort

// закачать на гитхаб
git remote add origin https://github.com/sutorminevgeniy/estemplate.git
git remote add origin https://github.com/sutorminevgeniy/joomla346.git
git remote add origin https://github.com/sutorminevgeniy/shpors.git
git push -u origin master

// смотреть имеющиеся репозитории
git remote
git remote -v

// обновить на гитхабе
git push

// обновить папку git на лакалке
// обновить файлы во всех ветках кроме текущей
git fetch
// обновить файлы в текущей ветке
git pull

// клонировать с гитхаба
git clone https://github.com/sutorminevgeniy/estemplate.git
git clone https://github.com/sutorminevgeniy/joomla346.git
git clone https://github.com/sutorminevgeniy/shpors.git