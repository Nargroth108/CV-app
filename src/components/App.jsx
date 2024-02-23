import { useState } from "react";
import FinalPage from "./FinalPage";
import Form from "./Form";

export default function App() {
  const [cvData, setCvData] = useState({
    generalInfo: {
      sectionName: "General Info",
      sectionId: 1,
      inputs: {
        a: { id: 0, name: "Name", value: "Nargroth", type: "text" },
        b: {
          id: 1,
          name: "Email",
          value: "nargroth.ss@gmail.com",
          type: "email",
        },
        c: { id: 2, name: "Phone", value: "06205265912", type: "number" },
      },
    },

    education: {
      sectionName: "Education",
      sectionId: 2,
      inputs: {
        a: {
          id: 0,
          name: "School",
          value: "Budakalasz gimnazium",
          type: "text",
        },
        b: { id: 1, name: "Date", value: "2020 - 2023", type: "text" },
        c: {
          id: 2,
          name: "Studies",
          value: "gimnazium, erettsegi",
          type: "text",
        },
      },
    },
    work: {
      sectionName: "Work experience",
      sectionId: 3,
      inputs: {
        a: { id: 0, name: "Company", value: "Yoohyeon Bot", type: "text" },
        b: { id: 1, name: "Position", value: "CEO, developer", type: "text" },
        c: { id: 2, name: "During", value: "2024 - ", type: "text" },
        d: {
          id: 3,
          name: "Description",
          value:
            "Main developer of the Yoohyeon Discord bot. Daily tasks include creating and uploading new cards, schedueling new events and constantly working on new features suggested by the playerbase. ",
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
