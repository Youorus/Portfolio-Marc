import React, { Fragment } from "react";
import { Nav } from "../components/Navbar";
import { Intro, About } from "../components/Intro";
import { Skills, Projects } from "../components/Work";
import { Footer, Contact } from "../components/Footer";
import { about, contact, intro, navigation, SEO, work } from "../config/config";
import { Header } from "../components/Header";


function pick(repo) {
  // ⚠️ garder la liste courte pour rester << 128 KB
  const {
    id,
    name,
    full_name,
    html_url,
    description,
    language,
    stargazers_count,
    forks_count,
    archived,
    disabled,
    homepage,
    topics,           // optionnel: commente si ça grossit trop
    updated_at,
    pushed_at,
  } = repo;
  return {
    id,
    name,
    full_name,
    html_url,
    description,
    language,
    stargazers_count,
    forks_count,
    archived,
    disabled,
    homepage,
    topics,
    updated_at,
    pushed_at,
  };
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://api.github.com/users/Youorus/repos", {
      headers: {
        // évite du bruit; GitHub renvoie déjà JSON compact
        Accept: "application/vnd.github+json",
      },
      // timeout natif non dispo ici; on garde simple
    });

    if (!res.ok) {
      // fallback léger si rate limit ou erreur
      return { props: { repos: [] }, revalidate: 3600 };
    }

    const repos = await res.json();

    // Trier par popularité/date, limiter, minifier
    const lightRepos = repos
      .filter(r => !r.fork) // souvent tu ne veux pas les forks
      .sort((a, b) => {
        // tri multi-critères: stars desc puis pushed_at desc
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      })
      .slice(0, 8) // ← limite stricte pour passer sous 128 KB
      .map(pick);

    return {
      props: { repos: lightRepos },
      revalidate: 86400, // 24h
    };
  } catch {
    return { props: { repos: [] }, revalidate: 3600 };
  }
}

export default function Home({ repos }) {
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
      {/* Projects attend toujours `repos`, mais allégé */}
      <Projects repos={repos} />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}