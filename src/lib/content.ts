export const content = {
  hu: {
    hero: {
      label: "Üdvözöllek a birodalmamban",
      titlePrefix: "Kódtól a szerverekig:",
      titleHighlight: "Mérnökinformatikus",
      titleSuffix: "vagyok.",
      description: "Szoftverfejlesztő és Linux-rajongó. Szeretem a komplex problémákat elegáns kóddal és stabil infrastruktúrával megoldani.",
      btnProjects: "Projektek megtekintése",
      btnContact: "Elérhetőség",
      tooltip: 'whoami: ["student", "dev", "sysadmin"]'
    },
    techStack: {
      title: "Technológiai eszköztár",
      coreLanguages: "Core Languages",
      environment: {
        prompt: "root@server:~",
        command: "uname -a",
        output: "Linux vivo 6.19.0-generic #37 SMP PREEMPT_DYNAMIC GNU/Linux"
      },
      tools: "Tools & IDEs"
    },
    services: {
      title: "Hostolt szolgáltatások",
      intro: "A szolgáltatásaimat évek óta egy otthoni szervergépről, illetve egy bérelt VPS-ről host-olom, Linux alapokon, hogy stabilan működjenek a szolgáltatások!",
      items: [
        { name: "Keresőmotor", status: "operational" },
        { name: "Blog", status: "operational" },
        { name: "Pastebin", status: "maintenance" },
        { name: "Online Rádió", status: "legacy" },
      ],
      statusLabels: {
        operational: "Operational",
        maintenance: "Maintenance",
        legacy: "Legacy"
      }
    },
    projects: {
      title: "Kiemelt projektek",
      recout: {
        title: "RecOut!",
        subtitle: "Edzéskövető alkalmazás",
        description: "Egy teljes körű cross-platform mobilalkalmazás, amely segít a felhasználóknak nyomon követni az edzéseiket. Valós idejű adatbázis szinkronizáció és felhasználókezelés.",
        linkText: "Megnézem a projektet",
        image: "/images/recout-mockup.png",
        imageAlt: "RecOut! App Mockup",
        tags: ["Flutter", "Firebase", "FullStack"]
      },
      other: [
        {
          title: "Tweeter Evaulater",
          description: "Twitter kiértékelő alkalmazás, ami egy szöveghalmazon képes keresni szavak, vagy természetes nyelvi kifejezések alapján, majd az eredményeket érzelmek szerint osztályozni képes."
        },
        {
          title: "Wthrly",
          description: "Egyszerű, de stílusos időjárás alkalmazás, amely a felhasználó helyzete alapján jeleníti meg a legfrissebb időjárási adatokat."
        }
      ]
    },
    footer: {
      titlePrefix: "Építsünk valami",
      titleHighlight: "maradandót!",
      text: "Nyitott vagyok új lehetőségekre, legyen szó projektről, együttműködésről vagy akár egy jó beszélgetésről!",
      impressum: "Built with: React | Framer Motion | Hosted on: GitHub Pages"
    }
  },
  en: {
    hero: {
      label: "Welcome to my realm",
      titlePrefix: "From code to the servers:",
      titleHighlight: "Computer Science Engineer",
      titleSuffix: ".",
      description: "Software developer and Linux enthusiast. I love solving complex problems with elegant code and stable infrastructure.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      tooltip: 'whoami: ["student", "dev", "sysadmin"]'
    },
    techStack: {
      title: "Tech Stack",
      coreLanguages: "Core Languages",
      environment: {
        prompt: "root@server:~",
        command: "uname -a",
        output: "Linux vivo 6.19.0-generic #37 SMP PREEMPT_DYNAMIC GNU/Linux"
      },
      tools: "Tools & IDEs"
    },
    services: {
      title: "Hosted Services",
      intro: "I have been hosting my services for years from a home server and a rented VPS, based on Linux, to ensure stable operation!",
      items: [
        { name: "Search Engine", status: "operational" },
        { name: "Blog", status: "operational" },
        { name: "Pastebin", status: "maintenance" },
        { name: "Online Radio", status: "legacy" }
      ],
      statusLabels: {
        operational: "Operational",
        maintenance: "Maintenance",
        legacy: "Legacy"
      }
    },
    projects: {
      title: "Featured Projects",
      recout: {
        title: "RecOut!",
        subtitle: "Workout Tracker App",
        description: "A comprehensive cross-platform mobile application that helps users track their workouts. Real-time database synchronization and user management.",
        linkText: "View Project",
        image: "/images/recout-mockup.png",
        imageAlt: "RecOut! App Mockup",
        tags: ["Flutter", "Firebase", "FullStack"]
      },
      other: [
        {
          title: "Tweeter Evaulater",
          description: "A Twitter evaluation app that can search a corpus of text based on words or natural language expressions, and classify the results by sentiment."
        },
        {
          title: "Wthrly",
          description: "A simple yet stylish weather app that displays the latest weather data based on the user's location."
        }
      ]
    },
    footer: {
      titlePrefix: "Let's build something",
      titleHighlight: "lasting!",
      text: "I am open to new opportunities, whether it's a project, collaboration, or just a good conversation about technology.",
      impressum: "Built with: React | Framer Motion | Hosted on: GitHub Pages"
    }
  }
};

export type Content = typeof content.hu;
