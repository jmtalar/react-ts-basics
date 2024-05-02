import "./App.css";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import { CourseGoalEntity } from "./interfaces/course-goal-entity.ts";

export default function App() {
  const [goals, setGoals] = useState<CourseGoalEntity[]>([]);

  function addGoalClicked() {
    setGoals((previousGoals) => {
      const newGoal: CourseGoalEntity = {
        title: "Testowy cel w naszej aplikacji",
        description: "Dłuzszy opis celu",
        id: Math.floor(Math.random() * 500),
      };

      return [...previousGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id != id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Logo aplikacji" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={addGoalClicked}>Add Goal</button>

      <CourseGoalList
        onGoalDelete={handleDeleteGoal}
        goals={goals}
      ></CourseGoalList>
    </main>
  );
}
