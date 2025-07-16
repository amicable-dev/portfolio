import { 
  Mail, Github, Linkedin, Send, 
  Code, Database, Globe, Server, 
  Smartphone, Layers, Zap, Cpu, FileCode 
} from 'lucide-react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#1A120B] text-[#3C2A21] flex items-center justify-center px-4 sm:px-6 pt-20 pb-8 lg:py-30"
    >
      {/* Mobile Layout - Stack vertically */}
      <div className="block lg:hidden w-full max-w-lg mx-auto space-y-6">
        
        {/* 1 - Who am I */}
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
          <span className="text-[#D5CEA3] font-bold text-2xl sm:text-3xl">Who am I?</span>
          <p className="text-base sm:text-lg text-[#E5E5CB] mt-3 break-words leading-relaxed">
            Hey! I'm Raghav Singh Khatri — a Software Developer and current student based in India. I'm passionate about building thoughtful, efficient, and impactful software solutions. I'm always eager to take on new challenges and collaborate on exciting projects. If you've got something in mind, feel free to reach out!
          </p>
        </div>

        {/* 2 - Work */}
        <div className="bg-[#D5CEA3] rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:scale-[1.02] transition-all duration-300">
          <p className="text-[#1A120B] font-bold text-xl sm:text-2xl text-center">
            College Student & Software Developer
          </p>
        </div>

        {/* 3 - GitHub Card - Updated with video and full clickability */}
        <a 
          href="https://github.com/amicable-dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 text-center transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 border-4 border-[#D5CEA3] mx-auto overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controls={false}
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-full object-cover"
            >
              <source src="/src/assets/bitmoji.mp4" type="video/mp4" />
              {/* Fallback to GitHub icon if video fails */}
              <Github className="w-12 h-12 sm:w-16 sm:h-16 text-[#D5CEA3]" />
            </video>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-[#D5CEA3]">
            @amicable-dev
          </span>
        </a>

        {/* 4 - Technologies */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#D5CEA3] mb-4 text-center">Technologies</h2>
          
          {/* 3x3 Grid of Tech Icons */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {/* Row 1 */}
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">C/C++</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <FileCode className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Rust</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">React</span>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">MongoDB</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Server className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Node.js</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Express</span>
            </div>
            
            {/* Row 3 */}
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Flutter</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Next.js</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Python</span>
            </div>
          </div>
        </div>

        {/* 5 - Quote */}
        <div className="bg-[#D5CEA3] rounded-2xl p-6 flex items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-all duration-300">
          <p className="text-[#1A120B] font-bold text-xl sm:text-2xl text-center leading-relaxed">
            "First, solve the problem. Then, write the code."
          </p>
        </div>

        {/* 6 - Open to Work */}
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
          {/* Tech Vector Background - Simplified for mobile */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#555544" strokeWidth="1.5" fill="none">
                {/* Simplified corner patterns */}
                <path d="M0 0 L40 0 L40 30 L60 30" />
                <path d="M300 0 L260 0 L260 30 L240 30" />
                <circle cx="40" cy="30" r="3" fill="#555544" />
                <circle cx="260" cy="30" r="3" fill="#555544" />
                
                <text x="10" y="15" fontSize="10" fill="#555544" opacity="0.6">1010</text>
                <text x="250" y="15" fontSize="10" fill="#555544" opacity="0.6">1101</text>
              </g>
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D5CEA3] mb-4">Academic & Work Status</h2>
            <p className="text-lg sm:text-xl text-[#D5CEA3] font-semibold mb-3">
              🎓 Final Year Student at Bahra University
            </p>
            <p className="text-base sm:text-lg text-[#E5E5CB] mb-3 leading-relaxed">
              👨‍💻 Open to freelance work, internships, and meaningful collaborations in the tech space.
            </p>
            <p className="text-lg sm:text-xl text-[#E5E5CB]">
              Let's connect and create something impactful together!
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original Grid */}
      <div className="hidden lg:grid grid-cols-6 grid-rows-11 gap-5 w-full max-h-[850px] max-w-6xl mx-auto">
        {/* 1 - Who am I */}
        <div className="col-span-4 row-span-3 bg-white/10 p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
          <span className="text-[#D5CEA3] font-bold text-3xl">Who am I?</span>
          <p className="text-lg text-[#E5E5CB] mt-2 break-words">
            Hey! I'm Raghav Singh Khatri — a Software Developer and current student based in India. I'm passionate about building thoughtful, efficient, and impactful software solutions. I'm always eager to take on new challenges and collaborate on exciting projects. If you've got something in mind, feel free to reach out!
          </p>
        </div>

        {/* 2 - GitHub Card - Updated to make whole div clickable */}
        <a 
          href="https://github.com/amicable-dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="col-span-2 row-span-4 col-start-3 row-start-4 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
        >
          <div className="w-28 h-28 rounded-full mb-4 border-4 border-[#D5CEA3] overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controls={false}
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-full object-cover"
            >
              <source src="/src/assets/bitmoji.mp4" type="video/mp4" />
              {/* Fallback to GitHub icon if video fails */}
              <Github className="w-16 h-16 text-[#D5CEA3]" />
            </video>
          </div>
          <span className="text-3xl font-bold text-[#D5CEA3]">
            @amicable-dev
          </span>
        </a>

        {/* 3 - Picture */}
        <div className="col-span-2 row-span-5 col-start-5 row-start-1 bg-white/10 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 h-full w-full">
          <img
            src="/src/assets/beans.png"
            alt="coffee beans"
            className="h-full w-full object-cover object-center block"
          />
        </div>

        {/* 4 - Work */}
        <div className="col-span-2 row-span-2 col-start-1 row-start-4 bg-[#D5CEA3] rounded-2xl items-center justify-center p-4 flex flex-col gap-2 shadow-lg hover:scale-[1.02] transition-all duration-300">
          <p className="text-[#1A120B] font-bold text-2xl text-center lg:text-3xl">
            College Student & Software Developer
          </p>
        </div>

        {/* 5 - Technologies */}
        <div className="col-span-2 row-span-6 row-start-6 bg-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-lg hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-3xl font-bold text-[#D5CEA3] mb-3 text-center">Technologies</h2>
          
          {/* 3x3 Grid of Tech Icons */}
          <div className="grid grid-cols-3 gap-4 flex-1">
            {/* Row 1 */}
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Code className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">C/C++</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <FileCode className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Rust</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Globe className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">React</span>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Database className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">MongoDB</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Server className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Node.js</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Layers className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Express</span>
            </div>
            
            {/* Row 3 */}
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Smartphone className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Flutter</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Zap className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Next.js</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 transition-all duration-200 group">
              <Cpu className="w-8 h-8 text-[#D5CEA3] mb-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs text-[#E5E5CB] font-medium">Python</span>
            </div>
          </div>
        </div>

        {/* 6 - Quote */}
        <div className="col-span-2 row-span-2 col-start-5 row-start-6 bg-[#D5CEA3] rounded-2xl p-4 flex items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-all duration-300">
          <p className="text-[#1A120B] font-bold text-3xl text-center">
            "First, solve the problem. Then, write the code."
          </p>
        </div>

        {/* 7 - Open to Work */}
        <div className="col-span-4 row-span-4 col-start-3 row-start-8 bg-white/10 rounded-2xl p-6 flex flex-col items-start justify-start shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
          {/* Tech Vector Background */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              {/* Circuit patterns in corners */}
              <g stroke="#555544" strokeWidth="2" fill="none">
                {/* Top Left Corner */}
                <path d="M0 0 L60 0 L60 40 L100 40" />
                <path d="M0 20 L40 20 L40 60 L80 60" />
                <circle cx="60" cy="40" r="4" fill="#555544" />
                <circle cx="40" cy="60" r="4" fill="#555544" />
                <rect x="50" y="30" width="20" height="20" fill="none" stroke="#555544" strokeWidth="2" />
                
                {/* Top Right Corner */}
                <path d="M400 0 L340 0 L340 40 L300 40" />
                <path d="M400 20 L360 20 L360 60 L320 60" />
                <circle cx="340" cy="40" r="4" fill="#555544" />
                <circle cx="360" cy="60" r="4" fill="#555544" />
                <rect x="330" y="30" width="20" height="20" fill="none" stroke="#555544" strokeWidth="2" />
                
                {/* Bottom Left Corner */}
                <path d="M0 300 L60 300 L60 260 L100 260" />
                <path d="M0 280 L40 280 L40 240 L80 240" />
                <circle cx="60" cy="260" r="4" fill="#555544" />
                <circle cx="40" cy="240" r="4" fill="#555544" />
                <rect x="50" y="250" width="20" height="20" fill="none" stroke="#555544" strokeWidth="2" />
                
                {/* Bottom Right Corner */}
                <path d="M400 300 L340 300 L340 260 L300 260" />
                <path d="M400 280 L360 280 L360 240 L320 240" />
                <circle cx="340" cy="260" r="4" fill="#555544" />
                <circle cx="360" cy="240" r="4" fill="#555544" />
                <rect x="330" y="250" width="20" height="20" fill="none" stroke="#555544" strokeWidth="2" />
                
                {/* Binary code in corners */}
                <text x="10" y="15" fontSize="14" fill="#555544" opacity="0.8">1010</text>
                <text x="350" y="15" fontSize="14" fill="#555544" opacity="0.8">1101</text>
                <text x="10" y="295" fontSize="14" fill="#555544" opacity="0.8">0110</text>
                <text x="350" y="295" fontSize="14" fill="#555544" opacity="0.8">1001</text>
                
                {/* Geometric tech patterns in corners */}
                <polygon points="90,10 105,20 90,30 75,20" fill="none" stroke="#555544" strokeWidth="2" />
                <polygon points="310,10 325,20 310,30 295,20" fill="none" stroke="#555544" strokeWidth="2" />
                <polygon points="90,270 105,280 90,290 75,280" fill="none" stroke="#555544" strokeWidth="2" />
                <polygon points="310,270 325,280 310,290 295,280" fill="none" stroke="#555544" strokeWidth="2" />
              </g>
              
              {/* Subtle animated pulse elements in corners */}
              <g>
                <circle cx="60" cy="40" r="10" fill="#555544" opacity="0.2">
                  <animate attributeName="r" values="10;15;10" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="340" cy="260" r="8" fill="#555544" opacity="0.2">
                  <animate attributeName="r" values="8;13;8" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3.5s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>
          
          {/* Content - positioned above background */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#D5CEA3] mb-4">Academic & Work Status</h2>
            <p className="text-2xl text-[#D5CEA3] font-semibold mb-2">
              🎓 Final Year Student at Bahra University
            </p>
            <p className="text-lg text-[#E5E5CB] mb-2">
              👨‍💻 Open to freelance work, internships, and meaningful collaborations in the tech space.
            </p>
            <p className="text-xl text-[#E5E5CB]">
              Let's connect and create something impactful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;