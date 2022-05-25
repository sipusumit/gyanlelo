function getUrl(){
    let dev = process.env.NODE_ENV
    let res = dev == "production" ? "https://gyanlelo.tk" : "http://localhost:3000"
    return res
}

export default  getUrl
