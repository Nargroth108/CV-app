/* eslint-disable react/prop-types */
import PageItem from "./PageItem";

export default function PageSection({ section }) {
  return (
    <section>
      <strong className="sectionTitle">{section[1].sectionName}</strong>

      {Object.entries(section[1].inputs).map((input) => {
        return (
          <ul key={`${input[0]} page`}>
            <PageItem
              key={`${input[1].name} page`}
              input={input}
              section={section[0]}
            />
          </ul>
        );
      })}
    </section>
  );
}
