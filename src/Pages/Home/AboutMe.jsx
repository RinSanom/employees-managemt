import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function AboutMe() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <main className="container mx-auto px-4 py-12 md:py-24">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://avatars.githubusercontent.com/u/165877435?s=400&u=1b06a9a6257c0e3b2e2def2a125e7f0501c4c860&v=4"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Rin Sanom (A6){" "}
              </h1>
              <h2 className="text-xl md:text-2xl mb-4">
                Jonior Back-End Developer
              </h2>

              <p className=" max-w-2xl mb-6">
                Hello! 👋 I'm <span className="font-semibold">Sanom</span>, a
                third-year Computer Science student at the Royal University of
                Phnom Penh. I'm passionate about full-stack development, I love
                building intuitive interfaces, solving logic problems, and
                improving my software engineering skills every day.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="https://github.com/RinSanom"
                  className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://rin-sanom.vercel.app/"
                  className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors">
                  <TbWorldWww size={16} />
                  <span>Portolio</span>
                </a>
              </div>
            </div>
          </div>
          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "JavaScript",
                    "HTML/CSS",
                    "Redux",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-200  rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Spring Boot",
                    "Node.js",
                    "PostgreSQL",
                    "Python",
                    "Laravel",
                    "Docker",
                    "Linux Server ",
                    "Linux Server ",
                    "Deployment",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-200  rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">
              About This Project
            </h2>

            <p className="text-gray-600 mb-4">
              This Employee Management System is a full-stack web application I
              developed to practice and demonstrate my knowledge of web
              development, backend services, and database integration.
            </p>

            <p className="text-gray-600 mb-4">
              The main goal of this system is to allow users to{" "}
              <span className="font-medium text-blue-600">
                view, search, add, edit, and delete
              </span>{" "}
              employee records in an intuitive and responsive UI.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Displays a paginated and searchable table of employees</li>
              <li>Adds new employees with validation</li>
              <li>Edits existing employee information</li>
              <li>Deletes employees with confirmation</li>
              <li>
                Live updates without page reload using Redux Toolkit Query
              </li>
              <li>Toast notifications for all actions (add, edit, delete)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Tech Stack
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>
                <span className="font-medium">Frontend:</span> React, Tailwind
                CSS, React Router
              </li>
              <li>
                <span className="font-medium">State Management:</span> Redux
                Toolkit & Redux Toolkit Query
              </li>
              <li>
                <span className="font-medium">Backend:</span> Laravel (RESTful
                API)
              </li>
              <li>
                <span className="font-medium">Database:</span> PostgreSQL
              </li>
              <li>
                <span className="font-medium">Notifications:</span>{" "}
                react-toastify
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Architecture Overview
            </h3>
            <p className="text-gray-600 mb-4">
              The frontend and backend communicate through RESTful APIs. The
              employee data is fetched, cached, and managed using Redux Toolkit
              Query, enabling real-time data interaction without manual refresh.
              All data is stored in a PostgreSQL database, and the backend is
              built using Laravel Framowork of PHP, exposing endpoints for CRUD
              operations.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Why I Built This
            </h3>
            <p className="text-gray-600 mb-4">
              I created this system to strengthen my understanding of full-stack
              development and to apply what I've learned in a meaningful
              project. This app mimics the kind of internal tools used in
              real-world companies to manage employees efficiently. It also
              shows how to build scalable, modular applications using modern web
              technologies.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              UI
            </h3>
            <p className="text-gray-600 mb-4">
              Sorry teacher for the simple UI, I am not a designer. I am a
              developer. i'm just focus on the functionality of the project. I
              will improve my UI skills in the future. I hope you understand.
            </p>
          </section>
        </main>

        {/* <footer className="bg-gray-100 dark:bg-gray-800 py-6 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            </div>
            </footer> */}
      </div>
    </>
  );
}
