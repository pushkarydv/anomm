import axios from "axios";
// import clientPromise from "../../../config/dbConnect";

export default async (req, res) => {
  try {
    const updates = await axios.get(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_API_TOKEN}/getUpdates`
    );
    // const client = await clientPromise;
    // const db = client.db("users");
    // const { username, userKey } = req.query;

    // const user = await db.collection("users").insertOne({
    //   username,
    //   userKey,
    // });
    res.setHeader("Cache-Control", `max-age=N, public`);
    res.json(updates);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
