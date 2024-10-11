"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CourseInfo {
  title: string;
  connectVirtual: string;
  finalEvaluations: string;
  onlineExams: string;
  trimesterSchedule: string;
  reminder: string;
  emails: string;
  tasks: string;
  lessons: string;
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [showCourses, setShowCourses] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [fullName, setFullName] = useState<string>("Usuario"); // Valor por defecto

  const courseInfo: Record<string, CourseInfo> = {
    Matemáticas: {
      title: "Matemáticas",
      connectVirtual: "Conéctate virtualmente",
      finalEvaluations: "Evaluaciones finales",
      onlineExams: "Exámenes en línea",
      trimesterSchedule: "Agenda Trimestral (Excel con materias y fechas)",
      reminder:
        "Recordatorio: AVISO: Mañana 3-9 llevar maqueta de medio ambiente.",
      emails: "Correos (compartir memos con el profesor y enviar tareas)",
      tasks: "Tareas: Aparece un documento con instrucciones del profesor",
      lessons: 'Lecciones: "Simulador de un videojuego"',
    },
    Español: {
      title: "Español",
      connectVirtual: "Conéctate virtualmente",
      finalEvaluations: "Evaluaciones finales",
      onlineExams: "Exámenes en línea",
      trimesterSchedule: "Agenda Trimestral (Excel con materias y fechas)",
      reminder:
        "Recordatorio: AVISO: Mañana 3-9 llevar maqueta de medio ambiente.",
      emails: "Correos (compartir memos con el profesor y enviar tareas)",
      tasks: "Tareas: Aparece un documento con instrucciones del profesor",
      lessons: 'Lecciones: "Simulador de un videojuego"',
    },
    Ingles: {
      title: "Ingles",
      connectVirtual: "Conéctate virtualmente",
      finalEvaluations: "Evaluaciones finales",
      onlineExams: "Exámenes en línea",
      trimesterSchedule: "Agenda Trimestral (Excel con materias y fechas)",
      reminder:
        "Recordatorio: AVISO: Mañana 3-9 llevar maqueta de medio ambiente.",
      emails: "Correos (compartir memos con el profesor y enviar tareas)",
      tasks: "Tareas: Aparece un documento con instrucciones del profesor",
      lessons: 'Lecciones: "Simulador de un videojuego"',
    },
    Geografía: {
      title: "Geografía",
      connectVirtual: "Conéctate virtualmente",
      finalEvaluations: "Evaluaciones finales",
      onlineExams: "Exámenes en línea",
      trimesterSchedule: "Agenda Trimestral (Excel con materias y fechas)",
      reminder:
        "Recordatorio: AVISO: Mañana 3-9 llevar maqueta de medio ambiente.",
      emails: "Correos (compartir memos con el profesor y enviar tareas)",
      tasks: "Tareas: Aparece un documento con instrucciones del profesor",
      lessons: 'Lecciones: "Simulador de un videojuego"',
    },
    Historia: {
      title: "Historia",
      connectVirtual: "Conéctate virtualmente",
      finalEvaluations: "Evaluaciones finales",
      onlineExams: "Exámenes en línea",
      trimesterSchedule: "Agenda Trimestral (Excel con materias y fechas)",
      reminder:
        "Recordatorio: AVISO: Mañana 3-9 llevar maqueta de medio ambiente.",
      emails: "Correos (compartir memos con el profesor y enviar tareas)",
      tasks: "Tareas: Aparece un documento con instrucciones del profesor",
      lessons: 'Lecciones: "Simulador de un videojuego"',
    },
    IA: {
      title: "IA",
      connectVirtual: "Conéctate virtualmente",
      finalEvaluations: "Evaluaciones finales",
      onlineExams: "Exámenes en línea",
      trimesterSchedule: "Agenda Trimestral (Excel con materias y fechas)",
      reminder:
        "Recordatorio: AVISO: Mañana 3-9 llevar maqueta de medio ambiente.",
      emails: "Correos (compartir memos con el profesor y enviar tareas)",
      tasks: "Tareas: Aparece un documento con instrucciones del profesor",
      lessons: 'Lecciones: "Simulador de un videojuego"',
    },
  };

  const handleLogout = () => {
    router.push("/");
  };

  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    if (storedFullName) {
      setFullName(storedFullName);
    } else {
      // Redirigir a la página de registro si no hay un nombre completo
      router.push("/register");
    }
  }, [router]);

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
  };

  return (
    <div className="flex flex-col w-full h-min justify-center items-center p-10">
      <div className="dashboard login w-full h-max">
        <div className="w-full h-full flex flex-row justify-center items-center">
          <h1 className="p-10 text-4xl">Bienvenido(a), {fullName}</h1>
          {/* Icono de notificaciones */}
          <img
            src="/assets/icons/5.png"
            alt="icon"
            className="notify-iconicon w-16 h-16 cursor-pointer"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          />

          {/* Pop-up de notificaciones */}
          {isNotificationOpen && (
            <div className="notification-popup absolute top-10 right-48 bg-white border border-gray-300 shadow-lg p-4 w-64">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Notificaciones</h3>
                <button
                  className="text-blue-500"
                  onClick={() => setIsNotificationOpen(false)}
                >
                  X
                </button>
              </div>
              <ul className="mt-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Examen pendiente Matemáticas
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Recordar tarea inglés
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Revisar calendario
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* ------------------MENU DASHBOARD -----------------*/}
        <div className="flex flex-row w-full h-screen mb-40">
          <div className="flex flex-col w-4/12 h-screen border-solid border-2 border-[#ffffff67]-600 container-left-dash">
            <h3 className="w-full text-center p-10 font-bold text-white border-b-2 border-white-600">
              Elige una opción
            </h3>
            <div className="icons-dashboard w-full flex flex-row justify-center items-center">
              <img
                src="/assets/icons/2.png"
                alt="icon"
                className="icon w-10 h-10"
              />
              <button
                className="button w-4/6 text-white p-5"
                onClick={() => setShowCourses(!showCourses)}
              >
                Cursos
              </button>
            </div>
            {showCourses && (
              <div className="flex flex-col justify-center items-center">
                {[...Object.keys(courseInfo)].map((course) => (
                  <button
                    key={course}
                    className="icons-dashboard button w-4/6 text-white p-5 hover:text-black hover:font-bold"
                    onClick={() => handleCourseSelect(course)}
                  >
                    {course}
                  </button>
                ))}
              </div>
            )}
            <div className="icons-dashboard w-full flex flex-row justify-center items-center">
              <img
                src="/assets/icons/4.png"
                alt="icon"
                className="icon w-10 h-10"
              />
              <button className="button w-4/6 text-white p-5">
                <a href="/pages/grades">Evaluaciones</a>
              </button>
            </div>
            <div className="icons-dashboard w-full flex flex-row justify-center items-center">
              <img
                src="/assets/icons/1.png"
                alt="icon"
                className="icon w-10 h-10"
              />
              <button className="button w-4/6 text-white p-5">
                <Link href="/pages/Configuracion">Configuración</Link>
              </button>
            </div>
            <div className="icons-dashboard w-full flex flex-row justify-center items-center">
              <img
                src="/assets/icons/9.png"
                alt="icon"
                className="icon w-10 h-10"
              />
              <button className="button w-4/6 text-white p-5">
                <a href="/pages/indi">Comunidades Indígenas</a>
              </button>
            </div>
            <div className="w-full flex justify-center items-center p-3">
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-block btn-large "
              >
                Cerrar sesión
              </button>
            </div>
          </div>
          <div className=" w-8/12 h-full container-materials border-solid border-2 border-[#ffffff67]-600">
            {selectedCourse && (
              <div className="flex flex-col gap-4 p-4">
                {[...Array(2)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-4 w-full"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {courseInfo[selectedCourse].title}
                    </h3>
                    <div className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold">
                      <a href="/pages/conect">
                        {courseInfo[selectedCourse].connectVirtual}
                      </a>
                    </div>
                    <div className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold">
                      <a href="/pages/grades    ">
                        {courseInfo[selectedCourse].finalEvaluations}
                      </a>
                    </div>
                    <div className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold">
                      <a href="/pages/online-exam">
                        {courseInfo[selectedCourse].onlineExams}
                      </a>
                    </div>
                    <div className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold">
                      <a href="/pages/calendar">
                        {courseInfo[selectedCourse].trimesterSchedule}
                      </a>
                    </div>
                    <div
                      className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold"
                      onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    >
                      {courseInfo[selectedCourse].reminder}
                    </div>
                    <div className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold">
                      <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ARpgrqdYTaXDDD369MyBlErQEulZZE4BVjUQwE3aVSBtSKPyKh49GmHuU5XNAMDgzuk1eny3pNe54A&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1357913452%3A1728062105928816&ddm=0">
                        {courseInfo[selectedCourse].emails}
                      </a>
                    </div>
                    <div className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold">
                      <a href="/pages/videoIA">
                        {courseInfo[selectedCourse].tasks}
                      </a>
                    </div>
                    <div className="p-2 cursor-pointer hover:bg-green-500 hover:text-white hover:font-bold">
                      <a href="/pages/brain">
                        {courseInfo[selectedCourse].lessons}
                      </a>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Ver detalles
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <video
        src="/assets/video/lenguage.mp4" // Reemplaza con la ruta de tu video
        autoPlay
        loop
        muted
        className="fixed bottom-0 right-10 w-52 h-52 object-cover"
        playsInline
      />
    </div>
  );
};

export default Dashboard;
