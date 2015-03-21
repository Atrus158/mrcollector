var monsters = [], skylanders = [], decks = [], cards = [];

$("document").ready( function () {

	decks = ["8_bit", "alice_in", "alice_of", "pharaoh", "tattoo"];

	cards[0] = ["1s", "1d", "1c", "1h", "joker1", "joker2", "pattern"];
	cards[1] = ["1s", "6s", "7s", "joker1", "joker2", "pattern"];
	cards[2] = ["1s", "11d", "12d", "13d", "alice", "joker1", "joker2", "pattern"];
	cards[3] = ["1s", "1d", "1c", "1h", "joker1", "joker2", "pattern"];
	cards[4] = ["1s", "1d", "1c", "1h", "joker", "pattern"];

	skylanders[0] = {
		name: "bash",
		color: "rgb(148,57,32)"
	};
	skylanders[1] = {
		name: "camo",
		color: "rgb(65,153,45)"
	};
	skylanders[2] = {
		name: "chop",
		color: "rgb(121,131,142)"
	};
	skylanders[3] = {
		name: "cynder",
		color: "rgb(121,131,142)"
	};
	skylanders[4] = {
		name: "dino",
		color: "rgb(148,57,32)"
	};
	skylanders[5] = {
		name: "double",
		color: "rgb(106,71,132)"
	};
	skylanders[6] = {
		name: "drill",
		color: "rgb(220,120,50)"
	};
	skylanders[7] = {
		name: "drobot",
		color: "rgb(220,120,50)"
	};
	skylanders[8] = {
		name: "eruptor",
		color: "rgb(166,50,43)"
	};
	skylanders[9] = {
		name: "flameslinger",
		color: "rgb(166,50,43)"
	};
	skylanders[10] = {
		name: "ghost",
		color: "rgb(121,131,142)"
	};
	skylanders[11] = {
		name: "gill",
		color: "rgb(28,116,165)"
	};
	skylanders[12] = {
		name: "hex",
		color: "rgb(121,131,142)"
	};	
	skylanders[13] = {
		name: "lightning",
		color: "rgb(67,176,209)"
	};
	skylanders[14] = {
		name: "prism",
		color: "rgb(148,57,32)"
	};
	skylanders[15] = {
		name: "slam",
		color: "rgb(28,116,165)"
	};
	skylanders[16] = {
		name: "sonic",
		color: "rgb(67,176,209)"
	};
	skylanders[17] = {
		name: "spyro",
		color: "rgb(106,71,132)"
	};
	skylanders[18] = {
		name: "stealth",
		color: "rgb(65,153,45)"
	};
	skylanders[19] = {
		name: "stump",
		color: "rgb(65,153,45)"
	};
	skylanders[20] = {
		name: "sunburn",
		color: "rgb(166,50,43)"
	};
	skylanders[21] = {
		name: "terrafin",
		color: "rgb(148,57,32)"
	};
	skylanders[22] = {
		name: "trigger",
		color: "rgb(220,120,50)"
	};
	skylanders[23] = {
		name: "warnado",
		color: "rgb(67,176,209)"
	};
	skylanders[24] = {
		name: "whirlwind",
		color: "rgb(67,176,209)"
	};
	skylanders[25] = {
		name: "wrecking",
		color: "rgb(106,71,132)"
	};
	skylanders[26] = {
		name: "zook",
		color: "rgb(65,153,45)"
	};


	monsters[0] = {
		name: "Ghost",
		artist: "Julie Guthrie",
		part_number: "77007",
		image: "ghost.gif"
	};
	monsters[1] = {
		name: "Skeletal Archer",
		artist: "David Pugh",
		part_number: "77018",
		image: "archer.gif"
	};
	monsters[2] = {
		name: "Giant Spider",
		artist: "Gene Van Horne",
		part_number: "77025",
		image: "spider.gif"
	};
	monsters[3] = {
		name: "Young Fire Dragon",
		artist: "Sandra Garrity",
		part_number: "77026",
		image: "dragon.gif"
	};
	monsters[4] = {
		name: "Virina, Female Demon",
		artist: "Werner Klocke",
		part_number: "77067",
		image: "virina.gif"
	};
	monsters[5] = {
		name: "Astrid, Female Bard",
		artist: "Werner Klocke",
		part_number: "77078",
		image: "bard.gif"
	};
	monsters[6] = {
		name: "Isabeau Laroche, Paladin",
		artist: "Werner Klocke",
		part_number: "77079",
		image: "isabeau.gif"
	};
	monsters[7] = {
		name: "Townsfolk: Strumpet",
		artist: "Bobby Jackson",
		part_number: "77086",
		image: "strumpet.gif"
	};
	monsters[8] = {
		name: "Townsfolk: Grandmother",
		artist: "Bobby Jackson",
		part_number: "77088",
		image: "grandmother.gif"
	};
	monsters[9] = {
		name: "Trista, Female Warrior",
		artist: "Patrick Keith",
		part_number: "77094",
		image: "trista.gif"
	};
	monsters[10] = {
		name: "Vaeloth, Helborn Paladin",
		artist: "Derek Schubert",
		part_number: "77120",
		image: "vaeloth.gif"
	};
	monsters[11] = {
		name: "Vermin: Scorpion",
		artist: "Kevin Williams",
		part_number: "77125",
		image: "scorpion.gif"
	};
	monsters[12] = {
		name: "Finaela, Female Pirate",
		artist: "Patrick Keith",
		part_number: "77131",
		image: "finaela.gif"
	};
	monsters[13] = {
		name: "Hajad, Pirate",
		artist: "Julie Guthrie",
		part_number: "77134",
		image: "hajad.gif"
	};
	monsters[14] = {
		name: "Well of Chaos",
		artist: "Bob Ridolfi",
		part_number: "77136",
		image: "well_of_chaos.gif"
	};
	monsters[15] = {
		name: "Altar of Evil",
		artist: "Bbo Olley",
		part_number: "77139",
		image: "altar.gif"
	};
	monsters[16] = {
		name: "Townsfolk: Blacksmith",
		artist: "Bobby Jackson",
		part_number: "77142",
		image: "blacksmith.gif"
	};
	monsters[17] = {
		name: "Townsfolk: Undertaker",
		artist: "Bobby Jackson",
		part_number: "77143",
		image: "undertaker.gif"
	};
	monsters[18] = {
		name: "Mummy",
		artist: "Bob Ridolfi",
		part_number: "77144",
		image: "mummy.gif"
	};
	monsters[19] = {
		name: "Nagendra Stalker",
		artist: "Julie Guthrie",
		part_number: "77153",
		image: "stalker.gif"
	};
	monsters[20] = {
		name: "Lizardman Warrior",
		artist: "Gene Van Horne",
		part_number: "77155",
		image: "lizardman.gif"
	};
	monsters[21] = {
		name: "Arrius, Skeletal Warrior",
		artist: "Bob Ridolfi",
		part_number: "77158",
		image: "arrius.gif"
	};
});



