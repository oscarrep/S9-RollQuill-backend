const userSchema = mongoose.Schema( 
    {
        fireUid: { type: String, required: true, unique: true },
        username: {type: String, required: true }, 
        premium: {type: String, default: false },
        
        characters: {type: [String]}, 
        races: {type: [String]}, 
        subraces: {type: [String]}, 
        classes: {type: [String]}, 
        subclasses: {type: [String]}, 
        spells: {type: [String]}, 
        items: {type: [Number]}, 
        features: {type: [String]}, 

    },
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;