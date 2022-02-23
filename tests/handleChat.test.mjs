// import {formatEmotes} from '../src/scripts/handleChat.mjs';

/**
 * @param text
 * @param emotes
 */
function formatEmotes(text, emotes) {
	const arrayOfWords = text.split(' ');
	for (let i = 0; i < arrayOfWords.length; i++) {
		const word = arrayOfWords[i];
		if (emotes[word]) {
			console.log('match', i);
			arrayOfWords[i] =
				emotes[
					`<img alt="${emoteName}" data-twitch-emote="${emoteName}" data-twitch-emote-id="${emoteId}" src="${emoteSrc}">`
				];
		}
	}
	return arrayOfWords.join(' ');
}

describe('handleChat', () => {
	test("Unicode emojis don't throw off emote replacements", () => {
		let text = '🦖 somean3CoolTuna';
		text = formatEmotes(text, {
			somean3CoolTuna: 'emotesv2_3e72737cb25d4278971dd4988b48992c',
		});
		console.log(text);
		expect(false).toBe(true);
	});
});
