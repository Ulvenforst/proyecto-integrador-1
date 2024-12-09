import { useSpring, animated } from "@react-spring/three";

function ProblemModel({ modelProblem, modelSolution, isResolved, onResolve }) {
  const props = useSpring({
    scale: isResolved ? [1.2, 1.2, 1.2] : [1, 1, 1],
    config: { duration: 500 },
  });

  return (
    <animated.mesh scale={props.scale} onClick={onResolve}>
      {isResolved ? modelSolution : modelProblem}
    </animated.mesh>
  );
}

export default ProblemModel;
