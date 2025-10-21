import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
        ],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                sourceType: "module",
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            react: { version: "detect" },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            react,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...react.configs.flat.recommended.rules,
            ...react.configs.flat["jsx-runtime"].rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],

            // 코드 품질 기본
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-var": "error",
            "prefer-const": "error",

            // React 관련 규칙들
            "react/jsx-boolean-value": ["warn", "never"],
            "react/jsx-curly-brace-presence": [
                "warn",
                { props: "never", children: "never" },
            ],
            "react/jsx-no-useless-fragment": "warn",
            "react/jsx-fragments": ["warn", "syntax"],
            "react/self-closing-comp": ["warn", { component: true, html: true }],

            // 이벤트 핸들러 네이밍
            "react/jsx-handler-names": [
                "warn",
                {
                    eventHandlerPrefix: "handle",
                    eventHandlerPropPrefix: "on",
                },
            ],

            // React 컴포넌트는 화살표 함수
            "react/function-component-definition": [
                "warn",
                {
                    namedComponents: "arrow-function",
                    unnamedComponents: "arrow-function",
                },
            ],

            // 컴포넌트 파일명은 파스칼 케이스
            "react/jsx-pascal-case": [
                "warn",
                {
                    allowAllCaps: true,
                    ignore: [],
                },
            ],

            // TypeScript 관련 규칙들
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/prefer-nullish-coalescing": "warn",
            "@typescript-eslint/prefer-optional-chain": "warn",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                { prefer: "type-imports" },
            ],
            "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
            "@typescript-eslint/no-floating-promises": "error",

            // JavaScript 규칙 비활성화 (TypeScript가 처리)
            "no-unused-vars": "off",
            "no-undef": "off",
        },
    }
);
