export default function Home() {
  return (
    <div className="p-8 bg-purple-900 text-purple-200 flex flex-col justify-evenly min-h-dvh md:gap-6 xl:pl-20 xl:pr-64 2xl:pl-40 2xl:pr-96">
      <h2 className="text-7xl md:text-8xl xl:text-9xl font-bold">
        hello.
      </h2>

      <h1 className="text-4xl md:text-6xl xl:text-7xl">
        I am <span className="underline">Alan Obregon</span>.
      </h1>

      <p className="text-2xl md:text-4xl xl:text-5xl">
        I am an software developer living in Argentina.
        At the moment I work at <a className="font-bold underline hover:bg-purple-700" target="_blank" href="https://www.hiberus.com/">hiberus</a>
      </p>

      <p className="text-2xl md:text-4xl xl:text-5xl">
        You can add me on <a className="font-bold underline hover:bg-purple-700" target="_blank" href="https://www.linkedin.com/in/alanobregon49/">LinkedIn</a> if you want, 
        and you can see my projects on my <a className="font-bold underline hover:bg-purple-700" target="_blank" href="https://github.com/alanobregon">GitHub page</a>. 
        I promise I will create more projects here! I have a lot of ideas, 
        but at the moment it is difficult to make them happen.
      </p>

      <p className="text-2xl md:text-4xl xl:text-5xl">
        Outside of programming and taking care my eight cats and two dogs
        I enjoy video games, watch series and traveling. 
      </p>
    </div>
  );
}
