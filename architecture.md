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

## Используемые библиотеки

| Библиотека | Версия | Назначение |
|------------|--------|------------|
| react | ^18.2.0 | UI-фреймворк |
| react-dom | ^18.2.0 | рендеринг в DOM |
| react-router-dom | ^6.20.0 | клиентский роутинг |
| typescript | ^5.3.0 | статическая типизация |
| vite | ^5.0.0 | сборщик приложения |
| jest | ^29.7.0 | тестирование |
| ts-jest | ^29.1.0 | интеграция TypeScript с Jest |
| eslint | ^8.56.0 | линтинг кода |
| @typescript-eslint/eslint-plugin | ^6.0.0 | правила TypeScript для ESLint |
| @testing-library/react | ^14.0.0 | тестирование React-компонентов |
| @testing-library/jest-dom | ^6.1.0 | дополнительные матчеры для Jest |

## Использование библиотеки компонентов

Основное приложение подключает библиотеку как локальную зависимость через npm workspaces (`"@my-app/ui-library": "*"` в package.json). Компоненты импортируются стандартным образом:

```tsx
import { Button } from '@my-app/ui-library';
```

Библиотека собирается в формат ES-модулей (папка `dist/`) и автоматически пересобирается при установке зависимостей через скрипт `prepare` в корневом package.json.