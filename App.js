import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import {useState} from 'react';


function App() {

const [courses, setCourses] = useState(
  [
    'Programowanie w C#',
    'Angular dla początkujących',
    'Kurs Django',
  ]
);


const [nameAndSurname, setNameAndSurname] = useState();
const [courseNumber, setCourseNumber] = useState();


const onSubmit = (event) => {
  event.preventDefault();
  console.log(nameAndSurname);
  if(courses[courseNumber - 1]){
    console.log(courses[courseNumber - 1]);}
  else {
      console.log ("Nieprawidlowy numer kursu");
    }
  }





  return (
    <div>
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map(course => (
           <li>{course}</li>
           ))}
      </ol>
      <form onSubmit = {onSubmit}>
        <div className = "form-group">
          <label for = "name-and-surname">Imie i nazwisko:</label>
          <input onChange = {(event) => {setNameAndSurname(event.target.value)}} className = "form-control" type = "text" id = "name-and-surname"/>
           </div>
        <div className = "form-group">
        <label for = "course-number">Numer kursu:</label>
        <input onChange={(event) => {
          setCourseNumber(event.target.value);
        }}
        className = "form-control" type = "number" id = "course-number" />
           </div>
           <button className = "btn btn-primary">Zapisz do kursu</button>
      </form>
    </div>
  )
}

export default App;
