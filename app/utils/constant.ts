export const DISPLAY_DATE = "DD MMM YYYY";

export const ROUTES = {
  students: {
    listing: "/students",
    create: "/students/create",
    update: "/students/update/:id",
  },
};

export const menuItems = [
  { label: "Dashboard", link: "/" },
  { label: "Students List", link: "/students" },
  { label: "Classes List", link: "/classes" },
  { label: "Sections List", link: "/sections" },
  { label: "Timetable", link: "/timetable" },
  { label: "Exams List", link: "/exams" },
  { label: "Results", link: "/results" },
  { label: "Teachers List", link: "/teachers" },
  { label: "Attendance Reports", link: "/attendance-reports" },
  { label: "Fee Status", link: "/fee-status" },
  { label: "Notifications", link: "/notifications" },
  { label: "School Info", link: "/school-settings" },
];

export const STATUS_OPTIONS = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

export const studentData = Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;
  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const sections = ["A", "B", "C"];
  const statuses = ["Active", "Inactive"];

  return {
    id,
    name: `Student ${id}`,
    class: classes[i % classes.length],
    section: sections[i % sections.length],
    roll: (i % 30) + 1,
    father: `Father ${id}`,
    contact: `0300-${String(1000000 + id).slice(0, 7)}`,
    admissionDate: `2025-01-${String((i % 28) + 1).padStart(2, "0")}`,
    status: statuses[i % statuses.length],
  };
});

export const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

export const CLASS_OPTIONS = [
  { label: "Class 1", value: "Class 1" },
  { label: "Class 2", value: "Class 2" },
  { label: "Class 3", value: "Class 3" },
  { label: "Class 4", value: "Class 4" },
  { label: "Class 5", value: "Class 5" },
];

export const SECTION_OPTIONS = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
  { label: "C", value: "C" },
];
