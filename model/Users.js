const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')



const UserSchema = new Schema({ 
    username: { 
        type: String, 
        required: true,
        lowercase: true, 
        unique: true, 
    }, 
    password: { 
        type: String, 
        required: true, 
    }, 
    createdOn: { 
        type: Date, 
        default: Date.now
    }, 
    isAdmin: { 
        type: Boolean, 
        default: false,
    }
})

// encrypts users passwords on signup 
UserSchema.pre("save", function(next){ 
    const user = this
    if(!user.isModified("password")){ 
        return next()
    }
    bcrypt.hash(password, 10, (err, hash) => { 
        if(err){ 
            return next(err)
        }
        user.password = hash
        next()
    })
})

// checks that encrypted password on login
UserSchema.methods.isMatch = function(passwordAttempt, callback){ 
    bcrypt.compare(passwordAttempt, password, (err, isMatch) => { 
        if(err){ 
            return next(err)
        } 
        return callback(null, isMatch)
    })
}
// removes user password from the token 
UserSchema.methods.withoutPassword = function(){ 
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", UserSchema)