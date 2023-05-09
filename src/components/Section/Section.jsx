const Section = ({ title, children }) => {
  return (
    <section title={title}>
      <h2 className="FeedbackOptions__title">{title}</h2>
      {children}
    </section>
  );
};
export default Section;
