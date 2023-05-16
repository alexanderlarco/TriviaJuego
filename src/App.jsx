import "./App.css";
import { useContext, useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const dataAsk = [
    {
      id: 1,
      question: "Diabetes, ¿qué es eso?",
      answers: [
        {
          text: "Altos niveles de azúcar en la sangre, cuando el páncreas deja de producir insulina",
          correct: true,
        },
        {
          text: "Diferente condición de vida",
          correct: false,
        },
        {
          text: "Una enfermedad mortal",
          correct: false,
        },
        {
          text: "Un virus que ataca el páncreas",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "¿Qué cargo ocupa la insulina en el cuerpo?",
      answers: [
        {
          text: "Dejarte ciego",
          correct: false,
        },
        {
          text: "La insulina ayuda a transformar los alimentos",
          correct: false,
        },
        {
          text: "Ayuda a distribuir los alimentos por todo el cuerpo",
          correct: false,
        },
        {
          text: "Regula los niveles de glucosa",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question:
        "¿Por qué un niño/a con diabetes tipo 1 debe depender de insulina?",
      answers: [
        {
          text: "Porque sin insulina las células no tienen azúcar de donde sacar energía",
          correct: false,
        },
        {
          text: "Porque  permite  llevar una vida saludable",
          correct: false,
        },
        {
          text: "Porque sin insulina en el cuerpo, el azúcar se amontona en la sangre",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question:
        "¿Qué sucede cuando un niño con diabetes tipo 1 no se inyecta insulina?",
      answers: [
        {
          text: "Glucosa por encima de 300 y ningún otro síntoma",
          correct: false,
        },
        {
          text: "Feliz, quiere, jugar y aprender",
          correct: false,
        },
        {
          text: "Daño en el cuerpo, cara amarillenta y ojos vidriosos",
          correct: false,
        },
        {
          text: "Dolor de barriga, decaimiento, malestar general, glucosa elevada",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "¿Cuáles son los síntomas de hipoglicemia?",
      answers: [
        {
          text: "Dolor de piernas. Dolor de pecho",
          correct: false,
        },
        {
          text: "Visión borrosa, Debilidad y cansancio",
          correct: true,
        },
        {
          text: "Orinar frecuentemente y Ansiedad",
          correct: false,
        },
        {
          text: "Congestión nasal, Dolor de cabeza",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "¿Cuáles son los síntomas de hiperglicemia? Mencione 3",
      answers: [
        {
          text: "Demasiada sed,hambre y orina",
          correct: true,
        },
        {
          text: "Escalofríos y sueño",
          correct: false,
        },
        {
          text: "Ojos saltones y visión borrosa",
          correct: false,
        },
        {
          text: "Orina con frecuencia y riñones adoloridos",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "¿Por qué se debe medir la glucosa antes de cada comida?",
      answers: [
        {
          text: "Para saber un número y si no te mides no puedes comer.",
          correct: false,
        },
        {
          text: "Para saber cuánta insulina tienes que inyectarte.",
          correct: true,
        },
        {
          text: " Para ver si estas bajo o alto.",
          correct: false,
        },
        {
          text: " Porque tu médico te dijo que tienes que medirte.",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "¿Qué es la glucosa?",
      answers: [
        {
          text: " Una célula.",
          correct: false,
        },
        {
          text: " La sangre.",
          correct: false,
        },
        {
          text: "Es la palabra médica",
          correct: false,
        },
        {
          text: "Un tipo de azúcar que el cuerpo usa como fuente de energía.",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "¿Qué es el páncreas?",
      answers: [
        {
          text: "Un objeto",
          correct: false,
        },
        {
          text: "Una glándula",
          correct: false,
        },
        {
          text: "Una hormona",
          correct: false,
        },
        {
          text: "Un órgano del cuerpo el cual es el encargado de producir insulina",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "¿Qué es la insulina?",
      answers: [
        {
          text: "Una herramienta",
          correct: false,
        },
        {
          text: "Una vacuna",
          correct: false,
        },
        {
          text: "Es una hormona que permite a la glucosa de la sangre entrar a las células",
          correct: true,
        },
        {
          text: "Una droga que te deja ciego",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "¿Por qué es importante llevar un cuaderno de control de glicemias?",
      answers: [
        {
          text: "Para saber cómo están tus niveles de glucosa.",
          correct: false,
        },
        {
          text: "Para saber si la cantidad de insulina que usas es la adecuada",
          correct: true,
        },
        {
          text: "Porque tu doctor te pidió q anotes tus valores.",
          correct: false,
        },
        {
          text: "No es importante.",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Cada cuánto se debe hacer el examen de hemoglobina glicosilada HB1AC",
      answers: [
        {
          text: "Cada año.",
          correct: false,
        },
        {
          text: "Cada 3 meses.",
          correct: true,
        },
        {
          text: "Cada 4 meses.",
          correct: false,
        },
        {
          text: "Cada 6 meses.",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "Qué pasa con la glucosa del cuerpo cuando se come carbohidratos",
      answers: [
        {
          text: "Tu glucosa se eleva. ",
          correct: true,
        },
        {
          text: "Te sientes mal.",
          correct: false,
        },
        {
          text: "Tu glucosa se baja.",
          correct: false,
        },
        {
          text: "No pasa nada.",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Qué se debe hacer ante un síntoma de hipoglucemia",
      answers: [
        {
          text: "Medir la glucosa y hacer ejercicio.",
          correct: false,
        },
        {
          text: "Medir la glucosa y tomarse un vaso de líquido azucarado.",
          correct: true,
        },
        {
          text: "Medir la glucosa y acostarte a descansar.",
          correct: false,
        },
        {
          text: "Chupar 2 caramelos y medirse la glucosa.",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Qué se debe hacer si se presenta un síntoma de hiperglucemia?",
      answers: [
        {
          text: "Medir la glucosa, inyectar insulina y tomar agua",
          correct: true,
        },
        {
          text: "Medir la glucosa, tomar agua y esperar.",
          correct: false,
        },
        {
          text: "Comer alimentos que contengan azúcar y medirse la glucosar.",
          correct: false,
        },
        {
          text: "Medir la glucosa y hacer ejercicio.",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question:
        "¿Cuáles son los alimentos que no contienen carbohidratos?",
      answers: [
        {
          text: "Pan, colas, pasteles, arroz.",
          correct: false,
        },
        {
          text: "Zanahoria, remolacha, tomate, lechuga.",
          correct: false,
        },
        {
          text: "Pescado, pollo, carne y huevo.",
          correct: true,
        },
        {
          text: "Manzana, frutillas, pera",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "Una dieta saludable para una persona con diabetes tipo 1 es:",
      answers: [
        {
          text: "Restringir la ingesta de carbohidratoss",
          correct: false,
        },
        {
          text: "Régimen alimenticio que debe ser individualizado y realizada por una nutricionista",
          correct: true,
        },
        {
          text: "Una dieta igual que la indicada a personas con diabetes tipo 2",
          correct: false,
        },
        {
          text: "Ninguna de las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question:
        "Un hábito saludable para la alimentación de la persona con diabetes consiste en:",
      answers: [
        {
          text: "Tomar 2 vasos de agua al día",
          correct: false,
        },
        {
          text: "Respetar las porciones y el horario de las comidas",
          correct: true,
        },
        {
          text: "Fraccionar la alimentación a cada 2 horas",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "La manera adecuada de consumir frutas es:",
      answers: [
        {
          text: "En forma de jugo",
          correct: false,
        },
        {
          text: "Cocinada ",
          correct: false,
        },
        {
          text: "Pelada",
          correct: false,
        },
        {
          text: "Con cáscara y cruda",
          correct: true,
        },
      ],
    },
    {
      id: 20,
      question:
        "El conteo de carbohidratos es una herramienta que permite principalmente:",
      answers: [
        {
          text: "Comer el alimento que uno desee",
          correct: false,
        },
        {
          text: "Controlar las glucemias",
          correct: false,
        },
        {
          text: "Ajustar la insulina a la cantidad de carbohidratos consumidos",
          correct: true,
        },
        {
          text: "Mejorar los niveles de la Hemoglobina Glicosilada HbA1c",
          correct: false,
        },
      ],
    },
    {
      id: 21,
      question: "Los productos light son:",
      answers: [
        {
          text: "Alimentos fortificados con vitaminas y minerales, que no contiene nada de grasa",
          correct: false,
        },
        {
          text: "Alimentos que no contienen azúcar, grasa, ni carbohidratos",
          correct: false,
        },
        {
          text: "Alimentos ideales para toda persona con diabetes tipo 1",
          correct: false,
        },
        {
          text: "Alimentos que solo tienen menor porcentaje de algún componente en relación al alimento",
          correct: true,
        },
      ],
    },
    {
      id: 22,
      question: "En caso de un síntoma de hipoglucemia en el colegio:",
      answers: [
        {
          text: "No moverme, medir la glucosa e inmediatamente tomar un vaso de  bebida azucarada",
          correct: true,
        },
        {
          text: "Debo actuar rápido y tomar una bebida light sin medirme la glucosa.",
          correct: false,
        },
        {
          text: "Debo salir del aula inmediatamente hacia la enfermería para que me ayuden.",
          correct: false,
        },
        {
          text: "Debo ponerme insulina y no comer",
          correct: false,
        },
      ],
    },
    {
      id: 23,
      question:
        "Una persona con diabetes está resolviendo una prueba escolar, qué situación puede ocurrirle?",
      answers: [
        {
          text: "El estrés puede elevar los niveles de glucosa en sangre",
          correct: false,
        },
        {
          text: "Puedo experimentar dificultades de concentración.",
          correct: false,
        },
        {
          text: "Debe medir la glucosa y saber si es necesario comer algo.",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: true,
        },
      ],
    },
    {
      id: 24,
      question:
        "Para una persona con diabetes tipo 1, los refrigerios de media mañana y media tarde deben ser:",
      answers: [
        {
          text: "Refrigerios de 15 o 20 gramos de carbohidratos y si es necesario aplicarse insulina",
          correct: true,
        },
        {
          text: "Preferiblemente tiene que ser una porción de fruta y no aplicarse insulina",
          correct: false,
        },
        {
          text: "Ser ricos en carbohidratos, pero antes medirse la glucosa y no aplicarse insulina.",
          correct: false,
        },
        {
          text: "No debe tener refrigerios",
          correct: false,
        },
      ],
    },
    {
      id: 25,
      question:
        "¿Qué efectos tiene el ejercicio sobre el nivel de glucosa en sangre?",
      answers: [
        {
          text: "Aumenta la absorción de la insulina",
          correct: true,
        },
        {
          text: "Aumenta la glucosa en el cuerpo",
          correct: false,
        },
        {
          text: "Actúa como insulina y no es necesario aplicarse",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 26,
      question:
        "Después del ejercicio intenso",
      answers: [
        {
          text: "Existe un riesgo mayor de hipoglucemia varias horas más tarde",
          correct: true,
        },
        {
          text: "Existe un riesgo mayor de hiperglucemia en el momento de hacer ejercicio",
          correct: false,
        },
        {
          text: "Existe la probabilidad de producir una cetoacidosis",
          correct: false,
        },
        {
          text: "Tener un coma diabético",
          correct: false,
        },
      ],
    },
    {
      id: 27,
      question:
        "¿Algún tipo de ejercicio puede aumentar el nivel de glucosa en sangre?",
      answers: [
        {
          text: "Si, cuando son ejercicios anaeróbicos",
          correct: true,
        },
        {
          text: "Si, cuando son ejercicios aeróbicos",
          correct: false,
        },
        {
          text: "Si, cualquier tipo de ejercicio",
          correct: false,
        },
        {
          text: "Ninguna de las respuestas son correctas",
          correct: false,
        },
      ],
    },
    {
      id: 28,
      question:
        "Al hacer ejercicio es importante hidratarse",
      answers: [
        {
          text: "Antes de realizar la actividad ",
          correct: false,
        },
        {
          text: "Durante la actividad",
          correct: false,
        },
        {
          text: "Después de la actividad",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: true,
        },
      ],
    },
    {
      id: 29,
      question:
        "Al hacer ejercicio es importante hidratarse",
      answers: [
        {
          text: "Menos hambre",
          correct: false,
        },
        {
          text: "Más hambre",
          correct: true,
        },
        {
          text: "Ninguna de las dos",
          correct: false,
        },
        {
          text: "No se siente nada",
          correct: false,
        },
      ],
    },
    {
      id: 30,
      question:
        "El llamado “fenómeno del alba” o “fenómeno del amanecer” hace referencia a:",
      answers: [
        {
          text: "Niveles de glucosa elevadas por la mañana",
          correct: true,
        },
        {
          text: "Niveles de glucosa bajas por la tarde",
          correct: false,
        },
        {
          text: "Ninguna de las dos",
          correct: false,
        },
        {
          text: "Niveles de glucosa bajos por las madrugadas",
          correct: false,
        },
      ],
    },
    {
      id: 31,
      question:
        "Cuando el nivel de glucosa en sangre es alto:",
      answers: [
        {
          text: "El estómago se vacía lentamente",
          correct: true,
        },
        {
          text: "El estómago se vacía rápidamente",
          correct: false,
        },
        {
          text: "Ninguna de las dos",
          correct: false,
        },
        {
          text: "El estómago no se vacía",
          correct: false,
        },
      ],
    },
    {
      id: 32,
      question:
        "La absorción de insulina:",
      answers: [
        {
          text: "Es más rápido en el abdomen que en otra zona",
          correct: true,
        },
        {
          text: "Es más rápido en los muslos ",
          correct: false,
        },
        {
          text: "Es más rápido en las nalgas que en el abdomen",
          correct: false,
        },
        {
          text: "Es más rápido en el brazo que en otra zona",
          correct: false,
        },
      ],
    },
    {
      id: 33,
      question:
        "La insulina humana para no perder su acción",
      answers: [
        {
          text: "Debe estar almacenada en la oscuridad",
          correct: false,
        },
        {
          text: "Debe mantenerse de 2 a 8 grados de temperatura",
          correct: true,
        },
        {
          text: "Debe estar en el congelador",
          correct: false,
        },
        {
          text: "No importa si la dejo al sol",
          correct: false,
        },
      ],
    },
    {
      id: 34,
      question:
        "Si tienes vómito sin diarrea son síntomas frecuentes de:",
      answers: [
        {
          text: "Deficiencia de insulina por un tiempo prolongado",
          correct: true,
        },
        {
          text: "Una hiperglucemia",
          correct: false,
        },
        {
          text: "Ninguna de las dos",
          correct: false,
        },
        {
          text: "Consumo de un alimento en mal estado",
          correct: false,
        },
      ],
    },
  ];



  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const data = useMemo(() => {
    shuffleArray(dataAsk);
    return dataAsk;
  }, [dataAsk]);

  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("");

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "⭐" },
        { id: 2, amount: "⭐" },
        { id: 3, amount: "⭐" },
        { id: 4, amount: "⭐⭐" },
        { id: 5, amount: "⭐⭐" },
        { id: 6, amount: "⭐⭐" },
        { id: 7, amount: "⭐⭐⭐" },
        { id: 8, amount: "⭐⭐⭐" },
        { id: 9, amount: "⭐⭐⭐" },
        { id: 10, amount: "⭐⭐⭐⭐" },
        { id: 11, amount: "⭐⭐⭐⭐" },
        { id: 12, amount: "⭐⭐⭐⭐" },
        { id: 13, amount: "⭐⭐⭐⭐⭐" },
        { id: 14, amount: "⭐⭐⭐⭐⭐" },
        { id: 15, amount: "⭐⭐⭐⭐⭐" },
        { id: 16, amount: "⭐⭐⭐⭐⭐⭐" },
        { id: 17, amount: "⭐⭐⭐⭐⭐⭐" },
        { id: 18, amount: "⭐⭐⭐⭐⭐⭐" },
        { id: 19, amount: "⭐⭐⭐⭐⭐⭐⭐" },
        { id: 20, amount: "⭐⭐⭐⭐⭐⭐⭐" },
        { id: 21, amount: "⭐⭐⭐⭐⭐⭐⭐⭐" },
        { id: 22, amount: "⭐⭐⭐⭐⭐⭐⭐⭐" },
        { id: 23, amount: "⭐⭐⭐⭐⭐⭐⭐⭐⭐" },
        { id: 24, amount: "⭐⭐⭐⭐⭐⭐⭐⭐⭐" },
        { id: 25, amount: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐" },
      ].reverse(),
    []
  );

  function reload() {
    window.location.reload();
  }
  useEffect(() => {
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <div className="endText">
                <h1 className="endText">Tu ganaste: {earned}</h1>
                <button onClick={reload}>Reiniciar</button>
              </div>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;