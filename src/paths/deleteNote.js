import { Notes } from "../notes.js";

export function delete_Note(app) {
    app.get("/deleteNote", async (req, res) => {
        const query = req.query;
        const condition = { videoId: query.videoId, ...('noteTime' in query && {noteTime: query.noteTime}) }
        const result = await Notes.destroy({ where: condition, });
        res.send({ result: result });
    });
}