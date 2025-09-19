import HomeChild from "../components/homepage/children/homeChild";
import terms from "../components/terms&conditions/terms.json";

const TermsConditions = () => {
  return (
    <HomeChild>
      <div>
        {Object.entries(terms).map(([key, section]) => (
          <div key={key}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </HomeChild>
  );
};

export default TermsConditions;
