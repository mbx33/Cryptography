const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passHash)
        if (users[i].username === username && existing) {
          let userCopy = {...users[i]}
          delete userCopy.passHash
          res.status(200).send(userCopy)
          return
        }
      }
      
      res.status(400).send("User not found.")
    },
    register: (req, res) => {    
        const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(5);
        const passHash = bcrypt.hashSync(password, salt)
        
          
        
        const newUser = {
          username, 
          email, 
          firstName, 
          lastName, 
          passHash: passHash
        }   
        
        users.push(newUser)
        res.status(200).send(newUser)
    }
}