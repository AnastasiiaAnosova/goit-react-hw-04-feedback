const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const transformFirstLetter = (option) => {
        return option.charAt(0).toUpperCase() + option.slice(1);
    };

    return (
        options.map((option, index) => {
            return <button key={index} onClick={()=> onLeaveFeedback(option)}>{transformFirstLetter(option)}</button>
        })
    )
}

export default FeedbackOptions;
