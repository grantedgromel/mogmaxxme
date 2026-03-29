"use client";

import Image from "next/image";
import { useState } from "react";

interface Archetype {
  tier: string;
  name: string;
  image: string;
  description: string;
  tierColor: string;
}

const archetypes: Archetype[] = [
  {
    tier: "S",
    name: "Gigachad",
    image: "/archetypes/S-Tier Gigachad.png",
    description:
      "You're good fam. Have a good rest of your day, sir.",
    tierColor: "var(--tier-s)",
  },
  {
    tier: "A",
    name: "Athletic Bro",
    image: "/archetypes/A-Tier Athletic Bro.png",
    description:
      "Okay, we get it, bro. You've played some kind of a sport (D1 athlete, maybe even semi-pro), or you're one of those hybrid athletes or something. You're not quite as aesthetic as the Chad (nor do you bench as much), but you can hold your own. Not Mister Olympia material, but you can get there if you stop playing touch butt with that dork in the park and stay more in the weight room.",
    tierColor: "var(--tier-a)",
  },
  {
    tier: "A",
    name: "Chad",
    image: "/archetypes/A-Tier Chad.png",
    description:
      "The mass is there. The striations are there. The jaw could cut glass. You're on the doorstep of Gigachad, bro -- just know that doorstep is made of titanium and it doesn't open easy. You've got the size the Athletic Bro wishes he had, but he'd smoke you in a 400m dash and you know it. Less curl variations, more mobility work. The throne is right there.",
    tierColor: "var(--tier-a)",
  },
  {
    tier: "B",
    name: "Bulk Bro",
    image: "/archetypes/B-Tier Bulk Bro.png",
    description:
      'This man can move some serious weight and the frame proves it. The traps, the legs, the overall thickness -- it\'s all there. But that midsection is telling a story, and the story is that barbells aren\'t the only place he\'s been stacking extra plates. A cut phase would change this man\'s life, but we both know he\'s ordering a large pizza tonight "for recovery."',
    tierColor: "var(--tier-b)",
  },
  {
    tier: "B",
    name: "Semi-Athletic Bro",
    image: "/archetypes/B-Tier Semi-Athletic Bro.png",
    description:
      "This guy was either the star receiver in high school or just hit the genetic lottery and coasted. The leanness is there, the frame suggests potential, but the lack of any real mass says he hasn't touched a barbell since PE class. Living off metabolism and vibes. A long, long way from the Gigachad throne, but at least he's not actively moving away from it.",
    tierColor: "var(--tier-b)",
  },
  {
    tier: "B",
    name: "Wannabe Chad",
    image: "/archetypes/B-Tier Wannabe Chad.png",
    description:
      "We see you, little bro. The abs are poking through, the shoulders are starting to cap out, and you've clearly discovered creatine within the last calendar year. These are beginner gains and you're wearing them proud. Good. Respect the process. You're on the pathway to Gigachad, you're just at mile marker one. Don't let the TikTok fitness influencers convince you to skip ahead.",
    tierColor: "var(--tier-b)",
  },
  {
    tier: "C",
    name: "Chubby Bro",
    image: "/archetypes/C-Tier Chubby Bro.png",
    description:
      "Kinda like Bulk Bro if Bulk Bro never actually went to the gym. The arms are soft, the midsection is doing all the talking, and none of it is muscle. This isn't a bulk, bro, this is just what happens when you order DoorDash for every meal. The frame is in there somewhere. Somewhere.",
    tierColor: "var(--tier-c)",
  },
  {
    tier: "C",
    name: "NPC Normie",
    image: "/archetypes/C-Tier NPC Normie.png",
    description:
      "Just a regular guy. Exists. Eats. Sleeps. Probably works in IT. Has never felt the pump and doesn't know what he's missing. Not bad, not good, just... there. The human equivalent of room temperature water. Meh.",
    tierColor: "var(--tier-c)",
  },
  {
    tier: "D",
    name: "Dad Bod Boomer",
    image: "/archetypes/D-Tier Dad Bod Boomer.png",
    description:
      "This man peaked when Reagan was in office and the mustache confirms it. The tank top is doing a lot of heavy lifting -- more than he's done in decades. Somewhere under the dad bod is a guy who used to arm wrestle his buddies at the bar. That guy is retired now. So is the metabolism.",
    tierColor: "var(--tier-d)",
  },
  {
    tier: "D",
    name: "Discord Mod Bro",
    image: "/archetypes/D-Tier Discord Mod Bro.png",
    description:
      'This guy looks like he moderates three anime servers and hasn\'t seen sunlight since the Obama administration. The physique says "my cardio is walking to the fridge" and the expression says he knows it. Time to log off, close the laptop, and find out what grass feels like. The gym is right there, bro. It\'s been right there the whole time.',
    tierColor: "var(--tier-d)",
  },
  {
    tier: "D",
    name: "Extra Chubby Bro",
    image: "/archetypes/D-Tier Extra Chubby Bro.png",
    description:
      'Everything the Chubby Bro is, but more. More belly, more gravity, more years of saying "I\'ll start Monday." Monday never came. This is what happens when the Chubby Bro gives up on the bit entirely and just lets the current take him. The hands-on-belly pose isn\'t confidence -- it\'s load-bearing support.',
    tierColor: "var(--tier-d)",
  },
  {
    tier: "F",
    name: "Morbidly Obese Bro",
    image: "/archetypes/F-Tier Morbidly Obese Bro.png",
    description:
      "Rock bottom has a basement and this guy found the elevator down. Sitting on what appears to be a child's scooter, which is both structurally concerning and metaphorically devastating. There is no sugarcoating this -- actually, never mind, he'd eat that too. The only F-tier on the list because someone had to be. The Gigachad journey starts with a single step. Literally. Just one. Please.",
    tierColor: "var(--tier-f)",
  },
];

const tiers = ["S", "A", "B", "C", "D", "F"] as const;

const tierStyles: Record<string, { bg: string; border: string; text: string }> = {
  S: { bg: "bg-tier-s/20", border: "border-tier-s", text: "text-tier-s" },
  A: { bg: "bg-tier-a/20", border: "border-tier-a", text: "text-tier-a" },
  B: { bg: "bg-tier-b/20", border: "border-tier-b", text: "text-tier-b" },
  C: { bg: "bg-tier-c/20", border: "border-tier-c", text: "text-tier-c" },
  D: { bg: "bg-tier-d/20", border: "border-tier-d", text: "text-tier-d" },
  F: { bg: "bg-tier-f/20", border: "border-tier-f", text: "text-tier-f" },
};

export default function TierList() {
  const [selected, setSelected] = useState<Archetype | null>(null);

  return (
    <section
      id="tier-list"
      className="relative py-20 px-4 max-w-6xl mx-auto w-full"
    >
      <h2 className="font-mono text-3xl sm:text-5xl font-bold text-center mb-4 text-primary crt-glow">
        THE TIER LIST
      </h2>
      <p className="text-center text-muted-foreground mb-12 font-sans text-lg">
        Where do you fall? 12 archetypes. 6 tiers. Zero mercy.
      </p>

      {/* Tier rows */}
      <div className="space-y-2">
        {tiers.map((tier) => {
          const style = tierStyles[tier];
          const members = archetypes.filter((a) => a.tier === tier);
          return (
            <div
              key={tier}
              className={`tier-row flex items-stretch rounded border-l-4 ${style.border} ${style.bg} overflow-hidden`}
            >
              {/* Tier label */}
              <div
                className={`flex items-center justify-center w-16 sm:w-20 font-mono text-2xl sm:text-4xl font-bold ${style.text} shrink-0`}
              >
                {tier}
              </div>

              {/* Characters in this tier */}
              <div className="flex gap-2 sm:gap-4 p-2 sm:p-3 flex-wrap">
                {members.map((archetype) => (
                  <button
                    key={archetype.name}
                    onClick={() =>
                      setSelected(
                        selected?.name === archetype.name ? null : archetype
                      )
                    }
                    className={`group relative flex flex-col items-center cursor-pointer transition-all hover:scale-105 ${
                      selected?.name === archetype.name
                        ? "scale-105"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-16 h-16 sm:w-24 sm:h-24 rounded overflow-hidden border-2 transition-colors ${
                        selected?.name === archetype.name
                          ? `${style.border} shadow-lg`
                          : "border-border hover:border-primary"
                      } bg-card`}
                    >
                      <Image
                        src={archetype.image}
                        alt={archetype.name}
                        width={96}
                        height={96}
                        className="pixel-art w-full h-full object-contain p-1"
                      />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs mt-1 text-foreground/80 text-center leading-tight max-w-[4rem] sm:max-w-[6rem]">
                      {archetype.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded description card */}
      {selected && (
        <div className="mt-8 arcade-border rounded-lg p-6 bg-card relative">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground font-mono"
          >
            [X]
          </button>
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-32 h-32 shrink-0 rounded overflow-hidden border-2 border-border bg-background p-2">
              <Image
                src={selected.image}
                alt={selected.name}
                width={128}
                height={128}
                className="pixel-art w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="font-mono text-2xl font-bold"
                  style={{ color: selected.tierColor }}
                >
                  {selected.tier}-TIER
                </span>
                <span className="font-mono text-xl text-foreground">
                  {selected.name}
                </span>
              </div>
              <p className="text-foreground/90 font-sans leading-relaxed text-base">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
