import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Question from "./components/Question.jsx";

import UserProvider from "./contexts/UserContext.jsx";
import ScoreProvider from "./contexts/ScoreContext.jsx";
import Result from "./components/Result.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/question/:questionId",
    element: <Question />,
    loader: async function loader({ params }) {
      const questions = await axios.get("http://localhost:3000/api/questions");
      return questions.data[params.questionId - 1];
    },
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ScoreProvider>
        <RouterProvider router={router} />
      </ScoreProvider>
    </UserProvider>
  </React.StrictMode>
);
