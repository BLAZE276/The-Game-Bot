const _0x2f4eee=_0xccd0;(function(_0x4a23da,_0x4b6162){const _0x17abbf=_0xccd0,_0x2950c7=_0x4a23da();while(!![]){try{const _0x5c4cc5=parseInt(_0x17abbf(0x2cc))/0x1*(parseInt(_0x17abbf(0x2a3))/0x2)+parseInt(_0x17abbf(0x1de))/0x3+-parseInt(_0x17abbf(0x27c))/0x4+parseInt(_0x17abbf(0x1fa))/0x5+-parseInt(_0x17abbf(0x26f))/0x6*(parseInt(_0x17abbf(0x22c))/0x7)+parseInt(_0x17abbf(0x1ef))/0x8*(-parseInt(_0x17abbf(0x2dd))/0x9)+-parseInt(_0x17abbf(0x202))/0xa*(-parseInt(_0x17abbf(0x2cf))/0xb);if(_0x5c4cc5===_0x4b6162)break;else _0x2950c7['push'](_0x2950c7['shift']());}catch(_0x416aa4){_0x2950c7['push'](_0x2950c7['shift']());}}}(_0xcab0,0x84e31));const config=require(_0x2f4eee(0x251)),{Collection}=require(_0x2f4eee(0x1d3)),Discord=require('discord.js'),{REST}=require('@discordjs/rest'),{Routes}=require(_0x2f4eee(0x27e)),{clientId,guildId,token}=require(_0x2f4eee(0x251)),fs=require('fs'),client=new Discord[(_0x2f4eee(0x1f7))]({'intents':[Discord['Intents'][_0x2f4eee(0x2ba)][_0x2f4eee(0x282)],Discord['Intents']['FLAGS']['GUILD_MESSAGES']]});client['commands']=new Collection();const rest=new REST({'version':'9'})['setToken'](config[_0x2f4eee(0x2da)]),commands=[],commandFiles=fs[_0x2f4eee(0x1e9)](_0x2f4eee(0x20a))[_0x2f4eee(0x274)](_0xeb7bb9=>_0xeb7bb9[_0x2f4eee(0x258)](_0x2f4eee(0x212))),commandMap=new Map();function _0xccd0(_0x43c6ac,_0x4f7279){const _0xcab043=_0xcab0();return _0xccd0=function(_0xccd05d,_0x29ae0c){_0xccd05d=_0xccd05d-0x1d1;let _0x18704f=_0xcab043[_0xccd05d];return _0x18704f;},_0xccd0(_0x43c6ac,_0x4f7279);}for(const file of commandFiles){const command=require('./commands/'+file),fs=require('fs');if(commandMap['has'](command[_0x2f4eee(0x2ae)][_0x2f4eee(0x1f2)])){console[_0x2f4eee(0x24e)](_0x2f4eee(0x297)+command['data'][_0x2f4eee(0x1f2)]+'.\x20Skipping...');continue;}commandMap[_0x2f4eee(0x1f8)](command[_0x2f4eee(0x2ae)][_0x2f4eee(0x1f2)],!![]),commands[_0x2f4eee(0x2d6)](command[_0x2f4eee(0x2ae)][_0x2f4eee(0x22a)]()),client[_0x2f4eee(0x24c)][_0x2f4eee(0x1f8)](command[_0x2f4eee(0x2ae)][_0x2f4eee(0x1f2)],command);}function _0xcab0(){const _0x380c61=['random','#095de3','tag','There\x20was\x20an\x20error\x20while\x20executing\x20this\x20command!','discord.js','Thank\x20you\x20so\x20much\x20for\x20considering\x20to\x20support\x20us!\x20It\x20really\x20means\x20the\x20world\x20to\x20our\x20team!','unable\x20to\x20fetch\x20the\x20bans.\x20Check\x20the\x20console\x20for\x20more\x20information.','LISTENING','https://cdn.discordapp.com/avatars/1145327542723686451/e4c781dee18a7f1146e53c45f0c3350c.png?size=4096','960887298533244928','The\x20user\x20is\x20not\x20muted!','find','setThumbnail','permissions','You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20delete\x20warns\x20for!','2507274gpMgTQ','The\x20Man\x20Himself!','interactionCreate','Error\x20writing\x20to\x20warns.json:','Unlocks\x20a\x20channel','kick','The\x20library\x20that\x20made\x20this\x20bot\x20possible','That\x20user\x20isn\x27t\x20in\x20this\x20server!','You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20kick!','stringify','adminify','readdirSync','Error\x20banning\x20**<@960887298533244928>**:\x20No\x20Permissions.','The\x20user\x20you\x20mentioned\x20is\x20not\x20banned!','setDescription','Deletes\x20a\x20certain\x20amount\x20of\x20messages\x20from\x20the\x20channel','floor','8tmRvCc','GitHub','The\x20Game\x20Bot\x20commands','name','The\x20IP\x20is\x20**purpursmp.my.pebble.host**\x20\x0aversion\x20**1.17.1**','toLowerCase','Unmutes\x20a\x20user','?lock','Client','set','The\x20Hitman\x20III\x20OST','531955DSQNqu','applicationCommands','that\x20doesn\x27t\x20seem\x20to\x20be\x20a\x20valid\x20number.','Successfully\x20warned\x20**','#FF0000','#0099ff','unable\x20to\x20ban\x20the\x20member.\x20Check\x20the\x20console\x20for\x20more\x20information.','Slash\x20commands\x20registered\x20locally!','90IpioeJ','setTimestamp','PrismGDPS','Shows\x20the\x20credits\x20for\x20the\x20bot','?credits','Created\x20a\x20basic\x20python\x20bot\x20that\x20started\x20it\x20all!,\x20(and\x20made\x20the\x20lua\x20version)','user','The\x20Fortnite\x20OST','./commands','send','cache','The\x20Team\x20that\x20made\x20this\x20bot\x20possible','Error\x20locking\x20channel:','pack-god','edit','Error\x20muting\x20member:','.js','split','setColor','credits','There\x20was\x20an\x20error\x20adding\x20the\x20role.','?patreon','channels','**\x20from\x20the\x20server!','Shows\x20the\x20warnings\x20of\x20a\x20user','unlock','unban','Error\x20banning\x20member:','?kofi','Error\x20kicking\x20**<@960887298533244928>**:\x20No\x20Permissions.','setAuthor','login','unable\x20to\x20unban\x20the\x20member.\x20Check\x20the\x20console\x20for\x20more\x20information.','Blaze276','\x20said:`\x20','Error\x20unmuting\x20member:','The\x20Terraria\x20OST','join','reply','Bans\x20a\x20user\x20from\x20the\x20server','toJSON','resolve','123634KTLkRL','https://drive.google.com/file/d/1IDdS28mTogrMDm9GZ4-2fcJ7Lg-yMifa/view?usp=sharing','utf8','?kick','?ban','**!','?purge','You\x20must\x20be\x20in\x20a\x20server\x20to\x20use\x20this\x20command.','command\x20disabled','channel','readFile','trim','setURL','get','**\x20from\x20the\x20server\x20for\x20**','Gets\x20The\x20Minecraft\x20Server\x20IP\x20address','add','The\x20PrismGDPS\x20OST','Error\x20unbanning\x20member:','https://cdn.discordapp.com/attachments/1185176243134537828/1218676497557225604/icon.png?ex=660887ee&is=65f612ee&hm=d8f42595762876087a6d175ad730e65df7f3eea0c8e75cf95b2ebc3637b9ae71&','dnd','.\x20Reason:\x20','client_id','Successfully\x20kicked\x20**','You\x20were\x20kicked\x20from\x20the\x20server.\x20Reason:\x20','ADMINISTRATOR','catch','**\x20messages!','?warnings','unable\x20to\x20unlock\x20the\x20channel.\x20Check\x20the\x20console\x20for\x20more\x20information.','execute','Logged\x20in\x20as\x20','commands','Coming\x20Soon!','error','?warn','You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20unmute!','./config.json','MANAGE_CHANNELS','Error\x20deleting\x20messages:','mentions','Moderator','Error\x20kicking\x20member:','parse','endsWith','Successfully\x20unmuted\x20**','member','MessageEmbed','Support\x20Us\x20on\x20Patreon!','Promotes\x20a\x20user\x20to\x20the\x20moderators','The\x20AI\x20that\x20helped\x20with\x20the\x20code\x20_(a\x20lot,\x20helped\x20make\x20purge,\x20kick,\x20ban,\x20unban)_','Support\x20us\x20on\x20Patreon!','roles','warn','map','The\x20language\x20that\x20made\x20this\x20bot\x20possible','Gaming\x20to\x20the\x20People','The\x20Minecraft\x20OST','members','once','unmute','The\x20Geometry\x20Dash\x20OST','purge','Please\x20mention\x20a\x20user\x20to\x20promote.','first','**\x20Has\x20been\x20promoted\x20to\x20the\x20**Admin**\x20role!','The\x20Game\x20Bot\x20Credits','66SMolqa','toDateString','size','setTitle','ready','filter','log','?unban','?gdps','The\x20place\x20where\x20the\x20code\x20is\x20stored','Successfully\x20banned\x20**','**\x20for\x20**','WATCHING','2032780VyCcdd','Slash\x20commands\x20registered!','discord-api-types/v9','Successfully\x20deleted\x20all\x20warns\x20for\x20**','remove','unable\x20to\x20lock\x20the\x20channel.\x20Check\x20the\x20console\x20for\x20more\x20information.','GUILDS','Warnings\x20for\x20','The\x20Game\x20Bot','kofi','This\x20command\x20only\x20works\x20in\x20a\x20server.','you\x20need\x20to\x20input\x20a\x20number\x20between\x201\x20and\x20100.','Successfully\x20deleted\x20**','You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20warn!','You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.','bot','isCommand','setPresence','Node.js','shift','Makes\x20the\x20bot\x20say\x20something','addFields','reason','ban','author','Happy\x20Birthday\x20<@960887298533244928>!','Shows\x20this\x20menu','Duplicate\x20command\x20name\x20found:\x20','?say','Support\x20us\x20on\x20Ko-fi!','length','https://www.patreon.com/gamingtothepeople','patreon','mute','everyone','Muted','Support\x20Us\x20on\x20Ko-fi!','promote','Successfully\x20unbanned\x20**','6uSacIY','Error\x20deleting\x20message:','**\x20Has\x20been\x20promoted\x20to\x20The\x20**Moderators**!','content','GitHub\x20Copilot','gdps','BAN_MEMBERS','slice','unable\x20to\x20send\x20a\x20direct\x20message\x20to\x20the\x20member.\x20Check\x20the\x20console\x20for\x20more\x20information.','mod','warns.json','data','say','online','put','KICK_MEMBERS','lock','Successfully\x20locked\x20the\x20channel\x20**','The\x20Game\x20Bot\x20was\x20made\x20by\x20**Blaze276**\x20and\x20other\x20cool\x20people!','?delwarn','then','?adminify','?promote','FLAGS','bulkDelete','writeFile','Successfully\x20unlocked\x20the\x20channel\x20**','guild','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','secret\x20command\x20(hint:\x20september\x209th)','users','unable\x20to\x20mute\x20the\x20member.\x20Check\x20the\x20console\x20for\x20more\x20information.','has','create','MANAGE_MESSAGES','You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20mute!','a\x20list\x20of\x20commands\x20included\x20with\x20The\x20Game\x20Bot','permissionOverwrites','Warns\x20a\x20user','production','https://ko-fi.com/gamingtothepeople','186431CxpdOs','unable\x20to\x20unmute\x20the\x20member.\x20Check\x20the\x20console\x20for\x20more\x20information.','You\x20were\x20unmuted\x20in\x20the\x20server.','603009uKAcHR','You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20ban!','Error,\x20role\x20not\x20found.\x20Check\x20code.','A\x20Geometry\x20Dash\x20Private\x20Server\x20made\x20by\x20Blaze.\x20You\x20can\x20join\x20the\x20server\x20with\x20the\x20link\x20on\x20the\x20embed\x20or\x20click\x20[Here](https://drive.google.com/file/d/1IDdS28mTogrMDm9GZ4-2fcJ7Lg-yMifa/view?usp=sharing)','?sigma','sigma','Error\x20unlocking\x20channel:','push','delwarn','You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20unban!','?unlock','token','https://cdn.discordapp.com/avatars/960887298533244928/0f96a702500b6f698980da9df708f38f.png?size=4096','Unbans\x20a\x20user\x20from\x20the\x20server','6732279MatGpN','Error\x20reading\x20warns.json:','More\x20commands\x20will\x20be\x20added\x20soon.\x20Keep\x20an\x20eye\x20out!','There\x20are\x20no\x20banned\x20users\x20in\x20this\x20server!'];_0xcab0=function(){return _0x380c61;};return _0xcab0();}client[_0x2f4eee(0x267)](_0x2f4eee(0x273),async()=>{const _0x12a797=_0x2f4eee;console[_0x12a797(0x275)]('Received\x20HELLO.\x20Running\x20The\x20Game\x20Bot');const _0x548114=client[_0x12a797(0x208)]['id'];try{config[_0x12a797(0x2da)]===_0x12a797(0x2ca)?(await rest[_0x12a797(0x2b1)](Routes[_0x12a797(0x1fb)](_0x548114),{'body':commands}),console[_0x12a797(0x275)](_0x12a797(0x27d))):(await rest[_0x12a797(0x2b1)](Routes[_0x12a797(0x1fb)](_0x548114,config[_0x12a797(0x242)]),{'body':commands}),console[_0x12a797(0x275)](_0x12a797(0x201)));}catch(_0x56e804){console[_0x12a797(0x24e)]('Error\x20registering\x20slash\x20commands:',_0x56e804);}client['on'](_0x12a797(0x1e0),async _0x4cd315=>{const _0xad457b=_0x12a797;if(!_0x4cd315[_0xad457b(0x28c)]())return;const {commandName:_0x5ac985}=_0x4cd315;if(!client[_0xad457b(0x24c)][_0xad457b(0x2c3)](_0x5ac985))return;try{await client[_0xad457b(0x24c)][_0xad457b(0x239)](_0x5ac985)[_0xad457b(0x24a)](_0x4cd315);}catch(_0x42d83f){console[_0xad457b(0x24e)](_0x42d83f),await _0x4cd315[_0xad457b(0x228)]({'content':_0xad457b(0x1d2),'ephemeral':!![]});}});const _0x13b603=[_0x12a797(0x265),_0x12a797(0x269),_0x12a797(0x1f9),_0x12a797(0x226),_0x12a797(0x209),_0x12a797(0x23d),'The\x20OG\x20MW2\x20OST'];setInterval(()=>{const _0x28e817=_0x12a797,_0x1531df=Math['floor'](Math[_0x28e817(0x2e1)]()*_0x13b603[_0x28e817(0x29a)]),_0x3ceca7=_0x13b603[_0x1531df];client[_0x28e817(0x208)][_0x28e817(0x28d)]({'status':_0x28e817(0x2b0),'activities':[{'name':_0x3ceca7,'type':_0x28e817(0x1d6)}]});},0x1b7740);const _0x4ef489='Kotlin\x27s\x20just\x20better.',_0x5d036e=Math[_0x12a797(0x1ee)](Math[_0x12a797(0x2e1)]()*0x64)+0x1;_0x5d036e===0x1&&client['user'][_0x12a797(0x28d)]({'status':_0x12a797(0x240),'activities':[{'name':_0x4ef489,'type':_0x12a797(0x27b)}]});});const icon=_0x2f4eee(0x1d7),accentColour=_0x2f4eee(0x2e2),prefix='?';client['on'](_0x2f4eee(0x273),()=>{const _0x1d0db0=_0x2f4eee;console[_0x1d0db0(0x275)](_0x1d0db0(0x24b)+client[_0x1d0db0(0x208)][_0x1d0db0(0x1d1)]+'!');}),client['on']('messageCreate',async _0x44c3ee=>{const _0x2a2f41=_0x2f4eee;if(!_0x44c3ee[_0x2a2f41(0x2a6)]['startsWith'](prefix)||_0x44c3ee[_0x2a2f41(0x294)][_0x2a2f41(0x28b)])return;const _0x10205b=_0x44c3ee[_0x2a2f41(0x2a6)][_0x2a2f41(0x2aa)](prefix[_0x2a2f41(0x29a)])[_0x2a2f41(0x237)]()[_0x2a2f41(0x213)](/ +/),_0x303a3e=_0x10205b[_0x2a2f41(0x28f)]()[_0x2a2f41(0x1f4)]();if(_0x303a3e==='ip')_0x44c3ee['channel']['send'](_0x2a2f41(0x1f3));else{if(_0x303a3e==='help'){const _0x575dae=new Discord['MessageEmbed']()[_0x2a2f41(0x214)](accentColour)[_0x2a2f41(0x272)](_0x2a2f41(0x1f1))['setDescription'](_0x2a2f41(0x2c7))[_0x2a2f41(0x291)]({'name':'?ip','value':_0x2a2f41(0x23b)},{'name':'?help','value':_0x2a2f41(0x296)},{'name':_0x2a2f41(0x2b9),'value':_0x2a2f41(0x25d)},{'name':_0x2a2f41(0x2b8),'value':'same\x20as\x20promote\x20but\x20administrator\x20role'},{'name':_0x2a2f41(0x298),'value':_0x2a2f41(0x290)},{'name':_0x2a2f41(0x22f),'value':'Kicks\x20a\x20user\x20from\x20the\x20server'},{'name':_0x2a2f41(0x230),'value':_0x2a2f41(0x229)},{'name':_0x2a2f41(0x276),'value':_0x2a2f41(0x2dc)},{'name':_0x2a2f41(0x232),'value':_0x2a2f41(0x1ed)},{'name':_0x2a2f41(0x2d3),'value':_0x2a2f41(0x2c0)},{'name':_0x2a2f41(0x21e),'value':_0x2a2f41(0x299)},{'name':_0x2a2f41(0x217),'value':_0x2a2f41(0x25f)},{'name':_0x2a2f41(0x206),'value':_0x2a2f41(0x205)},{'name':_0x2a2f41(0x277),'value':'Gets\x20the\x20PowershotGDPS\x20Download\x20link\x20and\x20info'},{'name':_0x2a2f41(0x24f),'value':_0x2a2f41(0x2c9)},{'name':_0x2a2f41(0x2b6),'value':'Deletes\x20warnings\x20from\x20a\x20user'},{'name':_0x2a2f41(0x248),'value':_0x2a2f41(0x21a)},{'name':'?mute','value':'Mutes\x20a\x20user'},{'name':'?unmute','value':_0x2a2f41(0x1f5)},{'name':_0x2a2f41(0x1f6),'value':'Locks\x20a\x20channel'},{'name':_0x2a2f41(0x2d9),'value':_0x2a2f41(0x1e2)},{'name':_0x2a2f41(0x24d),'value':_0x2a2f41(0x2df)})['setThumbnail'](icon)[_0x2a2f41(0x220)]({'name':_0x2a2f41(0x284),'iconURL':icon})[_0x2a2f41(0x203)]();_0x44c3ee['channel']['send']({'embeds':[_0x575dae]});}else{if(_0x303a3e===_0x2a2f41(0x2a1)){if(!_0x44c3ee['guild'])return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x286));if(!_0x44c3ee[_0x2a2f41(0x25a)])return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x233));if(!_0x44c3ee[_0x2a2f41(0x25a)][_0x2a2f41(0x1dc)]['has'](_0x2a2f41(0x245)))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x28a));const _0x5be6d8=_0x44c3ee[_0x2a2f41(0x254)][_0x2a2f41(0x266)][_0x2a2f41(0x26c)]();if(!_0x5be6d8)return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x26b));const _0x274e3e=_0x2a2f41(0x255),_0x19cf9d=_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x260)]['cache'][_0x2a2f41(0x1da)](_0x5a011a=>_0x5a011a['name']===_0x274e3e);if(!_0x19cf9d)return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2d1));try{await _0x5be6d8[_0x2a2f41(0x260)]['add'](_0x19cf9d),_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)]('**'+_0x5be6d8[_0x2a2f41(0x208)][_0x2a2f41(0x1d1)]+_0x2a2f41(0x2a5));}catch(_0x1e0e59){console[_0x2a2f41(0x24e)](_0x1e0e59),_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)](_0x2a2f41(0x216));}}else{if(_0x303a3e===_0x2a2f41(0x1e8)){if(!_0x44c3ee[_0x2a2f41(0x2be)])return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x286));if(!_0x44c3ee['member'])return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x233));if(!_0x44c3ee[_0x2a2f41(0x25a)]['permissions']['has'](_0x2a2f41(0x245)))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x28a));const _0xe274=_0x44c3ee[_0x2a2f41(0x254)][_0x2a2f41(0x266)][_0x2a2f41(0x26c)]();if(!_0xe274)return _0x44c3ee[_0x2a2f41(0x228)]('Please\x20mention\x20a\x20user\x20to\x20promote.');const _0x4b2064='Administrator',_0x9f584d=_0x44c3ee['guild'][_0x2a2f41(0x260)][_0x2a2f41(0x20c)]['find'](_0x39a865=>_0x39a865[_0x2a2f41(0x1f2)]===_0x4b2064);if(!_0x9f584d)return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2d1));try{await _0xe274[_0x2a2f41(0x260)][_0x2a2f41(0x23c)](_0x9f584d),_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)]('**'+_0xe274['user'][_0x2a2f41(0x1d1)]+'**\x20Has\x20been\x20promoted\x20to\x20The\x20**Administrators**!');}catch(_0x45e645){console[_0x2a2f41(0x24e)](_0x45e645),_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)](_0x2a2f41(0x216));}}else{if(_0x303a3e===_0x2a2f41(0x2af)){if(_0x44c3ee[_0x2a2f41(0x25a)]['permissions'][_0x2a2f41(0x2c3)]('ADMINISTRATOR')){_0x44c3ee['channel'][_0x2a2f41(0x20b)](_0x10205b['join']('\x20'));try{await _0x44c3ee['delete']();}catch(_0x56f1bb){console[_0x2a2f41(0x24e)]('Error\x20deleting\x20message:',_0x56f1bb);}}else{_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)]('`'+_0x44c3ee[_0x2a2f41(0x294)]['tag']+_0x2a2f41(0x224)+_0x10205b[_0x2a2f41(0x227)]('\x20'));try{await _0x44c3ee['delete']();}catch(_0x42f4e3){console[_0x2a2f41(0x24e)](_0x2a2f41(0x2a4),_0x42f4e3);}}}else{if(_0x303a3e===_0x2a2f41(0x1e3)){if(!_0x44c3ee['member']['permissions'][_0x2a2f41(0x2c3)]('KICK_MEMBERS'))return _0x44c3ee[_0x2a2f41(0x228)]('You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.');const _0x3d3257=_0x44c3ee['mentions']['users'][_0x2a2f41(0x26c)]();if(_0x3d3257['id']===_0x2a2f41(0x1d8))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x21f));if(_0x3d3257){const _0x41abd4=_0x44c3ee[_0x2a2f41(0x2be)]['members']['resolve'](_0x3d3257);if(_0x41abd4){const _0x453914=_0x10205b[0x2];_0x41abd4[_0x2a2f41(0x1e3)](_0x2a2f41(0x244)+_0x453914)[_0x2a2f41(0x2b7)](()=>{const _0x10468a=_0x2a2f41;_0x44c3ee['channel'][_0x10468a(0x20b)](_0x10468a(0x243)+_0x3d3257[_0x10468a(0x1d1)]+_0x10468a(0x23a)+_0x453914+_0x10468a(0x231));})[_0x2a2f41(0x246)](_0x559638=>{const _0x4338b7=_0x2a2f41;_0x44c3ee[_0x4338b7(0x228)]('unable\x20to\x20kick\x20the\x20member.\x20Check\x20the\x20console\x20for\x20more\x20information.'),console[_0x4338b7(0x24e)](_0x4338b7(0x256),_0x559638);});}else _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x1e5));}else _0x44c3ee['reply'](_0x2a2f41(0x1e6));}else{if(_0x303a3e===_0x2a2f41(0x293)){if(!_0x44c3ee[_0x2a2f41(0x25a)][_0x2a2f41(0x1dc)][_0x2a2f41(0x2c3)](_0x2a2f41(0x2a9)))return _0x44c3ee[_0x2a2f41(0x228)]('You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.');const _0x41ad5d=_0x44c3ee[_0x2a2f41(0x254)][_0x2a2f41(0x2c1)][_0x2a2f41(0x26c)]();if(_0x41ad5d['id']===_0x2a2f41(0x1d8))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x1ea));if(_0x41ad5d){const _0x1e59a0=_0x44c3ee['guild'][_0x2a2f41(0x266)][_0x2a2f41(0x22b)](_0x41ad5d);if(_0x1e59a0){const _0x2e92b6=_0x10205b[0x2];_0x1e59a0[_0x2a2f41(0x293)]({'reason':'You\x20were\x20banned\x20from\x20the\x20server.\x20Reason:\x20'+_0x2e92b6})['then'](()=>{const _0x36e726=_0x2a2f41;_0x44c3ee['channel']['send'](_0x36e726(0x279)+_0x41ad5d[_0x36e726(0x1d1)]+_0x36e726(0x23a)+_0x2e92b6+_0x36e726(0x231));})[_0x2a2f41(0x246)](_0x28c74d=>{const _0x56b338=_0x2a2f41;_0x44c3ee[_0x56b338(0x228)](_0x56b338(0x200)),console[_0x56b338(0x24e)](_0x56b338(0x21d),_0x28c74d);});}else _0x44c3ee['reply'](_0x2a2f41(0x1e5));}else _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2d0));}else{if(_0x303a3e===_0x2a2f41(0x21c)){if(!_0x44c3ee[_0x2a2f41(0x25a)]['permissions'][_0x2a2f41(0x2c3)](_0x2a2f41(0x2a9)))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2bf));const _0xf8c94c=_0x10205b[0x0];if(!_0xf8c94c)return _0x44c3ee['reply'](_0x2a2f41(0x2d8));_0x44c3ee[_0x2a2f41(0x2be)]['bans']['fetch']()[_0x2a2f41(0x2b7)](_0x381e4e=>{const _0x421b6c=_0x2a2f41;if(_0x381e4e[_0x421b6c(0x271)]===0x0)return _0x44c3ee[_0x421b6c(0x228)](_0x421b6c(0x2e0));const _0x152a9=_0x381e4e[_0x421b6c(0x1da)](_0x594864=>_0x594864['user']['id']===_0xf8c94c);if(!_0x152a9)return _0x44c3ee[_0x421b6c(0x228)](_0x421b6c(0x1eb));_0x44c3ee[_0x421b6c(0x2be)][_0x421b6c(0x266)][_0x421b6c(0x21c)](_0x152a9[_0x421b6c(0x208)])['then'](()=>{const _0x2c8914=_0x421b6c;_0x44c3ee[_0x2c8914(0x235)]['send'](_0x2c8914(0x2a2)+_0x152a9['user']['tag']+_0x2c8914(0x219));})['catch'](_0x54e0f2=>{const _0x4d836a=_0x421b6c;_0x44c3ee[_0x4d836a(0x228)](_0x4d836a(0x222)),console[_0x4d836a(0x24e)](_0x4d836a(0x23e),_0x54e0f2);});})[_0x2a2f41(0x246)](_0x3c4330=>{const _0xe849bb=_0x2a2f41;_0x44c3ee[_0xe849bb(0x228)](_0xe849bb(0x1d5)),console[_0xe849bb(0x24e)]('Error\x20fetching\x20bans:',_0x3c4330);});}else{if(_0x303a3e===_0x2a2f41(0x26a)){if(!_0x44c3ee[_0x2a2f41(0x25a)]['permissions'][_0x2a2f41(0x2c3)](_0x2a2f41(0x2c5)))return _0x44c3ee['reply'](_0x2a2f41(0x2bf));const _0x1ddaec=parseInt(_0x10205b[0x0],+0x1);if(isNaN(_0x1ddaec))return _0x44c3ee[_0x2a2f41(0x235)]['send'](_0x2a2f41(0x1fc));if(_0x1ddaec<0x1||_0x1ddaec>0x64)return _0x44c3ee['channel'][_0x2a2f41(0x20b)](_0x2a2f41(0x287));_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x2bb)](_0x1ddaec,!![])['catch'](_0x43852a=>{const _0x479d2e=_0x2a2f41;console[_0x479d2e(0x24e)](_0x479d2e(0x253),_0x43852a),_0x44c3ee[_0x479d2e(0x228)]('there\x20was\x20an\x20error\x20trying\x20to\x20delete\x20messages\x20in\x20this\x20channel!');}),_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)](_0x2a2f41(0x288)+_0x1ddaec+_0x2a2f41(0x247));}else{if(_0x303a3e===_0x2a2f41(0x2d4)){const _0x3f9eff=new Date(),_0x44ef3a=new Date(_0x3f9eff['getFullYear'](),0x8,0x9);_0x3f9eff[_0x2a2f41(0x270)]()===_0x44ef3a[_0x2a2f41(0x270)]()?_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)](_0x2a2f41(0x295)):_0x44c3ee['channel'][_0x2a2f41(0x20b)](_0x2a2f41(0x234));}else{if(_0x303a3e===_0x2a2f41(0x285)){const _0x56d093=new Discord[(_0x2a2f41(0x25b))]()[_0x2a2f41(0x214)](accentColour)[_0x2a2f41(0x272)](_0x2a2f41(0x2a0))[_0x2a2f41(0x238)](_0x2a2f41(0x2cb))['setDescription']('Thank\x20you\x20so\x20much\x20for\x20considering\x20to\x20support\x20us!\x20It\x20really\x20means\x20the\x20world\x20to\x20our\x20team!')['setThumbnail'](icon)[_0x2a2f41(0x220)]({'name':_0x2a2f41(0x284),'iconURL':icon})['setTimestamp']();_0x44c3ee['channel']['send']({'embeds':[_0x56d093]});}else{if(_0x303a3e===_0x2a2f41(0x29c)){const _0x4c5ad8=new Discord[(_0x2a2f41(0x25b))]()[_0x2a2f41(0x214)](accentColour)[_0x2a2f41(0x272)](_0x2a2f41(0x25c))[_0x2a2f41(0x238)](_0x2a2f41(0x29b))['setDescription'](_0x2a2f41(0x1d4))[_0x2a2f41(0x1db)](icon)[_0x2a2f41(0x220)]({'name':_0x2a2f41(0x284),'iconURL':icon})[_0x2a2f41(0x203)]();_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)]({'embeds':[_0x4c5ad8]});}else{if(_0x303a3e===_0x2a2f41(0x215)){const _0x90d435=new Discord['MessageEmbed']()['setColor'](accentColour)[_0x2a2f41(0x272)](_0x2a2f41(0x26e))[_0x2a2f41(0x1ec)](_0x2a2f41(0x2b5))[_0x2a2f41(0x291)]({'name':_0x2a2f41(0x223),'value':_0x2a2f41(0x1df)},{'name':'RACSpeedster','value':_0x2a2f41(0x207)},{'name':_0x2a2f41(0x264),'value':_0x2a2f41(0x20d)},{'name':'Discord.js','value':_0x2a2f41(0x1e4)},{'name':_0x2a2f41(0x28e),'value':_0x2a2f41(0x263)},{'name':_0x2a2f41(0x1f0),'value':_0x2a2f41(0x278)},{'name':_0x2a2f41(0x2a7),'value':_0x2a2f41(0x25e)})[_0x2a2f41(0x1db)](_0x2a2f41(0x2db))[_0x2a2f41(0x220)]({'name':_0x2a2f41(0x223),'iconURL':_0x2a2f41(0x2db)})[_0x2a2f41(0x203)]();_0x44c3ee[_0x2a2f41(0x235)]['send']({'embeds':[_0x90d435]});}else{if(_0x303a3e===_0x2a2f41(0x2a8)){const _0x3ceb4d=new Discord[(_0x2a2f41(0x25b))]()[_0x2a2f41(0x214)](_0x2a2f41(0x1ff))[_0x2a2f41(0x272)](_0x2a2f41(0x204))[_0x2a2f41(0x1ec)](_0x2a2f41(0x2d2))[_0x2a2f41(0x238)](_0x2a2f41(0x22d))[_0x2a2f41(0x1db)](_0x2a2f41(0x23f))[_0x2a2f41(0x220)]({'name':_0x2a2f41(0x284),'iconURL':icon})[_0x2a2f41(0x203)]();_0x44c3ee[_0x2a2f41(0x235)]['send']({'embeds':[_0x3ceb4d]});}else{if(_0x303a3e===_0x2a2f41(0x261)){if(!_0x44c3ee[_0x2a2f41(0x25a)][_0x2a2f41(0x1dc)][_0x2a2f41(0x2c3)]('KICK_MEMBERS'))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2bf));const _0x1ef552=_0x44c3ee[_0x2a2f41(0x254)]['users']['first']();if(_0x1ef552){const _0x5925f6=_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x266)]['resolve'](_0x1ef552);if(_0x5925f6){const _0x14d90d=_0x10205b[_0x2a2f41(0x2aa)](0x1)[_0x2a2f41(0x227)]('\x20');_0x5925f6['send']('You\x20have\x20been\x20warned\x20in\x20**'+_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x1f2)]+_0x2a2f41(0x27a)+_0x14d90d+_0x2a2f41(0x231))['then'](()=>{const _0x317252=_0x2a2f41;_0x44c3ee['channel'][_0x317252(0x20b)](_0x317252(0x1fd)+_0x1ef552['tag']+_0x317252(0x27a)+_0x14d90d+_0x317252(0x231));const _0x4b2285={'user':_0x1ef552['id'],'guild':_0x44c3ee[_0x317252(0x2be)]['id'],'reason':_0x14d90d};fs[_0x317252(0x236)]('warns.json','utf8',(_0x1afc1b,_0x3ef38b)=>{const _0x2ed329=_0x317252;if(_0x1afc1b){console[_0x2ed329(0x24e)](_0x2ed329(0x2de),_0x1afc1b);return;}let _0x486def=[];_0x3ef38b&&(_0x486def=JSON[_0x2ed329(0x257)](_0x3ef38b)),_0x486def[_0x2ed329(0x2d6)](_0x4b2285),fs[_0x2ed329(0x2bc)]('warns.json',JSON[_0x2ed329(0x1e7)](_0x486def),_0x2ed329(0x22e),_0x438e1b=>{const _0x550432=_0x2ed329;_0x438e1b&&console[_0x550432(0x24e)](_0x550432(0x1e1),_0x438e1b);});});})[_0x2a2f41(0x246)](_0x115a34=>{const _0x2290a1=_0x2a2f41;_0x44c3ee[_0x2290a1(0x228)](_0x2290a1(0x2ab)),console[_0x2290a1(0x24e)]('Error\x20sending\x20direct\x20message\x20to\x20member:',_0x115a34);});}else _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x1e5));}else _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x289));}else{if(_0x303a3e===_0x2a2f41(0x2d7)){if(!_0x44c3ee['member'][_0x2a2f41(0x1dc)][_0x2a2f41(0x2c3)](_0x2a2f41(0x2b2)))return _0x44c3ee[_0x2a2f41(0x228)]('You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.');const _0x1dbc89=_0x44c3ee[_0x2a2f41(0x254)][_0x2a2f41(0x2c1)][_0x2a2f41(0x26c)]();if(_0x1dbc89){const _0x51e48c=_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x266)][_0x2a2f41(0x22b)](_0x1dbc89);_0x51e48c?fs[_0x2a2f41(0x236)](_0x2a2f41(0x2ad),'utf8',(_0x5292a4,_0x1d4434)=>{const _0x32050e=_0x2a2f41;if(_0x5292a4){console['error'](_0x32050e(0x2de),_0x5292a4);return;}let _0xc1797f=[];_0x1d4434&&(_0xc1797f=JSON['parse'](_0x1d4434));const _0x54d595=_0xc1797f['filter'](_0x4a64f0=>_0x4a64f0['user']!==_0x1dbc89['id']);fs['writeFile'](_0x32050e(0x2ad),JSON[_0x32050e(0x1e7)](_0x54d595),_0x32050e(0x22e),_0x1cea26=>{const _0x5122a4=_0x32050e;_0x1cea26&&console[_0x5122a4(0x24e)]('Error\x20writing\x20to\x20warns.json:',_0x1cea26);}),_0x44c3ee[_0x32050e(0x235)][_0x32050e(0x20b)](_0x32050e(0x27f)+_0x1dbc89['tag']+_0x32050e(0x231));}):_0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x1e5));}else _0x44c3ee['reply'](_0x2a2f41(0x1dd));}else{if(_0x303a3e==='warnings'){const _0x4fae77=_0x44c3ee['mentions']['users'][_0x2a2f41(0x26c)]();if(_0x4fae77){const _0x5cf27c=_0x44c3ee['guild'][_0x2a2f41(0x266)]['resolve'](_0x4fae77);_0x5cf27c?fs[_0x2a2f41(0x236)](_0x2a2f41(0x2ad),_0x2a2f41(0x22e),(_0x59c2fc,_0x42ebb9)=>{const _0x53573a=_0x2a2f41;if(_0x59c2fc){console[_0x53573a(0x24e)](_0x53573a(0x2de),_0x59c2fc);return;}let _0x3cb335=[];_0x42ebb9&&(_0x3cb335=JSON[_0x53573a(0x257)](_0x42ebb9));const _0x9aa502=_0x3cb335[_0x53573a(0x274)](_0x3df430=>_0x3df430[_0x53573a(0x208)]===_0x4fae77['id']);if(_0x9aa502[_0x53573a(0x29a)]>0x0){const _0x380a2b=new Discord[(_0x53573a(0x25b))]()[_0x53573a(0x214)](_0x53573a(0x1fe))[_0x53573a(0x272)](_0x53573a(0x283)+_0x4fae77['tag'])[_0x53573a(0x1ec)](_0x9aa502[_0x53573a(0x262)]((_0x207d74,_0x4d9769)=>_0x4d9769+0x1+_0x53573a(0x241)+_0x207d74[_0x53573a(0x292)])[_0x53573a(0x227)]('\x0a'))[_0x53573a(0x203)]();_0x44c3ee[_0x53573a(0x235)][_0x53573a(0x20b)]({'embeds':[_0x380a2b]});}else _0x44c3ee[_0x53573a(0x228)]('This\x20user\x20has\x20no\x20warnings.');}):_0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x1e5));}else _0x44c3ee[_0x2a2f41(0x228)]('You\x20didn\x27t\x20mention\x20the\x20user\x20to\x20view\x20warnings\x20for!');}else{if(_0x303a3e===_0x2a2f41(0x29d)){if(!_0x44c3ee['member']['permissions'][_0x2a2f41(0x2c3)]('MANAGE_ROLES'))return _0x44c3ee['reply'](_0x2a2f41(0x2bf));const _0x4117fd=_0x44c3ee['mentions'][_0x2a2f41(0x2c1)]['first']();if(_0x4117fd){const _0x1e88a2=_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x266)][_0x2a2f41(0x22b)](_0x4117fd);if(_0x1e88a2){const _0x462ac2=_0x10205b[_0x2a2f41(0x2aa)](0x1)[_0x2a2f41(0x227)]('\x20');let _0x56d4ce=_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x260)][_0x2a2f41(0x20c)]['find'](_0x4c5a96=>_0x4c5a96['name']===_0x2a2f41(0x29f));!_0x56d4ce&&(_0x56d4ce=await _0x44c3ee['guild'][_0x2a2f41(0x260)][_0x2a2f41(0x2c4)]({'name':_0x2a2f41(0x29f),'color':'#000000','permissions':[]}),_0x44c3ee['guild'][_0x2a2f41(0x218)][_0x2a2f41(0x20c)]['forEach'](async(_0x3e6245,_0x42bd9d)=>{const _0x2dc7fb=_0x2a2f41;await _0x3e6245[_0x2dc7fb(0x2c8)][_0x2dc7fb(0x210)](_0x56d4ce,{'SEND_MESSAGES':![],'ADD_REACTIONS':![]});})),_0x1e88a2[_0x2a2f41(0x260)][_0x2a2f41(0x23c)](_0x56d4ce,'You\x20were\x20muted\x20in\x20the\x20server.\x20Reason:\x20'+_0x462ac2)['then'](()=>{const _0x44f40a=_0x2a2f41;_0x44c3ee['channel'][_0x44f40a(0x20b)]('Successfully\x20muted\x20**'+_0x4117fd[_0x44f40a(0x1d1)]+_0x44f40a(0x27a)+_0x462ac2+_0x44f40a(0x231));})['catch'](_0x484e88=>{const _0x12ced1=_0x2a2f41;_0x44c3ee[_0x12ced1(0x228)](_0x12ced1(0x2c2)),console[_0x12ced1(0x24e)](_0x12ced1(0x211),_0x484e88);});}else _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x1e5));}else _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2c6));}else{if(_0x303a3e===_0x2a2f41(0x268)){if(!_0x44c3ee['member'][_0x2a2f41(0x1dc)][_0x2a2f41(0x2c3)]('MANAGE_ROLES'))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2bf));const _0x3297ea=_0x44c3ee[_0x2a2f41(0x254)]['users'][_0x2a2f41(0x26c)]();if(_0x3297ea){const _0xf25446=_0x44c3ee[_0x2a2f41(0x2be)]['members'][_0x2a2f41(0x22b)](_0x3297ea);if(_0xf25446){let _0x436eec=_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x260)][_0x2a2f41(0x20c)][_0x2a2f41(0x1da)](_0x52e84d=>_0x52e84d['name']===_0x2a2f41(0x29f));_0x436eec?_0xf25446[_0x2a2f41(0x260)][_0x2a2f41(0x280)](_0x436eec,_0x2a2f41(0x2ce))[_0x2a2f41(0x2b7)](()=>{const _0x3e970e=_0x2a2f41;_0x44c3ee[_0x3e970e(0x235)][_0x3e970e(0x20b)](_0x3e970e(0x259)+_0x3297ea[_0x3e970e(0x1d1)]+'**\x20from\x20the\x20server!');})['catch'](_0x464702=>{const _0x129f03=_0x2a2f41;_0x44c3ee[_0x129f03(0x228)](_0x129f03(0x2cd)),console[_0x129f03(0x24e)](_0x129f03(0x225),_0x464702);}):_0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x1d9));}else _0x44c3ee[_0x2a2f41(0x228)]('That\x20user\x20isn\x27t\x20in\x20this\x20server!');}else _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x250));}else{if(_0x303a3e===_0x2a2f41(0x2b3)){if(!_0x44c3ee[_0x2a2f41(0x25a)]['permissions']['has'](_0x2a2f41(0x252)))return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2bf));const _0x313341=_0x44c3ee[_0x2a2f41(0x254)][_0x2a2f41(0x218)][_0x2a2f41(0x26c)]()||_0x44c3ee[_0x2a2f41(0x235)];_0x313341[_0x2a2f41(0x2c8)][_0x2a2f41(0x210)](_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x260)]['everyone'],{'SEND_MESSAGES':![]})[_0x2a2f41(0x2b7)](()=>{const _0x48a787=_0x2a2f41;_0x44c3ee[_0x48a787(0x235)][_0x48a787(0x20b)](_0x48a787(0x2b4)+_0x313341[_0x48a787(0x1f2)]+'**!');})['catch'](_0x54d74b=>{const _0x1b5e19=_0x2a2f41;_0x44c3ee[_0x1b5e19(0x228)](_0x1b5e19(0x281)),console['error'](_0x1b5e19(0x20e),_0x54d74b);});}else{if(_0x303a3e===_0x2a2f41(0x21b)){if(!_0x44c3ee[_0x2a2f41(0x25a)]['permissions'][_0x2a2f41(0x2c3)](_0x2a2f41(0x252)))return _0x44c3ee['reply'](_0x2a2f41(0x2bf));const _0x520f4d=_0x44c3ee[_0x2a2f41(0x254)][_0x2a2f41(0x218)]['first']()||_0x44c3ee[_0x2a2f41(0x235)];_0x520f4d[_0x2a2f41(0x2c8)][_0x2a2f41(0x210)](_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x260)][_0x2a2f41(0x29e)],{'SEND_MESSAGES':!![]})[_0x2a2f41(0x2b7)](()=>{const _0x29de31=_0x2a2f41;_0x44c3ee[_0x29de31(0x235)][_0x29de31(0x20b)](_0x29de31(0x2bd)+_0x520f4d[_0x29de31(0x1f2)]+_0x29de31(0x231));})[_0x2a2f41(0x246)](_0x29a384=>{const _0x13c468=_0x2a2f41;_0x44c3ee['reply'](_0x13c468(0x249)),console[_0x13c468(0x24e)](_0x13c468(0x2d5),_0x29a384);});}else{if(_0x303a3e===_0x2a2f41(0x20f))_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)]('idk');else{if(_0x303a3e===_0x2a2f41(0x2ac)){if(!_0x44c3ee[_0x2a2f41(0x2be)])return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x286));if(!_0x44c3ee[_0x2a2f41(0x25a)])return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x233));const _0x5115c2=_0x44c3ee[_0x2a2f41(0x254)][_0x2a2f41(0x266)][_0x2a2f41(0x26c)]();if(!_0x5115c2)return _0x44c3ee[_0x2a2f41(0x228)]('Please\x20mention\x20a\x20user\x20to\x20promote.');const _0x4ad65b='𝖠𝖽𝗆𝗂𝗇',_0x133114=_0x44c3ee[_0x2a2f41(0x2be)][_0x2a2f41(0x260)]['cache'][_0x2a2f41(0x1da)](_0x10bc4a=>_0x10bc4a[_0x2a2f41(0x1f2)]===_0x4ad65b);if(!_0x133114)return _0x44c3ee[_0x2a2f41(0x228)](_0x2a2f41(0x2d1));try{await _0x5115c2['roles'][_0x2a2f41(0x23c)](_0x133114),_0x44c3ee[_0x2a2f41(0x235)][_0x2a2f41(0x20b)]('**'+_0x5115c2[_0x2a2f41(0x208)][_0x2a2f41(0x1d1)]+_0x2a2f41(0x26d));}catch(_0x493fe){console['error'](_0x493fe),_0x44c3ee['channel']['send'](_0x2a2f41(0x216));}}}}}}}}}}}}}}}}}}}}}}}}}),client[_0x2f4eee(0x221)](config[_0x2f4eee(0x2da)]);
