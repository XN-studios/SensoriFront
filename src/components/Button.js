
const Button = ({ text, onClick }) => {

    return (
        <button onClick={onClick} style={{ "backgroundColor": "steelblue" }}
        className='btn'>
            {text}
        </button>
    )
}

export default Button