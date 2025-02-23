import React, { Fragment } from "react";
import { Nav } from "../components/Navbar";
import { Intro, About } from "../components/Intro";
import { Skills, Projects } from "../components/Work";
import { Footer, Contact } from "../components/Footer";
import { about, contact, intro, navigation, SEO, work } from "../config/config";
import { Header } from "../components/Header";

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/Youorus/repos");
  const repos = await res.json();

  return {
    props: {
      repos, //  Ajoute les projets comme props
    },
    revalidate: 86400, // Revalider toutes les 24 heures
  };
}

export default function Home({ repos }) {
  //  Ajoute { repos } comme argument ici
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <Intro
        title={intro.title}
        description={intro.description}
        image="/profile.png"
        buttons={intro.buttons}
      />
      <About title={about.title} description={about.description} />
      <Skills title={work.title} cards={work.cards} />
      <Projects repos={repos} /> {/*  Passer repos au composant Projects */}
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
