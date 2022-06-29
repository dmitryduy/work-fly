## Перед началом

```
git remote add upstream https://github.com/dmitryduy/work-fly.git
git checkout master
git pull upstream master
git checkout название_вашей_ветки
git merge master
npm i
```



## Структура проекта
* Каждая компонента должна иметь свою папку
* Весь набор технологий (README, tsx, styled-components, unit-тесты и т.д.) реализуется в той же папке компоненты, в которой она находится.
```
├── components/                  — Реакт компоненты
|   ├── Component/               — Компонента
    |   ├── Component.constants/ — Константы для компоненты
    |   |    ├── index.ts        
    |   ├── Component.i18n/      —  Переводы
    |   |    ├── ru.ts           
    |   |    ├── en.ts           
    |   |    └── ...
    |   ├── Component.hooks/     — Хуки для компоненты
    |   |    ├── useUpdate.ts    
    |   |    └── ...
    |   ├── Component.styles/    — Стили
    |   |    ├── index.ts        
    |   ├── Component.tests/     — unit-тесты для компоненты
    |   |    ├── index.ts        
    |   ├── Component.typings/   — Интерфейсами для компоненты
    |   |    ├── index.ts        
    |   ├── Component.utils/     — Хелперы для компоненты
    |   |    ├── firstUtil.ts    
    |   |    └── ...
    |   ├── Component.tsx        — Компонента
    |   ├── Component.md         — README для компоненты
├── hooks/                       — Глобальные хуками
├── ui/                          — Переиспользуемые компоненты
|   ├── Component/               — Реакт компонента
    |   |    └── ...             — Вся структура как для обычной компоненты
├── routes/                      — Роуты приложения
├── pages/                       — Страницы приложения
|   ├── LoginPage.tsx            
|   └── ...
├── store/                       — Стор редакса
|   ├── index.ts                 — Файл стора
    ├── slices/                  — Слайсы
    |   ├── slice/               
    |   |   ├── slice.ts         
    |   |   ├── slice.typings.ts — Интерфейсы для слайса
    |   └── ...  
|   ├── rootSlice.ts             — Рутовый слайс
├── utils/                       — Глобальные утилиты
|   ├── firstUtil.ts             
|   └── ...        
├── providers/                   — Провайдеры
|   ├── ThemeProvider.tsx        
|   └── ...        
├── docs/                        — Документация
|   ├── docs.md               
|   └── ...  
├── declare/                     — Декларацаии интерфейсов
|   ├── react.d.ts               
|   └── ...      
├── styles/                      — Глобальные css стили
|   ├── style.css               
|   └── ...
```

## Документация
### Утилиты
* [Переводы](https://github.com/dmitryduy/work-fly/tree/master/frontend/src/docs/i18n.md)