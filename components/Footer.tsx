import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Rayhan Islam. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/rayhanislam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rayhanislam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/rayhanislam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
