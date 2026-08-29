export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git',
    'REST APIs', 'GraphQL', 'AWS', 'Docker'
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Bio</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m Rayhan Islam, a passionate full-stack developer with over 5 years of experience
              building web applications. I specialize in the MERN stack and have a strong focus on
              user experience and performance.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I love solving complex problems and turning ideas into reality through code.
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open source, or writing technical articles.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                B.Sc. in Computer Science & Engineering<br />
                University of Dhaka, 2018-2022
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Senior Full-Stack Developer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">TechCorp Inc. | 2023 - Present</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Leading development of customer-facing applications, mentoring junior developers,
                  and implementing best practices.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Full-Stack Developer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">WebSolutions Ltd. | 2021 - 2023</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Built and maintained multiple client projects using React, Node.js, and PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
