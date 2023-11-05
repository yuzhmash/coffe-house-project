

class MyServer {
    getResourse = async (link) => {
        let res = await fetch(link)

        if (!res.ok) {
            throw new Error(`Could not fetch ${link}, status: ${res.status}`)
        }

        return await res.json();
    }

    getOurCoffeHeader = async () => {
        return await this.getResourse('http://localhost:3000/mainData')
    }
}

export default MyServer;