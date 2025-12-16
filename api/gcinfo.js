export default function handler(req, res) {
  const { name, members, description } = req.query;

  res.status(200).json({
    success: true,
    data: {
      name: name || "Unknown Group",
      members: members || "0",
      description: description || "-"
    }
  });
      }
