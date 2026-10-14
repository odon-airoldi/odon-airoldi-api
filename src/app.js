import express from "express";

const app = express();

// registro middleware json
app.use(exspress.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

export default app;