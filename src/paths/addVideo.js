import { Video } from "../video.js";

export function add_Video(app) {
    app.get("/addVideo", async (req, res) => {
    const query = req.query;
    const result = await Video.create({
      id: query.id,
      chapterId: query.chapterId,
      added: query.added,
      title: query.title,
      url: query.url,
    });
    res.send(result);
  });
}
