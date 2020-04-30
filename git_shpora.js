cd c:/OpenServer/domains/estemplate

// Генерация ssh ключа
ssh-keygen -t rsa -C "Sutormin.Evgeniy@yandex.ru"

// Вызов инструментов
git gui&
gitk&

// Создание пустого репозитория
  git init


// Конфигурирование репозитория
  git config --global user.name "Sutormin Evgeniy"
  git config --global user.email "Sutormin.Evgeniy@yandex.ru"
  // Aктивировать хранилище учетных данных для всех Git-репозиториев
  git config --global credential.helper store // После активации хранилища, при первом выполнении git pull или git push нужно ввести имя пользователя и пароль, которые будут сохранены в ~/.git-credentials
  
  // Просмотр конфигурации
  git config --list
  git config --list --show-origin // показывает где заданы


// показывает статус файлов
  git status


// Добавление файлов в индексацию (index)
  // добавить все файлы
  git add .
  // добавить файл
  git add "ПУТЬ_ФАЙЛА"
  git add -p "ПУТЬ_ФАЙЛА" // git будет спрашивать по каждому изменению добавлять ли его (y,n,?,...)


// Переименование/перемещение файла
  git mv "СТАРЫЙ_ПУТЬ_ФАЙЛА" "НОВЫЙ_ПУТЬ_ФАЙЛА"


// Откат
  // Откат изменений
    // откат файла
    git checkout "ПУТЬ_ФАЙЛА" // к состоянию в index
    git checkout -- "ПУТЬ_ФАЙЛА" // тоже самое, но -- подтверждает что после него указан путь к файлу
    git checkout HEAD "ПУТЬ_ФАЙЛА" // к состоянию в текущему коммите
    git checkout "ХЭШ/ИМЯ_КАММИТА" "ПУТЬ_ФАЙЛА" // к указанному коммиту
    // откат всех файлов
    git checkout -f HEAD // к текущему коммиту
    git checkout -f // тоже самое
    git checkout -- .
    // удаление всех не отслеживаемых файлов
    git clean -df // удаление и деректорий
    git clean -dxf // удаление и указанных в .gitignore
    // откат всех изменений и сохранение их в архив
    git stash
    // возврат изменений из архива
    git stash pop

  // Удаление (index и working directory)
    // удаление файл
    git rm "ПУТЬ_ФАЙЛА"
    git rm -f "ПУТЬ_ФАЙЛА" // игнорирует предупреждение
    git rm --cached "ПУТЬ_ФАЙЛА" // удалит только из index но оставит в working directory
    // удаление папки
    git rm -r "ПУТЬ_ПАПКИ"  
    git rm -rf "ПУТЬ_ПАПКИ" // игнорирует предупреждение

  // Откат каммитов
    // (жёсткий) передвигает ветку на указанный каммит index и рабочая директория очищаются
    git reset --hard @~
    git reset --hard "ХЭШ_КАММИТА"
    git reset --hard ORIG_HEAD // отмена предыдущего отката
    // (мягкий) передвигает ветку на указанный каммит но index и рабочая директория остаются не очищенными
    git reset --soft @~
    git reset --soft "ХЭШ_КАММИТА"
    git reset --soft ORIG_HEAD // отмена предыдущего отката
    // (смешенный, по умолчанию) передвигает ветку на указанный каммит index очищается но рабочая директория остаётся не очищенной
    git reset --mixed @~
    git reset @~ // тоже самое
    git reset "ХЭШ_КАММИТА"
    git reset "ПУТЬ_ФАЙЛА"
    git reset HEAD "ПУТЬ_ФАЙЛА"
    git reset ORIG_HEAD // отмена предыдущего отката
  

// Создать коммит
  git commit // вызовит редактор
  git commit -m ИМЯ_КАММИТА
  // создать коммит плюс сохранить изменения (игнорирует новые файлы)
  git commit -am ИМЯ_КАММИТА // все файлы 
  git commit -m ИМЯ_КАММИТА ПУТЬ // указанный
  // коммит без проверки 
  git commit --no -verify -m ИМЯ_КАММИТА
  // переделать текущий коммит
  git commit --amend
  git commit --amend --no-edit
  // перезапись последнего откаченного каммита
  git commit -c ORIG_HEAD // c редактированием описания
  git commit -C ORIG_HEAD // без редактирования описания

// Переключение на другой каммит (отделённый HEAD, без переноса ветки)
  git checkout "ХЭШ_КАММИТА"


// Информация
  // Информация о коммите
    git show
    git show HEAD // тоже самое (текущая ветка)
    git show HEAD~ // прошлый коммит (колличество ~ сколько каммитов назад)
    git show HEAD~3 // другой вариант
    git show @~3 // другой вариант
    git show HEAD~3:"ПУТЬ_ФАЙЛА" // Посмотреть файл в указанном каммите
    git show :"ПУТЬ_ФАЙЛА" // Посмотреть файл в текущем каммите
    git show "ИМЯ_ВЕТКИ"

    git show --pretty=fuller
    git show --quite // без информации о изменениях

  // История коммитов (q = выход если большой список и тупит)
    git log
    git log "ИМЯ_ВЕТКИ"
    // более компактный вывод
    git log --oneline
    git log --graph --oneline --decorate --all
    git log --pretty = format: "%h - %an, %ar : %s"
    // с 05.02.16
    git log --since = 2016 - 02 - 05
    // за последние 2 недели
    git log --since = 2. weeks
    // последние 2 с полными изменениями
    git log -p - 2
    // каммиты с изменением файла
    git log "ПУТЬ_ФАЙЛА"
    git log -p "ПУТЬ_ФАЙЛА" // с указанием изменений

  // История файла построчно
    git blame "ПУТЬ_ФАЙЛА"
    git blame "ПУТЬ_ФАЙЛА" date=short

  // История коммитов записанная при переключение веток
    git reflog
    git log --oneline -g // тоже самое
    git reflog "ИМЯ_ВЕТКИ"
    git reflog --date=iso

  // Просмотр изменений
    // внесённые изменения в рабочую деррикторию во всех файлах (игнорирует новые/неотслеживаемые файлы)
    git diff // по сравнению с index
    git diff HEAD // по сравнению с текущим каммитом
    // внесённые изменения в рабочую деррикторию
    git diff "ПУТЬ_ФАЙЛА"
    // внесённые изменения в index во всех файлах
    git diff --staged
    git diff --cached
    // выводит только имена изменённых файлов
    git diff --name-only
    // показ отличий по словам
    git diff --word-diff
    // внесённые изменения в index
    git diff --staged "ПУТЬ_ФАЙЛА"
    // сравнение веток
    git diff "ИМЯ_ВЕТКИ1" "ИМЯ_ВЕТКИ2"
    git diff "ИМЯ_ВЕТКИ1".."ИМЯ_ВЕТКИ2" //тоже самое  
    git diff "ИМЯ_ВЕТКИ1"..."ИМЯ_ВЕТКИ2" // что изменилось во второй ветке за время ответвления от первой
    // сравнение каммитов
    git diff "ХЭШ_КАММИТА1" "ХЭШ_КАММИТА2"


// Создание ветки
  // без переключения на неё
  git branch "ИМЯ_ВЕТКИ"
  // создание новой ветки и переключение на нее
  git checkout -b "ИМЯ_ВЕТКИ"
  // cоздание ветки в указанном коммите
  git branch "ИМЯ_ВЕТКИ" "ХЭШ_КАММИТА"
  git branch "ИМЯ_ВЕТКИ" HEAD@{6} // HEAD@{6} ссылка на коммит из reflog (или дата)
  // создание новой ветки в указанном коммите и переключение на нее
  git checkout -b "ИМЯ_ВЕТКИ" "ХЭШ_КАММИТА"

  // cоздание/перенос ветки в указанный коммит
  git branch -f "ИМЯ_ВЕТКИ" "ХЭШ_КАММИТА"
  git branch -f "ИМЯ_ВЕТКИ" "ИМЯ_ДРУГОЙ_ВЕТКИ"
  git branch -f "ИМЯ_ВЕТКИ" ORIGN_HEAD // отмена переноса
  // перенос ветки в указанный коммит и переключение на нее
  git checkout -B "ИМЯ_ВЕТКИ" "ХЭШ_КАММИТА"

// переименование ветки
  git branch -m "СТАРОЕ_ИМЯ_ВЕТКИ" "НОВОЕ_ИМЯ_ВЕТКИ"

// удаление ветки
  git branch -d "ИМЯ_ВЕТКИ"
  git branch -D "ИМЯ_ВЕТКИ" // удаление не смерженой ветки (каммиты удаляются не сразу)

// переключение на другую ветку
  git checkout "ИМЯ_ВЕТКИ"
  git checkout @{-1} // переключение на предыдущую ветку
  git checkout - // тоже самое (но не везде работает)

// просмотр имеющихся веток
  git branch
  git branch -v // с последним коммитом
  git branch -l
  git branch -la


// объединение с другой веткой
  git merge "ИМЯ_ВЕТКИ"
  git merge "ИМЯ_ВЕТКИ" --no-commit // слияние без коммита
  // получение файла из нашей ветки при мерже (при конфликте)
  git checkout --ours "ПУТЬ_ФАЙЛА"
  // получение файла из второй ветки при мерже (при конфликте)
  git checkout --theirs "ПУТЬ_ФАЙЛА"
  // получение объединённого файла при мерже (при конфликте)
  git checkout --merge "ПУТЬ_ФАЙЛА"
  // завершить слияние после решения конфликтов
  git merge --continue
  git commit --no-edit

  (git config --global merge.tool kdiff3)
  (git mergetool)
  // установим kdiff3 - http://kdiff3.sourceforge.net/
  git config --global mergetool.kdiff3.cmd '"С:\\Program Files\\KDiff3\\kdiff3" $BASE $LOCAL $REMOTE -o $MERGED'

// отмена слияния веток
  git merge --abort
  git reset --merge // тожу самое
  git reset --hard // полная очистка

// закачать на гитхаб
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
  git clone https://github.com/sutorminevgeniy/shpors.git

// вызов помощи
  git help log




// Сокращения
  -a = --all
  -f = --force
  -l = --list
  -p = --patch
  -s = --short
  -am = --all -m