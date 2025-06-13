export interface Game {
	id: string;
	name: string;
	description: string;
	image: string;
	duration: string;
	playerCount: string[];
	gameType: string[];
	setting: string[];
	techRequirement: string[];
	category: string[];
	tags: string[];
	link: string;
}

export const games: Game[] = [
	{
		id: '1',
		name: 'Two Truths and a Lie',
		description: 'A classic icebreaker where players share three statements about themselves - two true and one false. Perfect for team building and getting to know colleagues better.',
		image: '/images/two-truths-and-a-lie.png',
		duration: 'very-short',
		playerCount: ['small', 'medium'],
		gameType: ['social', 'team-building'],
		setting: ['meeting', 'office'],
		techRequirement: ['no-device'],
		category: ['team-building'],
		tags: ['1-15 min', 'Small Team', 'Social'],
		link: 'https://crowdparty.app/game/two-truths-and-a-lie',
	},
	{
		id: '2',
		name: 'Online Trivia Challenge',
		description: 'Interactive trivia game with workplace-friendly questions. Multiple categories including general knowledge, pop culture, and fun facts to engage remote teams.',
		image: '/images/triviaplaza.png',
		duration: 'short',
		playerCount: ['medium', 'large'],
		gameType: ['puzzle', 'social'],
		setting: ['remote', 'meeting'],
		techRequirement: ['browser'],
		category: ['remote-team', 'friday-fun', 'most-popular'],
		tags: ['15-30 min', 'Medium Team', 'Trivia'],
		link: 'https://www.triviaplaza.com/'
	},
	{
		id: '3',
		name: 'Quick Draw Challenge',
		description: 'Fast-paced drawing game perfect for short breaks. Players draw prompts while others guess. Great for creativity and laughs during busy workdays.',
		image: '/images/quick-draw.png',
		duration: 'very-short',
		playerCount: ['small', 'medium'],
		gameType: ['casual', 'social'],
		setting: ['break', 'office'],
		techRequirement: ['browser', 'no-device'],
		category: ['quick-break', 'stress-relief', 'newly-added'],
		tags: ['1-15 min', 'Small Team', 'Creative'],
		link: 'https://quickdraw.withgoogle.com/'
	},
	{
		id: '4',
		name: 'Virtual Escape Room',
		description: 'Collaborative puzzle-solving adventure that builds teamwork. Teams work together to solve clues and escape within the time limit. Excellent for team bonding.',
		image: '/images/escape-rooms.png',
		duration: 'medium',
		playerCount: ['medium', 'large'],
		gameType: ['team-building', 'puzzle'],
		setting: ['remote', 'office'],
		techRequirement: ['platform', 'browser'],
		category: ['team-building', 'remote-team'],
		tags: ['30-60 min', 'Medium Team', 'Puzzle'],
		link: 'https://online-escape-room.com/#escape-rooms'
	},
	{
		id: '5',
		name: 'Word Association Sprint',
		description: 'Lightning-fast word game where players build chains of associated words. Perfect brain exercise for busy professionals looking for a quick mental break.',
		image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'very-short',
		playerCount: ['individual', 'small'],
		gameType: ['puzzle', 'casual'],
		setting: ['break', 'office'],
		techRequirement: ['no-device'],
		category: ['quick-break', 'newly-added'],
		tags: ['1-15 min', 'Individual', 'Brain Game'],
		link: 'https://wordchase.semantle.com/'
	},
	{
		id: '6',
		name: 'Virtual Bingo - Office Edition',
		description: 'Office-themed bingo with workplace scenarios and remote work situations. Great for meetings and team calls to keep everyone engaged.',
		image: '/images/binggo.png',
		duration: 'short',
		playerCount: ['large'],
		gameType: ['social', 'casual'],
		setting: ['meeting', 'remote'],
		techRequirement: ['browser'],
		category: ['remote-team', 'most-popular'],
		tags: ['15-30 min', 'Large Team', 'Interactive'],
		link: 'https://www.bingoblitz.com/',
	},
	{
		id: '7',
		name: 'Level Supermind',
		description: 'Being the #1 app in India, 2023, as declared by Google Play Store, it gives a personalized approach tailored to your needs, enhancing mental performance, relaxation, and happiness.',
		image: 'https://level.game/_next/static/media/circle2.8f17e95a.webp',
		duration: 'short',
		playerCount: ['small', 'medium'],
		gameType: ['strategy', 'puzzle'],
		setting: ['office', 'break'],
		techRequirement: ['app', 'browser'],
		category: ['stress-relief'],
		tags: ['App','15-30 min', 'Small Team', 'Strategy'],
		link: 'https://level.game/'
	},
	{
		id: '8',
		name: 'Mindfulness Moments',
		description: 'Guided relaxation and mindfulness exercises disguised as a gentle game. Perfect for stress relief during hectic workdays.',
		image: 'https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=1920&q=75',
		duration: 'very-short',
		playerCount: ['individual'],
		gameType: ['casual'],
		setting: ['break', 'office'],
		techRequirement: ['app', 'no-device'],
		category: ['quick-break', 'newly-added'],
		tags: ['App','1-15 min', 'Individual', 'Wellness'],
		link: 'http://www.calm.com/'
	},
	{
		id: '9',
		name: 'Team Building Charades',
		description: 'Classic charades with office and work-related themes. Encourages creativity and team interaction. Works great for both in-person and virtual teams.',
		image: '/images/charades.png',
		duration: 'short',
		playerCount: ['medium', 'large'],
		gameType: ['team-building', 'social'],
		setting: ['office', 'remote'],
		techRequirement: ['no-device'],
		category: ['team-building', 'friday-fun', 'most-popular'],
		tags: ['15-30 min', 'Medium Team', 'Acting'],
		link: 'https://www.funtivity.co/activity/charades'
	},
	{
		id: '10',
		name: 'Friday Celebration Wheel',
		description: 'Spin the wheel for fun Friday activities and team celebrations. Includes mini-games, challenges, and team bonding activities to end the week on a high note.',
		image: 'https://www.wheeloffortune.com/sites/default/files/2024-09/S42_FanFriday_Masthead_desktop_V2.jpg',
		duration: 'very-short',
		playerCount: ['large'],
		gameType: ['social', 'casual'],
		setting: ['office','remote'],
		techRequirement: ['browser', 'no-device'],
		category: ['friday-fun', 'team-building'],
		tags: ['1-15 min', 'Large Team', 'Celebration'],
		link: 'https://www.wheeloffortune.com/win/fan-friday',
	},
	{
		id: '11',
		name: 'Drawing and Guessing Pictionary Game',
		description: 'Fast-paced drawing and guessing game that sparks creativity and laughter among colleagues，Players take turns illustrating words while others race to guess correctly, fostering communication skills and team bonding in a fun, competitive environment.',
		image: '/images/skribbl-io.png',
		duration: 'short',
		playerCount: ['individual', 'small', 'medium'],	
		gameType: ['social', 'casual', 'team-building'],
		setting: ['office', 'break','remote'],
		techRequirement: ['browser'],
		category: ['quick-break', 'most-popular', 'team-building', 'newly-added'],
		tags: ['15-30 min', 'brain-game', 'Creative', 'interactive'],
		link: 'https://skribbl.io/'
	},
	{
		id: '12',
		name: 'Online Puzzle Maker',
		description: 'the interactive puzzle maker for creating awesome, customisable and online embeddable puzzles',
		image: '/images/puzzle.png',
		duration: 'short',
		playerCount: ['individual', 'small', 'medium'],	
		gameType: ['social', 'casual', 'team-building'],
		setting: ['office', 'break','remote'],
		techRequirement: ['browser'],
		category: ['quick-break', 'most-popular', 'team-building', 'newly-added'],
		tags: ['15-30 min', 'brain-game', 'Creative', 'interactive'],
		link: 'https://puzzel.org/en'
	},
	{
		id: '13',
		name: 'Gartic Phone',
		description: 'A hilarious hybrid of "telephone" and "Pictionary" where players take turns drawing and guessing, creating laugh-out-loud story chains. Perfect for remote teams looking to unwind and exercise creative thinking.',
		image: '/images/gartic.png',
		duration: 'medium',
		playerCount: ['small', 'medium','large'],	
		gameType: ['social', 'strategy', 'team-building'],
		setting: ['office', 'break','remote'],
		techRequirement: ['browser'],
		category: ['remote-team', 'team-building', 'newly-added','friday-fun'],
		tags: ['remote-team', 'brain-game', 'Creative', 'interactive'],
		link: 'https://garticphone.com/'
	},
	{
		id: '14',
		name: 'Codenames Online',
		description: 'A vocabulary-based team collaboration game where players split into two teams and use clues from their spymaster to identify their team word cards.Excellent for building communication skills and creative thinking. ',
		image: '/images/codenames.png',
		duration: 'medium',
		playerCount: ['small', 'medium','large'],	
		gameType: ['social', 'strategy', 'team-building'],
		setting: ['office', 'break','remote'],
		techRequirement: ['app'],
		category: ['remote-team', 'team-building', 'newly-added','friday-fun'],
		tags: ['App','remote-team', 'brain-game', 'Creative', 'interactive'],
		link: 'https://codenames.game/'
	},
	{
		id: '15',
		name: ' GeoGuessr',
		description: 'A geography guessing game that randomly places players in Google Street View locations worldwide, challenging them to determine their position based on environmental clues. A fun way to develop observational skills and team collaboration.',
		image: '/images/explore-the-world.png',
		duration: 'medium',
		playerCount: ['small', 'medium','large'],	
		gameType: ['social', 'strategy', 'team-building'],
		setting: ['office', 'break','remote'],
		techRequirement: ['app'],
		category: ['remote-team', 'team-building', 'newly-added','friday-fun'],
		tags: ['App','remote-team', 'brain-game', 'Creative', 'interactive'],
		link: 'https://www.geoguessr.com/'
	}
];