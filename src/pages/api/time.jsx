export default function handler(req, res) {
  const date = new Date();
  console.log(date);
  res.json({ message: "Hello" });
}
