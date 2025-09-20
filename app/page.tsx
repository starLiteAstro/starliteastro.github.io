

export default function Page() {
  return (
    <>
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hao-Yen Tang
      </h1>
      <p className="mb-5">
        {`I'm a student at the University of Warwick studying Computer Science.
        I'm primarily interested in software engineering, web development and AI.
        In my free time, I like to contribute to projects, read books, and explore
        new technologies.`}
      </p>
    </section>
    <section>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
      <ul className="list-disc list-inside mb-5">
        <li>Languages: JavaScript, TypeScript, Python, Java, C/C++, SQL</li>
        <li>Frameworks: React, Next.js, Flask</li>
        <li>Tools: Git, Docker, Vercel</li>
      </ul>
    </section>
    </>
  )
}
