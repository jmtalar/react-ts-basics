import CourseGoal from "./CourseGoal";
import { CourseGoalEntity } from "../interfaces/course-goal-entity";

interface CourseGoalListProps {
  goals: CourseGoalEntity[];
  onGoalDelete: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onGoalDelete,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} onDelete={onGoalDelete} title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
