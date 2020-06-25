const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const signale = require("signale");
const prefix = require("./../../prefix.json").dmoj;

module.exports = function(client,token,libr) {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

			const problems = require('./problem.js');
			const contests = require('./contest.js');
			const users = require('./user.js');

		try {
			if(command==='problem'){
				if(args.length===2&&args[1]==='-l'){
					problems.get(args[0],!0,message)
				}else{
					problems.get(args[0],!1,message)
				}
			};
			if(command==='contest'){
				if(args.length===2&&args[1]==='-l'){
					contests.get(args[0],!0,message)
				}else{
					contests.get(args[0],!1,message)
				}
			};
			if(command==='user'){
				if(args.length===2&&args[1]==='-l'){
					users.get(args[0],!0,message)
				}else{
					users.get(args[0],!1,message)
				}
			};
			if(command==='search'){
				message.reply('Working on it...').then(message=>{message.delete(5000)});
				if(args.length===2&&args[1]==='-l'){
					problems.search(args[0],!0,message)
				}else{
					problems.search(args[0],!1,message)
				}
			};if(command==='contest-search'){
				message.reply('Working on it...').then(message=>{message.delete(5000)});
				if(args.length===2&&args[1]==='-l'){
					contests.search(args[0],!0,message)
				}else{
					contests.search(args[0],!1,message)
				}
			};if(command==='user-search'){
				message.reply('Working on it...').then(message=>{message.delete(5000)});
				if(args.length===2&&args[1]==='-l'){users.search(args[0],!0,message)
				}else{
					users.search(args[0],!1,message)
				}
			};
		} catch(err) {
			require("./../functions/developer_alert_handle.js").userspaceError(client,message,err);
		}

	})

	client.on('ready', () => {
		signale.info("DMOJ Module Loaded");
	})


	client.login(token.discord());
}