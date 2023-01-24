// @layerConfig - this send message will call backend with a username, backend will provide the chat id and then message
export default function handler(req, res) {
  res
    .status(200)
    .json({ name: "Built with 💚 by Pushkar Yadav (https://pushkaryadav.in)" });
}
