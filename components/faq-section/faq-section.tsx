import { SectionTitle } from 'modules';
import Collapse from 'ui-kit/collapse';
import { questions } from './constants';
import styles from './faq-section.module.scss';
import { Fade } from "react-awesome-reveal";

const FaqSection = (): JSX.Element => {
  return (
    <div className={styles["faq"]}>
      <div className="container">
        <SectionTitle
          normalText="FAQ"
          titleInfo="The general most common questions asked are"
        />
        <div>
          <Fade duration={2500}>
            <Fade className={styles["faq__body"]} triggerOnce duration={1000} direction={'right'} cascade>
              {questions.map(question => (
                <Collapse 
                  title={question.title}
                  children={question.description}
                />
              ))}
            </Fade>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
