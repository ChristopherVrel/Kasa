const List = ({ list }) => {
    return <>
        <ul>
            {
                (list) &&
                list.map((e, i) => {
                    return (
                        <li key={i}>{e}</li>
                    )
                })
            }
        </ul>
    </>
}

export default List;