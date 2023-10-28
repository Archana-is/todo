const {STATUS_CODE} = require('../helpers/StatusCode')
const CONSTANT = require('../helpers/Constant')

exports.validateCreateUser = (req,res,next) => {
    try {

        let {body} = req
        console.log('body',body)
        const containAllKeys = CONSTANT.USER_REQUIRED_KEYS.every(key => body[key])

        let missingParams = []
        for(let key of CONSTANT.USER_REQUIRED_KEYS) {
            if(!body[key]) {
                missingParams.push(key)
            }
        }

        if(!containAllKeys) return res.status(STATUS_CODE.BAD_REQUEST).send({'message' : CONSTANT.PARAMETER_MISSING,status : STATUS_CODE.BAD_REQUEST , missingParam : missingParams}) 
        if(!validateObject(body)) return res.status(STATUS_CODE.BAD_REQUEST).send({'message' : CONSTANT.USER_AUTH,status:STATUS_CODE.BAD_REQUEST})

        next()
    } catch(error) {
        console.log('error in validateCreateUser',error)
        return res.status(400).send({'message':'Internal Server Error',status:'400'})
    }
}

const validateObject = (body) => {
    const {password,mobile} = body
    console.log(password.length , mobile.length)
    if(password.length < 8) return false
    if(mobile.length !== 10) return false

    return true
}