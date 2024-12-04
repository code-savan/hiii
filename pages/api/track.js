import fs from "fs";
import path from "path";

const analyticsFile = path.join(process.cwd(), "analytics.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;

    // Read the existing data
    const analytics = JSON.parse(fs.readFileSync(analyticsFile, "utf8"));
    analytics[name] = (analytics[name] || 0) + 1;

    // Write updated data
    fs.writeFileSync(analyticsFile, JSON.stringify(analytics, null, 2));
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
