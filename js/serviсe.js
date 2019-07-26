
const getData = async () => {
    return await (
        await fetch ("http://localhost:3000/cards")).json()
}

// not work  babel polifill Error
// const getData = await fetch("http://localhost:3000/cards");
// export const data = await response.json();

export default getData
