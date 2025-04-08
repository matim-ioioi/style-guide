import stylisticPlugin from '@stylistic/eslint-plugin'
import globals from 'globals'

export const baseConfigs = [
  {
    name: 'style-guide-base',
    languageOptions: {
      globals: {
        ...globals.es2024,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      /**
       * Обязывает писать return в callback-методах структуры `Array`
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/array-callback-return
       */
      'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],

      /**
       * Обязывает удалять точки с запятой
       *
       * 🔧 Исправляется автоматически - https://eslint.style/rules/js/semi
       */
      '@stylistic/semi': ['error', 'never'],

      /**
       * Обязывает писать единичные кавычки
       *
       * 🔧 Исправляется автоматически - https://eslint.style/rules/js/quotes
       */
      '@stylistic/quotes': ['error', 'single'],

      /**
       * Обязывает писать конец строки в Unix-формате
       *
       * 🔧 Исправляется автоматически - https://eslint.style/rules/js/linebreak-style
       */
      '@stylistic/linebreak-style': ['error', 'unix'],

      /**
       * Форматирование отступов между фигурными скобками
       *
       * 🔧 Исправляется автоматически - https://eslint.style/rules/js/object-curly-spacing
       */
      '@stylistic/object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],

      /**
       * Запрещает использовать `var`
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/latest/rules/no-var
       */
      'no-var': 'error',

      /**
       * Запрещает использование выражений без фигурных скобок
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/latest/rules/curly
       */
      curly: ['error', 'all'],

      /**
       * Запрещает использовать `default` в `switch` не последним
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/default-case-last
       */
      'default-case-last': 'error',

      /**
       * Запрещает использовать нестрогое сравнение (`==` and `!=`).
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/latest/rules/eqeqeq
       */
      eqeqeq: 'error',

      /**
       * Запрещает использовать несгрупированные пары доступа в классах
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/grouped-accessor-pairs
       */
      'grouped-accessor-pairs': 'error',

      /**
       * Запрещает использовать `alert()`.
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/no-alert
       */
      'no-alert': 'error',

      /**
       * Запрещает использовать `return` в `else` если в `if` есть `return`
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/latest/rules/no-else-return
       */
      'no-else-return': ['error', { allowElseIf: true }],

      /**
       * Запрещает расширять нативные объекты
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/no-extend-native
       */
      'no-extend-native': 'error',

      /**
       * Запрещает использовать одинокие блоки кода
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-lone-blocks
       */
      'no-lone-blocks': 'error',

      /**
       * Запрещает использовать `new` без приравнивания инстанса класса к какой-либо переменной
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-new
       */
      'no-new': 'error',

      /**
       * Запрещает использовать `new` для обёрток притимивов
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-new-wrappers
       */
      'no-new-wrappers': 'error',

      /**
       * Запрещает использовать присвоения в `return` выражениях
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-return-assign
       */
      'no-return-assign': 'error',

      /**
       * Запрещает использовать сравнения, в которых обе стороны одинаковы
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-self-compare
       */
      'no-self-compare': 'error',

      /**
       * Запрещает использовать оператор `,`
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-sequences
       */
      'no-sequences': 'error',

      /**
       * Удаляет лишний биндинг контекста
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/rules/no-extra-bind
       */
      'no-extra-bind': 'error',

      /**
       * Запрещает использовать бесполезные `.call()` и `.apply()`
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-useless-call
       */
      'no-useless-call': 'error',

      /**
       * Удаляет ненужные `return`
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/rules/no-useless-return
       */
      'no-useless-return': 'error',

      /**
       * Исправляет "Yoda условия"
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/rules/yoda
       */
      yoda: 'error',

      /**
       * Запрещает использовать множественные приравнивания
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-multi-assign
       */
      'no-multi-assign': 'error',

      /**
       * Запрещает использовать вложенные тернарные операторы
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/no-nested-ternary
       */
      'no-nested-ternary': 'error',

      /**
       * Убирает ненужные тернарные операторы
       *
       * 🔧 Исправляется автоматически - https://eslint.org/docs/rules/no-unneeded-ternary
       */
      'no-unneeded-ternary': 'error',

      /**
       * Запрещает использовать не ASCII-символы
       *
       * 🚫 Не исправляется автоматически - https://eslint.org/docs/rules/id-match
       */
      'id-match': ['error', '^[a-zA-Z0-9_$]*$', { properties: true, classFields: true }],

      /**
       * Обязывает ставить пустую строку перед return
       *
       * 🔧 Исправляется автоматически - https://eslint.style/rules/js/padding-line-between-statements
       */
      '@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    },
  },
]
