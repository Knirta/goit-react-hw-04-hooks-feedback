import React, { useState } from "react";
import Container from "./components/countainer";
import FeedbackOptions from "./components/feedbackOptions";
import Statisctics from "./components/statistics";
import Section from "./components/section";
import Notification from "./components/notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addVoice = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percentage = parseInt((good / total) * 100);
    return total ? percentage : 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions option="good" onLeaveFeedback={addVoice} />
        <FeedbackOptions option="neutral" onLeaveFeedback={addVoice} />
        <FeedbackOptions option="bad" onLeaveFeedback={addVoice} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statisctics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
};

/* class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  addVoice = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, curr) => acc + curr, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = parseInt((this.state.good / total) * 100);
    return total ? percentage : 0;
  };

  render() {
    const [good, neutral, bad] = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions option={good} onLeaveFeedback={this.addVoice} />
          <FeedbackOptions option={neutral} onLeaveFeedback={this.addVoice} />
          <FeedbackOptions option={bad} onLeaveFeedback={this.addVoice} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statisctics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
} */

export default App;
