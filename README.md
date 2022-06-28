# Анимации и CSS

## [![Build status](https://ci.appveyor.com/api/projects/status/x5j7lnu6yo4ekuoo/branch/main?svg=true)](https://ci.appveyor.com/project/SergeiKostiaev/ahj-hw-collapse/branch/main)

### Collapse

#### Легенда

В рамках реализации большого портала вам необходимо сделать виджет "collapsible"-контейнеров, который может разворачиваться и сворачиваться.

#### Описание

Подобный виджет есть в рамках Bootstrap, но как мы с вами "знаем": "jQuery не нужен", поэтому вам нужно реализовать такой же виджет на чистом JS.

![](./pic/collapse.gif)

---

### Callback Chat\* (задача со звёздочкой)

#### Легенда

Вам поставили задачу сделать виджет обратной связи на портал компании. Необходимо это сделать. Ключевое тут, конечно же, анимации - поскольку всё остальное вы уже умеете.

#### Описание

Реализуйте показ и скрытие, как это отображено на картинке:

![](./pic/callback.gif)

Обратите внимание, что при нажатии на кнопку, сама кнопка тоже исчезает, а при скрытии формы - появляется.

Длительность анимации, использованная в оригинале, - 100ms, функция анимации - `linear`.

Организуйте код в виде виджета, готового к установке через базовый контейнер в html и инициализацию.

---
