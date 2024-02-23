import { useState } from "react";
import FinalPage from "./FinalPage";
import Form from "./Form";

export default function App() {
  const [cvData, setCvData] = useState({
    generalInfo: {
      sectionName: "General Info",
      sectionId: 1,
      inputs: {
        a: { id: 0, name: "Name", value: "John Doe", type: "text" },
        b: {
          id: 1,
          name: "Email",
          value: "johndoe.example@gmail.com",
          type: "email",
        },
        c: { id: 2, name: "Phone", value: "1234567890", type: "number" },
      },
    },

    education: {
      sectionName: "Education",
      sectionId: 2,
      inputs: {
        a: {
          id: 0,
          name: "School",
          value: "Random University",
          type: "text",
        },
        b: { id: 1, name: "Date", value: "2002 - 2005", type: "text" },
        c: {
          id: 2,
          name: "Studies",
          value: "Bachelor's degree in computer engeneering",
          type: "text",
        },
      },
    },
    work: {
      sectionName: "Work experience",
      sectionId: 3,
      inputs: {
        a: { id: 0, name: "Company", value: "Example Company", type: "text" },
        b: {
          id: 1,
          name: "Position",
          value: "Senior software developer",
          type: "text",
        },
        c: { id: 2, name: "During", value: "2014 - 2023", type: "text" },
        d: {
          id: 3,
          name: "Description",
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui officiis dolorem incidunt quia harum, nostrum excepturi veritatis fugiat eveniet, odit provident nemo quibusdam sit rerum quas magnam, tempore fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui officiis dolorem incidunt quia harum, nostrum excepturi veritatis fugiat eveniet, odit provident nemo quibusdam sit rerum quas magnam, tempore fuga.",
          type: "text",
        },
      },
    },
  });
  const [displayValue, setDisplayValue] = useState(["grid", "none"]);

  function onValueChange(e, section, input) {
    setCvData((previousCvData) => ({
      ...previousCvData,
      [section]: {
        ...previousCvData[section],
        inputs: {
          ...previousCvData[section].inputs,
          [input]: {
            ...previousCvData[section].inputs[input],
            value: e.target.value,
          },
        },
      },
    }));
  }

  const onDisplayChange = () => {
    setDisplayValue((previousDisplayValue) => [
      previousDisplayValue[0] === "grid" ? "none" : "grid",
      previousDisplayValue[1] === "grid" ? "none" : "grid",
    ]);
  };

  return (
    <>
      <Form
        cvData={cvData}
        onValueChange={onValueChange}
        displayValue={displayValue[0]}
        onDisplayChange={onDisplayChange}
      />
      <FinalPage
        cvData={cvData}
        displayValue={displayValue[1]}
        onDisplayChange={onDisplayChange}
      />
    </>
  );
}
