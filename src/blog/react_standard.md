---
title: ๐จโ๐ค ๋ฆฌ์กํธ, ๋ฐ์ด๋ด๋ฒ๋ฆฌ๊ธฐ.
name: ํ์คํ
createdAt: 2021๋ 5์ 3์ผ 
profile: "https://avatars.githubusercontent.com/u/48292190?v=4"
desc: "๊ณต์ ๋ฌธ์๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๋ฐฐ์ฐ๋ ๋ฆฌ์กํธ."
---

# โ๏ธ ๋ฆฌ์กํธ์ ๊ธฐ์ด

> ### โ ๏ธ ์ด ๊ธ์ React.js ๊ณต์ ์์ต์์ ์์กดํ๊ณ  ์๋ ๊ธ์๋๋ค.

<hr />

# ๋ชฉ์ฐจ

์ด๋ฒ ๋ชฉ์ฐจ๋ ๋ค์๊ณผ ๊ฐ์ต๋๋ค.

![image](https://user-images.githubusercontent.com/48292190/116813790-88946900-ab90-11eb-9e42-46a285a0f2ea.png)

# ๋ชฉ์ 

๋ฆฌ์กํธ ๊ณต์ ์ฌ์ดํธ์์ TicTacToe๊ฐ ์์ ๋ก ๋์๋๋ฐ ์ด๋ฅผ ๋ณด๊ณ  ์ดํด๋ฅผ ํ์ง ๋ชปํ๋ ์ฌ๋๋ค๋ ๋ง๊ณ  ํ๊ฐ๋ฆฌ๋ ๋ถ๋ถ์ด ์์์๋ ์๊ธฐ๋๋ฌธ์ ์ด๋ฅผ ๋ณด์ํ๊ณ ์. ์ด ๊ธฐ์ด ํํธ๋ฅผ ์ค๋นํ์ต๋๋ค.

> ### โ ๏ธ ์ด ๊ธ์ React.js ๊ณต์ ์์ต์์ ์์กดํ๊ณ  ์๋ ๊ธ์๋๋ค.

์์ํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

# JSX

## ๐คจ JSX ์๊ฐ

๋จผ์ , ์๋์ ์ฝ๋๋ฅผ ๋ณด๋๋ก ํฉ์๋ค.

```js
const element = <h1>Hello, world!</h1>;
```

์์ ๋ฌธ๋ฒ์ HTML๋, ๋ฌธ์์ด๋ ์๋๋๋ค.

**JavaScript๋ฅผ ํ์ฅํ ๋ฌธ๋ฒ์ธ JSX๋ผ๊ณ  ํฉ๋๋ค.**

JSX๋ JavaScript์ ๋ชจ๋  ๊ธฐ๋ฅ์ด ํฌํจ๋์ด ์์ต๋๋ค.

**JSX๋ ์๋ฆฌ๋จผํธ(element)๋ฅผ ์์ฑํฉ๋๋ค.**

React์์๋ ์ด๋ฒคํธ๊ฐ ์ฒ๋ฆฌ๋๋ ๋ฐฉ์, ์๊ฐ์ ๋ฐ๋ผ state๊ฐ ๋ณํ๋ ๋ฐฉ์, ํ๋ฉด์ ํ์ํ๊ธฐ ์ํด ๋ฐ์ดํฐ๊ฐ ์ค๋น๋๋ ๋ฐฉ์ ๋ฑ **๋ ๋๋ง ๋ก์ง์ด ๋ณธ์ง์ ์ผ๋ก ๋ค๋ฅธ UI ๋ก์ง๊ณผ ์ฐ๊ฒฐ๋๋ค๋ ์ฌ์ค์ ๋ฐ์๋ค์๋๋ค.**

![image](https://blog.kakaocdn.net/dn/bgsR0l/btqBSOXRul7/vqCF5iy4EpEpxY3qIulYCK/img.png)

JSX๋ ์ฌ์ค ๋ฆฌ์กํธ์์ `ํ์`๋ก ์๊ตฌ๋๋ ๋ฌธ๋ฒ์ ์๋๋๋ค. [๊ด๋ จ ๋งํฌ](https://ko.reactjs.org/docs/react-without-jsx.html)

๋๋ถ๋ถ์ ์ฌ๋์ JavaScript ์ฝ๋ ์์์ UI ๊ด๋ จ ์์์ ํ  ๋ ์๊ฐ์ ์ผ๋ก ๋ ๋์์ด ๋๋ค๊ณ  ์๊ฐํฉ๋๋ค.

์ด์  JSX๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ์์๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.
์์ ๋ฅผ ๋ณด๋ฉด ์ดํด๊ฐ ์์ํด์ง ๊ฒ๋๋ค.

## JSX์ ํํ์ ํฌํจํ๊ธฐ

```js
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

JSX์ {}์์๋ ๋ชจ๋  JavaScriptํํ์์ ๋ฃ์ ์ ์์ต๋๋ค.

์๋ฅผ ๋ค๋ฉด `2 + 2`๋ `user.name`์ด๋ `formatTime(time)`๋ฑ์ด๋ ์ฌ์ฉํ  ์ ์๋๊ฒ์ด์ฃ .

## JSX๋ ํํ์์๋๋ค

์ปดํ์ผ์ด ๋๋๋ฉด, JSX ํํ์์ด ์ ๊ท JavaScript ํจ์ ํธ์ถ์ด ๋๊ณ  JavaScript ๊ฐ์ฒด๋ก ์ธ์๋ฉ๋๋ค.

๊ทธ๋ฌ๋ฉด ์ฐ๋ฆฌ๊ฐ ๋ฌด์จ์์์ ํ  ์ ์๋๋ฉด,

๋ค์๊ณผ ๊ฐ์ ์์์ ์ํํ  ์ ์์ต๋๋ค.

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

์ง๊ธ ์ง์คํด์ ๋ณผ ๋ถ๋ถ์ if๋ฌธ์๋๋ค. ์ด๋ฌํ ํํ์์ด ๊ฐ๋ฅํ๊ฒ์ด์ฃ .

**JSX๋ฅผ if ๊ตฌ๋ฌธ ๋ฐ for loop ์์ ์ฌ์ฉํ๊ณ , ๋ณ์์ ํ ๋นํ๊ณ , ์ธ์๋ก์ ๋ฐ์๋ค์ด๊ณ , ํจ์๋ก๋ถํฐ ๋ฐํํ  ์ ์์ต๋๋ค.**

## JSX ์์ฑ ์ ์

์์ฑ์ ๋ฐ์ดํ๋ฅผ ์ด์ฉํด ๋ฌธ์์ด ๋ฆฌํฐ๋ด์ ์ ์ํ  ์ ์์ต๋๋ค.

```js
const element = <div tabIndex="0"></div>;
```

๋ํ JavaScriptํํ์๋ ๋ฃ์ ์ ์์ต๋๋ค.

```js
const element = <img src={user.avatarUrl}></img>;
```

> ## โ ๏ธ์ฃผ์ํ  ์ 
>
> ์ดํธ๋ฆฌ๋ทฐํธ์ JavaScript ํํ์์ ์ฝ์ํ  ๋ ์ค๊ดํธ ์ฃผ๋ณ์ ๋ฐ์ดํ๋ฅผ ์๋ ฅํ์ง ๋ง์ธ์. ๋ฐ์ดํ(๋ฌธ์์ด ๊ฐ์ ์ฌ์ฉ) ๋๋ ์ค๊ดํธ(ํํ์์ ์ฌ์ฉ) ์ค ํ๋๋ง ์ฌ์ฉํ๊ณ , ๋์ผํ ์ดํธ๋ฆฌ๋ทฐํธ์ ๋ ๊ฐ์ง๋ฅผ ๋์์ ์ฌ์ฉํ๋ฉด ์ ๋ฉ๋๋ค.

JSX๋ HTML๋ณด๋ค JavaScript์ ๋ ๊ฐ๊น๊ธฐ๋๋ฌธ์ **React DOM์ HTML ์ดํธ๋ฆฌ๋ทฐํธ ์ด๋ฆ ๋์  camelCase ํ๋กํผํฐ ๋ช๋ช ๊ท์น์ ์ฌ์ฉํฉ๋๋ค.**

๋ํ์ ์ธ ์๋ก๋ `class`๊ฐ ์๋๋ผ `className`์๋๋ค.

## JSX๋ก ์์ ์ ์

ํ๊ทธ๊ฐ ๋น์ด์๋ค๋ฉด XML์ฒ๋ผ /> ๋ฅผ ์ด์ฉํด ๋ฐ๋ก ๋ซ์์ฃผ์ด์ผ ํฉ๋๋ค.

```js
const element = <img src={user.avatarUrl} />;
```

JSXํ๊ทธ๋ ์์์ ํํจํ  ์ ์์ต๋๋ค.

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

**JSXํ๊ทธ๋ ๋ฐ๋์ ์ต์์ ํ๊ทธ๊ฐ ๋ซํ์์ด์ฌํฉ๋๋ค.**

## JSX๋ ์ฃผ์ ๊ณต๊ฒฉ์ ๋ฐฉ์งํฉ๋๋ค

XSS์ธ ์ฌ์ดํธ ๊ฐ ์คํฌ๋ฆฝํ ๊ณต๊ฒฉ์ ๋ฐฉ์งํ  ์ ์์ต๋๋ค. ๊ธฐ๋ณธ์ ์ผ๋ก React DOM์ JSX์ ์ฝ์๋ ๋ชจ๋  ๊ฐ์ ๋ ๋๋งํ๊ธฐ ์ ์ ์ด์ค์ผ์ดํ ํ๋ฏ๋ก ๊ฐ๋ฅํ ์ผ์ด์ฃ . **์ ํ๋ฆฌ์ผ์ด์์์ ๋ช์์ ์ผ๋ก ์์ฑ๋์ง ์์ ๋ด์ฉ์ ์ฃผ์๋์ง ์์ต๋๋ค. ๋ชจ๋  ํญ๋ชฉ์ ๋ ๋๋ง ๋๊ธฐ ์ ์ ๋ฌธ์์ด๋ก ๋ณํ๋ฉ๋๋ค.**

![image](https://portswigger.net/web-security/images/cross-site-scripting.svg)

## JSX๋ ๊ฐ์ฒด๋ฅผ ํํํฉ๋๋ค.

Babel์ JSX๋ฅผ React.createElement() ํธ์ถ๋ก ์ปดํ์ผํฉ๋๋ค.

์ฝ๋๋ฅผ ๋ณด๊ณ  ์์๋ณด๋๋ก ํ์ฃ .

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

**์ด์  createElement๊ฐ ๋ฌด์์ ๋ง๋๋์ง ๋ณด๋๋ก ํ ๊น์?**

```js
// ์ฃผ์: ๋ค์ ๊ตฌ์กฐ๋ ๋จ์ํ๋์์ต๋๋ค
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

์์ ๊ฐ์ ํ์์ผ๋ก ๋ง๋ค์ด์ค๋๋ค. ์ฆ, ๊ฐ์ฒด๋ฅผ ํํํฉ๋๋ค.

> ์ด๋ฌํ ๊ฐ์ฒด๋ฅผ โReact ์๋ฆฌ๋จผํธโ๋ผ๊ณ  ํ๋ฉฐ, ํ๋ฉด์์ ๋ณด๊ณ  ์ถ์ ๊ฒ์ ๋ํ๋ด๋ ํํ์ด๋ผ ์๊ฐํ๋ฉด ๋ฉ๋๋ค. React๋ ์ด ๊ฐ์ฒด๋ฅผ ์ฝ์ด์, DOM์ ๊ตฌ์ฑํ๊ณ  ์ต์  ์ํ๋ก ์ ์งํ๋ ๋ฐ ์ฌ์ฉํฉ๋๋ค.

# ์๋ฆฌ๋จผํธ ๋๋๋ง

> "์๋ฆฌ๋จผํธ๋ React ์ฑ์ ๊ฐ์ฅ ์์ ๋จ์์๋๋ค." - ๋ฆฌ์กํธ ๊ณต์๋ฌธ์

์ด๋ฒ์ ์์๋ณผ๊ฒ์ ์๋ฆฌ๋จผํธ์ ๋๋๋ง์๋๋ค.

์๋ฆฌ๋จผํธ๋ **ํ๋ฉด์ ํ์ํ  ๋ด์ฉ**์ ๊ธฐ์ ํฉ๋๋ค.

> ์ด์ฏค๋๋ฉด **์ปดํฌ๋ํธ**์ **์๋ฆฌ๋จผํธ**๊ฐ ํ๊ฐ๋ฆด ์ ์์ต๋๋ค.
> ์๋ฆฌ๋จผํธ๋ ์ปดํฌ๋ํธ์ โ๊ตฌ์ฑ ์์โ์๋๋ค. ์์ธํ ์ค๋ช์ ๋ค์์ฅ์ ๊ณ์ ์ค๋ชํ๊ฒ ์ต๋๋ค.

## DOM์ ์๋ฆฌ๋จผํธ ๋ ๋๋งํ๊ธฐ

HTMLํ์ผ ์ด๋๊ฐ์ <div>๊ฐ ์๋ค๊ณ  ์๊ฐํด๋ด์๋ค.

```js
<div id="root"></div>
```

์ด ์์ ๋ค์ด๊ฐ๋ ๋ชจ๋  ์๋ฆฌ๋จผํธ๋ฅผ React DOM์์ ๊ด๋ฆฌํ๊ธฐ ๋๋ฌธ์ ์ด๊ฒ์ โ๋ฃจํธ(root)โ DOM ๋ธ๋๋ผ๊ณ  ๋ถ๋ฆ๋๋ค.

**React๋ก ๊ตฌํ๋ ์ ํ๋ฆฌ์ผ์ด์์ ์ผ๋ฐ์ ์ผ๋ก ํ๋์ ๋ฃจํธ DOM ๋ธ๋๊ฐ ์์ต๋๋ค.** React๋ฅผ ๊ธฐ์กด ์ฑ์ ํตํฉํ๋ ค๋ ๊ฒฝ์ฐ ์ํ๋ ๋งํผ ๋ง์ ์์ ๋๋ฆฝ๋ ๋ฃจํธ DOM ๋ธ๋๊ฐ ์์ ์ ์์ต๋๋ค.

**React ์๋ฆฌ๋จผํธ๋ฅผ ๋ฃจํธ DOM ๋ธ๋์ ๋ ๋๋งํ๋ ค๋ฉด ๋ ๋ค ReactDOM.render()๋ก ์ ๋ฌํ๋ฉด ๋ฉ๋๋ค.**

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

## ๋ ๋๋ง ๋ ์๋ฆฌ๋จผํธ ์๋ฐ์ดํธํ๊ธฐ

React ์๋ฆฌ๋จผํธ๋ **๋ถ๋ณ๊ฐ์ฒด**์๋๋ค.

**๋ถ๋ณ๊ฐ์ฒด**... ์ด๋ถ๋ถ์ด ์ค์ํ ๋ถ๋ถ์๋๋ค.

์๋ฆฌ๋จผํธ๋ฅผ ์์ฑํ ์ดํ์๋ ํด๋น ์๋ฆฌ๋จผํธ์ ์์์ด๋ ์์ฑ์ ๋ณ๊ฒฝํ  ์ ์์ต๋๋ค. ์๋ฆฌ๋จผํธ๋ ์ํ์์ ํ๋์ ํ๋ ์๊ณผ ๊ฐ์ด ํน์  ์์ ์ UI๋ฅผ ๋ณด์ฌ์ค๋๋ค.

**UI๋ฅผ ์๋ฐ์ดํธํ๋ ์ ์ผํ ๋ฐฉ๋ฒ์ ์๋ก์ด ์๋ฆฌ๋จผํธ๋ฅผ ์์ฑํ๊ณ  ์ด๋ฅผ ReactDOM.render()๋ก ์ ๋ฌํ๋ ๊ฒ์๋๋ค.**

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
```

์์ ํจ์๋ 1์ด๋ง๋ค ์๋ก์ด ๋ฆฌ์กํธ DOM์ ๋๋๋งํฉ๋๋ค.

> ์ค์ ๋ก ๋๋ถ๋ถ์ React ์ฑ์ ReactDOM.render()๋ฅผ ํ ๋ฒ๋ง ํธ์ถํฉ๋๋ค.

## ๋ณ๊ฒฝ๋ ๋ถ๋ถ๋ง ์๋ฐ์ดํธํ๊ธฐ

> React DOM์ ํด๋น ์๋ฆฌ๋จผํธ์ ๊ทธ ์์ ์๋ฆฌ๋จผํธ๋ฅผ ์ด์ ์ ์๋ฆฌ๋จผํธ์ ๋น๊ตํ๊ณ  DOM์ ์ํ๋ ์ํ๋ก ๋ง๋๋๋ฐ ํ์ํ ๊ฒฝ์ฐ์๋ง DOM์ ์๋ฐ์ดํธํฉ๋๋ค.

์ด ๋ง์ด ๋ฌด์จ๋ง์ด๋๋ฉด "๋ณ๊ฒฝ๋ ๋ถ๋ถ๋ง ์๋ฐ์ดํธ"ํ๋ ๊ฒ์๋๋ค.

![gif](https://ko.reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)

๋งค์ด ์ ์ฒด UI๋ฅผ ๋ค์ ๊ทธ๋ฆฌ๋๋ก ์๋ฆฌ๋จผํธ๋ฅผ ๋ง๋ค์์ง๋ง React DOM์ ๋ด์ฉ์ด ๋ณ๊ฒฝ๋ ํ์คํธ ๋ธ๋๋ง ์๋ฐ์ดํธํ์ต๋๋ค.

# Components and Props

์ปดํฌ๋ํธ์ ๊ฐ๋์ ์ค๋ชํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

**์ปดํฌ๋ํธ๋ JavaScript ํจ์์ ์ ์ฌํฉ๋๋ค. โpropsโ๋ผ๊ณ  ํ๋ ์์์ ์๋ ฅ์ ๋ฐ์ ํ, ํ๋ฉด์ ์ด๋ป๊ฒ ํ์๋๋์ง๋ฅผ ๊ธฐ์ ํ๋ React ์๋ฆฌ๋จผํธ๋ฅผ ๋ฐํํฉ๋๋ค.**

## ํจ์ ์ปดํฌ๋ํธ์ ํด๋์ค ์ปดํฌ๋ํธ

์ปดํฌ๋ํธ๋ฅผ ์ ์ํ๋ ๊ฐ์ฅ ๊ฐ๋จํ ๋ฐฉ๋ฒ์ JavaScriptํจ์๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์๋๋ค.

```js
function SimpleComponent(props) {
  return <h1>Hello Function Component, I am {props.name}</h1>;
}
```

์ด ํจ์๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง props (props๋ ์์ฑ์ ๋ํ๋ด๋ ๋ฐ์ดํฐ์๋๋ค)๋ผ๋ ๊ฐ์ฒด ์ธ์๋ฅผ ๋ฐ์ ํ, React์๋ฆฌ๋จผํธ๋ฅผ ๋ฐํํฉ๋๋ค.

**์ด๊ฒ์ด ํจ์ํ ์ปดํฌ๋ํธ์๋๋ค.**

ES6 Class๋ฌธ๋ฒ์ ์ฌ์ฉํ์ฌ ํด๋์คํ ์ปดํฌ๋ํธ๋ ์ ์ํ  ์ ์์ต๋๋ค.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Classํ์๋ ๋ช ๊ฐ์ง ์ถ๊ฐ๊ธฐ๋ฅ์ด ์์ต๋๋ค.
**ํจ์ ์ปดํฌ๋ํธ์ ํด๋์ค ์ปดํฌ๋ํธ ๋ ๋ค ๋ช ๊ฐ์ง ์ถ๊ฐ ๊ธฐ๋ฅ์ด ์์ผ๋ฉฐ** ์ด์ ๋ํด์๋ ๋ค์์ ์์ธํ ์ค๋ชํ๊ฒ ์ต๋๋ค.

# ์ปดํฌ๋ํธ ๋ ๋๋ง

React ์๋ฆฌ๋จผํธ๋ ์ฌ์ฉ์ ์ ์ ์ปดํฌ๋ํธ๋ก ๋ํ๋ผ ์ ์์ต๋๋ค.

```js
const element = <Welcome name="Sara" />;
```

`name="Sara"`๋ผ๊ณ  ๋ ๋ถ๋ถ์ด ์์ฃ ? ๊ทธ ๋ถ๋ถ์ ์ฐ๋ฆฌ๊ฐ **props๋ฅผ ์ ๋ฌํ๋ค** ๋ผ๊ณ  ํฉ๋๋ค.

์ฆ, props๋ฅผ ์ ๋ฌํจ์ผ๋ก์ ๋ค์๊ณผ ๊ฐ์ ๋ก์ง์ด ๊ฐ๋ฅํ๊ฒ์ด์ฃ .

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));
```

# ์ปดํฌ๋ํธ ํฉ์ฑ

์ปดํฌ๋ํธ๋ ์์ ์ ์ถ๋ ฅ์ ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ฅผ ์ฐธ์กฐํ  ์ ์์ต๋๋ค.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

React ์ฑ์์๋ ๋ฒํผ, ํผ, ๋ค์ด์ผ๋ก๊ทธ, ํ๋ฉด ๋ฑ์ ๋ชจ๋  ๊ฒ๋ค์ด ํํ ์ปดํฌ๋ํธ๋ก ํํ๋ฉ๋๋ค.

# ์ปดํฌ๋ํธ ์ถ์ถ

์ปดํฌ๋ํธ๋ฅผ ์ถ์ถํ๋ ๊ณผ์ ์ ์ปดํฌ๋ํธ๋ฅผ ์ฌ๋ฌ ๊ฐ์ ์์ ์ปดํฌ๋ํธ๋ก ๋๋๋ ๊ณผ์ ์ ์๋ฏธํฉ๋๋ค.

์ด ๊ณผ์ ์ ๊ณผ๊ฐํ ํด๋ฒ๋ฆฌ์ธ์! ๋ค์ ์ฝ๋๋ฅผ ๋ด์๋ค.

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

์... ์ด๊ฒ React๋ฅผ ์ฐ๋๊ฑด์ง HTML์ ์ฐ๋๊ฑด์ง ์ ๋ชจ๋ฅด์๊ฒ ์ฃ ?

๊ทธ๋์ ์ปดํฌ๋ํธ๋ฅผ ์ถ์ถํ๋ ๊ณผ์ ์ ํตํด ์ข ๋ ์ง๊ด์ ์ธ ์ฝ๋๋ก ๋ณ๊ฒฝํด๋ณด๊ฒ ์ต๋๋ค.

imgํ๊ทธ๋ถํฐ ์ถ์ถํด๋ณด๊ฒ ์ต๋๋ค.

```js
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
```

๊ทธ๋ฌ๋ฉด Comment์ฝ๋์์์ ,

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

์ด๋ ๊ฒ ์นํ๋  ์ ์๊ฒ ์ฃ .

๊ทธ ๋ค์ UserInfo์ปดํฌ๋ํธ๋ ๋ง๋ค์ด ๋ณด๊ฒ ์ต๋๋ค.

```js
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}
```

์ด์  Comment๊ฐ ๋์ฑ ๋จ์ํด์ง ์ ์๊ฒ ์ฃ ?

```js
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

์ด ์์์ด ๊ต์ฅํ ๊ท์ฐฎ๊ณ  ์ง๋ฃจํ  ์ ์์ต๋๋ค. ํ์ง๋ง ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด ๋๋ ๊ฒ์ ๋ ํฐ ์ฑ์์ ์์ํ  ๋ ๋๊ฐ์ ๋ํ๋๋๋ค.

**UI ์ผ๋ถ๊ฐ ์ฌ๋ฌ ๋ฒ ์ฌ์ฉ๋๊ฑฐ๋ (Button, Panel, Avatar), UI ์ผ๋ถ๊ฐ ์์ฒด์ ์ผ๋ก ๋ณต์กํ (App, FeedStory, Comment) ๊ฒฝ์ฐ์๋ ๋ณ๋์ ์ปดํฌ๋ํธ๋ก ๋ง๋๋ ๊ฒ ์ข์ต๋๋ค.**

![image](https://media.vlpt.us/images/devgosunman/post/f0f69596-9dc9-4533-ba90-e12fd55a8c62/react%20state.jpg)

# props๋ ์ฝ๊ธฐ ์ ์ฉ์๋๋ค.

๋ฌด์จ ๋ง์ธ์ง ํ๋ฒ ๋ณผ๊น์?

```js
function sum(a, b) {
  return a + b;
}
```

์์ ํจ์๋ **์์ ํจ์**๋ผ๊ณ  ํฉ๋๋ค.

์์ ํจ์์ ๋ํด์๋ [์ฌ๊ธฐ](https://velog.io/@chdb57/%E3%85%87%E3%85%87%E3%85%87%E3%85%87%E3%85%87%E3%85%87%E3%85%87%E3%85%87)๋ฅผ ์ฐธ์กฐํด๋ณด์๊ธธ ๋ฐ๋๋๋ค.

**๋ชจ๋  React ์ปดํฌ๋ํธ๋ ์์ ์ props๋ฅผ ๋ค๋ฃฐ ๋ ๋ฐ๋์ ์์ ํจ์์ฒ๋ผ ๋์ํด์ผ ํฉ๋๋ค.**

์ ํ๋ฆฌ์ผ์ด์ UI๋ ๋์ ์ด๋ฉฐ ์๊ฐ์ ๋ฐ๋ผ ๋ณํฉ๋๋ค. ๊ทธ๋์ ์ ๊ท์น์ ์๋ฐํ์ง ์๊ณ  ์ฌ์ฉ์ ์ก์, ๋คํธ์ํฌ ์๋ต ๋ฐ ๋ค๋ฅธ ์์์ ๋ํ ์๋ต์ผ๋ก ์๊ฐ์ ๋ฐ๋ผ ์์ ์ ์ถ๋ ฅ๊ฐ์ ๋ณ๊ฒฝํ  ์ ์๋ ๋ฐฉ๋ฒ์ `State`์๋๋ค.

์ด์  ์์ธํ ํ๋ฒ ์์๋ณด๋๋ก ํ ๊น์?

![image](https://blog.kakaocdn.net/dn/b7Ing6/btqDrkNbvBs/Mi1pUyMUSRYYLmE6zvjAG0/img.png)

# State and Lifecycle

์ด์ ์ ์งธ๊น๊ฑฐ๋ฆฌ๋ ์๊ณ๋ฅผ ๋๋๋ง ํ๊ฑฐ ๊ธฐ์ต๋์์ฃ ? ์ถ๋ ฅ๊ฐ์ ๋ณ๊ฒฝํ๊ธฐ ์ํด์ ์๋ก ์๋ฆฌ๋จผํธ๋ฅผ ๋๋๋งํ๋ ์์์ ํด์ฃผ์์ต๋๋ค.

```js
ReactDOM.render();
```

์ผ๋จ `Clock`์ด๋ผ๋ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด์ ์บก์ํ๋ฅผ ์งํํด์ค์๋ค.

```js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 1000);
```

์ด๋ ๊ฒ ์งํํ๋ฉด ๋๊ฒ ์ฃ ?

ํ์ง๋ง ์ฐ๋ฆฌ๊ฐ ๊ตฌํํ๊ณ  ์ถ์๊ฑด

```js
ReactDOM.render(<Clock />, document.getElementById("root"));
```

๋ฑ ์ด์ฝ๋ ํ๋ฒ๋ง ์คํํ๊ณ  ์ถ์ต๋๋ค.

์ด๋ด๋ `state`๋ฅผ ์ฌ์ฉํด์ผ ํ  ์ฐจ๋ก์๋๋ค.

**State๋ props์ ์ ์ฌํ์ง๋ง, ๋น๊ณต๊ฐ์ด๋ฉฐ ์ปดํฌ๋ํธ์ ์ํด ์์ ํ ์ ์ด๋ฉ๋๋ค.**

# ํจ์์์ ํด๋์ค๋ก ๋ณํํ๊ธฐ

state๋ฅผ ์ฌ์ฉํ ๋ ค๋ฉด classํ ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํด์ผ ํฉ๋๋ค.functionํ ์ปดํฌ๋ํธ์๋ state๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค. (React hooks๋ฅผ ์ฐ๋ฉด ๊ทธ๊ฒ ๊ฐ๋ฅํด์ง๋๋ค.)

๋ค์ ์ฝ๋๋ฅผ ํ๋ฒ ์ดํด๋ณผ๊น์?

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 1000);
```

์ด๋ฌ๋ฉด ํจ์ํ ์ปดํฌ๋ํธ๋ฅผ ํด๋์คํ ์ปดํฌ๋ํธ๋ก ๋ณํ์ด ์๋ฃ๋์์ต๋๋ค.

# ํด๋์ค์ ๋ก์ปฌ State ์ถ๊ฐํ๊ธฐ

classํ ์ปดํฌ๋ํธ์ constructor๋ฅผ ์ ์ํด ์ฃผ์ ๋ค์์ ๋ค์๊ณผ ๊ฐ์ ์ฝ๋๋ฅผ ์์ฑํด์ฃผ์ธ์.

```js
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

์ด ๊ณผ์ ์ด state๋ฅผ ์ ์ธํ๋ ๊ณผ์ ์๋๋ค.
super(props)์ด ๋ถ๋ถ์ ๋ชจ๋  classํ ์ปดํฌ๋ํธ๋ super(props)๋ฅผ ํด์ฃผ์ด์ผ ํฉ๋๋ค. (์์๋์ด์ง๋ ๊ด๊ณ์ด๊ธฐ ๋๋ฌธ์ด์ฃ )

๊ทธ ๋ค์ this.state = {...} ์ด ๋ถ๋ถ์ด state๋ฅผ ์ ์ธํ๋ ๋ถ๋ถ์๋๋ค.

date๋ผ๋ ์์ฑ์ new Date()๋ฅผ ํ๊ฒ ๋จ์ผ๋ก์จ ํ์  ์๊ฐ์ data๋ผ๋ state์ ๋ด๊ฒ ๋๋๊ฒ์ด์ฃ .

**์ต์ข ์ฝ๋๋ ๋ค์๊ณผ ๊ฐ์ต๋๋ค.**

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
```

ํ์ง๋ง ์คํํด๋ณด๋ฉด ์์์ง์ด์ฃ ?

๋น์ฐํฉ๋๋ค! **์๋ํ๋ฉด ๋งค์ด ์ค์ค๋ก ์์ง์ด๋ผ๋ ์ฝ๋๋ฅผ ์์ฑํ์ง ์์์ผ๋๊น์!**

ํ๋ฒ ํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

# ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ํด๋์ค์ ์ถ๊ฐํ๊ธฐ

Clock์ด ์ฒ์ DOM์ ๋๋๋ง ๋ ๋๋ง๋ค ํ์ด๋จธ๋ฅผ ์ค์ ํ ๋ ค๊ณ  ํฉ๋๋ค.
๋ํ DOM์ด ์ญ์ ๋ ๋๋ง๋ค ํ์ด๋จธ๋ฅผ ํด์ ํ ๋ ค๊ณ  ํฉ๋๋ค.

์ฌ๊ธฐ, ์ข์ ๊ธฐ๋ฅ์ด ์์ต๋๋ค.

```js
  componentDidMount() {
  }

  componentWillUnmount() {
  }
```

์ด ๊ธฐ๋ฅ์ ์ฌ์ฉํ๋ฉด ์ฝ๊ฒ ๋๋๋ง ๋  ๋, ์ญ์ ๋  ๋๋ฅผ ํ๋ณดํ  ์ ์์ต๋๋ค.

์ด๋ฌํ ๋ฉ์๋๋ค์ **์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ผ๊ณ  ํฉ๋๋ค.**

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
```

๋ค์๊ณผ ๊ฐ์ด ์์ฑํด์ฃผ์ธ์.

์ฝ๋๊ฐ ์ดํด๊ฐ์ง ์๋ ๋ถ๋ค์ ์ํ ์ค๋ชํ์์ด ์๊ฒ ์ต๋๋ค.

`componentDidMount`๋ ์ปดํฌ๋ํธ๊ฐ ๋๋๋ง ๋  ์๊ธฐ๋ฅผ ์๋ฏธํฉ๋๋ค.
๊ทธ๋ฌ๋ฉด

```js
componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
```

๋ค์๊ณผ ๊ฐ์ ์ฝ๋๋ **์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ ๋  ๋ ๋งค์ด tick์ด๋ผ๋ ํจ์๋ฅผ ์คํํ๋ค๋ ์๋ฏธ์๋๋ค.**

`componentWillUnmount`๋ ์ปดํฌ๋ํธ๊ฐ ์ญ์ ๋  ์๊ธฐ๋ฅผ ์๋ฏธํฉ๋๋ค.

```js
componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

๋ค์๊ณผ ๊ฐ์ ์ฝ๋๋ interval๋ ํ์ด๋จธ ํจ์๋ฅผ ์ปดํฌ๋ํธ๊ฐ ์ญ์ ๋  ๋ ์ ๊ฑฐํ๊ฒ ๋ค๋ ์๋ฏธ์๋๋ค.

# State ์๋ฐ์ดํธ๋ ๋น๋๊ธฐ์ ์ผ ์๋ ์์ต๋๋ค.

์ด ๋ถ๋ถ์์ state์ฌ์ฉ์ ์ค๋ฅ๊ฐ ๋๋ ๊ฒฝ์ฐ๊ฐ ๋ง์ด ์์ต๋๋ค.

this.props์ this.state๊ฐ ๋น๋๊ธฐ์ ์ผ๋ก ์๋ฐ์ดํธ๋  ์ ์๊ธฐ ๋๋ฌธ์ ๋ค์ state๋ฅผ ๊ณ์ฐํ  ๋ ํด๋น ๊ฐ์ ์์กดํด์๋ ์ ๋ฉ๋๋ค.

์๋ฅผ ํ๋ฒ ๋ค์ด๋ณผ๊น์?

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

์ด ์๋ฐ์ดํธ๋ ์คํจํ  ์ ์์ต๋๋ค.

์ด๋ฅผ ์์ ํ๊ธฐ ์ํด ๊ฐ์ฒด๋ณด๋ค๋ ํจ์๋ฅผ ์ธ์๋ก ์ฌ์ฉํ๋ ๋ค๋ฅธ ํํ์ setState()๋ฅผ ์ฌ์ฉํฉ๋๋ค. ๊ทธ ํจ์๋ ์ด์  state๋ฅผ ์ฒซ ๋ฒ์งธ ์ธ์๋ก ๋ฐ์๋ค์ผ ๊ฒ์ด๊ณ , ์๋ฐ์ดํธ๊ฐ ์ ์ฉ๋ ์์ ์ props๋ฅผ ๋ ๋ฒ์งธ ์ธ์๋ก ๋ฐ์๋ค์ผ ๊ฒ์๋๋ค.

์ฆ, ๋ค์ ํ์์ผ๋ก ์์ฑํ๋ฉด ๋ฉ๋๋ค.

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
```

์ด์  state์ ์๋ฐ์ดํธ๊ฐ ์ ์ฉ๋ props๋ฅผ ๋ฐ๊ณ  ์งํ์ ํ ๊ฒ๋๋ค.

> ๋ฌผ๋ก  ํ์ดํ ํจ์ ๋ง๊ณ  ๊ทธ๋ฅ functionํค์๋ ํจ์๋ ๊ฐ๋ฅํฉ๋๋ค.

![image](https://media.vlpt.us/images/daybreak/post/4dfb762a-30f3-48ed-a380-4260f8c7e39f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-07-09%2016.39.35.png)

์ด ๋ถ๋ถ ์ ํํ ์ง๊ณ  ๋์ด๊ฐ์ฃผ์ธ์!

# State ์๋ฐ์ดํธ๋ ๋ณํฉ๋ฉ๋๋ค

`setState()`๋ฅผ ํธ์ถํ  ๋ React๋ ์ ๊ณตํ ๊ฐ์ฒด๋ฅผ ํ์ฌ state๋ก ๋ณํฉํฉ๋๋ค.

```js
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

๋ค์ํ ๋๋ฆฝ์ ์ธ ๋ณ์๋ฅผ ์ ์ธํ  ์ ์์ต๋๋ค.

```js
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

**this.setState({comments})๋ this.state.posts์ ์ํฅ์ ์ฃผ์ง ์์ง๋ง this.state.comments๋ ์์ ํ ๋์ฒด๋ฉ๋๋ค.**

# ๋ฐ์ดํฐ๋ ์๋๋ก ํ๋ฆ๋๋ค.

์ปดํฌ๋ํธ๋ ์์ ์ state๋ฅผ ์์ ์ปดํฌ๋ํธ์ props๋ก ์ ๋ฌํ  ์ ์์ต๋๋ค.

```js
<FormattedDate date={this.state.date} />
```

> FormattedDate ์ปดํฌ๋ํธ๋ date๋ฅผ ์์ ์ props๋ก ๋ฐ์ ๊ฒ์ด๊ณ  ์ด๊ฒ์ด Clock์ state๋ก๋ถํฐ ์๋์ง, Clock์ props์์ ์๋์ง, ์๋์ผ๋ก ์๋ ฅํ ๊ฒ์ธ์ง ์์ง ๋ชปํฉ๋๋ค.

**ํธ๋ฆฌ๊ตฌ์กฐ๊ฐ props๋ค์ ํญํฌ๋ผ๊ณ  ์์ํ๋ฉด ๊ฐ ์ปดํฌ๋ํธ์ state๋ ์์์ ์ ์์ ๋ง๋์ง๋ง ๋์์ ์๋๋ก ํ๋ฅด๋ ๋ถ๊ฐ์ ์ธ ์์(water source)์ด๋ผ๊ณ  ํ  ์ ์์ต๋๋ค.**

# ์ด๋ฒคํธ ์ฒ๋ฆฌํ๊ธฐ ๐ช

React์์ ์ด๋ฒคํธ๋ฅผ ์ฒ๋ฆฌํ๋ ๋ฐฉ์์ DOM์๋ฆฌ๋จผํธ์์ ์ด๋ฒคํธ๋ฅผ ์ฒ๋ฆฌํ๋ ๋ฐฉ์๊ณผ ๊ฑฐ์ ๋์ผํฉ๋๋ค.

๋จ, ๋ฌธ๋ฒ์  ์ฐจ์ด๊ฐ ์์ต๋๋ค.

- React์ ์ด๋ฒคํธ๋ ์๋ฌธ์ ๋์  ์บ๋ฉ ์ผ์ด์ค(camelCase)๋ฅผ ์ฌ์ฉํฉ๋๋ค.
- JSX๋ฅผ ์ฌ์ฉํ์ฌ ๋ฌธ์์ด์ด ์๋ ํจ์๋ก ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ์ ๋ฌํฉ๋๋ค.

HTML์์ ์ด๋ฒคํธ๋ฅผ ์ฒ๋ฆฌํ๋ ๋ฐฉ๋ฒ์ ๋ค์๊ณผ ๊ฐ์ต๋๋ค.

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

React์์๋ ์กฐ๊ธ ๋ค๋ฅธ๋ฐฉ์์ผ๋ก ์ฒ๋ฆฌํฉ๋๋ค.

```jsx
<button onClick={activateLasers}>Activate Lasers</button>
```

๋ ๋ค๋ฅธ ์ฐจ์ด์ ์ผ๋ก, React์์๋ false๋ฅผ ๋ฐํํด๋ ๊ธฐ๋ณธ ๋์์ ๋ฐฉ์งํ  ์ ์์ต๋๋ค. ๋ฐ๋์ preventDefault๋ฅผ ๋ช์์ ์ผ๋ก ํธ์ถํด์ผ ํฉ๋๋ค.

์ด๊ฒ ๋ฌด์จ ๋ง์ธ์ง ์ดํด๊ฐ ๋์ง ์๋๋ค๋ฉด ๋ค์์ ์ฝ๋๋ฅผ ์ดํด๋ณด์ธ์.

HTML์์ aํ๊ทธ์ ์ ํ์ด์ง๋ฅผ ์ฌ๋ ๋์์ ๋ฐฉ์งํ๊ธฐ ์ํด์ ๋ค์๊ณผ ๊ฐ์ด ์๋๋ค.

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

๋ฆฌ์กํธ์์๋ return false๋ฅผ ํ๋ค๊ณ  ํด๊ฒฐ๋์ง ์์ต๋๋ค.

```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

`preventDefault()`๋ผ๋ ํจ์๋ฅผ ์ฌ์ฉํด์ **React ์ด๋ฒคํธ๋ ๋ธ๋ผ์ฐ์  ๊ณ ์  ์ด๋ฒคํธ์ ์ ํํ ๋์ผํ๊ฒ ๋์ํ์ง๋ ์์ต๋๋ค.**

๋ํ React์์ `addEventListener`๋ฅผ ์ฌ์ฉํ  ํ์๊ฐ ์์ต๋๋ค.

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // ์ฝ๋ฐฑ์์ `this`๊ฐ ์๋ํ๋ ค๋ฉด ์๋์ ๊ฐ์ด ๋ฐ์ธ๋ฉ ํด์ฃผ์ด์ผ ํฉ๋๋ค.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
```

์ด๋ ๊ฒ ์์ฑํ๋ฉด ์ ์ญ์ ์ผ๋ก onClick์ด ๋ฆฌ์ค๋ ๋ฉ๋๋ค.

ํ์ง๋ง ์ฝ๋๋ฅผ ๋ณด๋ฉด ์กฐ๊ธ ํ๊ฐ๋ฆฌ๋ ๋ถ๋ถ์ด ์์๊ฒ๋๋ค.

๋ฐ๋ก `.bind`๋ถ๋ถ์ธ๋ฐ์.

JSX์ฝ๋ฐฑ ์์์ this์ ์๋ฏธ๋ฅผ ์๊ฐํด ๋ณด์์ผํฉ๋๋ค.

**JavaScript์์ ํด๋์ค ๋ฉ์๋๋ ๊ธฐ๋ณธ์ ์ผ๋ก ๋ฐ์ธ๋ฉ๋์ด ์์ง ์์ต๋๋ค**

# ์ด๋ฒคํธ ํธ๋ค๋ฌ์ ์ธ์ ์ ๋ฌํ๊ธฐ

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

- ํ์ดํ ํจ์๋ฅผ ์ฌ์ฉํ๋ฉด event๋ฅผ ๋ช์์ ์ผ๋ก ์ ๋ฌํด ์ฃผ์ด์ผํ๊ณ ,
- bind๋ฅผ ํ๋ฉด ์๋์ผ๋ก event๊ฐ ์ ๋ฌ๋ฉ๋๋ค.

# ์กฐ๊ฑด๋ถ ๋ ๋๋ง

React์์๋ ์ํ๋ ๋์์ ์บก์ํํ๋ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค ์ ์์ต๋๋ค.

React์์ ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ JavaScript์์์ ์กฐ๊ฑด ์ฒ๋ฆฌ์ ๊ฐ์ด ๋์ํฉ๋๋ค

ํ๋ฒ ๋ณด๋๋ก ํ ๊น์?

๋ก๊ทธ์ธ์ ํ  ๋ ๋ก๊ทธ์ธ ์ํ์ ๋ง๋ ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋ง ํด์ฃผ์ด์ผ ํฉ๋๋ค.

์๋ฅผ ๋ค์ด์ ๋ฐ์ ๋ ์ปดํฌ๋ํธ๊ฐ ์๋ค๊ณ  ํด๋ด์๋ค.

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

๊ทธ๋ฌ๋ฉด ๋ก๊ทธ์ธ์ด ๋์์๋์ ์๋์์๋๋ฅผ ๋๋์ด์ ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ ํด์ผํ์ฃ ?

์ด์  ๊ทธ ๋ฐฉ๋ฒ์ ์ดํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
```

props๋ก ์ ๋ฌ๋ฐ์ isLoggedIn์ด๋ผ๋ ์ํ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก `if`์ผ๋ก ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ ํ๋ ๋ถ๋ถ์ด ๋ณด์ด์ฃ ?

```js
if (isLoggedIn) {
  return <UserGreeting />;
}
return <GuestGreeting />;
```

์ด๋ถ๋ถ์ ์ ์ฌํ ๋ด์ฃผ์ธ์.

**์ด ์์๋ isLoggedIn prop์ ๋ฐ๋ผ์ ๋ค๋ฅธ ์ธ์ฌ๋ง์ ๋ ๋๋ง ํฉ๋๋ค.**

์ปดํฌ๋ํธ ๋จ์ ๋ง๊ณ ๋ ์๋ฆฌ๋จผํธ ๋จ์๋ก๋ ๊ตฌํํ  ์ ์์ต๋๋ค.

๋ค์๊ณผ ๊ฐ์ ์ปดํฌ๋ํธ๊ฐ ์๋ค๊ณ  ์๊ฐํด๋ด์๋ค.

```js
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
```

```js
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));
```

์ด์  ๋ง๋ค์๋ ์ปดํฌ๋ํธ๋ฅผ ์ด๋ ๊ฒ ๋ ๋๋งํ  ์ ์์ต๋๋ค.

์ฌ๊ธฐ์ if๋ฌธ์ ์ฌ์ฉํด์ ์กฐ๊ฑด๋ถ ๋ ๋๋ง ํด๋ ๋์ง๋ง, ๋ค์ํ ๋ฐฉ๋ฒ์ ์ฌ์ฉํด์ ์ถ์ฝํ์ผ๋ก ์ฌ์ฉํ  ์ ์์ต๋๋ค.

# ๋ผ๋ฆฌ && ์ฐ์ฐ์๋ก If๋ฅผ ์ธ๋ผ์ธ์ผ๋ก ํํํ๊ธฐ

```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const messages = ["React", "Re: React", "Re:Re: React"];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById("root")
);
```

> JavaScript์์ true && expression์ ํญ์ expression์ผ๋ก ํ๊ฐ๋๊ณ  false && expression์ ํญ์ false๋ก ํ๊ฐ๋ฉ๋๋ค.

๋ฐ๋ผ์ && ๋ค์ ์๋ฆฌ๋จผํธ๋ ์กฐ๊ฑด์ด true์ผ๋ ์ถ๋ ฅ์ด ๋ฉ๋๋ค. ์กฐ๊ฑด์ด false๋ผ๋ฉด React๋ ๋ฌด์ํฉ๋๋ค.

# ์กฐ๊ฑด๋ถ ์ฐ์ฐ์๋ก If-Else๊ตฌ๋ฌธ ์ธ๋ผ์ธ์ผ๋ก ํํํ๊ธฐ

ํํ ์๋ ์ผํญ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํด์ ์ด๋ฅผ ๋ ์ถ์ฝํ  ์ ์์ต๋๋ค.

```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

์ด๋ ๊ฐ๋จํ ์์์ด์ง๋ง, ๋์ค์ ์กฐ๊ฑด์ด ๋ง์์ง๋ฉด ์ด ๋ฐฉ๋ฒ์ด ๋ณต์กํ  ์ ์์ต๋๋ค.

**JavaScript์ ๋ง์ฐฌ๊ฐ์ง๋ก, ๊ฐ๋์ฑ์ด ์ข๋ค๊ณ  ์๊ฐํ๋ ๋ฐฉ์์ ์ ํํ๋ฉด ๋ฉ๋๋ค. ๋ํ ์กฐ๊ฑด์ด ๋๋ฌด ๋ณต์กํ๋ค๋ฉด ์ปดํฌ๋ํธ๋ฅผ ๋ถ๋ฆฌํ๊ธฐ ์ข์ ๋ ์ผ ์๋ ์๋ค๋ ๊ฒ์ ๊ธฐ์ตํ์ธ์.**

# ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋งํ๋ ๊ฒ์ ๋ง๊ธฐ

์ ๋ ๋ฌด์จ ํ๋ก๊ทธ๋จ์ด๋ ์ต์ ํ๊ฐ ๊ฐ์ฅ ์ค์ํ๋ค๊ณ  ์๊ฐํฉ๋๋ค.

์ด ๋ถ๋ถ์ ์ต์ ํ์ ๊ด๋ จ๋ ๋ถ๋ถ์ด๋ฏ๋ก ์ง์คํด์ ๊ณต๋ถํด๋ณด๊ฒ ์ต๋๋ค.

์๋์ ์์์์๋ <WarningBanner />๊ฐ warn prop์ ๊ฐ์ ์ํด์ ๋ ๋๋ง๋ฉ๋๋ค. prop์ด false๋ผ๋ฉด ์ปดํฌ๋ํธ๋ ๋ ๋๋งํ์ง ์๊ฒ ๋ฉ๋๋ค.

```js
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));
```

์ปดํฌ๋ํธ์ render ๋ฉ์๋๋ก๋ถํฐ null์ ๋ฐํํ๋ ๊ฒ์ ์๋ช์ฃผ๊ธฐ ๋ฉ์๋ ํธ์ถ์ ์ํฅ์ ์ฃผ์ง ์์ต๋๋ค. ๊ทธ ์๋ก componentDidUpdate๋ ๊ณ์ํด์ ํธ์ถ๋๊ฒ ๋ฉ๋๋ค.

# ๋ฆฌ์คํธ์ Key

๋จผ์  JavaScript์์ ๋ฆฌ์คํธ๋ฅผ ์ด๋ป๊ฒ ๋ณํํ๋์ง ์ดํด๋ด์๋ค.

TicTacToe๋ฅผ ๊ตฌํํ๋ฉด์ key์ ๋ฆฌ์คํธ ๊ด๋ จํด์ ์ด์๊ฐ ์์๋ ์ ์ด์์ฃ ?

์ด๋ฒ ์ฑํฐ์์๋ ๊ทธ๊ฑธ ๋ ์์ธํ ์์๋ณผ๋ ค๊ณ  ํด์.

๋ฆฌ์กํธ์์ ์๋ฆฌ๋จผํธ ๋ฆฌ์คํธ๋ฅผ ๋ง๋๋ ๋ฐฉ๋ฒ์ ๋ค์๊ณผ ์ ์ฌํฉ๋๋ค.

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

- ์ฌ๋ฌ๊ฐ์ ์ปดํฌ๋ํธ ๋ ๋๋งํ๊ธฐ

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
```

์ด๋ฌ๋ฉด listItems๋ ๋ค์๊ณผ ๊ฐ์ ๋ชจ์ต์ ํ๊ณ ์์ ๊ฒ๋๋ค.

```html
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
```

๊ฐ๋จํ์ฃ ?

**์ผ๋ฐ์ ์ผ๋ก ์ปดํฌ๋ํธ ์์์ ๋ฆฌ์คํธ๋ฅผ ๋ ๋๋งํฉ๋๋ค.**

๋ค์๊ณผ ๊ฐ์ด ์์ฑํฉ๋๋ค.

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

์, ์คํํด๋ณด์ธ์.

์ค๋ฅ๊ฐ ๋จ๋์?

์ฝ๋๋ฅผ ์์ ์ฝ๋ ๊ทธ๋๋ก ์ด ๊ฒ ๋ง๋ค๋ฉด, ์ค๋ฅ๋จ๋๊ฒ ์ ์์๋๋ค.
![image](https://user-images.githubusercontent.com/48292190/116847416-6ef13100-ac25-11eb-9a79-ae3cd0c6873a.png)

**๋ฆฌ์คํธ์ ๊ฐ ํญ๋ชฉ์ key๋ฅผ ๋ฃ์ด์ผ ํ๋ค๋ ๊ฒฝ๊ณ ๊ฐ ํ์๋ฉ๋๋ค.**

โkeyโ๋ ์๋ฆฌ๋จผํธ ๋ฆฌ์คํธ๋ฅผ ๋ง๋ค ๋ ํฌํจํด์ผ ํ๋ ํน์ํ ๋ฌธ์์ด ์ดํธ๋ฆฌ๋ทฐํธ์๋๋ค.

key์ ์ญํ ์ ๋ํด์๋ ๋ค์์ ๋์ฑ ์์ธํ ์ค๋ชํด๋ณด์ฃ .

์ง๊ธ์ ์ค๋ฅ๋ถํฐ ํด๊ฒฐํด ๋ณด์๊ตฌ์.

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li key={number}>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

์ด๋์ ์ค๋ฅ๊ฐ ์ ์์ด์ก๋์?

# key

์ด์  key๊ฐ ํ๋ ์ญํ ์ ์ข ๋ ์์ธํ ์์๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

key๋ ์ผ์ข์ ์๋ณํ๊ธฐ ์ํ ์์ฑ์๋๋ค.

์ด๋ค ํญ๋ชฉ์ ๋ณ๊ฒฝ, ์ถ๊ฐ ๋๋ ์ญ์ ํ ์ง ์๋ณํ๋ ๊ฒ์ ๋์ต๋๋ค.

Key๋ฅผ ์ ํํ๋ ๊ฐ์ฅ ์ข์ ๋ฐฉ๋ฒ์ ๋ฆฌ์คํธ์ ๋ค๋ฅธ ํญ๋ชฉ๋ค ์ฌ์ด์์ ํด๋น ํญ๋ชฉ์ ๊ณ ์ ํ๊ฒ ์๋ณํ  ์ ์๋ ๋ฌธ์์ด์ ์ฌ์ฉํ๋ ๊ฒ์๋๋ค. ๋๋ถ๋ถ์ ๊ฒฝ์ฐ ๋ฐ์ดํฐ์ ID๋ฅผ key๋ก ์ฌ์ฉํฉ๋๋ค.

**์ ๋ง ๋ง์ฝ์ ๋ฐ์ดํฐ์ idํญ๋ชฉ์ด ์๋ค๋ฉด ์ตํ์ ์๋จ์ผ๋ก index๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.**

```js
const todoItems = todos.map((todo, index) => (
  // Only do this if items have no stable IDs
  <li key={index}>{todo.text}</li>
));
```

๊ถ์ฅํ๋ ๋ฐฉ๋ฒ์ ์๋๋ฉฐ, ์ด๋ก ์ธํด ์ฑ๋ฅ์ด ์ ํ๋๊ฑฐ๋ ์ปดํฌ๋ํธ์ state์ ๊ด๋ จ๋ ๋ฌธ์ ๊ฐ ๋ฐ์ํ  ์ ์์ต๋๋ค.

**๋ง์ฝ ๋ฆฌ์คํธ ํญ๋ชฉ์ ๋ช์์ ์ผ๋ก key๋ฅผ ์ง์ ํ์ง ์์ผ๋ฉด React๋ ๊ธฐ๋ณธ์ ์ผ๋ก ์ธ๋ฑ์ค๋ฅผ key๋ก ์ฌ์ฉํฉ๋๋ค.**

๊ทธ๋์ ์ค๋ฅ๋ก๋ง ๋๋๋ ๊ฒ์ด์ฃ .

๋ค์์ ์๋ชป๋ key์ ์ฌ์ฉ๋ฒ์๋๋ค.

```js
function ListItem(props) {
  const value = props.value;
  return (
    // ํ๋ ธ์ต๋๋ค! ์ฌ๊ธฐ์๋ key๋ฅผ ์ง์ ํ  ํ์๊ฐ ์์ต๋๋ค.
    <li key={value.toString()}>{value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // ํ๋ ธ์ต๋๋ค! ์ฌ๊ธฐ์ key๋ฅผ ์ง์ ํด์ผ ํฉ๋๋ค.
    <ListItem value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

๋ค์์ key์ ์ณ์ ์ฌ์ฉ๋ฒ์๋๋ค.

```js
function ListItem(props) {
  // ๋ง์ต๋๋ค! ์ฌ๊ธฐ์๋ key๋ฅผ ์ง์ ํ  ํ์๊ฐ ์์ต๋๋ค.
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // ๋ง์ต๋๋ค! ๋ฐฐ์ด ์์ key๋ฅผ ์ง์ ํด์ผ ํฉ๋๋ค.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

๊ฐ์ด ์กํ์๋์?

# Key๋ ํ์  ์ฌ์ด์์๋ง ๊ณ ์ ํ ๊ฐ์ด์ด์ผ ํ๋ค.

์ด ๋ถ๋ถ์ ์ฝ๋๋ฅผ ๋ณด๋ฉด ์ดํด๊ฐ ๊ฐ์ค๊ฒ๋๋ค.

```js
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
```

post.id๊ฐ ๋๋ฒ ์ฌ์ฉ๋์๋๋ฐ ์ ์คํ๋ฉ๋๋ค.

์ฆ ์ฌ๊ธฐ์ ์ ์ ์๋ ์ฌ์ค์,

**Key๋ ๋ฐฐ์ด ์์์ ํ์  ์ฌ์ด์์ ๊ณ ์ ํด์ผ ํ๊ณ  ์ ์ฒด ๋ฒ์์์ ๊ณ ์ ํ  ํ์๋ ์์ต๋๋ค. ๋ ๊ฐ์ ๋ค๋ฅธ ๋ฐฐ์ด์ ๋ง๋ค ๋ ๋์ผํ key๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.**

React์์ key๋ ํํธ๋ฅผ ์ ๊ณตํ์ง๋ง ์ปดํฌ๋ํธ๋ก ์ ๋ฌํ์ง๋ ์์ต๋๋ค.

์ฆ, ์ปดํฌ๋ํธ์์ key์ ์ ๊ทผํ  ์ ์๋ค๋ ๊ฒ์ด์ง์.

๋ง์ฝ ๋ค์๊ณผ ๊ฐ์ด ์์ฑ์ ์ ๋ฌํ๋ค๊ณ  ํด๋ด์๋ค.

```js
const content = posts.map((post) => (
  <Post key={post.id} id={post.id} title={post.title} />
));
```

๊ทธ ๋ค์ ์ปดํฌ๋ํธ์์ props.key๋ฅผ ์ ๊ทผํ ๋ ค๊ณ  ํ๋ฉด ์ฝ์ ์ ์์ต๋๋ค.

**์ด์  ์ด๋์ ๋ key๊ฐ๋์ด ์ดํด๊ฐ ๊ฐ์๋์?**

# ๐ฌ ํผ

์ต์ํ ์ฌ๋ฌ๋ถ๋ค์ด HTML์์ formํ๊ทธ๋ฅผ ์ฌ์ฉํด๋ดค๋ค๋ฉด
๋ค์์ฝ๋๋ฅผ ์ดํดํ์ค ์ ์์๊ฒ๋๋ค.

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

**์ด ํผ์ ์ฌ์ฉ์๊ฐ ํผ์ ์ ์ถํ๋ฉด ์๋ก์ด ํ์ด์ง๋ก ์ด๋ํ๋ ๊ธฐ๋ณธ HTML ํผ ๋์์ ์ํํฉ๋๋ค.**

React์์ ๋์ผํ ๋์์ ์ํ๋ค๋ฉด ๊ทธ๋๋ก ์ฌ์ฉํ๋ฉด ๋ฉ๋๋ค. ๊ทธ๋ฌ๋ ๋๋ถ๋ถ์ ๊ฒฝ์ฐ, JavaScript ํจ์๋ก ํผ์ ์ ์ถ์ ์ฒ๋ฆฌํ๊ณ  ์ฌ์ฉ์๊ฐ ํผ์ ์๋ ฅํ ๋ฐ์ดํฐ์ ์ ๊ทผํ๋๋ก ํ๋ ๊ฒ์ด ํธ๋ฆฌํฉ๋๋ค

์ด๋ฅผ ์ํ ํ์ค ๋ฐฉ์์ โ์ ์ด ์ปดํฌ๋ํธ (controlled components)โ๋ผ๊ณ  ๋ถ๋ฆฌ๋ ๊ธฐ์ ์ ์ด์ฉํ๋ ๊ฒ์๋๋ค.

## ์ ์ด ์ปดํฌ๋ํธ (Controlled Component)

HTML์์ `<input>`, `<textarea>`, `<select>`์ ๊ฐ์ ํผ ์๋ฆฌ๋จผํธ๋ ์ผ๋ฐ์ ์ผ๋ก ์ฌ์ฉ์์ ์๋ ฅ์ ๊ธฐ๋ฐ์ผ๋ก ์์ ์ state๋ฅผ ๊ด๋ฆฌํ๊ณ  ์๋ฐ์ดํธํฉ๋๋ค. React์์๋ ๋ณ๊ฒฝํ  ์ ์๋ state๊ฐ ์ผ๋ฐ์ ์ผ๋ก ์ปดํฌ๋ํธ์ state ์์ฑ์ ์ ์ง๋๋ฉฐ setState()์ ์ํด ์๋ฐ์ดํธ๋ฉ๋๋ค.

**React์ ์ํด ๊ฐ์ด ์ ์ด๋๋ ์๋ ฅ ํผ ์๋ฆฌ๋จผํธ๋ฅผ โ์ ์ด ์ปดํฌ๋ํธ (controlled component)โ๋ผ๊ณ  ํฉ๋๋ค.**

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

value ์ดํธ๋ฆฌ๋ทฐํธ๋ ํผ ์๋ฆฌ๋จผํธ์ ์ค์ ๋๋ฏ๋ก ํ์๋๋ ๊ฐ์ ํญ์ this.state.value๊ฐ ๋๊ณ  React state๋ ์ ๋ขฐ ๊ฐ๋ฅํ ๋จ์ผ ์ถ์ฒ (single source of truth)๊ฐ ๋ฉ๋๋ค. React state๋ฅผ ์๋ฐ์ดํธํ๊ธฐ ์ํด ๋ชจ๋  ํค ์๋ ฅ์์ handleChange๊ฐ ๋์ํ๊ธฐ ๋๋ฌธ์ ์ฌ์ฉ์๊ฐ ์๋ ฅํ  ๋ ๋ณด์ฌ์ง๋ ๊ฐ์ด ์๋ฐ์ดํธ๋ฉ๋๋ค.

์ ์ด ์ปดํฌ๋ํธ๋ก ์ฌ์ฉํ๋ฉด, input์ ๊ฐ์ ํญ์ React state์ ์ํด ๊ฒฐ์ ๋ฉ๋๋ค. ์ฝ๋๋ฅผ ์กฐ๊ธ ๋ ์์ฑํด์ผ ํ๋ค๋ ์๋ฏธ์ด์ง๋ง, **๋ค๋ฅธ UI ์๋ฆฌ๋จผํธ์ input์ ๊ฐ์ ์ ๋ฌํ๊ฑฐ๋ ๋ค๋ฅธ ์ด๋ฒคํธ ํธ๋ค๋ฌ์์ ๊ฐ์ ์ฌ์ค์ ํ  ์ ์์ต๋๋ค.**

## textarea ํ๊ทธ

HTML์์ `<textarea>` ์๋ฆฌ๋จผํธ๋ ํ์คํธ๋ฅผ ์์์ผ๋ก ์ ์ํฉ๋๋ค.

React์์ `<textarea>`๋ value ์ดํธ๋ฆฌ๋ทฐํธ๋ฅผ ๋์  ์ฌ์ฉํฉ๋๋ค.

```js
<textarea value={this.state.value} onChange={this.handleChange} />
```

์ด๋ฐ์์ผ๋ก ์ฌ์ฉํฉ๋๋ค.

## select ํ๊ทธ

HTML์์ `<select>`๋ ๋๋กญ ๋ค์ด ๋ชฉ๋ก์ ๋ง๋ญ๋๋ค. ์๋ฅผ ๋ค์ด, ์ด HTML์ ๊ณผ์ผ ๋๋กญ ๋ค์ด ๋ชฉ๋ก์ ๋ง๋ญ๋๋ค.

```js
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">
    Coconut
  </option>
  <option value="mango">Mango</option>
</select>
```

selected ์ต์์ด ์์ผ๋ฏ๋ก Coconut ์ต์์ด ์ด๊ธฐ๊ฐ์ด ๋๋ ์ ์ ์ฃผ์ํด์ฃผ์ธ์.

React์์๋ selected ์ดํธ๋ฆฌ๋ทฐํธ๋ฅผ ์ฌ์ฉํ๋ ๋์  **์ต์๋จ selectํ๊ทธ์ value ์ดํธ๋ฆฌ๋ทฐํธ๋ฅผ ์ฌ์ฉํฉ๋๋ค.** ํ ๊ณณ์์ ์๋ฐ์ดํธ๋ง ํ๋ฉด๋๊ธฐ ๋๋ฌธ์ ์ ์ด ์ปดํฌ๋ํธ์์ ์ฌ์ฉํ๊ธฐ ๋ ํธํฉ๋๋ค. ์๋๋ ์์์๋๋ค.

```js
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

`์ ๋ฐ์ ์ผ๋ก <input type="text">, <textarea> ๋ฐ <select> ๋ชจ๋ ๋งค์ฐ ๋น์ทํ๊ฒ ๋์ํฉ๋๋ค. ๋ชจ๋ ์ ์ด ์ปดํฌ๋ํธ๋ฅผ ๊ตฌํํ๋๋ฐ value ์ดํธ๋ฆฌ๋ทฐํธ๋ฅผ ํ์ฉํฉ๋๋ค.`

![image](https://user-images.githubusercontent.com/48292190/116849907-9a2a4f00-ac2a-11eb-8719-49bef877e570.png)

# file input ํ๊ทธ

```js
<input type="file" />
```

๊ฐ์ด ์ฝ๊ธฐ ์ ์ฉ์ด๊ธฐ ๋๋ฌธ์ React์์๋ ๋น์ ์ด ์ปดํฌ๋ํธ์๋๋ค.

# ๋ค์ค ์๋ ฅ ์ ์ดํ๊ธฐ

์ฌ๋ฌ input ์๋ฆฌ๋จผํธ๋ฅผ ์ ์ดํด์ผํ  ๋, ๊ฐ ์๋ฆฌ๋จผํธ์ name ์ดํธ๋ฆฌ๋ทฐํธ๋ฅผ ์ถ๊ฐํ๊ณ  event.target.name ๊ฐ์ ํตํด ํธ๋ค๋ฌ๊ฐ ์ด๋ค ์์์ ํ  ์ง ์ ํํ  ์ ์๊ฒ ํด์ค๋๋ค.

```js
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
```

`computed property name`๋ฅผ ์ฌ์ฉํด์ ๋์ฑ ๊ฐ๋จํ๊ฒ state๋ฅผ ์๋ฐ์ดํธ๋ฅผ ํ  ์ ์์ต๋๋ค.

```js
this.setState({
  [name]: value,
});
```

computed property name๋ฅผ ์ฌ์ฉํ์ง ์๋๋ค๋ฉด ์ฝ๋์ ์์ด ๊ธธ์ด์ง ๊ฒ๋๋ค.

```js
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

> setState()๋ ์๋์ ์ผ๋ก ํ์ฌ state์ ์ผ๋ถ state๋ฅผ ๋ณํฉํ๊ธฐ ๋๋ฌธ์ ๋ฐ๋ ๋ถ๋ถ์ ๋ํด์๋ง ํธ์ถํ๋ฉด ๋ฉ๋๋ค.

# ์ ์ด๋๋ Input Null ๊ฐ

value prop์ ์ง์ ํ๋ฉด ์๋ํ์ง ์๋ ํ ์ฌ์ฉ์๊ฐ ๋ณ๊ฒฝํ  ์ ์์ต๋๋ค. value๋ฅผ ์ค์ ํ๋๋ฐ ์ฌ์ ํ ์์ ํ  ์ ์๋ค๋ฉด ์ค์๋ก value๋ฅผ undefined๋ null๋ก ์ค์ ํ์ ์ ์์ต๋๋ค.

```js
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function () {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

**์ ์ฝ๋๋ ์ฒซ ๋ฒ์งธ ์๋ ฅ์ ์ ๊ฒจ์์ง๋ง 1์ด ํ ์๋ ฅ์ด ๊ฐ๋ฅํด์ง๋๋ค.**

# State ๋์ด์ฌ๋ฆฌ๊ธฐ

![image](https://user-images.githubusercontent.com/48292190/116857141-4bcf7d00-ac37-11eb-8ab4-4b753b17af9c.png)

> โ ๏ธ ์ด ํํธ๋ ์ด๋ ค์ด ์ฌ์ ์ด ๋ ์๋ ์์ต๋๋ค. ์ ์  ๋ฐ์ง์ฐจ๋ฆฌ๊ณ  ๋ฐ๋ผ์ค์ธ์.

**์ด๋ฒ ์น์์์๋ ์ฃผ์ด์ง ์จ๋์์ ๋ฌผ์ ๋๋ ์ฌ๋ถ๋ฅผ ์ถ์ ํ๋ ์จ๋ ๊ณ์ฐ๊ธฐ๋ฅผ ๋ง๋ค์ด๋ณผ ๊ฒ์๋๋ค.**

๋จผ์  `BoilingVerdict`์ด๋ผ๋ ์ปดํฌ๋ํธ๋ถํฐ ๋ง๋ค์ด๋ด์๋ค.

**์ด ์ปดํฌ๋ํธ๋ ์ญ์จ์จ๋๋ฅผ ์๋ฏธํ๋ celsius prop๋ฅผ ๋ฐ์์ ์ด ์จ๋๊ฐ ๋ฌผ์ด ๋๊ธฐ์ ์ถฉ๋ถํ์ง ์ฌ๋ถ๋ฅผ ์ถ๋ ฅํฉ๋๋ค.**

```js
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
```

๊ทธ ๋ค์ `Calculator`๋ผ๋ ์ปดํฌ๋ํธ๋ ํ๋ ๋ง๋ค์ด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

**์ด ์ปดํฌ๋ํธ๋ ์จ๋๋ฅผ ์๋ ฅํ  ์ ์๋ `<input>`์ ๋ ๋๋งํ๊ณ  ๊ทธ ๊ฐ์ this.state.temperature์ ์ ์ฅํฉ๋๋ค.**

```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
```

์ด์  ๋ ๋๋ง๋ ํ๋ฉด์ ๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

![image](https://user-images.githubusercontent.com/48292190/116857877-7a9a2300-ac38-11eb-827a-5e9fcd473273.png)

_100๋๊ฐ ๋์ด๊ฐ๋ฉด ์๋์ผ๋ก ๋ ๋๋ง ๋๋ ๋ชจ์ต์ ๋ณผ ์ ์์ฃ ?_

# ๋ ๋ฒ์งธ Input ์ถ๊ฐํ๊ธฐ

์ด์  ํ์จ ์๋ ฅ์นธ๋ ๋ง๋ค์ด์ผํ๊ธฐ ๋๋ฌธ์ Calculator์์ TemperatureInput๋ผ๋ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด์ ์๋ก ์ฌ๋ฆฌ๋ ์์์ ํด์ฃผ์ด์ผ ํฉ๋๋ค.

๋ค์๊ณผ ๊ฐ์ด TemperatureInput์ ๋ก์ง๋ค์ ์ฌ๋ ค์ฃผ๊ณ , Calculator์์ ๋๊ฐ์ TemperatureInput์ ๋๋๋ง ์์ผ์ค์๋ค.

```js
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
```

๊ทธ๋ฌ๋ฉด ํ๋ฉด์ input ์ปดํฌ๋ํธ๊ฐ 2๊ฐ๊ฐ ๋์ฌ๊ฒ๋๋ค.

![image](https://user-images.githubusercontent.com/48292190/116858378-3bb89d00-ac39-11eb-8e66-b23f42869d52.png)

๋ ์ค ํ๋์ ์จ๋๋ฅผ ์๋ ฅํ๋๋ผ๋ ๋ค๋ฅธ ํ๋๋ ๊ฐฑ์ ๋์ง ์๋ ๋ฌธ์ ๊ฐ ์์ต๋๋ค.

์ด์  ํ๋ํ๋ ๊ฐ๋ฐํด๋ด์๋ค.

# ๋ณํ ํจ์ ์์ฑํ๊ธฐ

์ญ์จ๋ฅผ ํ์จ๋ก, ๋๋ ๊ทธ ๋ฐ๋๋ก ๋ณํํด์ฃผ๋ ํจ์๋ฅผ ์์ฑํด๋ณด๊ฒ ์ต๋๋ค.

```js
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
```

๋ค์์ ๊ณต์์๋๋ค.

๋ ํจ์๋ ๊ณต์์ ๋ฐํํฉ๋๋ค.

์ด์  temperature ๋ฌธ์์ด๊ณผ ๋ณํ ํจ์๋ฅผ ์ธ์๋ก ์ทจํด์ ๋ฌธ์์ด์ ๋ฐํํ๋ ๋ ๋ค๋ฅธ ํจ์๋ฅผ ์์ฑํด๋ณด๊ฒ ์ต๋๋ค

```js
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

> ์๋ฅผ ๋ค์ด tryConvert('abc', toCelsius)๋ ๋น ๋ฌธ์์ด์ ๋ฐํํ๊ณ  tryConvert('10.22', toFahrenheit)๋ '50.396'์ ๋ฐํํฉ๋๋ค.

# State ๋์ด์ฌ๋ฆฌ๊ธฐ

์ฐ๋ฆฌ๋ ๋ ์๋ ฅ๊ฐ์ด ์๋ก์ ๊ฒ๊ณผ ๋๊ธฐํ๋ ์ํ๋ก ์๊ธธ ์ํฉ๋๋ค. ์ญ์จ์จ๋ ์๋ ฅ๊ฐ์ ๋ณ๊ฒฝํ  ๊ฒฝ์ฐ ํ์จ์จ๋ ์๋ ฅ๊ฐ ์ญ์ ๋ณํ๋ ์จ๋๋ฅผ ๋ฐ์ํ  ์ ์์ด์ผ ํ๋ฉฐ, ๊ทธ ๋ฐ๋์ ๊ฒฝ์ฐ์๋ ๋ง์ฐฌ๊ฐ์ง์ฌ์ผ ํฉ๋๋ค.

**React์์ state๋ฅผ ๊ณต์ ํ๋ ์ผ์ ๊ทธ ๊ฐ์ ํ์๋ก ํ๋ ์ปดํฌ๋ํธ ๊ฐ์ ๊ฐ์ฅ ๊ฐ๊น์ด ๊ณตํต ์กฐ์์ผ๋ก state๋ฅผ ๋์ด์ฌ๋ฆผ์ผ๋ก์จ ์ด๋ค๋ผ ์ ์์ต๋๋ค.**

```js
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
```

์์ฑ๋ ์ต์ข ์ฝ๋์๋๋ค.

์ด์  ๋์ถฉ ๋ฆฌ์กํธ์ ๋ํ ์ ๋ฐ์ ์ธ ๋๋์ ๊ฐ์ง๊ณ  ๊ณ์๊ฒ ์ฃ ?

์ด์  ์ฌ๋ฌ๋ถ๋ค์ด ํด์ผํ  ๊ฒ์ 

# ๋ฆฌ์กํธ๋ก ์ฌ๊ณ ํ๊ธฐ ์๋๋ค.

[์ด ๋งํฌ](https://ko.reactjs.org/docs/thinking-in-react.html)๋ก ๊ฐ์์ ๋ฆฌ์กํธ๋ก ์ฌ๊ณ ํ๋ ๋ฐฉ๋ฒ์ ์ข ๋ ์ฐ๊ตฌํด๋ณด์ธ์! 

# ์๊ณ ํ์จ์ต๋๋ค! 
![image](https://i.pinimg.com/originals/a1/7c/c1/a17cc10c65943d6b1f319b72aa4aa1d5.gif)

์ด์  ์ฌ๋ฌ๋ถ์ ๊ฐ๋จํ ๋ฆฌ์กํธ ๊ฐ๋์ ๋ํด์ ์์๋ณด์์ต๋๋ค! 


