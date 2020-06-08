const User = require('../models/User');
const Assets = require('../models/Assets');

module.exports = {
    async store(request, response) {
        const { user_id } = request.headers;
        const { assetName, category, dateDay, value } = request.body;
    
        const user = await User.findById(user_id);
    
        if (!user) {
            return response.status(400).json({ erro: 'user not '});
        } else {
            const assets = await Assets.create({
                user: user_id,
                asset: assetName,
                category: category,
                dateDay: dateDay,
                value: value,
            })
    
            return response.json(assets);
        }
    }
}