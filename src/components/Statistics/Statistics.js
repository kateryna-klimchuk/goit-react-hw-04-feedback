import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <ul className={css.feedbacksList}>
                    <li className={css.feedbacksItem}>
                        <p>Good: { good }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Neutral: { neutral }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Bad: { bad }</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Total: {total}</p>
                    </li>
                    <li className={css.feedbacksItem}>
                        <p>Positive feedback: {positivePercentage}%</p>
                    </li>

                </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;