import StudentAdd from 'features/students/StudentAdd';
import StudentList from 'features/students/StudentList';

function App() {
  document.body.style.backgroundColor = "#f7f7f7  ";

  return (
    <div className="App">
      <StudentAdd />
      <StudentList />
    </div>
  );
}

export default App;
