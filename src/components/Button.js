
const Button = ({ text, onClick, buttonStyle }) => {

    return (
        <button onClick={onClick} style={ buttonStyle }
        className='btn'>
            {text}
        </button>
    )
}

// const buttonStyle = {
//     float: 'right',
//     backgroundColor: 'steelblue'
// }

export default Button