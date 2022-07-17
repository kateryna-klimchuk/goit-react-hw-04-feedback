import React, { useState } from 'react';
import Notification from 'components/Notification';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackBtnClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number(
      ((good / countTotalFeedback()) * 100).toFixed(0)
    );
    return positivePercentage;
  };

  const totalFeedbacks = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div className={css.container}>
      <div className={css.feedbacks}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onFeedbackBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedbacks === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
};

// class App extends Component {
// state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   onFeedbackBtnClick = (option) => {
//       this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//     }

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     }

//     countPositiveFeedbackPercentage = () => {
//     const positivePercentage = Number((this.state.good / this.countTotalFeedback() * 100).toFixed(0));
//     return positivePercentage;
//     }

//     render() {
//       const totalFeedbacks = this.countTotalFeedback();
//       const positivePercentage = this.countPositiveFeedbackPercentage();
//       const options = Object.keys(this.state);
//       const { good, neutral, bad } = this.state;

//       return (
//           <div className={css.container}>
//           <div className={css.feedbacks}>
//             <Section title="Please leave your feedback">
//             <FeedbackOptions options={options} onLeaveFeedback={this.onFeedbackBtnClick} />
//             </Section>

//             <Section title="Statistics">
//             {totalFeedbacks === 0 ?
//               <Notification message="There is no feedback" />
//               : (
//               <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedbacks} positivePercentage={positivePercentage} />
//   )}
//             </Section>

//           </div>
//           </div>
//         );
//     }
// }

export default App;
