import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h2 className={styles.hello}>
        hi.
      </h2>

      <h1 className={styles.whoami}>
        I am Alan Obregon.
      </h1>

      <p className={styles.description}>
        I am an software developer living in Argentina.
        At the moment I work at <a href="https://neoris.com/">NEORIS</a>
      </p>

      <p className={styles.description}>
        You can add me on <a href="https://www.linkedin.com/in/alanobregon49/">LinkedIn</a> if you want, 
        and you can see my projects on my <a href="https://github.com/alanobregon">GitHub page</a>. 
        I promise I will create more projects here! I have a lot of ideas, 
        but at the moment it is difficult to make them happen.
      </p>

      <p className={styles.description}>
        Outside of programming and taking care my eight cats and two dogs
        I enjoy video games, watch series and traveling. 
      </p>

      {/* <p className={styles.description}>
        I am an independent software developer currently based in Singapore. 
        I am the creator of the JavaScript framework Vue.js and the frontend build tool Vite. 
        Most of my work is open source and publicly available on GitHub. 
        If you happen to benefit from my OSS work, you can support me financially via GitHub Sponsors.
      </p>

      <p className={styles.description}>
        You can follow me on X / Twitter where I mostly post about Vue and frontend technologies. 
        If you happen to speak Chinese, my Chinese name is 尤雨溪 (yóu yǔ xī) and 
        I have a Chinese-only X / Twitter alt for non-tech-focused musings.
      </p>

      <p className={styles.description}>
        Outside of programming and helping my wife take care of our two kids, 
        I enjoy video games (soulsborne & roguelikes are my favorite), 
        karaoke, Japanese food, UFC/NBA/F1, and collecting watches.
      </p> */}
    </div>
  );
}
