import axios from "axios";

export default async (req, res) => {
  if (req.method == "POST") {
    const id = 1331732028;
    const message = req.body.message;
    const name = req.body.name;
    const email = req.body.email;
    if (name && message && email && id) {
      try {
        const respond_to_user = await axios.get(
          `https://api.telegram.org/bot${
            process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
          }/sendMessage?chat_id=${id}&text=${encodeURI(
            "CONTACT ME SECTION: \nName: " +
              name +
              "\nEmail: " +
              email +
              "\nMessage: " +
              message
          )}`
        );
        res.status(200).send({
          data: respond_to_user.data,
        });
      } catch {
        res.status(400).send({
          error: "user doesn't exist",
        });
      }
    } else {
      res.status(400).send({ error: "incomplete parameters" });
    }
  } else {
    res.status(400).send({ error: "method not allowed" });
  }
};
