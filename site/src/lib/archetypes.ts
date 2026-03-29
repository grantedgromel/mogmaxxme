export interface Archetype {
  tier: string;
  name: string;
  image: string;
  description: string;
}

export const archetypes: Archetype[] = [
  {
    tier: "S",
    name: "Gigachad",
    image: "/archetypes/S-Tier Gigachad.png",
    description:
      "You're good fam. Have a good rest of your day, sir.",
  },
  {
    tier: "A",
    name: "Athletic Bro",
    image: "/archetypes/A-Tier Athletic Bro.png",
    description:
      "Okay, we get it, bro. You've played some kind of a sport (D1 athlete, maybe even semi-pro), or you're one of those hybrid athletes or something. You're not quite as aesthetic as the Chad (nor do you bench as much), but you can hold your own. Not Mister Olympia material, but you can get there if you stop playing touch butt with that dork in the park and stay more in the weight room.",
  },
  {
    tier: "A",
    name: "Chad",
    image: "/archetypes/A-Tier Chad.png",
    description:
      "The mass is there. The striations are there. The jaw could cut glass. You're on the doorstep of Gigachad, bro -- just know that doorstep is made of titanium and it doesn't open easy. You've got the size the Athletic Bro wishes he had, but he'd smoke you in a 400m dash and you know it. Less curl variations, more mobility work. The throne is right there.",
  },
  {
    tier: "B",
    name: "Bulk Bro",
    image: "/archetypes/B-Tier Bulk Bro.png",
    description:
      'This man can move some serious weight and the frame proves it. The traps, the legs, the overall thickness -- it\'s all there. But that midsection is telling a story, and the story is that barbells aren\'t the only place he\'s been stacking extra plates. A cut phase would change this man\'s life, but we both know he\'s ordering a large pizza tonight "for recovery."',
  },
  {
    tier: "B",
    name: "Semi-Athletic Bro",
    image: "/archetypes/B-Tier Semi-Athletic Bro.png",
    description:
      "This guy either peaked as the star receiver in high school or just hit the genetic lottery and coasted ever since. The leanness is there, the frame suggests potential, but the lack of any real mass says he hasn't touched a barbell since PE class. Living off metabolism and vibes. A long, long way from the Gigachad throne, but at least he's not actively moving away from it.",
  },
  {
    tier: "B",
    name: "Wannabe Chad",
    image: "/archetypes/B-Tier Wannabe Chad.png",
    description:
      "We see you, little bro. The abs are poking through, the shoulders are starting to cap out, and you've clearly discovered creatine within the last calendar year. These are beginner gains and you're wearing them proud. Good. Respect the process. You're on the pathway to Gigachad, you're just at mile marker one. Don't let the TikTok fitness influencers convince you to skip ahead.",
  },
  {
    tier: "C",
    name: "Chubby Bro",
    image: "/archetypes/C-Tier Chubby Bro.png",
    description:
      "Kinda like Bulk Bro if Bulk Bro never actually went to the gym. The arms are soft, the midsection is doing all the talking, and none of it is muscle. This isn't a bulk, bro, this is just what happens when you order DoorDash for every meal. The frame is in there somewhere. Somewhere.",
  },
  {
    tier: "C",
    name: "NPC Normie",
    image: "/archetypes/C-Tier NPC Normie.png",
    description:
      "Just a regular guy. Exists. Eats. Sleeps. Probably works in IT. Has never felt the pump and doesn't know what he's missing. Not bad, not good, just... there. The human equivalent of room temperature water. Meh.",
  },
  {
    tier: "D",
    name: "Dad Bod Boomer",
    image: "/archetypes/D-Tier Dad Bod Boomer.png",
    description:
      "This man swears the weights used to be heavier back in his day. The mustache is doing more work than he's done in years. Owns three grills and thinks that counts as a personality. The tank top is structural at this point -- take it off and the whole operation collapses. Somewhere under there is a guy who could do ten pull-ups. He tells you about it constantly. He cannot do one now.",
  },
  {
    tier: "D",
    name: "Discord Mod Bro",
    image: "/archetypes/D-Tier Discord Mod Bro.png",
    description:
      "This guy has three anime body pillows and calls them his \"roommates.\" Moderates five servers, has opinions about waifus, and hasn't been outside long enough for his eyes to adjust to natural light. The physique says \"my cardio is typing in all caps\" and the expression says he's one bad take away from a ban appeal essay. The gym is right there, bro. It's been right there the whole time.",
  },
  {
    tier: "D",
    name: "Extra Chubby Bro",
    image: "/archetypes/D-Tier Extra Chubby Bro.png",
    description:
      'Everything the Chubby Bro is, but more. More belly, more gravity, more years of saying "I\'ll start Monday." Monday never came. This is what happens when the Chubby Bro gives up on the bit entirely and just lets the current take him. The hands-on-belly pose isn\'t confidence -- it\'s load-bearing support.',
  },
  {
    tier: "F",
    name: "Morbidly Obese Bro",
    image: "/archetypes/F-Tier Morbidly Obese Bro.png",
    description:
      "Rock bottom has a basement and this guy found the elevator down. Sitting on what appears to be a child's scooter, which is both structurally concerning and metaphorically devastating. There is no sugarcoating this -- actually, never mind, he'd eat that too. The only F-tier on the list because someone had to be. The Gigachad journey starts with a single step. Literally. Just one. Please.",
  },
];

export const tiers = ["S", "A", "B", "C", "D", "F"] as const;
