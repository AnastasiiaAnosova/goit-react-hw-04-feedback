import { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood((prev) => prev + 1);
        break;
      case 'neutral':
        setNeutral((prev) => prev + 1);
        break;
      case 'bad':
        setBad((prev) => prev + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => good + neutral + bad;

  let total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => total ? Math.round((good / total) * 100) : 0;


  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {
          total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />
        }
      </Section>
    </>
  );
}

export default App

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   onLeaveFeedback = (option) => {
//     this.setState(
//       (prev) => ({
//         [option]: prev[option] + 1,
//       }));
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     return total ? Math.round((good / total) * 100) : 0;
//   }

//   render() {
//     const total = this.countTotalFeedback();
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     return (
//       <>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>
//         <Section title="Statistics">
//           {
//             total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />
//           }
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
