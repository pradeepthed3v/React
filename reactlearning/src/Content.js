const Content = () =>{
    const handleNameChange = () => {
        const names = ['tralelero tralala','bombardilo crocodilio','tung tung tung tung tung tung sahoor'];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }

    return(
        <main>
            <p>HELLO {handleNameChange()}</p>
            
        </main>
    )
}

export default Content