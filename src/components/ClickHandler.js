export const ClickHandler = ()=> {
    const ClickHandler = (event)=>{
        console.log('Button CLicked', event)
    }
    return  <div>
        <button onClick={ClickHandler}>CLick</button>
    </div>
}