import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";
import CourseSearch from "./component/CourseSearch";
import CourseValue from "./component/CourseValue";

function App() {
  return (
    <div className="container is-fluid">
      <CourseForm/>
      <CourseList/>
      <CourseSearch/>
      <CourseValue/>
    </div>
  );
}

export default App;
