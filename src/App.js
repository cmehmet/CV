import Title from "./components/Header";
import "./components/App.css";
import Edu from "./components/Education"
import Yetenek from "./components/Yetenek";

function App() {
  const Bilgiler = [
    {
      id: "1",
      Name: "Mehmet Atay",
      Tag: "Stajyer",
      Summary:
        "Kendini geliştirmeye istekli ve öğrenmeye açık bilgisayar mühendisi stajyeri",
        
    },

    {
      id: 2,
      School: "Trakya Üniversitesi, Bilgisayar Mühendisliği",
      Gpa: "3.7/4",
      Start : "2019.09.27",
      Graduate: "2023.06.30",

    },
    {
      id:3,
      Beceri :
            "Assembly      ■■■■■■■■▢▢ 80%\n"+
            "Python        ■■■■■■▢▢▢▢ 60%\n"+
            "C             ■■■■■■■▢▢▢ %70\n"+
            "JAVA          ■■■■▢▢▢▢▢▢ %40\n"+
            "C++           ■■■■■■▢▢▢▢ 60%\n", 
    }
  ]
  return (
    <div>
      <Title items={Bilgiler}/>
      <Edu items={Bilgiler}/>
      <Yetenek items={Bilgiler}/>
    </div>
  );
}

export default App;
