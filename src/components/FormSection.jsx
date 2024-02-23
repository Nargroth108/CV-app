/* eslint-disable react/prop-types */
import FormItem from "./FormItem";

export default function FormSection({ section, onValueChange }) {
  return (
    <>
      <fieldset>
        <legend>{section[1].sectionName}</legend>

        {Object.entries(section[1].inputs).map((input) => {
          return (
            <FormItem
              key={input[1].name}
              input={input}
              section={section[0]}
              onValueChange={onValueChange}
            />
          );
        })}
      </fieldset>
    </>
  );
}
