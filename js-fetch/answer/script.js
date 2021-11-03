console.log("is this thing on?")


function loadBacon() {
    console.log("beginning of load bacon")
    const handleResponse= (response) => {
        return response.json()
    }
    console.log("middle of load bacon")
    const handleJson = (json) => {
        let accumulator = ""
        for (let bacon of json){
            accumulator = accumulator + `<p>${bacon}</p>`
        }
        console.log(accumulator)
        document.getElementById("target").innerHTML = accumulator
    }

    const result = fetch("https://baconipsum.com/api/?type=meat-and-filler")
        .then(handleResponse)
        .then(handleJson)
    console.log(result)



    console.log("end of load bacon")
}

console.log("end of file")