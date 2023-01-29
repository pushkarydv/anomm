import axios from "axios";
// import clientPromise from "../../../config/dbConnect";

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
                "Hello, Welcome to Anomm.\nThis is a free service to deliver anonymous messages directly to your telegram via a bot to make you a friendly experience of chat based interface.\n\nManage Your account here: https://anomm.vercel.app/dashbaord"
              )}`
            );
            res.status(200).send({ sent: respond_to_user.data?.ok });
            noMatchFlag = false;
            break;
          }
        }
        if (noMatchFlag) {
          res.status(400).send({
            error:
              "sorry your username was not connected to bot please connect by going to bot and pressing start buttor, or else what you can do is type /start in bot",
          });
        }
      } catch {
        res.status(400).send({
          error:
            "sorry your username was not connected to bot please connect by going to bot and pressing start buttor, or else what you can do is type /start in bot",
        });
      }
    } else {
      res.status(400).send({ error: "username not in query" });
    }
  } else {
    res.status(400).send({ error: "method not allowed" });
  }
};
