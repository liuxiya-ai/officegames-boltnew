export interface Game {
	id: string;
	name: string;
	description: string;
	image: string;
	duration: string;
	playerCount: string;
	gameType: string;
	setting: string;
	techRequirement: string;
	category: string[];
	tags: string[];
	link: string;
	featured?: boolean;
}

export const games: Game[] = [
	{
		id: '1',
		name: 'Two Truths and a Lie',
		description: 'A classic icebreaker where players share three statements about themselves - two true and one false. Perfect for team building and getting to know colleagues better.',
		image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'short',
		playerCount: 'small',
		gameType: 'social',
		setting: 'meeting',
		techRequirement: 'no-device',
		category: ['team-building', 'meeting-engagement', 'editors-choice'],
		tags: ['5-15 min', 'Small Team', 'Social'],
		link: '#',
		featured: true
	},
	{
		id: '2',
		name: 'Online Trivia Challenge',
		description: 'Interactive trivia game with workplace-friendly questions. Multiple categories including general knowledge, pop culture, and fun facts to engage remote teams.',
		image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'medium',
		playerCount: 'medium',
		gameType: 'puzzle',
		setting: 'remote',
		techRequirement: 'browser',
		category: ['remote-team', 'friday-fun', 'most-popular'],
		tags: ['15-30 min', 'Medium Team', 'Trivia'],
		link: '#'
	},
	{
		id: '3',
		name: 'Quick Draw Challenge',
		description: 'Fast-paced drawing game perfect for short breaks. Players draw prompts while others guess. Great for creativity and laughs during busy workdays.',
		image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'very-short',
		playerCount: 'small',
		gameType: 'casual',
		setting: 'break',
		techRequirement: 'browser',
		category: ['quick-break', 'lunch-break', 'newly-added'],
		tags: ['1-5 min', 'Small Team', 'Creative'],
		link: '#'
	},
	{
		id: '4',
		name: 'Virtual Escape Room',
		description: 'Collaborative puzzle-solving adventure that builds teamwork. Teams work together to solve clues and escape within the time limit. Excellent for team bonding.',
		image: 'https://images.pexels.com/photos/4545982/pexels-photo-4545982.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'long',
		playerCount: 'medium',
		gameType: 'team-building',
		setting: 'remote',
		techRequirement: 'platform',
		category: ['team-building', 'remote-team', 'editors-choice'],
		tags: ['30+ min', 'Medium Team', 'Puzzle'],
		link: '#'
	},
	{
		id: '5',
		name: 'Word Association Sprint',
		description: 'Lightning-fast word game where players build chains of associated words. Perfect brain exercise for busy professionals looking for a quick mental break.',
		image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'very-short',
		playerCount: 'individual',
		gameType: 'puzzle',
		setting: 'break',
		techRequirement: 'no-device',
		category: ['quick-break', 'newly-added'],
		tags: ['1-5 min', 'Individual', 'Brain Game'],
		link: '#'
	},
	{
		id: '6',
		name: 'Virtual Bingo - Office Edition',
		description: 'Office-themed bingo with workplace scenarios and remote work situations. Great for meetings and team calls to keep everyone engaged.',
		image: 'https://images.pexels.com/photos/8761815/pexels-photo-8761815.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'medium',
		playerCount: 'large',
		gameType: 'social',
		setting: 'meeting',
		techRequirement: 'browser',
		category: ['meeting-engagement', 'remote-team', 'most-popular'],
		tags: ['15-30 min', 'Large Team', 'Interactive'],
		link: '#',
		featured: true
	},
	{
		id: '7',
		name: 'Strategy Showdown',
		description: 'Turn-based strategy game that challenges critical thinking. Players make tactical decisions in bite-sized sessions perfect for lunch breaks.',
		image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'medium',
		playerCount: 'small',
		gameType: 'strategy',
		setting: 'office',
		techRequirement: 'app',
		category: ['lunch-break', 'editors-choice'],
		tags: ['15-30 min', 'Small Team', 'Strategy'],
		link: '#'
	},
	{
		id: '8',
		name: 'Mindfulness Moments',
		description: 'Guided relaxation and mindfulness exercises disguised as a gentle game. Perfect for stress relief during hectic workdays.',
		image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'short',
		playerCount: 'individual',
		gameType: 'casual',
		setting: 'break',
		techRequirement: 'app',
		category: ['quick-break', 'newly-added'],
		tags: ['5-15 min', 'Individual', 'Wellness'],
		link: '#'
	},
	{
		id: '9',
		name: 'Team Building Charades',
		description: 'Classic charades with office and work-related themes. Encourages creativity and team interaction. Works great for both in-person and virtual teams.',
		image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'medium',
		playerCount: 'medium',
		gameType: 'team-building',
		setting: 'office',
		techRequirement: 'no-device',
		category: ['team-building', 'friday-fun', 'most-popular'],
		tags: ['15-30 min', 'Medium Team', 'Acting'],
		link: '#'
	},
	{
		id: '10',
		name: 'Friday Celebration Wheel',
		description: 'Spin the wheel for fun Friday activities and team celebrations. Includes mini-games, challenges, and team bonding activities to end the week on a high note.',
		image: 'https://images.pexels.com/photos/1376201/pexels-photo-1376201.jpeg?auto=compress&cs=tinysrgb&w=400',
		duration: 'short',
		playerCount: 'large',
		gameType: 'social',
		setting: 'office',
		techRequirement: 'browser',
		category: ['friday-fun', 'team-building', 'editors-choice'],
		tags: ['5-15 min', 'Large Team', 'Celebration'],
		link: '#',
		featured: true
	}
];