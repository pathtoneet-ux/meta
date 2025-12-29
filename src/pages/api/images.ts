// src/pages/api/images.ts
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

type Img = {
  filename: string;
  url: string;
  createdAt: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

    if (req.method === "GET") {
      const raw = fs.readdirSync(UPLOAD_DIR, { withFileTypes: true });
      const files: Img[] = raw
        .filter((d) => d.isFile() && /\.(jpe?g|png|gif|webp|svg)$/i.test(d.name))
        .map((d) => {
          const filePath = path.join(UPLOAD_DIR, d.name);
          const stat = fs.statSync(filePath);
          return {
            filename: d.name,
            url: `/uploads/${encodeURIComponent(d.name)}`,
            createdAt: stat.mtime.toISOString(),
          };
        })
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      return res.status(200).json(files);
    }

    if (req.method === "DELETE") {
      // Accept filename via query param for simplicity
      const filename = typeof req.query.filename === "string" ? req.query.filename : undefined;
      if (!filename) return res.status(400).json({ error: "filename query param required" });

      const safe = path.basename(filename);
      const filePath = path.join(UPLOAD_DIR, safe);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return res.status(200).json({ ok: true });
      } else {
        return res.status(404).json({ error: "file not found" });
      }
    }

    res.setHeader("Allow", ["GET", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (err: any) {
    console.error("/api/images error:", err);
    return res.status(500).json({ error: String(err?.message || err) });
  }
}
