export const NameList = ()=> {
    const names = ['zubair', 'Adnan', 'Arshid']
    return <div>
        {
            names.map((name)=>{
                return <h2 key={name}> {name}</h2>
            })
        }
    </div>
}