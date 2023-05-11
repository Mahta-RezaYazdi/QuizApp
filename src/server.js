import express from "express"
import cors from "cors"

const questions = [{
  id: 1, question: "What is the capital city of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  answer: "Ottawa"
},
{
  id: 2,
  question: "Who is the CEO of Tesla?",
  options: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Tim Cook"],
  answer: "Elon Musk"
},
{
  id: 3,
  question: "Which programming language is used to develop Android apps?",
  options: ["Python", "JavaScript", "Java", "C#"],
  answer: "Java"
},
{
  id: 4,
  question: "Which library is used to develop user interfaces in React?",
  options: ["jQuery", "Vue", "Angular", "React"],
  answer: "React"
},
{
  id: 5,
  question: "Which database is used to store data in most web applications?",
  options: ["PostgreSQL", "MongoDB", "SQLite", "MySQL"],
  answer: "MySQL"
},
{
  id: 6,
  question: "Which algorithmic technique is used to break down a problem into smaller subproblems?",
  options: ["Dynamic Programming", "Greedy Algorithms", "Divide and Conquer", "Backtracking"],
  answer: "Divide and Conquer"
},
{
  id: 7,
  question: "Which mountain is the tallest in the world?",
  options: ["Denali", "K2", "Mount Everest", "Mount Kilimanjaro"],
  answer: "Mount Everest"
},
{
  id: 8,
  question: "Who is the author of the Harry Potter book series?",
  options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "Suzanne Collins"],
  answer: "J.K. Rowling"
},
{
  id: 9,
  question: "Which data structure follows the FIFO (First-In-First-Out) principle?",
  options: ["Stack", "Heap", "Queue", "Tree"],
  answer: "Queue"
},
{
  id: 10,
  question: "Which streaming service is known for producing original shows like Stranger Things and The Crown?",
  options: ["Hulu", "Disney+", "HBO Max", "Netflix"],
  answer: "Netflix"
}
];
const app = express();
app.use(cors());

const PORT = 3000;

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
