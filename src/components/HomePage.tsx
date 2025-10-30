import { FileText, Wrench, Image, Mail, Github, Linkedin, Terminal } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const sections = [
    { id: 'notes', title: 'notes/', icon: FileText },
    { id: 'gadgets', title: 'gadgets/', icon: Wrench },
    { id: 'photos', title: 'photos/', icon: Image },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Welcome Letter */}
        <section className="mb-16 border border-gray-800 bg-gray-950 p-8">
          <div className="flex items-center gap-2 mb-6 text-gray-500">
            <Terminal size={16} />
            <span className="text-sm">~/welcome.txt</span>
          </div>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>Hello,</p>
            <p>
              Welcome to my corner of the internet. This is where I document my engineering 
              journey—notes on things I've learned, tools that make my workflow better, 
              and occasional photographs.
            </p>
            <p>
              Everything here is a work in progress, much like the projects I build. 
              Feel free to explore, and if something resonates with you, don't hesitate to reach out.
            </p>
            <p className="text-gray-500">— Engineer</p>
          </div>
        </section>

        {/* Contact */}
        <section className="border border-gray-800 bg-gray-950 p-6">
          <div className="flex items-center gap-2 mb-4 text-gray-500">
            <span className="text-sm">~/contact</span>
          </div>
          <div className="flex gap-4 text-sm">
            <a
              href="mailto:betmp93@outlook.com"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Mail size={14} />
              <span>email</span>
            </a>
            <a
              href="https://github.com/WILL12124"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Github size={14} />
              <span>github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/william-li-ab0724388/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Linkedin size={14} />
              <span>linkedin</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
