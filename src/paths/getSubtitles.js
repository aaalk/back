import { Subtitles } from "../subtitles.js";

export function get_Subtitles(app) {
    app.get("/getSubtitles", async (req, res) => {
        const query = req.query;
        const subtitles = await Subtitles.findAll({ where: { videoId: query.videoId, }, });
        res.send(subtitles);
    });
 }