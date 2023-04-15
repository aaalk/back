import { Video } from "../video.js";

export function upd_Video(app) {
    app.get("/updVideo", async (req, res) => {
    const query = req.query;
    const newData = {
      ...('chapterId' in query && {chapterId: query.chapterId}),
      ...('added' in query && {added: query.added}),
      ...('title' in query && {title: query.title}),
    }
    const result = await Video.update(newData, {where: { id: query.id, }});
    res.send(result);
  });
}