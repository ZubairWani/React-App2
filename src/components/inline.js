export const Inline = ()=> {
    const heading = {
        fontSize : '75px',
        color : 'blue',
    }
    // return <h1 className ='error'>Error </h1>  //this will work
    // return <h1 className = {styles.success}>Success</h1>    // this will not work
    return <h1 style = {heading}>Inline</h1>
}