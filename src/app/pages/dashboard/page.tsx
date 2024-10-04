"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="flex flex-col w-full justify-center items-center overflow-y-auto">
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

        <div className="flex flex-row w-full h-screen mb-40">
          <div className="flex flex-col w-4/12 h-screen border-solid border-2 border-[#ffffff67]-600">
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
                <a href="/pages/quiz">Evaluaciones</a>
              </button>
            </div>
            <div className="icons-dashboard w-full flex flex-row justify-center items-center">
              <img
                src="/assets/icons/1.png"
                alt="icon"
                className="icon w-10 h-10"
              />
              <button className="button w-4/6 text-white p-5">
                Configuración
              </button>
            </div>

            <div className="w-full flex justify-center items-center p-5 ">
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-block btn-large"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
          <div className="w-8/12 h-screen p-10 flex flex-col justify-center items-center">
            {selectedCourse ? (
              <div>
                <h2 className="text-2xl font-bold">
                  {courseInfo[selectedCourse].title}
                </h2>
                <ul className="list-disc">
                  <li>{courseInfo[selectedCourse].connectVirtual}</li>
                  <li>{courseInfo[selectedCourse].finalEvaluations}</li>
                  <li>{courseInfo[selectedCourse].onlineExams}</li>
                  <li>{courseInfo[selectedCourse].trimesterSchedule}</li>
                  <li>{courseInfo[selectedCourse].reminder}</li>
                  <li>{courseInfo[selectedCourse].emails}</li>
                  <li>{courseInfo[selectedCourse].tasks}</li>
                  <li>{courseInfo[selectedCourse].lessons}</li>
                </ul>
              </div>
            ) : (
              <p className="text-lg">
                Selecciona un curso para ver la información.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
