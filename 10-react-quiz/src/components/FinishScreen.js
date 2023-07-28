function FinishScreen({ points, maxPoints, highScore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥳";
  else if (percentage >= 80) emoji = "😄";
  else if (percentage >= 60) emoji = "😊";
  else if (percentage >= 40) emoji = "😐";
  else if (percentage >= 20) emoji = "😕";
  else emoji = "😢";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} points! &nbsp;
        {Math.ceil(percentage)}%&nbsp;{emoji}
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Play Again!
      </button>
    </>
  );
}

export default FinishScreen;
