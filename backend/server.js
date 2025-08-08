import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

app.get("/github-contributions", async (req, res) => {
  try {
    const query = `
      {
        user(login: "${process.env.GITHUB_USERNAME}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data.data.user.contributionsCollection.contributionCalendar);
  } catch (error) {
    console.error("Error fetching GitHub data:", error.message);
    res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
