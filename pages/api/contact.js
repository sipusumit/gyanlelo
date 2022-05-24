export default function  handler(req, res){
    const body = JSON.parse(req.body);
    console.log(body);
    console.log(validateEmail(body.email))
    res.status(200).json({ status: 'OK' });
};

const validateEmail = e =>{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
}