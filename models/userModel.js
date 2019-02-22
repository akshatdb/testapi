import { Schema , model } from 'mongoose';

let UserSchema = new Schema({
    name: {
        type:String
    },
    id:{
        type:String
    },
});

export default model("Users", UserSchema);