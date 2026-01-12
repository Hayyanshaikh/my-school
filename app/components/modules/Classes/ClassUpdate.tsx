"use client";
import ClassForm from "./ClassForm";

type Props = {};

const ClassUpdate = (props: Props) => {
  return (
    <div>
      <ClassForm onSubmit={(values) => console.log(values)} />
    </div>
  );
};

export default ClassUpdate;
