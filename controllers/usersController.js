import Babu from '../models/usersModel.js';

export function userView(req, res) {
    Babu.find({}, function(err, user){
        if(err)
            res.send(err);
        res.json(user);
    })
}
export function userAdd(req, res) {
    let new_user = new Babu(req.body);
    new_user.save({}, function(err, user){
        if(err)
            res.send(err);
        res.json(user);
    })
}