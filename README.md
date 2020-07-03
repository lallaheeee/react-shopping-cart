<h1 align="center">Welcome to shopping cart 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Tech Stack

React + TypeScript + styled-components + Storybook + hooks API

### preview

![img](./docs/preview.gif)

## 폴더 구조

```sh
src
├── apis							  # API 요청 레이어
├── components
│   ├── App.tsx
│   ├── GlobalStyle.tsx
│   ├── Router.tsx          ## Router
│   ├── UI
│   │   ├── atoms					  # atoms + molecules
│   │   │   ├── CouponSection
│   │   │   ├── EmptyCart
│   │   │   ├── Pagination
│   │   │   ├── PaymentAmountSection
│   │   │   ├── ProductCard
│   │   │   ├── ShoppingCartItem
│   │   └── blocks					  # organims
│   │   │   ├── ProductCartTabs
│   │   │   ├── ProductList
│   │   │   └── ShoppingCartTable
│   │   └── layouts
|   |
│   └── pages
│       ├── BaseTemplate.tsx
│       ├── Product
│       │   └── useProductList		  # page에서만 쓰이는 hooks
│       └── ShoppingCart
├── lib                     ## 외부 라이브러리
│ 
├── contexts
│   └── ShoppingCarts
│ 
├── hooks							  # 공통 hooks
│   └── useFetch
│ 
└── types							  # domain과 관련된 type
    └── index.ts
```

## 📕 [storybook](https://shopping-cart-react-ts.netlify.app/?path=/story/atoms-pagination--index)

## Install

```sh
yarn install
```

## Usage

```sh

yarn server  # start json-server
yarn start   # start react
```

## Run Storybook

```sh
yarn storybook
```

## Author

👤 **@lallaheeee**

-   Website: https://lallaheeee.github.io/
-   Github: [@lallaheeee](https://github.com/lallaheeee)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
