import axios from "axios";

export default async (req, res) => {
  if (req.method == "POST") {
    const updates = await axios.get(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/getUpdates`
    );
    const username = req.body.username;
    if (username) {
      try {
        let noMatchFlag = true;
        for (let i = updates.data.result.length - 1; i >= 0; i--) {
          if (
            updates.data.result[i].message.from.username == username &&
            updates.data.result[i].message.text == "/start"
          ) {
            const respond_to_user = await axios.get(
              `https://api.telegram.org/bot${
                process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
              }/sendMessage?chat_id=${
                updates.data.result[i].message.from.id
              }&text=${encodeURI(
                `Hello, Welcome to Anomm.\nThis is a free service to deliver anonymous messages directly to your telegram via a bot to make you a friendly experience of chat based interface.\n\nYour anonymous messages link: \nhttps://anomm.pushkaryadav.in/message/${updates.data.result[i].message.chat.id}`
              )}`
            );
            res.status(200).send({
              sent: respond_to_user.data?.ok,
              user: respond_to_user.data?.result?.chat,
            });
            noMatchFlag = false;
            break;
          }
        }
        if (noMatchFlag) {
          res.status(400).send({
            error: "Please first press start button on anomm telegram bot",
          });
        }
      } catch {
        res.status(400).send({
          error: "Please first press start button on anomm telegram bot",
        });
      }
    } else {
      res.status(400).send({ error: "username not in body" });
    }
  } else {
    res.status(400).send({ error: "method not allowed" });
  }
};
