/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-inline-comments */
const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();
const { prefix,	token } = require('./config.json');

bot.once('ready', () => {
	console.log('Ready!');
});

const channelid = '711593317976244285';

bot.on('ready', () => {
	bot.channels.cache.get(channelid).send('Hello here!');
});

bot.login(token);

var msg;

bot.on('message', message => {
	//	if (message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	let msg = message.content.toLowerCase();

	if (msg === '!k155/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 1 155/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -1 155/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k155/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 155/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 155/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k155/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 3 155/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -3 155/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k160/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 1 160/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -1 160/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k160/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 160/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 160/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k160/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 4 160/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -4 160/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k165/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 165/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 165/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k165/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 3 165/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -3 165/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k165/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 5 165/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -5 165/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k170/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 170/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 170/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k170/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 5 170/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -5 170/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k170/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 15 170/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -15 170/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k180/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 180/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 180/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k180/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 10 180/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -10 180/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k180/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 20 180/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -20 180/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k185/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 185/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 185/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k185/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 3 185/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -3 185/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k185/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 6 185/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -6 185/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k190/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 190/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 190/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k190/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 4 190/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -4 190/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k190/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 8 190/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -8 190/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k195/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 195/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 195/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k195/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 4 195/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -4 195/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k195/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 9 195/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -9 195/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k200/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 200/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 200/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k200/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 4 200/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -4 200/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k200/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 10 200/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -10 200/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k205/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 205/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 205/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k205/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 5 205/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -5 205/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k205/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 15 205/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -15 205/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k210/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 2 210/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -2 210/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k210/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 10 210/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -10 210/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k210/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 20 210/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -20 210/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k215/4') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 5 215/4`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -5 215/4`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k215/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 25 215/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -25 215/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!k215/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 50 215/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -50 215/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!kaggy') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 10 aggy`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -10 aggy`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!khrung') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 15 hrung`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -15 hrung`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!kmord') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 30 mord`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -30 mord`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!kprot') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 100 prot`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -100 prot`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!kgele') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 120 gele`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -120 gele`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!kbt') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 200 bt`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -200 bt`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!krb/5') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 4 rb/5`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -4 rb/5`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!krb/6') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 30 rb/6`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -30 rb/6`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!klich') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 30 lich`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -30 lich`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!kreaver') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 30 reaver`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -30 reaver`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

	if (msg === '!kcb') {
		message.react('⚔️').then(() => {
			let collector = message.createReactionCollector(() => {
				return true;
			}, {
				dispose: true,
			});
			collector.on('collect', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} 1 cooking boss`);
				//	reaction.message.channel.send(');
			});
			collector.on('remove', (reaction, user) => {
				let emojiName = reaction.emoji.name;
				if (user.id == bot.user.id) return;
				if (emojiName != '⚔️') return;
				bot.channels.cache.get(channelid).send(`!adminpay ${user} -1 cooking boss`);
			//	reaction.message.channel.send('Reaction removed by' + user.id);
			});
		});
	}

});

/*
bot.on('messageReactionRemove', async function(MessageReaction) {
	if(MessageReaction.message.content != '!k155') {return;}
	else if(MessageReaction.emoji.name == '⚔️') {
		bot.channels.cache.get(channelid).send('Reaction Removed');
		//	MessageReaction.message.channel.send('Reaction removed');
	}
});

// below code is proper usage of an interval that sends the same message every 10 sec
//	var testChannel = bot.channels.find(channel => channelid === '709046431549227070');
//	setInterval(() => {
//		testChannel.send('testicle 10sec')
//	}, 10000);
// timer code below

if(command === 'timer') {
	let Timer = args[0];

	if(!args[0]) {
		return message.channel.send('Usage: !timer +  duration + s|m|h');
	}

	if(args[0] <= 0) {
		return message.channel.send('Usage: !timer +  duration + s|m|h');
	}

	message.channel.send('Timer set for' + ms(ms(Timer), { long: true }));
	setTimeout(function() {
		message.channel.send(message.author.toString() + 'Timer finished!');
	}, ms(Timer));
}
*/