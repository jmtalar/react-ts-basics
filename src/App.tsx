import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";

interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalClicked() {
    setGoals((previousGoals) => {
      const newGoal: CourseGoal = {
        title: "Testowy cel w naszej aplikacji",
        description: "Dłuzszy opis celu",
        id: Math.floor(Math.random() * 500),
      };

      return [...previousGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Logo aplikacji" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={addGoalClicked}>Add Goal</button>

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
