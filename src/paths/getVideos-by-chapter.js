import { Video } from "../video.js";

export function get_Videos(app) {
    app.get("/getVideos", async (req, res) => {
        const query = req.query;
        const videos = await Video.findAll({ where: { chapterId: query.chapterId, }, });
        res.send(videos);
    });
 }