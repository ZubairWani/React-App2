export const ClickHandler = ()=> {
    const ClickHandler = (event, count =1)=>{
        console.log('Button CLicked',count, event)
    }
    return  <div>
        <button onClick={ClickHandler}>CLick</button>
        <button onClick={(event)=> ClickHandler(event, 5)}>CLick 5</button>
    </div>
}