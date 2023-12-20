import express from "express";
import { Dummy, getCurrDrafter, getDraft, newDraft, conductDraft, checkCurrDrafter, checkPickHistory } from './routes';
import bodyParser from 'body-parser';


// Configure and start the HTTP server.
const port = 8088;
const app = express();
app.use(bodyParser.json());
app.get("/api/dummy", Dummy);
app.post("/api/newDraft", newDraft);
app.post("/api/getDraft", getDraft);
app.post("/api/getCurrDrafter", getCurrDrafter);
app.post("/api/conductDraft", conductDraft);
app.post("/api/checkCurrDrafter", checkCurrDrafter)
app.post("/api/checkPickHistory", checkPickHistory)
app.listen(port, () => console.log(`Server listening on ${port}`));
