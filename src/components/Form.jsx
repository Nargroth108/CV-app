/* eslint-disable react/prop-types */
import "../styles/Form.css";

import FormSection from "./FormSection";

export default function Form({
  cvData,
  onValueChange,
  displayValue,
  onDisplayChange,
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: displayValue }}
    >
      {Object.entries(cvData).map((section) => (
        <FormSection
          onValueChange={onValueChange}
          key={section[1].sectionName}
          section={section}
        />
      ))}

      <button type="submit" name="submit" id="submit" onClick={onDisplayChange}>
        Submit
      </button>
    </form>
  );
}
