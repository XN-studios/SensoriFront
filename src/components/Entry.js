import { Button } from 'react-bootstrap'
import { CgArrowRightO } from 'react-icons/cg'

const Entry = ({ entry, onClick }) => {
    return (
        //<div className="entry" onClick={() => onClick(entry.id)}>
            <td>
            <h3>{entry.label}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Button 
                style={{ color: 'black', cursor: 'pointer' }}
                onClick={()=> onClick(entry.id)}
                >View Chart</Button>
            </td>
        //</div>
    )
}

export default Entry