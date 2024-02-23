/* eslint-disable react/prop-types */
export default function FormItem({ input, section, onValueChange }) {
  return (
    <>
      <label htmlFor={input[1].name}>
        {input[1].name}
        {": "}
        <input
          id={input[1].name}
          name={input[1].name}
          type={input[1].type}
          value={input[1].value}
          onChange={(e) => onValueChange(e, section, input[0])}
          autoComplete="true"
          required
        />
      </label>
    </>
  );
}
