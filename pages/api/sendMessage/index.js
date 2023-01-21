// @layerConfig - this send message will call backend with a username, backend will provide the chat id and then message
export default function handler(req, res) {
  // axios({
  //       async: true,
  //       crossDomain: true,
  //       url:
  //         "https://api.telegram.org/bot" +
  //         process.env.NEXT_PUBLIC_SECRET_KEY +
  //         "/sendMessage",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "cache-control": "no-cache",
  //       },
  //       data: JSON.stringify({
  //         chat_id: chatid,
  //         text: message,
  //       }),
  //     });
  res
    .status(200)
    .json({ name: "Built with 💚 by Pushkar Yadav (https://pushkaryadav.in)" });
}
