import { CgArrowRightO } from 'react-icons/cg'

const Entry = ({ entry, onClick }) => {
    return (
        <div className="entry" onClick={() => onClick(entry.id)}>
            <h3>{entry.label}
                <CgArrowRightO 
                style={{ color: 'green', cursor: 'pointer' }}
                />
            </h3>
        </div>
    )
}

export default Entry