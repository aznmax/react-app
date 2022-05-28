 function Tags(props) {

    return (
        <div className="tags">
            {
                props.tags && props.tags.map((tag, index) => {
                    return <div className="tag" key={'tag'+index}><p>{tag}</p></div>
                })
            }
        </div>
    )

}

export default Tags