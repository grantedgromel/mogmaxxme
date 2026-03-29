"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

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

const tiers = ["S", "A", "B", "C", "D", "F"] as const;

const tierLabels: Record<string, string> = {
  S: "S",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  F: "F",
};

export default function TierList() {
  const [selected, setSelected] = useState<Archetype | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected, close]);

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
            const members = archetypes.filter((a) => a.tier === tier);
            return (
              <div
                key={tier}
                className="flex items-stretch rounded-lg overflow-hidden bg-muted"
              >
                <div className="flex items-center justify-center w-14 sm:w-16 bg-foreground shrink-0">
                  <span className="text-background text-xl sm:text-2xl font-bold">
                    {tierLabels[tier]}
                  </span>
                </div>

                <div className="flex gap-2 sm:gap-3 p-3 flex-wrap">
                  {members.map((archetype) => (
                    <button
                      key={archetype.name}
                      onClick={() => setSelected(archetype)}
                      className="group flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105"
                    >
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-foreground/20 transition-colors duration-200 bg-card">
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          <div className="relative w-full max-w-3xl rounded-xl border border-border bg-card shadow-lg scale-up overflow-hidden flex flex-col sm:flex-row">
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* Portrait - left side, full height */}
            <div className="sm:w-64 md:w-72 shrink-0 bg-muted flex items-center justify-center p-8 sm:p-6">
              <Image
                src={selected.image}
                alt={selected.name}
                width={280}
                height={280}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
              />
            </div>

            {/* Info - right side */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold px-2.5 py-1 rounded bg-foreground text-background">
                  {selected.tier}-Tier
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {selected.name}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
