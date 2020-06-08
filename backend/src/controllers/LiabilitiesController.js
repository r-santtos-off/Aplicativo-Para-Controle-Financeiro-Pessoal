const User = require('../models/User');
const Liabilities = require('../models/Liabilities');

module.exports = {
    async store(request, response) {
        const { user_id } = request.headers;
        const { liabilitiesName, category, dateDay, value } = request.body;
    
        const user = await User.findById(user_id);
    
        if (!user) {
            return response.status(400).json({ erro: 'user not '});
        } else {
            const liabilities = await Liabilities.create({
                user: user_id,
                liabilities: liabilitiesName,
                category: category,
                dateDay: dateDay,
                value: value,
            })
    
            return response.json(liabilities);
        }
    }
}