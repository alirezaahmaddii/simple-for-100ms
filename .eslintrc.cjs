const ANT_COMPONENTS = [
    "AntResult",
    "AntAvatar",
    "AntAvatar.Group",
    "AntModal",
    "AntCheckbox",
    "AntTree",
    "AntCollapse",
    "AntCollapse.Panel",
    "AntFlex",
    "AntForm",
    "AntDivider",
    "AntSpace",
    "AntBreadcrumb",
    "AntForm.Item",
    "AntButton",
    "AntDrawer",
    "AntMenu",
    "AntMenu.Item",
    "AntInput",
    "AntInput.Search",
    "AntInput.TextArea",
    "AntImage",
    "AntTypography.Text",
    "AntRadio.Group",
    "AntTag",
    "AntSelect",
    "AntSider",
    "AntSlider",
    "AntSwitch",
    "AntDropdown",
    "AntTabs",
    "AntTable",
    "AntCard",
    "AntCol",
    "AntRow",
];

module.exports = {
    extends: [
        "eslint:all",
        "plugin:@typescript-eslint/all",
        "plugin:react/all",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:@stylistic/disable-legacy",
        "plugin:@stylistic/recommended-extends",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        project: ["./tsconfig.json"],
        sourceType: "module",
    },
    root: true,
    rules: {
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "function",
                format: ["camelCase", "PascalCase"],
            }
        ],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                ignoreArrayIndexes: true
            }
        ],
        "arrow-body-style": ["error", "always"],
        "id-length": [
            "error",
            {
                min: 2,
                exceptions: ["x", "y", "z"],
            },
        ],
        "max-len": [
            "error",
            {
                code: 120,
            },
        ],
        "max-lines-per-function": [
            "error",
            {
                max: 60,
                skipBlankLines: true,
                skipComments: true
            },
        ],
        "no-extra-parens": [
            "error",
            "all",
            {
                ignoreJSX: "multi-line",
            },
        ],
        "one-var": "off",
        "quote-props": ["error", "consistent-as-needed"],
        "react/forbid-component-props": [
            "error",
            {
                forbid: [
                    "style",
                    {
                        allowedFor: ANT_COMPONENTS,
                        propName: "className"
                    }
                ]
            }
        ],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".tsx"],
            },
        ],
        "react/jsx-max-depth": [
            "error",
            {
                max: 10,
            },
        ],
        "react/jsx-no-literals": "off",
        "react/jsx-props-no-spreading": [
            "error",
            {
                exceptions: ANT_COMPONENTS,
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": [
            "error",
            {
                functions: "defaultArguments",
            },
        ],
        "padded-blocks": [
            "error",
            "never",
        ],
        "sort-keys": "off",
    },
    ignorePatterns: [
        "/*",
        "!.eslintrc.cjs",
        "!typings.d.ts",
        "!apps/",
        "backend/",
        "node_modules/",
        ".umi/",
        "dist/",
        "storybook-static/",
    ],
    settings: {
        react: {
            version: "22.14.0",
        },
    },
};
