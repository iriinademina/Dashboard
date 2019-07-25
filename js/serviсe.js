
 const getData = async () => {
    return await (
        await fetch ("http://localhost:3000/cards")).json()
}

export default getData
