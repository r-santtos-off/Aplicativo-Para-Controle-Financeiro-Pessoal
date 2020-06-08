const User = require('../models/User');

/** MODULE EXPORT */
module.exports = {
    async store(request, response) {
        /** Fetching email from within the body of my request */
        const { name, email, password } = request.body;

        /** Checking if a user already exists before creating a new one */
        let user = await User.findOne({ email });

        if (!user) {
            // CREATE
            user = await  User.create({ name, email, password });
        } else {
            return response.json({ 'usuário': 'já cadastrado' });
        }
        
        return response.json(user);
    }
};