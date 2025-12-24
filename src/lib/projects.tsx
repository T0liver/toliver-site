import { ReactNode } from "react";

export interface ProjectContent {
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: ReactNode;
}

export interface Project {
  slug: string;
  coverImage?: string;
  hu: ProjectContent;
  en: ProjectContent;
}

export const projects: Record<string, Project> = {
  "lorem": {
    slug: "lorem",
    coverImage: "/images/pexels-stasknop-1261578.jpg",
    hu: {
      title: "Lorem Ipsum Projekt",
      date: "2023. Nov. 15.",
      readTime: "5 perc olvasás",
      category: "Mobilalkalmazás",
      tags: ["React Native", "Firebase", "TypeScript", "Redux"],
      content: (
        <>
          <p className="text-text-main font-inter leading-relaxed mb-6">
            Ez a magyar nyelvű tartalom helye. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2 className="text-white font-inter font-bold text-2xl mt-12 mb-4">
            A Kihívás
          </h2>
          
          <p className="text-text-main font-inter leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <blockquote className="border-l-4 border-highlight bg-white/5 p-4 italic my-8 text-gray-300">
            "Az innováció különbözteti meg a vezetőt a követőtől." - Steve Jobs
          </blockquote>

          <h3 className="text-white font-inter font-bold text-xl mt-12 mb-4">
            Technikai Megvalósítás
          </h3>

          <ul className="list-disc pl-6 marker:text-highlight mb-6 space-y-2 text-text-main">
              <li>Valós idejű adatszinkronizáció Firebase-szel</li>
              <li>Offline támogatás edzőtermi pincékhez</li>
              <li>Komplex állapotkezelés Redux Toolkit-tel</li>
          </ul>

          <div className="bg-[#0f172a] font-mono border border-white/10 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre>
              <code className="text-sm text-gray-300">
                {`const calculateProgress = (workouts: Workout[]) => {
                  return workouts.reduce((acc, workout) => {
                    return acc + workout.duration;
                  }, 0);
                }`}
              </code>
            </pre>
          </div>
        </>
      )
    },
    en: {
      title: "Lorem Ipsum Project",
      date: "Nov 15, 2023",
      readTime: "5 min read",
      category: "Mobile App",
      tags: ["React Native", "Firebase", "TypeScript", "Redux"],
      content: (
        <>
          <p className="text-text-main font-inter leading-relaxed mb-6">
            This is the English content placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2 className="text-white font-inter font-bold text-2xl mt-12 mb-4">
            The Challenge
          </h2>
          
          <p className="text-text-main font-inter leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <blockquote className="border-l-4 border-highlight bg-white/5 p-4 italic my-8 text-gray-300">
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </blockquote>

          <h3 className="text-white font-inter font-bold text-xl mt-12 mb-4">
            Technical Implementation
          </h3>

          <ul className="list-disc pl-6 marker:text-highlight mb-6 space-y-2 text-text-main">
              <li>Real-time data synchronization with Firebase</li>
              <li>Offline support for gym basements</li>
              <li>Complex state management with Redux Toolkit</li>
          </ul>

          <div className="bg-[#0f172a] font-mono border border-white/10 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre>
              <code className="text-sm text-gray-300">
  {`const calculateProgress = (workouts: Workout[]) => {
    return workouts.reduce((acc, workout) => {
      return acc + workout.duration;
    }, 0);
  }`}
              </code>
            </pre>
          </div>
        </>
      )
    }
  },
  "recout": {
    slug: "recout",
    coverImage: "/images/recout-cover.png",
    hu: {
      title: "RecOut!",
      date: "2025. jún. 15.",
      readTime: "1 perc olvasás",
      category: "Mobilalkalmazás",
      tags: ["Flutter", "Firebase", "FullStack"],
      content: (
        <>
          <p className="text-text-main font-inter leading-relaxed mb-6">
            Egy egyszerű edzéskövető alkalmazás, Flutter cross-platform megoldással, és Firebase backenddel.
          </p>
          
          <p className="text-text-main font-inter leading-relaxed mb-6">
            Rögzítsd egyszerűen az edzéseket, amiket csináltál, mindenféle nehézség nélkül, egy egyszerű kattintással!
          </p>

          <h3 className="text-white font-inter font-bold text-xl mt-12 mb-4">
            Egy edzésnek meg lehet adni:
          </h3>

          <ul className="list-disc pl-6 marker:text-highlight mb-6 space-y-2 text-text-main">
              <li>sportágat</li>
              <li>dátumot</li>
              <li>időtartamot</li>
          </ul>

          <p className="text-text-main font-inter leading-relaxed mb-6">
            Edzések kilistázása, hogy megtekinthessük a korábbi tevékenységeket.
            Edzések szerkesztése, mert bárkivel megesik, hogy valamit félrenyom.
          </p>

          <p className="text-text-main font-inter leading-relaxed mb-6">
            A teljes fejlesztési folyamat során figyelmet fordítottam a felhasználói élményre és a sima működésre, hogy az alkalmazás könnyen használható legyen mindenki számára.
          </p>

          <p className="text-text-main font-inter leading-relaxed mb-6">
            Az alkalmazás Flutter frameworkkel készült, ami lehetővé teszi a cross-platform fejlesztést, így az alkalmazás Android, web, iOS eszközökön futtatható.
          </p>

          <p className="text-text-main font-inter leading-relaxed mb-6">
            A backend Firebase szolgáltatást használja, amely biztosítja az adatok biztonságos tárolását és szinkronizálását függetlenül attó, hogy a felhasználó milyen eszközön jelentkezik be legközelebb.
          </p>

          <p className="text-text-main font-inter leading-relaxed mb-6">
            Mindemellett, mivel az alkalmazás kódja GitHub-on elérhető, így a GitHub Actions adta lehetőségekkel élve automatizáltan történik a build és deploy folyamat is.
          </p>

          <p className="text-text-main font-inter leading-relaxed mb-6">
            Összességében ez az alkalmazás nekem egy többnyelvű projektem volt, amely során mélyebb ismereteket szereztem a Flutter és Firebase használatában, valamint a cross-platform fejlesztésben, és a GitHub Actions konfigurálásában, és mondhatni, hogy a végeredmény is jól sikerült.
          </p>

          <blockquote className="border-l-4 border-highlight bg-white/5 p-4 italic my-8 text-gray-300">
            A teljes foráskód elérhető a GitHub-on: <a href="https://github.com/T0liver/recout" target="blank" rel="noopener noreferrer" className="text-highlight underline">https://github.com/T0liver/recout</a>
          </blockquote>

        </>
      )
    },
    en: {
      title: "RecOut!",
      date: " June 15, 2025",
      readTime: "1 min read",
      category: "Mobile App",
      tags: ["Flutter", "Firebase", "FullStack"],
      content: (
        <>
          <p className="text-text-main font-inter leading-relaxed mb-6">
            A simple workout tracking app built with Flutter for cross-platform support and a Firebase backend.
          </p>
          
            <p className="text-text-main font-inter leading-relaxed mb-6">
            Record your workouts easily with a single tap, no hassle.
            </p>

            <h3 className="text-white font-inter font-bold text-xl mt-12 mb-4">
            A workout can include:
            </h3>

            <ul className="list-disc pl-6 marker:text-highlight mb-6 space-y-2 text-text-main">
              <li>sport / activity</li>
              <li>date</li>
              <li>duration</li>
            </ul>

            <p className="text-text-main font-inter leading-relaxed mb-6">
            View a list of workouts to see past activities. Edit workouts when mistakes happen.
            </p>

            <p className="text-text-main font-inter leading-relaxed mb-6">
            Throughout development I focused on user experience and smooth operation so the app is easy to use for everyone.
            </p>

            <p className="text-text-main font-inter leading-relaxed mb-6">
            The app is built with the Flutter framework, enabling cross-platform development so it runs on Android, web, and iOS devices.
            </p>

            <p className="text-text-main font-inter leading-relaxed mb-6">
            The backend uses Firebase, providing secure storage and synchronization of data regardless of which device the user signs in on next.
            </p>

            <p className="text-text-main font-inter leading-relaxed mb-6">
            Additionally, since the application's source code is available on GitHub, the build and deploy process is automated using GitHub Actions.
            </p>

            <p className="text-text-main font-inter leading-relaxed mb-6">
            Overall, this was a multilingual project where I deepened my knowledge of Flutter and Firebase, cross-platform development, and configuring GitHub Actions — and the end result turned out well.
            </p>

            <blockquote className="border-l-4 border-highlight bg-white/5 p-4 italic my-8 text-gray-300">
            The full source code is available on GitHub: <a href="https://github.com/T0liver/recout" target="blank" rel="noopener noreferrer" className="text-highlight underline">https://github.com/T0liver/recout</a>
            </blockquote>

        </>
      )
    }
  }
};
