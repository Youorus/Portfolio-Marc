"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Skills = ({ title, cards }) => {
  return (
    <div id="skills" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              link={value.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ title, repos }) => {
  return (
    <div id="projects" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="card py-3 px-3 mx-sm-4 my-4 card-work"
              style={{ width: "20rem" }}
            >
              <h4 className="text-primary">{repo.name}</h4>
              <p className="text-dark">
                {repo.description || "No description available."}
              </p>
              <div className="text-end">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2"
                >
                  View Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({ title, description, icons }) => {
  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work"
      style={{ width: "20rem" }}
    >
      <h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>
      <div className="text-end">
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="icon-style mx-1"
                  icon={value.icon}
                  size="2x"
                />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};
