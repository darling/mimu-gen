import { flatten, map } from 'lodash';

export const headlessFunctions = ['dm', 'delete'];
export const valueFunctions = [
	'user',
	'user_tag',
	'user_name',
	'user_avatar',
	'user_discrim',
	'user_id',
	'user_nick',
	'user_joindate',
	'user_createdate',
	'user_displaycolor',
	'user_boostsince',
	'user_balance',
	'user_balance_locale',
	'server_name',
	'server_id',
	'server_membercount',
	'server_membercount_ordinal',
	'server_membercount_nobots',
	'server_membercount_nobots_ordinal',
	'server_botcount',
	'server_botcount_ordinal',
	'server_icon',
	'server_rolecount',
	'server_channelcount',
	'server_randommember',
	'server_randommember_tag',
	'server_randommember_nobots',
	'server_owner',
	'server_owner_id',
	'server_createdate',
	'server_boostlevel',
	'server_boostcount',
	'server_nextboostlevel',
	'server_nextboostlevel_required',
	'server_nextboostlevel_until_required',
	'server_prefix',
	'server_currency',
	'channel',
	'channel_name',
	'channel_createdate',
	'message_id',
	'message_content',
	'message_link',
	'date',
];
export const dynamicFunctions = [
	'sendto',
	'delete_reply',
	'requireuser',
	'requireperm',
	'requirechannel',
	'requirerole',
	'denychannel',
	'denyperm',
	'denyrole',
	'requirebal',
	'modifybal',
	'cooldown',
	'addrole',
	'removerole',
	'setnick',
	'react',
	'reactreply',
];

export const dynamicVariables = ['range', 'choice', 'lockedchoice'];

const count = 4;

export const dynamicParentVars = flatten(
	map(['range', 'choose', 'lockedchoose', 'requirearg'], (item) => {
		let items: string[] = [];
		for (let i = 0; i < count; i++) {
			if (i != 0) {
				items.push(`${item}${i}`);
			} else {
				items.push(item);
			}
		}
		return items;
	})
);

export const functionNames = [...headlessFunctions];
