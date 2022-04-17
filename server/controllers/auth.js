const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {

        const { first_name, last_name, email, password, address } = req.body;

        if (!(email && password && first_name && last_name && address)) {
            res.status(400).send(`All inputs are required`);
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User already exists. Please login with a different email");
        }

        encryptedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address
        });

        const token = jwt.sign(
            { user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        )

        user.token = token;

        res.status(201).json(user);

    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {

    try {
        
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("Please fill in all fields");
        }

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;

            return res.status(200).json(user);
        }

        return res.status(400).send("Invalid Credentials");

    } catch (error) {
        console.log(error);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch(err) {
        res.status(500).json({ err })
        console.log(err);
    }
};

module.exports = {
    register,
    login,
    getAllUsers
};