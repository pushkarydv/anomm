import clientPromise from "../../../config/dbConnect";

export default async (req, res) => {
  // const
  try {
    const client = await clientPromise;
    const db = client.db("users");
    const { username, userKey } = req.query;

    const user = await db.collection("users").insertOne({
      username,
      userKey,
    });

    res.json(user);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
