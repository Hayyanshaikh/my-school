"use client";
import StudentForm from "./StudentForm";

type Props = {};

const StudentUpdate = (props: Props) => {
  return (
    <div>
      <StudentForm onSubmit={(values) => console.log(values)} />
    </div>
  );
};

export default StudentUpdate;
