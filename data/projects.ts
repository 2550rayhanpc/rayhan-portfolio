export interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with cart, payment, and admin dashboard.',
    image: '/images/project1.jpg',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/rayhanislam/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and drag-and-drop.',
    image: '/images/project2.jpg',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/rayhanislam/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
  },
  {
    id: 3,
    title: 'AI Chatbot',
    description: 'AI-powered chatbot using OpenAI API with custom knowledge base.',
    image: '/images/project3.jpg',
    tech: ['Next.js', 'OpenAI', 'Pinecone'],
    github: 'https://github.com/rayhanislam/ai-chatbot',
    demo: 'https://ai-chatbot-demo.vercel.app',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location search and forecasts.',
    image: '/images/project4.jpg',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/rayhanislam/weather-app',
    demo: 'https://weather-demo.vercel.app',
  },
]
