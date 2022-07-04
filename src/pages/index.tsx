import type { NextPage } from "next";
import Section from "../components/section";
import Header from "../components/header/header";
import { motion } from "framer-motion";
import Gradient from "../components/gradient";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import Postgres from "../../public/images/postgresql-logo.png";
import NextJS from "../../public/images/nextjs-logo.png";
import Kotlin from "../../public/images/kotlin-logo.png";
import Typescript from "../../public/images/typescript-logo.png";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-7xl sm:text-9xl my-10 flex flex-col font-bold text-center">
            <p>echo</p>
            <p>
              <Gradient from="#a6cfd9" to="#fed879" dir="left-to-right">
                Webkom
              </Gradient>
            </p>
          </div>
          <div className="my-10">
            <p className="text-center text-xl text-[#ccc]">
              Bli med på å drifte og utvikle echo sine webløsninger, og få en
              smakebit på arbeidslivet.
            </p>
          </div>
          <div className="my-5 mx-auto w-fit">
            <Link href="/soknad" passHref>
              <a className="bg-white text-black rounded px-5 py-2 font-fira transition-all border border-transparent hover:bg-transparent hover:text-white hover:border-white">
                <span>Søk idag</span>
              </a>
            </Link>
          </div>
        </motion.div>
      </Section>
      <Section>
        <div className="p-5 max-w-4xl m-auto">
          <div className="text-6xl sm:text-8xl font-bold mb-8">
            <Gradient from="#5ac1e9" to="#257bb2" dir="left-to-right">
              Hvem er vi?
            </Gradient>
          </div>
          <div className="max-w-xl flex flex-col gap-8 text-xl">
            <p>
              Webkom er en undergruppe som drifter og videreutvikler echo sine
              webløsninger, blant annet denne nettsiden.
            </p>
            <p>
              Ved hjelp av prosjektarbeid og en arbeidsmåte som gjenspeiler
              arbeidslivet, gir vi våre medlemmer en smakebit på hvordan det er
              å være utvikler.
            </p>
            <p>
              Noe av det du kan være med å utvikle som medlem i Webkom, er blant
              annet publiseringssytemet til nettsiden, påmeldingsløsninger til
              bedriftspresentasjoner og arrangementer, eller design av ulike
              interne webapplikasjoner.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="p-5 max-w-4xl m-auto z-50">
          <div className="float-right text-right">
            <div className="text-6xl sm:text-8xl font-bold mb-8">
              <Gradient from="#f26d70" to="#f13d3f" dir="left-to-right">
                Teknologier
              </Gradient>
            </div>
            <p className="max-w-xl text-xl">
              I webkom prøver vi så godt som mulig å reflektere hvordan
              arbeidslivet ditt kan en dag bli. Dette gjør vi ved å blant annet
              bruke teknologier som er relavante. Dette gjør at du får en
              forsmak på hva du en dag kommer til å jobbe med.
            </p>
          </div>
        </div>

        <Parallax speed={10}>
          <div className="absolute -z-10 left-10 top-10">
            <div className="w-20 h-20 overflow-hidden">
              <Image src={Postgres} alt="PostgreSQL" />
            </div>
          </div>
        </Parallax>

        <Parallax speed={-10}>
          <div className="absolute -z-10 left-1/3 top-1/2">
            <div className="w-20 h-20 overflow-hidden">
              <Image src={NextJS} alt="PostgreSQL" />
            </div>
          </div>
        </Parallax>

        <Parallax speed={30}>
          <div className="absolute -z-10 right-1/3 top-1/4">
            <div className="w-20 h-20 overflow-hidden">
              <Image src={Kotlin} alt="PostgreSQL" />
            </div>
          </div>
        </Parallax>

        <Parallax speed={25}>
          <div className="absolute -z-10 left-2/3 top-3/4">
            <div className="w-20 h-20 overflow-hidden">
              <Image src={Typescript} alt="PostgreSQL" />
            </div>
          </div>
        </Parallax>
      </Section>
    </>
  );
};

export default Home;
