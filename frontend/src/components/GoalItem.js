import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice.js";
import { GrClose } from "react-icons/gr";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toDateString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <GrClose />
      </button>
    </div>
  );
}

export default GoalItem;
