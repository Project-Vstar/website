"use client";

import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FactionChooser from "@/app/components/faction-chooser";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const getFlexClass = (side) => {
    if (hovered === side) return "flex-[2]";
    if (hovered === null) return "flex-[1]";
    return "flex-[1]";
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <FactionChooser
        hovered={hovered}
        setHovered={setHovered}
        getFlexClass={getFlexClass}
      />

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <img src="/VSTAR.png" alt="VSTAR Logo" className="w-48 h-48 mb-6" />
          <p className="p-4">About VSTAR - Virtual Star Entertainment</p>
          <p className="p-4">The Company:</p>
          <p className="p-4">Motto and message from our CEO:</p>
          <p className="p-4">History:</p>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-center bg-gray-700 rounded-lg h-32"
              >
                <span className="text-gray-400">Brand {index + 1}</span>
              </a>
            ))}
        </div>
      </div>

      <div className="flex min-h-[90vh] text-white">
        <div className="w-1/4 flex items-center justify-center bg-gray-800">
          <img src="/VSTAR/mfsdd_inverted_designsheet_standingonly_2.png" alt="Dee Ronny syn Łužycy in a suit, standing." className="object-cover h-full w-full" />
        </div>

        <div className="w-3/4 flex flex-col justify-center items-center text-center p-8">
          <p className="text-4xl font-bold p-4">VSTAR - Virtual Star Lore</p>
          <div className="text-lg leading-relaxed">
            <p className="p-4">
              This is the beginning of the lore of VSTAR - it will evolve over
              time with contributions from every generation. Context:
            </p>
            <p className="p-4">
              Dee Ronny syn Łužycy was born to Dejan and Deniza syn Łužycy. He
              joined the Diplomatic Service (as a spy) in 1956. After a
              successful career in espionage and becoming the most hunted spy
              in the West, he was transferred to the State Security as a spy
              hunter in 1960.
            </p>
            <p className="p-4">
              In 1965, he was given supervision over the &quot;Kurjawje&quot; Project
              (Kurjawje = Mist, as in the mists of time).
            </p>
            <p className="p-4">
              In 1966, scientists of the Drježdźany Socialist Republic invented
              a device for time travel under the political supervision of
              Plukovník (Lt. Colonel) Dee Ronny syn Łužycy of the State Security
              Agency. After a successful first test, a second test was scheduled
              for the next day.
            </p>
            <p className="p-4">
              However, a young, ambitious scientist, eager to prove himself in
              front of the political commissar (Plukovník Dee), immediately
              started a second test run. Something went wrong. Due to fortunate
              circumstances, Dee survived... sadly, as the only person. But
              something was missing, split away. An evil that lurks in every
              person was gone. Where did it go?
            </p>
            <p className="p-4">
              60 years later, that evil is found... My evil self... VINFERNIA... they must be defeated.
            </p>
          </div>
        </div>
      </div>

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center mt-40 pb-10">
        <div className="flex flex-col justify-center items-center">
          <p className="p-4">VSTAR Manga pages</p>
          <p className="p-4">wip</p>
        </div>
      </div>

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="w-3/4 flex flex-col justify-center items-center text-center p-8">
          <p className="text-4xl font-bold p-4">VINFERNIA Lore</p>
          <div className="text-lg leading-relaxed">
            <p className="p-4">
              This is the beginning of the Lore of VINFERNIA - it will change
              over time and contribution of every gen. Context:
            </p>
            <p className="p-4">
              Being saved by the soldiers showed Dee and his family the
              nightmare that the bombed-out city became. That is the day the
              little boy swore to himself to do everything he can to bring peace
              and happiness to the world, so nobody will ever have to lose
              friends and family as he had to.
            </p>
            <p className="p-4">
              Due to the fascists forcing the allies&apos; hands and the allies
              bombing his city, he joined the Diplomatic Service (as a Spy) in
              1956. After a successful career in Espionage and being the no. 1
              hunted Spy in the West, he gets transferred to the State Security
              as a Spyhunter in 1960.
            </p>
            <p className="p-4">
              In the year 1965, he is given hand and supervision over the
              &quot;Kurjawje&quot; Project (Kurjawje = Mist, as in mists of time).
            </p>
            <p className="p-4">
              In 1966, scientists of the Drježdźany Socialist Republic invent a
              device for time travel under the political supervision of
              Plukovník (Lt. Colonel) Dee Ronny syn Łužycy of the State Security
              Agency. After a successful first test was performed, a second test
              was scheduled for the next day. However, a young, ambitious
              scientist, eager to prove himself in front of the political
              commissar (Plukovník Dee), immediately started a second test run.
              Something went wrong. Due to lucky circumstances, Dee survived...
              sadly, as the only person.
            </p>
            <p className="p-4">
              With the device in hand, he set out to found his own organization
              to conquer the world and fulfill his dream: Bringing happiness and
              peace all over the world.
            </p>
          </div>
        </div>
      </div>

            <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center pt-10 pb-10">
        <div className="flex flex-col justify-center items-center">
          <p className="p-4">VINFERNIA Manga pages</p>
          <p className="p-4">wip</p>
        </div>
      </div>

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="w-3/4 flex flex-col justify-center items-center text-center p-8">
          <p className="text-4xl font-bold p-4">VINFERNIA Lore - KAIROS Lore</p>
          <img src="VINFERNIA\VINFERNIA\Kairos_White.png" alt="Kairos logo" className="object-cover max-h-100 mb-6 mt-10" />
          <div className="text-lg leading-relaxed">
            <p className="p-4">
              wip
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
