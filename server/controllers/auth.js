import Users from '../models/user.js'


export const helloFunction = (req, res) => {
    res.send("Hello From Server Side");
}

export const createUser = async (req, res) => {
    try {
        const user = await Users.find();

        console.log(user);

        res.status(200).json(user);
    } catch (error) {
        
    }
}

export const signUp = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({msg: 'User With same Email Exists!'});
        }

        const hash = await bcrypt.hash(password, 8);

        let user = new User({
            email,
            password: hash,
            name,
        })
    
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

export const signIn = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            return res
                .status(400)
                .json({msg: 'User With this mail not found!'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res
                .status(400)
                .json({msg: 'Incorrect Password!'});
        }
        
        const token = jwt.sign({id: user._id}, "passwordKey");
        res.json({token, ...user._doc});

        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}