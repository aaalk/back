import express from "express";
import cors from 'cors';
import { get_Chapters } from "./src/paths/getChapters.js";
import { delete_Chapters } from "./src/paths/deleteChapters.js";
import { add_Chapters } from "./src/paths/addChapters.js";
import { add_Video } from "./src/paths/addVideo.js";
import { upd_Video } from "./src/paths/updVideo.js";
import { get_Videos } from "./src/paths/getVideos.js";
import { delete_Video } from "./src/paths/deleteVideo.js";
// import { add_Subtitles } from "./src/paths/addSubtitles.js";
// import { delete_Subtitles } from "./src/paths/deleteSubtitles.js";
// import { get_Subtitles } from "./src/paths/getSubtitles.js";
import { delete_Note } from "./src/paths/deleteNote.js";
import { add_Note } from "./src/paths/addNote.js";
import { get_Notes } from "./src/paths/getNotes.js";
import { get_Colors } from "./src/paths/getColors.js";

const app = express();
const port = 5000;

// app.use(express.urlencoded({ extended: false }));

app.use(cors());

get_Colors(app);
get_Notes(app);
get_Chapters(app);
delete_Chapters(app);
add_Chapters(app);
add_Video(app);
upd_Video(app);
get_Videos(app);
delete_Video(app);
// add_Subtitles(app);
// delete_Subtitles(app);
// get_Subtitles(app);
delete_Note(app);
add_Note(app);

app.listen(port);
