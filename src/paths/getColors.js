import { Colors } from "../colors.js";

export function get_Colors(app) {
    app.get("/getColors", async (req, res) => {
        const colors = await Colors.findAll();
        res.send(colors);
    });
 }