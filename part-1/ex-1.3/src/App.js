import React from "react";

function Header(props) {
  return <h1>{props.course}</h1>;
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

function Content(props) {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  );
}

function Total(props) {
  return <p>Number of Excercises {props.total}</p>;
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    part: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    part: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    part: "State of a component",
    exercises: 14,
  };

  return (
    // <div>
    //   <h1>{course}</h1>
    //   <p>
    //     {part1} {exercises1}
    //   </p>
    //   <p>
    //     {part2} {exercises2}
    //   </p>
    //   <p>
    //     {part3} {exercises3}
    //   </p>
    //   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    // </div>
    <div>
      <Header course={course} />
      <Content
        part1={part1.part}
        exercises1={part1.exercises}
        part2={part2.part}
        exercises2={part2.exercises}
        part3={part3.part}
        exercises3={part3.exercises}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
