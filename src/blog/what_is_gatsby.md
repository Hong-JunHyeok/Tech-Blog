---
title : 개츠비란 무엇인가?
name : 홍준혁
createdAt: 2021년 4월 29일
profile: "https://avatars.githubusercontent.com/u/48292190?v=4"
desc : Gatsby로 정적웹사이트를 만드는 방법을 알아보도록 합시다!
---

# 🦹🏼‍♂️ Gatsby

Gatsby 사이트를 쉽게 생성하기 위해서 다음과 같은 명령어를 수행해주면 된다.

```
npm install -g gatsby-cli
```

Gatsby CLI를 통해 쉽고 다양한 기능들을 사용 해볼수있다.

```javascript
//개츠비 명령어 보기
gatsby --help
```

# 🏰 간단히 Hello World 스타터를 이용하여 Gatsby를 빌드해봅시다.

```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

개츠비 Hello World 스타터를 사용해보기 위해 다음 명령어를 해당 폴더에 쳐줍시다.

- new명령어는 새로운 개츠비 프로젝트를 생성하겠다는 의미이다.
- new 다음에 오는 hello-world는 생성된 폴더의 이름이고 바꿀수 있다.
- 마지막으로 지정된 GitHub URL은 사용하려는 시작 코드가있는 코드 저장소를 가리킨다.

생성한 폴더로 가서

```
cd hello-world
```

```
gatsby develop
```

개발모드로 시작해보자.

![image](https://user-images.githubusercontent.com/48292190/115961222-6d05de80-a550-11eb-8419-637d2b62a1ec.png)

이제 당신의 **로컬환경**에서 서버가 돌아갈것이다.

> 만약 빌드에 성공했다면, [링크](http://localhost:8000/)

해당 프로세스를 Kill할려면 `control + c`로 터미널을 종료한다.

정리

- Gatsby CLI 도구를 사용하여 새 Gatsby 사이트 생성
- Gatsby 개발 서버를 실행하고 사이트를 로컬로 방문했습니다.

> HTML : 모든 웹 브라우저가 이해할 수있는 마크 업 언어입니다. HyperText Markup Language의 약자입니다. HTML은 웹 콘텐츠에 보편적 인 정보 구조를 제공하여 제목, 단락 등을 정의합니다.

> CSS : 웹 콘텐츠 (글꼴, 색상, 레이아웃 등)의 스타일을 지정하는 데 사용되는 표현 언어입니다. Cascading Style Sheets의 약자입니다.

> JavaScript : 웹을 역동적이고 인터랙티브하게 만드는 데 도움이되는 프로그래밍 언어입니다.

> React : 사용자 인터페이스 구축을위한 코드 라이브러리 (JavaScript로 구축). Gatsby가 페이지를 구축하고 콘텐츠를 구조화하는 데 사용하는 프레임 워크입니다.

> GraphQL : 웹 사이트로 데이터를 가져올 수있는 쿼리 언어입니다. Gatsby가 사이트 데이터를 관리하는 데 사용하는 인터페이스입니다.

# 🕵️‍♂️ 코드 자세히 살펴보기

아까 `🏰 간단히 Hello World 스타터를 이용하여 Gatsby를 빌드해봅시다.`에서 빌드했던 hello-world스타터의 코드를 좀 더 자세히 살펴보도록 하자.

```
gatsby new [SITE_DIRECTORY_NAME]        [URL_OF_STARTER_GITHUB_REPO]
```

다음과 같은 형식으로 개츠비 프로젝트를 빌드할수 있다는 사실은 이제 다 아는 사실이다.

> 아까 스타터로 프로젝트를 빌드했다면 다음과 같은 구조를 가지고 있을것이다.
> ![image](https://user-images.githubusercontent.com/48292190/115961609-16999f80-a552-11eb-881b-94581debbc2d.png)

우리는 Gatsby코드에 조금 더 익숙해져야할 필요성이 있다.😋

`/src` 에 `src/pages/index.js`를 열어보도록 하자.

```javascript
import React from "react";

export default function Home() {
  return <div>Hello world!</div>;
}
```

우리가 리액트를 조금이라도 해봤다면 이 코드가 뭐하는 아이인지 다 알것이다.
**그렇다면 우리는 리액트 프로젝트를 진행했던것처럼 Hello World를 Hello Gatsby로 변경해서 저장후 웹사이트에서 변화를 관찰해보자.**

<del>
저장후 바로 리로딩이 안돼요!
제 생각에 이 문제는 gatsby의 오류라고 생각합니다. 버전을 다운드레이드 하거나, 불편하더라도 여러번(2~3번) 저장 후 보면 리로딩이 되어 있습니다. 
</del>

# 핫로딩 문제 해결

webpack dev server가 핫 모듈 교체를 위해 0.0.0.0을 localhost로 인식하지 못하는 문제

```
gatsby develop --host localhost --port 8000
```

위와 같이 실행하면 문제 해결

```javascript
import React from "react";

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
```

공식 문서처럼 다음과 같이 작성하고보면,
![image](https://user-images.githubusercontent.com/48292190/115962551-e6a0cb00-a556-11eb-9f26-f1cf2efb61d7.png)
이렇게 예상했던것처럼 잘 나오는 것을 볼 수 있다.

아까도 말했지만 어느정도 리액트를 해본 사람이라면 눈치를 챘을것이다.
**Gatsby는 리액트를 기반으로 돌아간다.**

`src/pages/*.js`안에 내용들은 전부 페이지가 된다.
이제 실제로 되는 것인지 한번 확인해보도록 하자.

![image](https://user-images.githubusercontent.com/48292190/115963458-4d73b380-a55a-11eb-8a85-67495f65726b.png)
이렇게 about이라는 파일을 만들고 다음과 같이 작성해주자.

```javascript
import React from "react";

export default function About() {
  return <div>이것은 About에 대한 about입니다.</div>;
}
```

이렇게 하고
http://localhost:8000/about 에 접속해보도록 하자.

## 😂개츠비 공식홈페이지에서 설명하는 섹션0 ~ 3정도는 리액트에 대한 설명이므로 설명이 필요한 사람은 보도록 하자.

# 🚏 Link로 라우팅하기

```javascript
import { Link } from "gatsby";
```

다음과 같은 코드로 Link라는 아이를 가져오도록 하자.

이제 index.js에 about으로 가는 코드를 작성해보도록 하자.

```javascript
import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <>
      <Link to="/about">About으로 이동합니다!</Link>
    </>
  );
}
```

`Link`를 사용하게 되면 Gatsby프로젝트 내에서 라우팅을 할때 페이지를 리로딩하지 않고 이동하게 된다.

> # a태그는 그럼 쓸모가 없나요?
>
> 아닙니다! 외부링크로 이동할때 a태그를 사용합니다.

# 🎨 Gatsby 스타일링

tutorial-part-two라는 폴더에 gatsby프로젝트를 하나 더 만들어보자.

```
gatsby new tutorial-part-two https://github.com/gatsbyjs/gatsby-starter-hello-world
```

src안에 `styles`라는 폴더를 만들고 그 안에 `global.css`라는 파일을 만들어보자.

글로벌 스타일링을 해볼건데, 이는 프로젝트에 전체적으로 사용할 스타일을 지정하는 것이다. 예를들어 타이포그래피라든지 색깔이나 그런것들 말이다.

```css
html {
  background-color: lavenderblush;
}
```

다음 속성을 `global.css`에 추가해보자.

이제 `gatsby-browser.js`라는 파일을 만들어보자.

이 파일은 루트폴더에 존재해야 한다.

**이제 최근에 만든 global.css를 gatsby-browser.js에 import해주자.**

> server을 껐다가 다시 켜보자.

![image](https://user-images.githubusercontent.com/48292190/115964147-f5d74700-a55d-11eb-9259-9ce6c44597f3.png)

그러면 이렇게 전역적으로 background-color가 lavenderblush가 된것을 확인할 수 있다.

> 이렇게 gatsby-browser.js를 사용해서 전역 스타일을 적용하는 방법도 있지만 공유 레이아웃에 스타일을 적용하는 방법도 있다.

# 🤷‍♀️ CSS 모듈

CSS를 모듈화해서 구성 요소 지향 방식으로 스타일을 처리하는 다양한 방법에 대해 알아보자.

> CSS 모듈 의 모든 클래스 이름 및 애니메이션 이름은 기본적으로 로컬 범위가되어있는 CSS 파일입니다.

CSS모듈은 CSS를 정상적으로 작성할 수 있지만 훨씬 안전하기 때문에 인기가 많다.

### 🎨 직접 해봅시다.

1.src/components를 만든 다음에, 새 디렉터리 `container.js`와 `container.module.css`를 만들자.

![image](https://user-images.githubusercontent.com/48292190/115990923-e6f5a080-a600-11eb-9cb8-701f1c76e542.png)

이제 container.js에서 다음과 같이 코딩해주자.

```javascript
import React from "react";
import * as containerStyles from "./container.module.css";

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>;
}
```

다음은 css이다.

```css
.container {
  margin: 3rem auto;
  max-width: 600px;
}
```

이렇게 작업을 해준 다음에 pages에 만든 컴포넌트를 연결해주자.

```javascript
import React from "react";
import Container from "../components/container";
export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  );
}
```

이렇게 해주고 http://localhost:8000/about 에 접속해보면,
![image](https://user-images.githubusercontent.com/48292190/115991018-4489ed00-a601-11eb-8cc9-5878c26627b2.png)

정상적으로 스타일이 적용된 모습을 볼 수 있다.

## 🙃 CSS 모듈을 사용하여 구성 요소 스타일 지정

`pages`에 `about.module.css`를 만들어보자.

```css
.user {
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
}
.user:last-child {
  margin-bottom: 0;
}
.avatar {
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
}
.description {
  flex: 1;
  margin-left: 18px;
  padding: 12px;
}
.username {
  margin: 0 0 12px 0;
  padding: 0;
}
.excerpt {
  margin: 0;
}
```

그 다음 about페이지에 import를 해주도록 하자.

```javascript
import React from "react";
import Container from "../components/containers";
import * as styles from "./about.module.css";

export default function About() {
  console.log(styles);
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  );
}
```

#### 그러면 콘솔창에 다음과 같이 찍힐것이다.

![image](https://user-images.githubusercontent.com/48292190/116013555-c282de00-a66b-11eb-9a61-b8f7ebc55f41.png)

> 말투좀 바꿀게요...🤗

## Module이 적용이 안되요!

그런 경우에는 파일의 확장자를 확인해보세요!
`.module.css`여야만 합니다. `.css`는 CSS 모듈이 적용되지 않습니다.

`import * as styles from './about.css';`

## 그럼 한번 제대로 사용해볼까요?

```javascript
import React from "react";
import Container from "../components/containers";
import * as styles from "./about.module.css";

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default function About() {
  console.log(styles);
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  );
}
```

다음과 같이 about.js에 입력해주세요.

그러면 /about에는 다음과 같은 화면이 보일겁니다.
![image](https://user-images.githubusercontent.com/48292190/116028226-a5610600-a691-11eb-96c6-b23d333dbeac.png)

어느정도 감을 잡았지요?

## CSS in JS란?

> CSS-in-JS는 컴포넌트 지향 스타일링 접근 방식이다.

가장 일반적으로 JavaScript를 사용하여 CSS를 인라인으로 구성 하는 패턴 이다.
`Emotion`이나 `Styled-components`등이 있습니다.

## 중첩된 레이아웃 구성 요소 만들기

> Gatsby 플러그인과 "레이아웃"구성 요소 생성에 대해 알아봅시다.

> ## Gatsby 플러그인이란?
>
> Gatsby 사이트에 기능을 추가하는 데 도움이되는 JavaScript 패키지입니다.

새로운 예제를 위해서 새로운 프로젝트를 빌드해봅시다.

```
gatsby new tutorial-part-three https://github.com/gatsbyjs/gatsby-starter-hello-world

cd tutorial-part-three
```

위 작업을 완료한 다음에 우리가 설치할 플러그인은 `Typography.js`이다.
`Typography.js`는 사이트의 타이포그래피에 대한 글로벌 기본 스타일을 생성하는 JavaScript 라이브러리입니다.

😊 위 플러그인을 다운받아 봅시다.

```
yarn add gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
```

다운받을게 생각보다 많네요;; 🤨

작업이 완료되었으면 gatsby-config.js에 다음과 같이 작성해봅시다.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

**gatsby-config.js라는 파일은 개츠비가 자동으로 인식할 수 있는 또 다른 특수 파일입니다.**

자세한 설명은 코딩 후 설명해드리겠습니다.

src/utils에 typography.js라는 파일을 만들어봅시다.

다음과 같이 작성해주세요!

```javascript
import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";

const typography = new Typography(fairyGateTheme);
export const { scale, rhythm, options } = typography;
export default typography;
```

그 다음 개발서버를 열고 한번 Elements를 봅시다
![image](https://user-images.githubusercontent.com/48292190/116029475-6a140680-a694-11eb-8ddd-a14ad34741e0.png)

다음과 같이 뜨는것을 볼 수 있죠?

이게 잘 적용되었는지 확인해봅시다.
![image](https://user-images.githubusercontent.com/48292190/116029605-a6476700-a694-11eb-8c6c-b44b0b4824d3.png)

잘 적용이 되었네요!

이제 page를 몇개 더 만들 예정입니다.
`about.js`,`contact.js`를 만들어주세요. **그런 다음 코드를 작성해주세요**

```javascript
//about.js
import React from "react";

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </div>
  );
}
```

```javascript
//contact.js
import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  );
}
```

이제 만들었던 페이지를 한번 볼까요?
![image](https://user-images.githubusercontent.com/48292190/116030340-4d78ce00-a696-11eb-921d-93e767437abc.png)
음... 잘 나왔지만 Layout이 index.js랑 통일되었으면 좋겠습니다.
그래서 컴포넌트를 하나 만들어서 레이아웃을 통일하는 방법을 알아봅시다.

`src/components`라는 폴더에 `layout.js`를 만들어줍시다.

```javascript
import React from "react";
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  );
}
```

그 다음에 만든 레이아웃을 적용해봅시다.

```javascript
import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </Layout>
  );
}
```

```javascript
import React from "react";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  );
}
```

이제 페이지를 볼까요?

![image](https://user-images.githubusercontent.com/48292190/116030501-a5afd000-a696-11eb-8d12-1a7f37d13b9f.png)

아까 `index.js`랑 디자인이 통일된 느낌이 훨씬 좋아졌습니다.

## 🖐 레이아웃에 제목 추가하는 방법?

```javascript
import React from "react";
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <h1>MySweetSite</h1>
      {children}
    </div>
  );
}
```

그냥 레이아웃 컴포넌트에 `<h1>`안에 적용만 해도 모든 페이지에 다 적용되는 것을 볼 수 있습니다.

## ✋ 페이지 간 NavLink추가

`gatsby`에서 지원하는 기능중 하나인 `Link`라는 기능을 사용해보겠습니다.

Layout컴포넌트에 다음과 같이 작성해주세요

```javascript
import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  );
}
```

이제 웹페이지의 형태를 점점 갖춰가고 있습니다!

![image](https://user-images.githubusercontent.com/48292190/116031270-4a7edd00-a698-11eb-809f-a8657ec01d7b.png)

# Gatsby에서의 데이터

여기까지 오셨다면 Gatsby의 절반은 왔습니다. 조금만 더 힘내주세요!
사실, 지금까지 여러분이 배운 내용은 `React.js`를 사용하는 방법을 배운것입니다.

**이제부터는 본격적으로 Gatsby를 사용해봅시다.**

> 데이터 레이어는 Markdown, WordPress, 헤드리스 CMS 및 기타 데이터 소스에서 사이트를 구축 할 수있는 Gatsby의 강력한 기능이다.

Gatsby의 데이터레이어는 graphQL로 구동됩니다.

무슨말인지 모르시겠다구요? **자세히 살펴봅시다.**

웹 사이트는 HTML, CSS, JS 및 데이터의 네 부분으로 구성되죠! 이 중, 데이터를 한번 자세히 살펴보도록 하겠습니다.

우리가 지금까지 HTML,CSS,JS를 알아봤었는데 데이터를 시작해보는겁니다!

Gatsby에서 데이터란

### "React 구성 요소 외부에있는 모든 것"입니다.

무슨 느낌인지 아시겠나요?

우리는 지금까지 파일에서 직접 이미지,텍스트를 추가하고 웹페이지를 만들었습니다. 물론, 좋은 방법이죠! 하지만 종종 외부의 데이터를 필요로 할 때가 있습니다. 예를 들어서 `코로나19`의 데이터를 가져오고 싶다면요?
그럴때 외부 데이터를 필요로 하는거랍니다.

## Gatsby의 데이터 계층이 GraphQL을 사용하여 데이터를 구성 요소로 가져 오는 방법

React 컴포넌트에서 데이터를 가져올때, 요즘 인기있는 기술인 `graphQL`을 사용하는 것입니다.

> GraphQL은 제품 엔지니어가 필요한 데이터를 구성 요소로 가져올 수 있도록 Facebook에서 개발되었습니다 .

Gatsby는 GraphQL을 사용하여 구성 요소가 필요한 데이터를 선언 할 수 있도록합니다.

자, 이제 새로운 내용을 배우니까 새 예제 사이트를 만들어볼까요?

```
gatsby new tutorial-part-four https://github.com/gatsbyjs/gatsby-starter-hello-world
cd tutorial-part-four
```

위의 작업을 완료한 후, `typography.js`와 `Emotion`을 사용해보겠습니다.

```
npm install gatsby-plugin-typography typography react-typography typography-theme-kirkham gatsby-plugin-emotion @emotion/react
```

설치를 완료했다면, 저번에 `tutorial-part-three`에서 만들었던 레이아웃을 만들어주세요!

```javascript
import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
}
```

```javascript
import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  );
}
```

```javascript
import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

const typography = new Typography(kirkhamTheme);
export default typography;
export const rhythm = typography.rhythm;
```

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

![image](https://user-images.githubusercontent.com/48292190/116035523-190a0f80-a6a0-11eb-8839-3f6def6fc0d5.png)

정상적으로 레이아웃이 뜬다면 성공입니다. (정확한 코드는 `tutorial-part-four`에서 참조해주세요!)

이제 `GraphQL`을 사용해볼 차례입니다.

# 👾 첫 번째 GraphQL 쿼리

사이트를 구축 할 때 사이트 제목과 같은 공통 데이터를 재사용하고 싶을 가 있을거예요. 그런 경우에는 한 위치에 제목을 저장하고 다른 파일에서 해당 위치를 참조할 수 있다면, 나중에 제목을 바꿀 일이 있으면 한 위치의 값만 바꾸면 모든 참조하던 값이 변경되게 되죠.

`gatsby-config.js`에서 사이트 제목의 값을 추가해보도록 합시다.

```javascript
module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

그런 다음 개발서버를 껏다가 다시 켜보세요!

## 🕵️‍♂️ 데이터를 가져와봅시다.

이제 siteMetadata라는 속성에 title이라는 값이 있으니까 참조를 할 수 있습니다!
페이지쿼리를 `about페이지`에서 사용해봅시다.

```javascript
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function About({ data }) {
  console.log(data.site.siteMetadata.title);
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
```

다음과 같이 작성을 해서 `/about`의 결과물을 확인해보세요!
![image](https://user-images.githubusercontent.com/48292190/116040160-a05a8180-a6a6-11eb-898e-d7e0c9dd41af.png)

잘 가져와진 모습을 볼 수 있습니다.
여기서 **GrapghQL을 처음 접하는 사람들은 생소해고 이해가 잘 가지 않을것입니다.**

추후에 심도있게 다룰테니 이런식으로 흘러가는구나~ 정도만 알아두시길 바랍니다.

## 😋 StaticQuery 사용

static쿼리를 사용하게 되면 페이지가 아닌 구성요소가 쿼리를 통해 데이터를 검색할 수 있습니다.

> # 구성요소란?
>
> 구성요소는 하나의 컴포넌트라고 생각하시면 됩니다.

StaticQuery는 hooks도 지원합니다.
그럼 어떤식으로 사용되는지 보도록하죠!

```javascript
import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
}
```

이렇게 구성요소에서 데이터를 가져오고 사용할 수 있습니다.

> 대~충 사용법을 알아봤으니 다음챕터에서 소스 플러그인과 함께 GraphQL을 사용하여 데이터를 Gatsby 사이트로 가져 오는 방법에 대해 알아봅시다.

## GraphiQL 소개

> GraphiQL은 GraphQL 통합 개발 환경 (IDE)입니다. Gatsby 웹 사이트를 구축하는 동안 자주 사용하게 될 강력한 도구입니다.

사이트의 개발 서버가 실행 중일때 다음 주소로 접속하면 됩니다.
`http://localhost:8000/___graphql`

![image](https://user-images.githubusercontent.com/48292190/116164449-a4cd7b80-a734-11eb-8cb6-a37d21ef5d23.png)

다음과 같이 실행하고 ▶️ 를 누르면 쿼리문이 실행됩니다.

그러면 우리가 siteMetadata에 title의 값을 가져와봅시다.

**쿼리문**

```
query MyQuery {
  site{
		siteMetadata{
			title
    }
  }
}

```

**결과**

```json
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "Pandas Eating Lots"
      }
    }
  },
  "extensions": {}
}
```

잘 나오나요?

## GraphiQL Explorer 사용

`GraphiQL Explorer`를 사용하면 쿼리를 입력하는 귀찮은 작업을 쉽게 수행할 수 있습니다.

![image](https://user-images.githubusercontent.com/48292190/116164826-713f2100-a735-11eb-81dd-b957f65757fc.png)

Explorer부분에서 finder에서 문서를 찾는거처럼 클릭만 하면 자동으로 쿼리문이 동작하는 것을 볼 수 있죠! 굉장히 편안할겁니다.

## 소스 플러그인

Gatsby 사이트의 데이터는 API, 데이터베이스, CMS, 로컬 파일 등 어디에서나 가져올 수 있습니다!

파일 시스템의 파일을 가져오는 플러그인을 한번 설치해볼까요?
`gatsby-source-filesystem`을 설치해야 합니다!

프로젝트 루트에 다음과 같은 명령어를 수행해주세요

```
npm install gatsby-source-filesystem
```

늘 그랬듯, 플러그인을 설치하면 `gatsby-config`에 추가해주어야 합니다.

```js
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

그리고 개발 서버를 다시 시작해볼까요?

**자, 이제 GraphiQL를 한번 볼까요?**

그러면 탐색기 창에 다음 allFile과 file같은 선택 항목이 표시 되고 사용할 수 있습니다.

이제 우리는 매우 멋진 작업을 수행할 수 있습니다 🧖🏻‍♂️

```
query MyQuery {
  allFile {
    edges {
      node {
        id
        birthTime
        base
        accessTime
        size
        name
      }
    }
  }
}
```

다음과 같은 쿼리를 작성해보고 실행시켜보면...

```json
{
  "data": {
    "allFile": {
      "edges": [
        {
          "node": {
            "id": "b584a331-64ae-511b-b49e-d1304c0edcab",
            "birthTime": "2021-04-26T05:30:47.727Z",
            "base": "index.js",
            "accessTime": "2021-04-26T06:48:38.997Z",
            "size": 411,
            "name": "index"
          }
        },
        {
          "node": {
            "id": "8f022b89-b764-5a5b-acea-b93b791db3b1",
            "birthTime": "2021-04-26T05:49:49.274Z",
            "base": "typography.js",
            "accessTime": "2021-04-26T06:48:38.997Z",
            "size": 203,
            "name": "typography"
          }
        },
        {
          "node": {
            "id": "8259af0a-6322-538d-8904-98266c5b9add",
            "birthTime": "2021-04-26T05:49:03.366Z",
            "base": "about.js",
            "accessTime": "2021-04-26T06:48:38.997Z",
            "size": 555,
            "name": "about"
          }
        },
        {
          "node": {
            "id": "25143b29-0290-5936-b875-4a86e96ee1d7",
            "birthTime": "2021-04-26T05:48:47.157Z",
            "base": "layout.js",
            "accessTime": "2021-04-26T07:11:35.732Z",
            "size": 944,
            "name": "layout"
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

이렇게, src내에 있는 파일들의 목록이 쫙 뜨게됩니다!

### 😎 얼마나 멋진가요!

이제 페이지를 하나 더 만들어봅시다.

`src/pages/my-files.js`를 만들어줍시다.

그다음 소스코드를 다음과 같이 작성해줍시다.

```js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function MyFiles({ data }) {
  console.log(data);
  return <Layout>Hello World</Layout>;
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          birthTime(fromNow: true)
          base
          accessTime
          size
          name
        }
      }
    }
  }
`;
```

![image](https://user-images.githubusercontent.com/48292190/116166564-422aae80-a739-11eb-8db4-44d7ecc9b53e.png)

잘 콘솔이 찍히나요?

사실, 데이터를 가져오는 과정은 끝났는데, 여기서 끝나면 섭하니까 데이터를 HTML에 출력해보는 작업을 수행해보도록 하겠습니다.

```js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function MyFiles({ data }) {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          birthTime(fromNow: true)
          relativePath
          prettySize
          extension
        }
      }
    }
  }
`;
```

자, 놀라지 마세요
![image](https://user-images.githubusercontent.com/48292190/116166844-d268f380-a739-11eb-94b6-818a9a1b7192.png)

### 🤓 파일 시스템으로 이렇게 멋진 기능을 구현할 수 있습니다.

이제 여러분은 소스 플러그인이 개츠비의 데이터 시스템에 어떻게 데이터를 가져오는지를 배웠습니다.

# 🤖 Transformer 플러그인

이 부분은 정말 중요한 부분입니다. 만약 Gatsby로 정적 블로그를 만들 예정에 있다면 이 부분을 정말 유심히 봐야할것입니다.
<em>참고로 저도 기술블로그를 만들기 위해 Gatsby를 배우는 것입니다.</em>

Transformer 플러그인은 소스 플러그인이 가져온 원시 콘텐츠를 변환하는 플러그인입니다. 무슨 말인지 잘 모르시겠다구요? 한번 천천히 살펴보자구요.

`src/pages/sweet-pandas-eating-sweets.md`을 만들어줍시다.
그 다음 `/my-files`페이지를 확인해볼까요?

![image](https://user-images.githubusercontent.com/48292190/116168562-a7809e80-a73d-11eb-8bd5-0152261df96e.png)

`gatsby-source-filesystem`은 항상 추가 할 새 파일을 검색하고 추가 할 때 쿼리를 다시 실행합니다.

> 매우 강력하다구요!

Transformer 플러그인?

## 🤨 뭔진 몰라도 일단 따라해보면서 배웁시다!

`gatsby-transformer-remark`를 다운받아봅시다.

```
yarn add gatsby-transformer-remark
```

그 다음 `gatsby-config`에 뭘 해주어야하는지 알겠죠?

```js
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

이 작업을 완료해줬다면 개발서버를 다시 켜봅시다.
![image](https://user-images.githubusercontent.com/48292190/116168827-4ad1b380-a73e-11eb-8e9d-4ab8119daec6.png)

그러면 `http://localhost:8000/___graphql`
한번 확인을 해보면 `allMarkdownRemark`가 추가됩니다.

```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
        html
        excerpt
        timeToRead
      }
    }
  }
}
```

다음 작업을 수행한 후 한번 보세요!

```json
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "Sweet Pandas Eating Sweets",
              "date": "2017-08-10"
            },
            "html": "<p>Pandas are really sweet.</p>\n<p>Here's a video of a panda eating sweets.</p>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4n0xNbfJLR8\" frameborder=\"0\" allowfullscreen></iframe>",
            "excerpt": "Pandas are really sweet. Here's a video of a panda eating sweets.",
            "timeToRead": 1
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

정말 멋있지 않나요? 마크다운으로 작업한 내용이 html으로 `Transform`되었습니다!

> 소스 플러그인은 데이터 를 Gatsby의 데이터 시스템으로 가져오고 변환기 플러그인은 소스 플러그인에서 가져온 원시 콘텐츠를 변환합니다

`pages/index.js`에서 graphql작업을 해봅시다.
어렵지 않아요!

```js
import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
```

![image](https://user-images.githubusercontent.com/48292190/116169258-4d80d880-a73f-11eb-9e36-1ce3e62a5725.png)

음... 포스트가 하나라서 조금 없어보이네요! 포스트를 더 추가해보도록 하겠습니다.

![image](https://user-images.githubusercontent.com/48292190/116169350-828d2b00-a73f-11eb-9c1b-ac953c8077cf.png)

#### 저장하면 바로 적용되는 모습이 정말 매력적입니다.

하지만 저는 포스트의 순서를 조금 바꾸고싶습니다...

**다행히! 어려운 작업은 아니죠!**

```
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
      }
    }
  }
}

```

쿼리를 다음과 같이 바꿔주면 desc정렬을 해줍니다!

### 여러분은 여러분만의 블로그를 만들 준비가 다 되었습니다!

하지만 조금만 더 파볼까요? 그러면 **멋진 블로그**가 만들어질것 같습니다!

## 🔥 데이터로부터 페이지 생성

이전에는 마크 다운 파일을 쿼리하고 블로그 게시물 제목 및 발췌 목록을 생성하는 멋진 인덱스 페이지를 만들었습니다.

하지만 발췌한 부분과 포스트를 누르면 마크다운의 실제 페이지를 만들고싶을때는 어떻게 해야할까요?

### 페이지용 슬러그 만들기

`슬러그`라는 개념, 좀 생소하시죠? 한번 알아봅시다.
공식 문서에서 `https://www.gatsbyjs.com/docs/tutorial/part-seven/`라는 주소가 있다고 해봅시다.
그러면 여기서 `슬러그`는 **/docs/tutorial/part-seven/**
이 부분입니다.

무슨 느낌인지 아시겠죠? **웹 주소의 고유한 식별 부분입니다**

그러면 새 페이지를 만드는데에는 두단계의 방법이 있습니다.

> 1. 페이지에 대한 "경로"또는 "슬러그"를 생성합니다.
> 2. 페이지를 만듭니다.

`gatsby-node.js`라는 파일을 루트에 만들어볼까요?
그 다음 코드를 작성해주세요.

```js
exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`);
};
```

이 onCreateNode는 새 노드가 생성 (또는 업데이트) 될 때마다 Gatsby에 의해 호출됩니다.

**이제 개발 서버를 종료한 후, 다시 시작해보세요.**

![image](https://user-images.githubusercontent.com/48292190/116171414-b0746e80-a743-11eb-87c3-fe37c0bb674b.png)

자 콘솔창에 Node created머시기가 뜨죠?
여기서 우리는 `MarkdownRemark`노드만 기록하고 싶습니다.

그러면 조건문을 다음과 같이 작성해주셔야 합니다.
![image](https://user-images.githubusercontent.com/48292190/116171563-f7fafa80-a743-11eb-9176-0c8e52ef32c1.png)

MarkdownRemark가 두번 생성되었다는걸 알 수 있습니다.

이제 마크다운의 파일이름을 사용하여 페이지 슬러그를 만들어보는 작업을 수행해보도록 하겠습니다.

```js
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    console.log(`\n`, fileNode.relativePath);
  }
};
```

![image](https://user-images.githubusercontent.com/48292190/116178336-54fcad80-a750-11eb-8bcd-5086f9870018.png)

이렇게 하면 파일의 이름을 가져올 수 있습니다.
`gatsby-source-filesystem`플러그인에는 슬러그를 만드는 기능이 함께 제공됩니다

어렵지 않으니 한번 해볼까요?

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }));
  }
};
```

이렇게 작성하면 슬러그가 자동으로 생성된 것을 볼 수 있죠?
**이제 새 슬러그를 MarkdownRemark노드에 직접 추가 할 수 있습니다 .**

![image](https://user-images.githubusercontent.com/48292190/116334772-bc7a3200-a810-11eb-9297-b2d85df5c0b4.png)

`createNodeField`를 사용하면 이를 더욱 쉽게 구현할 수 있습니다.

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
```

![image](https://user-images.githubusercontent.com/48292190/116335242-7a9dbb80-a811-11eb-9bd6-42453fdad513.png)

그러면 노드필드에 slug라는 이름의 필드를 만들어줍니다.

이제 다음과 같은 작업을 수행해줍시다.

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** graphql은 Promise를 리턴합니다.
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(JSON.stringify(result, null, 4));
};
```

그러면 콘솔창에

![image](https://user-images.githubusercontent.com/48292190/116335527-fc8de480-a811-11eb-9cab-1730b460cdea.png)

정상적으로 잘 나오는것을 확인할 수 있죠?

**아까도 설명했지만, 페이지를 만드는 단계는**

1. GraphQL로 데이터 쿼리
2. 쿼리 결과를 페이지에 매핑

**입니다**

자, 따라해보세요
`src/templates`를 만들고 `blog-post.js` 파일을 추가합시다.

다음과 같이 작성합니다.

```js
import React from "react";
import Layout from "../components/layout";

export default function BlogPost() {
  return (
    <Layout>
      <div>Hello Blog Post</div>
    </Layout>
  );
}
```

그 다음 `gatsby-node.js`를 업데이트 해줍니다.

```js
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
```

### 🤨자... 많이 지루하셨죠?

이제 gatsby의 404페이지로 한번 가봅시다.

> ## 404페이지를 어떻게가요?
>
> 주소창에 `http://localhost:8000/sdf`처럼 그냥 아무런 슬러그가 없는 주소로 들어가시면 gatsby에서 자동으로 404페이지로 이동시켜줍니다.

들어가보면 어떤화면이 보이시나요?

![image](https://user-images.githubusercontent.com/48292190/116336812-28aa6500-a814-11eb-90c4-9b93014ae4a9.png)

네...! 우리가 아까 만들었던 .md파일들이 전부 page로 바뀐모습을 볼 수 있죠?

하지만 페이지에 들어가보면 아직 우리가 원하는 내용은 아닙니다! 왜냐하면...

![image](https://user-images.githubusercontent.com/48292190/116336911-4d9ed800-a814-11eb-8875-f1da75c06bbf.png)

아직 제목,내용을 적지 않았거든요!

우리가 데이터를 가져올땐 무엇을 사용한다고 했죠?

### 그렇죠! 바로 `GraphQL`입니다 🤗

```js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
```

이제 페이지에 들어가보면

### 😋 와우!! 드디어 기능을 구현했네요!

![image](https://user-images.githubusercontent.com/48292190/116337427-0b29cb00-a815-11eb-9040-7caf850920b5.png)


# 😁축하해요! Gatsby로 정적블로그를 만드는데에 성공했어요!

**당신이 배운 것들**
- 새로운 Gatsby 사이트 생성
- 페이지 및 구성 요소 만들기
- 스타일 구성 요소
- 사이트에 플러그인 추가
- 데이터 소스 및 변환
- GraphQL을 사용하여 페이지 데이터 쿼리
- 프로그래밍 방식으로 데이터에서 페이지 만들기

이제 몇몇개 알면 좋은것들을 소개해드릴게요.

- **Lighthouse**

> 개츠비 개발 서버는 개발 속도를 높이도록 최적화되어 있지만 사이트의 프로덕션 버전과 매우 유사하지만 생성하는 사이트는 최적화되어 있지 않습니다.

1. 만약 아직 실행중인 경우 개발서버를 종료하고 `gatsby build`를 합니다.
2. `gatsby serve`로 프로덕션 사이트를 로컬서버로 봅니다.

`http://localhost:9000/`에 서버가 열립겁니다.

**이제 첫 번째 Lighthouse 테스트를 실행해봅시다.**


먼저 chrome웹스토어에서 LightHouse를 다운받습니다.

![image](https://user-images.githubusercontent.com/48292190/116339666-cc960f80-a818-11eb-900e-9297b6ca3eae.png)

이제 개발자도구를 사용해서 LightHouse탭을 켭니다.

그 다음 `Generate report`를 누른다음 검사를 진행합니다.

![image](https://user-images.githubusercontent.com/48292190/116340046-71b0e800-a819-11eb-85a7-b8e41028a7e0.png)

이렇게, 결과가 잘 뜨나요?

# 🖐🖐자, 이제 여러분들의 차례입니다!

여기까지 보신분들, 수고하셨습니다...

이제 gatsby는 여러분들의 것이니까 여러분이 만들고 싶은 웹사이트를 제작해보세요! 

그럼 이만...

2021-04-28(수) 

Hong-JunHyeok