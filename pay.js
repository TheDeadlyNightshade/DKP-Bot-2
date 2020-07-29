const mongoose = require('mongoose');
const botconfig = require('../config.json');

// CONNECT TO DATABASE
mongoose.connect(botconfig.mongoPass, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// MODELS
const Data = require('../models/data.js');

module.exports.run = async (bot, message, args) => {

	let user = message.mentions.members.first() || bot.users.cache.get(args[0]);
	if(!user) return message.reply('cannot find that user');

	if(user.id === message.author.id) return message.reply('you cannot pay yourself');

	Data.findOne({
		userID: message.author.id
	}, (err, authorData) => {
		if(err) console.log(err);
		if(!authorData) {
			return message.reply('you dont have any money to send lol');
		}
		else {
			Data.findOne({
				userID: user.id
			}, (err, userData) => {
				if(err) console.log(err);

				if(!args[1]) return message.reply('specify an amount');

				if(parseInt(args[1]) > authorData.money) return message.reply('you dont have that much money');
				if(parseInt(args[1]) < 1) return message.reply('you cannot send a negative amount');
				if(args[1] != Math.floor(args[1])) return message.reply('enter a number');


				if(!userData) {
					const newData = new Data ({
						name: bot.users.cache.get(user.id).username,
						userID: user.id,
						lb: 'all',
						money: parseInt(args[1]),
					});

					authorData.money -= parseInt(args[1]);
					newData.save().catch(err => console.log(err));
					authorData.save().catch(err => console.log(err));
				}
				else {
					userData.money += parseInt(args[1]);
					authorData.money -= parseInt(args[1]);
					userData.save().catch(err => console.log(err));
					authorData.save().catch(err => console.log(err));
				}

				return message.channel.send(`${args[1]}DKP paid to ${bot.users.cache.get(user.id).username}`);
			});
		}
	});

};

module.exports.help = {
	name: "pay",
	aliases: [],
};