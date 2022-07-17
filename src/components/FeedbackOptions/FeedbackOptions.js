import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.buttonsWrapper}>
            {options.map(option => {
                return (
                    <button key={option} type="button" className={css.button} onClick={() => onLeaveFeedback(option)}>{option}</button>
                )
            })}
        </div>
)
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;