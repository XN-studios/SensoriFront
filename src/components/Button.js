// import PropTypes from 'prop-types'

const Button = ({ onClick }) => {

    return (
        <button onClick={onClick} style={{ "backgroundColor": "steelblue" }}
        className='btn'>
            Back to All Entries
        </button>
    )
}

// Button.defaultProps = {
//     color: 'steelblue'
// }

// Button.propTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
//     onClick: PropTypes.func,
// }

export default Button
