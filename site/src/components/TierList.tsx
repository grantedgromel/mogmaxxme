"use client";

import Image from "next/image";
import { useState } from "react";

interface Archetype {
  tier: string;
  name: string;
  image: string;
  description: string;
}

const archetypes: Archetype[] = [
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
      "This guy was either the star receiver in high school or just hit the genetic lottery and coasted. The leanness is there, the frame suggests potential, but the lack of any real mass says he hasn't touched a barbell since PE class. Living off metabolism and vibes. A long, long way from the Gigachad throne, but at least he's not actively moving away from it.",
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
      "This man peaked when Reagan was in office and the mustache confirms it. The tank top is doing a lot of heavy lifting -- more than he's done in decades. Somewhere under the dad bod is a guy who used to arm wrestle his buddies at the bar. That guy is retired now. So is the metabolism.",
  },
  {
    tier: "D",
    name: "Discord Mod Bro",
    image: "/archetypes/D-Tier Discord Mod Bro.png",
    description:
      'This guy looks like he moderates three anime servers and hasn\'t seen sunlight since the Obama administration. The physique says "my cardio is walking to the fridge" and the expression says he knows it. Time to log off, close the laptop, and find out what grass feels like. The gym is right there, bro. It\'s been right there the whole time.',
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

const tiers = ["S", "A", "B", "C", "D", "F"] as const;

const tierConfig: Record<string, { bg: string; label: string; text: string }> = {
  S: { bg: "bg-tier-s/15", label: "bg-tier-s", text: "text-tier-s" },
  A: { bg: "bg-tier-a/15", label: "bg-tier-a", text: "text-tier-a" },
  B: { bg: "bg-tier-b/15", label: "bg-tier-b", text: "text-tier-b" },
  C: { bg: "bg-tier-c/15", label: "bg-tier-c", text: "text-tier-c" },
  D: { bg: "bg-tier-d/15", label: "bg-tier-d", text: "text-tier-d" },
  F: { bg: "bg-tier-f/15", label: "bg-tier-f", text: "text-tier-f" },
};

export default function TierList() {
  const [selected, setSelected] = useState<Archetype | null>(null);

  return (
    <section id="tier-list" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The tier list
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            12 archetypes. 6 tiers. Click any character to read their roast.
          </p>
        </div>

        <div className="space-y-1.5">
          {tiers.map((tier) => {
            const config = tierConfig[tier];
            const members = archetypes.filter((a) => a.tier === tier);
            return (
              <div
                key={tier}
                className={`flex items-stretch rounded-lg overflow-hidden ${config.bg}`}
              >
                <div
                  className={`flex items-center justify-center w-14 sm:w-16 ${config.label} shrink-0`}
                >
                  <span className="text-white text-xl sm:text-2xl font-bold">
                    {tier}
                  </span>
                </div>

                <div className="flex gap-2 sm:gap-3 p-3 flex-wrap">
                  {members.map((archetype) => {
                    const isSelected = selected?.name === archetype.name;
                    return (
                      <button
                        key={archetype.name}
                        onClick={() =>
                          setSelected(isSelected ? null : archetype)
                        }
                        className={`group flex flex-col items-center cursor-pointer transition-all duration-200 ${
                          isSelected ? "scale-105" : "hover:scale-105"
                        }`}
                      >
                        <div
                          className={`w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 bg-card ${
                            isSelected
                              ? "border-primary"
                              : "border-transparent hover:border-primary/40"
                          }`}
                        >
                          <Image
                            src={archetype.image}
                            alt={archetype.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs mt-1.5 text-muted-foreground text-center leading-tight max-w-[3.5rem] sm:max-w-[5rem]">
                          {archetype.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8 fade-up">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-lg overflow-hidden border border-border bg-background p-2">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-sm font-bold px-2 py-0.5 rounded ${
                      tierConfig[selected.tier].label
                    } text-white`}
                  >
                    {selected.tier}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {selected.name}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selected.description}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm self-start"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
