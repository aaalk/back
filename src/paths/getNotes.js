import { Notes } from "../notes.js";

export function get_Notes(app) {
    app.get("/getNotes", async (req, res) => {
        const query = req.query;
        const notes = await Notes.findAll({ where: { videoId: query.videoId, }, });
        res.send(notes);
    });
 }
 