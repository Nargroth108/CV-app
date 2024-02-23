/* eslint-disable react/prop-types */
import "../styles/FinalPage.css";
import PageSection from "./PageSection";

export default function FinalPage({ cvData, displayValue, onDisplayChange }) {
  return (
    <main className="cvContainer" style={{ display: displayValue }}>
      {Object.entries(cvData).map((section) => (
        <PageSection key={`${section[1].sectionName} page`} section={section} />
      ))}
      <button key={4} onClick={onDisplayChange}>
        Edit
      </button>
    </main>
  );
}
