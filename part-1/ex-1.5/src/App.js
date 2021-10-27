import React from "react";

function Header(props) {
  return <h1>{props.course.course}</h1>;
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
      <Part
        part={props.parts.parts[0].part}
        exercises={props.parts.parts[0].exercises}
      />
      <Part
        part={props.parts.parts[1].part}
        exercises={props.parts.parts[1].exercises}
      />
      <Part
        part={props.parts.parts[2].part}
        exercises={props.parts.parts[2].exercises}
      />
    </>
  );
}

function Total(props) {
  return (
    <p>
      Number of Excercises{" "}
      {props.total.parts[0].exercises +
        props.total.parts[1].exercises +
        props.total.parts[2].exercises}
    </p>
  );
}

const App = () => {
  const course = {
    course: "Half Stack application development",
    parts: [
      {
        part: "Fundamentals of React",
        exercises: 10,
      },
      {
        part: "Using props to pass data",
        exercises: 7,
      },
      {
        part: "State of a component",
        exercises: 14,
      },
    ],
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
      <Content parts={course} />
      <Total total={course} />
    </div>
  );
};

export default App;
