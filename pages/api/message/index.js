export default function handler(req, res) {
  res
    .status(200)
    .json({ name: "Built with 💚 by Pushkar Yadav (https://pushkaryadav.in)" });
}
