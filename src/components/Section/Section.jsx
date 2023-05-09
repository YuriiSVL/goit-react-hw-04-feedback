import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section title={title} className={css.section}>
      <h2 className="FeedbackOptions__title">{title}</h2>
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
