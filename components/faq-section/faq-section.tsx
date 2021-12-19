import { SectionTitle } from 'modules';
import Collapse from 'ui-kit/collapse';
import { questions } from './constants';
import styles from './faq-section.module.scss';

const FaqSection = (): JSX.Element => {
  return (
    <div className={styles["faq"]}>
      <div className="container">
        <SectionTitle
          normalText="FAQ"
          titleInfo="The general most common questions asked are"
        />
        <div className={styles["faq__body"]}>
          {
            questions.map(question => (
              <Collapse 
                title={question.title}
                children={question.description}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
