const User = require('../model/User.Model')
const UUID = require('uuid')

exports.createUser = async (req,res) => {
    try {

        const {body} = req
        const {name,loginId ,password ,mobile ,email ,access ,acessAvailability } = body
        
        const userData = {
            _id : await UUID.v4(),
            name,loginId ,password ,mobile ,email ,access 
        }

        let alreadyUser = await User.findOne({mobile}) 
        if(alreadyUser) {
            return res.status(200).send({'message':'user already exists','data':alreadyUser,"status":"200"})
        }

        const user = await User(userData).save()
        return res.status(200).send({'message':'user created successfully','data':user,"status":"200"})

    }catch(error) {
        console.log('error in createUser controller',error)
        return res.status(400).send({'message':'something went wrong'})
    }








    

 }