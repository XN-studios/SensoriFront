import Entry from "./Entry"

const Entries = ({ entries, onClick }) => {
    return (
        <>
            {entries.map((entry) => (
                
                <Entry key={entry.id} entry={entry} onClick={onClick} />
                
            ))}
        </>
    )
}

export default Entries