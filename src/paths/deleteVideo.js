import { Video } from "../video.js";

export function delete_Video(app) {
    app.get("/deleteVideo", async (req, res) => {
        const query = req.query;
        const result = await Video.destroy({ where: { id: query.id, }, });
        res.send({ result: result });
    });
}