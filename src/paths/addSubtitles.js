import { Subtitles } from "../subtitles.js";

export function add_Subtitles(app) {
    app.get("/addSubtitles", async (req, res) => {
    const query = req.query;
    const result = await Subtitles.create({
      videoId: query.videoId,
      time: query.time,
      text: query.text,
    });
    res.send(result);
  });
}