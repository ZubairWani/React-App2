export const UserGreeting = ()=>{
    const isLoggedIn = true
    // return <div> Welcome {isLoggedIn ? 'Zubair' : 'Guest'}</div>         // using ternary operator
    return <div> Welcome {isLoggedIn && 'Zubair'}</div>
}

