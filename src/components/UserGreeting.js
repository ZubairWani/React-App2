export const UserGreeting = ()=>{
    const isLoggedIn = true
    // return <div> Welcome {isLoggedIn ? 'Zubair' : 'Guest'}</div>
    return <div> Welcome {isLoggedIn && 'Zubair'}</div>
}

