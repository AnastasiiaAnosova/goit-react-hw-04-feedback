import { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) => {
    console.log("before >> ", this.state);
    this.setState(
      (prev) => ({
      [option]: prev[option] + 1,
      }),
      () => {
      console.log("after >> ", this.state);
    });
    // console.log("after >> ", this.state); // тут ми ще не побачимо змін.
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state; 
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  }
  
  // const { good, neutral, bad } = this.state;
  // const total = good + neutral + bad;
  // const positivePercentage = total ? Math.round((good / total) * 100) : 0;


  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state; 
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {
            total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
}

export default App;
