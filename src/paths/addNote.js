import { Notes } from "../notes.js";

export function add_Note(app) {
    app.get("/addNote", async (req, res) => {
    const query = req.query;
    const result = await Notes.create({
      videoId: query.videoId,
      noteTime: query.noteTime,
      colorId: query.colorId,
      text: query.text,
    });
    res.send(result);
  });
}