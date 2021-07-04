function Badge(props){
    let c=`bg-${props.c} ps-2 pe-3 mx-1`
    let style = {
        "border-radius": "2px",
        "font-size": "0.3em"
    }
    return (
        <span className={c} style={style}></span>
    )
}

export default Badge;