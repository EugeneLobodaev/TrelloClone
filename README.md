# Клон Trello от The Boys 👽

### Ну то парни? Сделаем это ?

<img src="https://cs12.pikabu.ru/post_img/2022/09/25/7/1664107033147571662.webp" width='550'>

#### Не забываем выполнить команду

``` shell
$ npm install
```

##### или

``` shell
$ yarn
```

## Что важно✋

#### Помните семантические теги?)

#### Если появляются `вопросы` (и гугл не сильно помогает), то не боимся и `спрашиваем`.

#### Линтер и husky настроены почти также как и в домашках с todo.

#### Для нейминга html классов мы используем `БЭМ`.

#### Некоторые стили и скрипты `уже подключены`, подробнее немного дальше.

#### Для написания стилей используем `SCSS`.

#### [Нейминг коммитов](https://www.conventionalcommits.org/ru/v1.0.0/).

#### Стили для компонентов подключаем `через JS`.

#### Файл `main.js`в папке `public` не трогаем.

#### Пользуемся `миксинами`! Один уже подготовлен со старта, его использовать `обязательно`, а вот что за оно описано дальше.

#### При стилизации компонентов `обязательно` используем SCSS `переменные`, а если подумал "_ооо для этого можно было бы создать переменную_", то не надо себе отказывать

Ведь чуть позже, у кого-то будет задание по подбору цветов и добавлению красоты.

## Как вообще выполнять таски ❓

#### От ветки `dev` создаем `feature` ветку

#### Столкнулись с `проблем`? Что то `не получается`? Что то `непонятно`? Сообщайте будем разбираться

#### Получилось? Супер!!! Делай PR (не зубудь lable `ready for review`) соей `feature` ветки в `dev`

## Структура проекта 👾

<details>
      <summary>
        public --
        <em>папка с статически элементами страницы</em>
      </summary>
      <ul>
        <li>index.html</li>
        <li>main.js</li>
        <li>
          <details>
            <summary>assets</summary>
            <ul>
              <li>icons</li>
              <li>images</li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
    <details>
      <summary>
        src 💩 --
        <em>a вот тут у нас и происходят все приколы</em>
      </summary>
      <ul>
        <li>
          <details>
            <summary>components 🦿</summary>
            <ul>
              <li>
                <details>
                  <summary>Компонент</summary>
                  <ul>
                    <li>style.scss</li>
                    <li>Компонент.js</li>
                    <li>
                      index.js --
                      <em>export компонента</em>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Компонент</summary>
                  <ul>
                    <li>style.scss</li>
                    <li>Компонент.js</li>
                    <li>
                      index.js --
                      <em>export компонента</em>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Компонент</summary>
                  <ul>
                    <li>style.scss</li>
                    <li>Компонент.js</li>
                    <li>
                      index.js --
                      <em>export компонента</em>
                    </li>
                  </ul>
                </details>
              </li>
              <li>. . .</li>
              <li>
                index.js --
                <em>реэкспорт компонентов в index</em>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>scripts ☠️</summary>
            <ul>
              <li>
                <details>
                  <summary>
                    services 🧠 --
                    <em>бизнес логика приложения</em>
                  </summary>
                  <ul>
                    <li>функцияВыполняющаяБизнесЛогику.js</li>
                    <li>функцияВыполняющаяБизнесЛогику.js</li>
                    <li>функцияВыполняющаяБизнесЛогику.js</li>
                    <li>. . .</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    utils 🙌
                    <em>утилиты приложения</em>
                  </summary>
                  <ul>
                    <li>
                      constants.js --
                      <em>константы используемые в приложении</em>
                    </li>
                    <li>. . .</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>scss 🤡</summary>
            <ul>
              <li>
                <details>
                  <summary>
                    components --
                    <em>стили для статических элементов на странице</em>
                    🦿
                  </summary>
                  <ul>
                    <li>_файлСтилейСтатическогоКомпонента.scss</li>
                    <li>_файлСтилейСтатическогоКомпонента.scss</li>
                    <li>_файлСтилейСтатическогоКомпонента.scss</li>
                    <li>_файлСтилейСтатическогоКомпонента.scss</li>
                    <li>_файлСтилейСтатическогоКомпонента.scss</li>
                    <li>. . .</li>
                    <li>
                      index.scss --
                      <em>группируем стили для статических элементов</em>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    config --
                    <em>конфиги стилей для страницы</em>
                  </summary>
                  <ul>
                    <li>
                      _config.scss --
                      <em>
                        общие стили для всех элементов страницы должны быть тут
                      </em>
                    </li>
                    <li>_mixins.scss</li>
                    <li>_reset.scss</li>
                    <li>
                      _variables.scss --
                      <em>файл с scss переменными</em>
                    </li>
                    <li>. . .</li>
                    <li>
                      index.scss --
                      <em>группируем конфигурацию стилей</em>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                index.scss --
                <em>
                  главный файл scss для статических элементов (импортируем сюда
                  стили)
                </em>
              </li>
            </ul>
          </details>
        </li>
        <li>
          app.js --
          <em>инициализации приложения</em>
        </li>
      </ul>
    </details>

#### .eslintrc.json `кофниг линтера`

#### .gitignore

#### .prettierrc.json `конфиг для форматирования кода`

#### package.json

#### vite.config.js `настройка сборщика`

## По скриптам проекта 🤖

#### Для того чтобы увидеть что вы сделали, да и просто при разработке

``` shell
$ npm run dev
```

или

``` shell
$ yarn dev
```

#### Перед коммитом

``` shell
$ npm run lint:fix
```

или

``` shell
$ yarn lint:fix
```

#### Для форматирования кода можете использовать

``` shell
$ npm run format
```

или

``` shell
$ yarn format
```

## Что тут есть со старта❓

##### _Напоминаю_

> Файл `main.js`в папке `public` не трогаем

### 1. Стили

#### Файл сброса стилей подключен

#### Есть уже готовые стили для контейнера

```scss
.container {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
}
```

Если забыли, то контейнер нужен для создания ограниченной области страницы, в которой размещается контент. Он помогает контролировать ширину и выравнивание элементов на странице.

#### Переменные

```scss
$primary-color: #6ce4cf;
$secondary-color: #7f7fcf;
$additional-color: #d5d5d5;

$border: 3px solid #000;
$border-radius: 10px;
```

Тут всё должно быть достаточно просто, и думаю это не нуждается в объяснении, но если вопросы есть

##### _Напоминаю_

> Если появляются `вопросы` (и гугл не сильно помогает), то не боимся и `спрашиваем`

#### Миксины

> Пользуемся `миксинами`! Один уже подготовлен со страта, его использовать `обязательно`

##### Сам миксин

`Первым ` параметром миксин принимает значение, которое задает `выравнивание по основной оси` flex контейнера, а `втрой` по оси перпендикулярной главной оси.

```scss
@mixin flexWrap($mainAxis: flex-start, $crossAxis: flex-start) {
  display: flex;
  justify-content: $mainAxis;
  align-items: $crossAxis;
}
```

Тут всё просто --- это миксин, который нужен для выравнивания элементов в flex контейнере

##### Как пользользоваться ?

Допустим есть вот такая html разметка

```html
<div class="content">
  <div class="content__item"></div>
  <div class="content__item"></div>
  <div class="content__item"></div>
  <div class="content__item"></div>
  <div class="content__item"></div>
</div>
```

Вот, условно, стили для этого блока

```scss
.content {
  &__item {
    height: 100px;
    width: 100px;
    background-color: #fff000;
    margin: 10px;
  }
}
```

Чтобы сделать этот блок flex контейнером и выровнять элементы в нем используем миксин

```scss
.content {
  @include flexWrap(center, center);
  &__item {
    height: 100px;
    width: 100px;
    background-color: #fff000;
    margin: 10px;
  }
}
```

В этом примере, используя миксин, элементы выравниваются по центру основной и побочной осей.

### 2. Скрипты

#### Файл /src/components/index.js

Используем для реэкспорта компонентов. При создании компоненты создаем для него отдельную папку В которой все файлы этого компонента + файл index.js, который экспортирует сам компонент. Ну и затем, соответственно, реэкспортируем его в файле `/src/components/index.js`

```javascript
// ./src/components/index.js
import { createMyComponent } from './components/index.js'
```

##### Для использования компонентов просто импортируем его в файле app.js

```javascript
// app.js
import { createMyComponent } from './components/index.js'
```

#### app.js

Этот файл служит для инициализации компонентов проекта.
Например:

```javascript
// app.js
import {
  createMyComponent,
  setHandlersMyComponent,
} from './components/index.js'

const main = () => {
  someElement.append(createMyComponent())
  setHandlersMyComponent()
}
```

### constants.js

Тут тоже всё просто, в файле будут хранится константы приложения.
Например

```javascript
export const TASKS_STORAGE_KEY = 'tasks'
```

## P.S.

#### Всегда сообщайте, если есть какие-то предложения по улудшению, или что что-то не получается.

#### Ну что.... попробуем сделать этот диплом?

## Убираем слабонервных от экранов

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br><br>
<br>
<br>
<br>
<br>
<br>

![photo_4_2023-09-04_06-18-22](https://github.com/DmitriyLasuta/trello/assets/66123004/6abc7444-d805-4e9d-82a8-de46908e4c9f)

![photo_3_2023-09-04_06-18-22](https://github.com/DmitriyLasuta/trello/assets/66123004/3f802886-7de4-4ea4-9db7-50552bbd2257)

<br>
<br>
<br>
<br>
<br>
<br>

![photo_6_2023-09-04_06-18-22](https://github.com/DmitriyLasuta/trello/assets/66123004/049074cb-80a5-428e-930b-1225c13edecd)
<br>
<br>
<br>
<br><br>
<br>

![photo_5_2023-09-04_06-18-22](https://github.com/DmitriyLasuta/trello/assets/66123004/1d3769b1-fd5f-41de-b14c-0180b3a9fa5c)
<br>
<br>
<br>
<br><br>
<br>
<br>
<br>
<br>


![photo_1_2023-09-04_06-18-22](https://github.com/DmitriyLasuta/trello/assets/66123004/a956a6c3-9a7b-4155-8c70-7523dec1a767)

https://github.com/DmitriyLasuta/trello/assets/66123004/ef89fa4b-c19d-4c0e-8b27-53975f1dd674

https://github.com/DmitriyLasuta/trello/assets/66123004/8b014dab-aad8-4da6-b73e-f453ee324b37




