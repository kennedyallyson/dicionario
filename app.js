const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/router");

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use("/", indexRouter);

app.use((req, res, next) => {
    res.status(404).send("Oops... Não existe essa página! ;(");
});

app.listen(PORT, () => {console.info(`Server running on port ${PORT}`)});