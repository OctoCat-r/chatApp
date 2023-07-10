// const express = require("express");
// const cors = require("cors");

import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "07d75dc4-9b4e-45c9-bc10-d6b6d44b541a" } }
    );
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
