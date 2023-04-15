import {Chapters} from "../chapters.js";

export function add_Chapters(app) {
app.get("/addChapters", async (req, res) => {
    const query = req.query;
    const result = await Chapters.create({
      sortorder: query.sortorder,
      icon: query.icon,
      title: query.title,
    });
    res.send(result);
  });
}