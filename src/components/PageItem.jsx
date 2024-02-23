/* eslint-disable react/prop-types */
export default function PageItem({ input }) {
  return (
    <li>
      <strong>{input[1].name}</strong>
      {": "}
      {input[1].value}
    </li>
  );
}
