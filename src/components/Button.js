
const Button = ({ text, onClick, buttonStyle }) => {

    return (
        <button onClick={onClick} style={ buttonStyle }
        className='btn'>
            {text}
        </button>
    )
}

export default Button