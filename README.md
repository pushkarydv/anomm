<div align="center">
<img src="https://github.com/pushkarydv/anomm/blob/master/public/logo.png?raw=true" alt="Anomm Logo.png" width=15%>
<h1>Anomm</h1>
<p><a href="https://github.com/pushkarydv/anomm/stargazers"><img src="https://img.shields.io/github/stars/pushkarydv/anomm?style=flat-square" alt="GitHub stars"></a>
<a href="https://github.com/pushkarydv/anomm/network/members"><img src="https://img.shields.io/github/forks/pushkarydv/anomm?style=flat-square" alt="GitHub forks"></a>
<a href="https://github.com/pushkarydv/anomm/issues"><img src="https://img.shields.io/github/issues/pushkarydv/anomm?style=flat-square" alt="GitHub issues"></a>
<a href="https://github.com/pushkarydv/anomm/pulls"><img src="https://img.shields.io/github/issues-pr/pushkarydv/anomm?style=flat-square" alt="GitHub pull requests"></a>
<a href="https://github.com/pushkarydv/anomm/blob/master/LICENSE"><img src="https://img.shields.io/github/license/pushkarydv/anomm?style=flat-square" alt="GitHub license"></a>
<a href="https://github.com/pushkarydv/anomm/commits/master"><img src="https://img.shields.io/github/last-commit/pushkarydv/anomm?style=flat-square" alt="GitHub last commit"></a>
<a href="https://github.com/pushkarydv/anomm/graphs/contributors"><img src="https://img.shields.io/github/contributors/pushkarydv/anomm?style=flat-square" alt="GitHub contributors"></a>
<a href="https://github.com/pushkarydv/anomm"><img src="https://img.shields.io/github/languages/code-size/pushkarydv/anomm?style=flat-square" alt="GitHub code size in bytes"></a>
<a href="https://github.com/pushkarydv/anomm"><img src="https://img.shields.io/github/repo-size/pushkarydv/anomm?style=flat-square" alt="GitHub repo size"></a></p>
<h3><strong><em>Anonymous messages in a completely different way</em></strong></h3>
</div>
<br>

<img src="https://visitcount.itsvg.in/api?id=anomm&amp;label=Repo%20Views&amp;color=9&amp;icon=1&amp;pretty=false" alt="">

# What is anomm? [`▶️`](https://www.youtube.com/watch?v=aSy2jtIhtZU&ab_channel=PushkarYadav)

Anomm is a service to deliver anonymous messages from a web based link (dynamic for each user) to a Telegram bot.


## How to use it 🤔

1. Go to [anomm](https://anomm.pushkaryadav.in) and click on `Get Started`

2. It will say you to Open your Telegram app and search for `@anomm_bot`

3. Send `/start` to the bot

4. On website follow the steps and Enter your Telegram username (without `@`), and click on `Continue`

5. It will generate a link for you (that will also be sent on your telegram via message), copy it and share it with the person you want to get messages from.

   - You can add this at community forms to get reviews,suggestions, etc.
   - There is a lot more you can do with this. Just your creativity is the limit.

6. The person who receives the link can send messages to the bot and you will receive them on your Telegram account.

7. You can share your experience with us via [Twitter](https://twitter.com/pushkaryadavin) or [LinkedIn](https://www.linkedin.com/in/pushkarydv).

## Screenshots 📷

![image](https://user-images.githubusercontent.com/96358784/221416059-ba45ad51-7e94-493d-bf1c-c94dc3892316.png)

<br/>
<details><summary align="center">View All</summary>

![image](https://user-images.githubusercontent.com/96358784/221416079-9c57cc36-43a3-4596-a9ef-0b92aea912a6.png)
![image](https://user-images.githubusercontent.com/96358784/221416165-d3bad87d-6e38-42fe-adc2-34aad1814c25.png)

</details/>
<br/>

## Using the code ⚙️

<details><summary>How to run locally</summary>

## Getting Started ✔️

You Will need these enviornmental variables in `.env.local` file inside root folder of reposotiory

```bash
NEXT_PUBLIC_apiKey=FIREBASE_KEY
NEXT_PUBLIC_authDomain=FIREBASE_KEY
NEXT_PUBLIC_projectId=FIREBASE_KEY
NEXT_PUBLIC_storageBucket=FIREBASE_KEY
NEXT_PUBLIC_messagingSenderId=FIREBASE_KEY
NEXT_PUBLIC_appId=FIREBASE_KEY
NEXT_PUBLIC_measurementId=FIREBASE_KEY
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=TELEGRAM_TOKEN
NEXT_PUBLIC_TELEGRAM_CONTACT_ID=TELEGRAM_CONTACT_ME_CHAT_ID
```

starting `7` keys are from firebase project and `8`th key is from telegram bot.
`9`th is your telegram chat id to which you want to receive messages. this is only used in contact me section to deliver messages to me.

First, run the development server:

```bash
npm i
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

</details>

## Features ✨
 - Fully SSR with Next.js
 - custom REST API for an integrated Telegram Bot 
 - Tailwind CSS
 - Next JS SEO
 - Firebase
 - Dynamic routing for message/id page
 - and beautiful UI😅

## Tech Stack Used to build this 🛠️

![Next JS ](https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white&style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-000.svg?logo=firebase&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB&style=for-the-badge)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=for-the-badge)
![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
![NPM ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white&style=for-the-badge)
![Git](https://img.shields.io/badge/git-%23F05033.svg?logo=git&logoColor=white&style=for-the-badge)
![Vercel](https://img.shields.io/badge/-Vercel-000?style=for-the-badge&logo=vercel)


## Hey Contributors 🤝

Feel free to contribute in this project. add much more widgets, pages, etc. to make it more user friendly.

But just before that please read the [**`CONTRIBUTING.md`**](./CONTRIBUTING.md)

## Social Media 👍

[![](https://img.shields.io/badge/pushkaryadav__-%23E4405F.svg?logo=Instagram&logoColor=white&style=for-the-badge)](https://www.instagram.com/pushkaryadav_/)
[![](https://img.shields.io/badge/pushkarydv-%230077B5.svg?logo=linkedin&logoColor=white&style=for-the-badge)](https://www.linkedin.com/in/pushkarydv)
[![](https://img.shields.io/badge/pushkaryadavin-%231DA1F2.svg?logo=Twitter&logoColor=white&style=for-the-badge)](https://twitter.com/pushkaryadavin)

