export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-black">
  
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
  
          <div className="grid gap-12 md:grid-cols-3">
  
            <div>
  
              <a href="#home">
  
                <span className="block text-xl font-bold tracking-[0.18em]">
                  SERANTRA
                </span>
  
                <span className="block text-[9px] tracking-[0.45em] text-blue-400">
                  SOLUTION
                </span>
  
              </a>
  
              <p className="mt-6 max-w-xs text-sm leading-7 text-zinc-600">
  
                Modern software development, website
                development and UI/UX solutions for
                businesses.
  
              </p>
  
            </div>
  
            <div>
  
              <p className="text-sm font-medium">
                Services
              </p>
  
              <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-600">
  
                <a
                  href="#services"
                  className="hover:text-white"
                >
                  Website Development
                </a>
  
                <a
                  href="#services"
                  className="hover:text-white"
                >
                  Web Applications
                </a>
  
                <a
                  href="#services"
                  className="hover:text-white"
                >
                  Software Development
                </a>
  
                <a
                  href="#services"
                  className="hover:text-white"
                >
                  UI/UX Design
                </a>
  
              </div>
  
            </div>
  
            <div>
  
              <p className="text-sm font-medium">
                Contact
              </p>
  
              <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-600">
  
                <a
                  href="mailto:serantrasolution@gmail.com"
                  className="hover:text-white"
                >
                  serantrasolution@gmail.com
                </a>
  
                <a
                  href="tel:0771472539"
                  className="hover:text-white"
                >
                  077 147 2539
                </a>
  
              </div>
  
            </div>
  
          </div>
  
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-700 sm:flex-row">
  
            <p>
              © {new Date().getFullYear()} Serantra Solution.
              All rights reserved.
            </p>
  
            <p>
              Software Development · Web Development · UI/UX Design
            </p>
  
          </div>
  
        </div>
  
      </footer>
    );
  }