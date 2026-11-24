# Архитектурные требования

## Структура проекта

Проект реализован как монорепозиторий (npm workspaces) и состоит из двух пакетов: основного приложения и библиотеки общих компонентов.

### 1. Основное приложение (`packages/app`)


**Назначение:** клиентское веб-приложение игры 2048 с сохранением прогресса.


**Структура папок:**
```text
packages/app/
├── src/
│   ├── components/
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Game.tsx
│   │   ├── History.tsx
│   │   ├── Settings.tsx
│   │   └── Profile.tsx
│   ├── router.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.cjs
└── jest.config.js
```

**Архитектурные модули игры:**
- `GameEngine` — логика поля 4×4, сдвига и слияния плиток.
- `HistoryStack` — стек состояний для реализации отмены хода (Undo).
- `StorageService` — сервис сохранения и загрузки прогресса в `localStorage`.
- `Grid` и `Tile` — компоненты отрисовки игрового поля и плиток (будут реализованы на следующих этапах).

**Структура роутинга:**
- `/` — главная страница (Home), вложена в Layout
- `/game` — игровое поле (Game), вложено в Layout
- `/history` — история игр (History), вложено в Layout
- `/settings` — настройки (Settings), вложено в Layout
- `/profile` — профиль игрока (Profile), вложено в Layout

Все маршруты используют общий компонент `Layout` с навигационным меню через `Outlet` из React Router.

### 2. Библиотека общих компонентов (`packages/ui-library`)

**Назначение:** переиспользуемые UI-компоненты для основного приложения.

**Структура папок:**
```text
packages/ui-library/
├── src/
│   ├── button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   ├── setupTests.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── .eslintrc.cjs
```

**Список компонентов:**
- `Button` — универсальная кнопка с пропсами `label`, `onClick`, `disabled`

## Используемые библиотеки и версии

| Библиотека | Версия | Назначение |
|------------|--------|------------|
| react | ^19.0.0 | UI-фреймворк |
| react-dom | ^19.0.0 | рендеринг в DOM |
| react-router-dom | ^6.20.0 | клиентский роутинг |
| typescript | ^5.3.0 | статическая типизация |
| vite | ^6.0.0 | сборщик приложения |
| jest | ^30.0.0 | тестирование |
| eslint | ^9.0.0 | линтинг кода (Flat Config) |
| @typescript-eslint/eslint-plugin | ^8.0.0 | правила TypeScript для ESLint |
| @testing-library/react | ^16.0.0 | тестирование React-компонентов |

## Использование библиотеки компонентов

Основное приложение подключает библиотеку как локальную зависимость через npm workspaces (`"@my-app/ui-library": "*"` в package.json). Компоненты импортируются стандартным образом:

```tsx
import { Button } from '@my-app/ui-library';
```

Библиотека собирается в формат ES-модулей (папка `dist/`) и автоматически пересобирается при установке зависимостей через скрипт `prepare` в корневом package.json.