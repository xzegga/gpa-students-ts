import StudentAdd from 'features/students/StudentAdd';
import StudentList from 'features/students/StudentList';
import Header from 'features/Header/Header';
import Footer from 'features/Footer/Footer';
import FadeIn from 'material-ui/FadeIn';

function App() {
  document.body.style.backgroundColor = "#f7f7f7  ";

  return (
    <div className="App">
      <FadeIn duration={1000}><Header /></FadeIn>
      <FadeIn duration={1000} delay={100}>
        <StudentAdd />
      </FadeIn>
      <FadeIn duration={1000} delay={300}>
        <StudentList />
      </FadeIn>
      <FadeIn duration={1000} delay={500}>
        <Footer />
      </FadeIn>

    </div>
  );
}

export default App;
