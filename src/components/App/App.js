import React, { Component } from "react";
import Notification from "components/Notification";
import Section from "components/Section"
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import css from './App.module.css';

class App extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onFeedbackBtnClick = (option) => {
      this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number((this.state.good / this.countTotalFeedback() * 100).toFixed(0));
    return positivePercentage;
    }

    render() {
      const totalFeedbacks = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
      const options = Object.keys(this.state);
      const { good, neutral, bad } = this.state;

      return (
          <div className={css.container}>
          <div className={css.feedbacks}>
            <Section title="Please leave your feedback">
            <FeedbackOptions options={options} onLeaveFeedback={this.onFeedbackBtnClick} />
            </Section>

            <Section title="Statistics">
            {totalFeedbacks === 0 ? 
              <Notification message="There is no feedback" />
              : (                
              <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedbacks} positivePercentage={positivePercentage} />
  )}
            </Section>
      
          </div>
          </div>
        );
    }
}


export default App;