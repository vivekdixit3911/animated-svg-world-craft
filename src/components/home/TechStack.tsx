const TechStack = () => {
  return (
    <section className="relative min-h-[600px] bg-nucleas-dark overflow-hidden py-20">
      {/* Background stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
          backgroundSize: '50px 50px',
          opacity: 0.1 
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Technology Stack</h2>
        
        <div className="relative w-full max-w-3xl mx-auto h-[400px]">
          {/* Center JS Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 bg-[#F7DF1E] rounded-lg flex items-center justify-center shadow-lg animate-pulse-subtle">
              <span className="text-4xl font-bold text-black">JS</span>
            </div>
          </div>

          {/* React */}
          <div className="absolute left-[20%] top-[10%] -translate-x-1/2">
            <div className="w-16 h-16 bg-[#61DAFB] rounded-full flex items-center justify-center shadow-lg animate-float">
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <div className="absolute top-full left-1/2 w-0.5 h-20 bg-gradient-to-b from-[#61DAFB] to-transparent -translate-x-1/2" />
          </div>

          {/* Node.js */}
          <div className="absolute right-[20%] top-[10%] translate-x-1/2">
            <div className="w-16 h-16 bg-[#3C873A] rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path className="text-white" d="M12 1.85c-.27 0-.55.07-.78.2L3.6 6.04a1.434 1.434 0 0 0-.73 1.25v9.41c0 .52.28 1 .73 1.25l7.62 3.98c.23.13.5.2.78.2s.55-.07.78-.2l7.62-3.98c.45-.25.73-.73.73-1.25v-9.41c0-.52-.28-1-.73-1.25l-7.62-3.99c-.23-.13-.5-.2-.78-.2zm0 2.08L18.58 7.5 12 11.07 5.42 7.5 12 3.93zM5 9.17l6 3.13v7.45l-6-3.13V9.17zm8 0l6 3.13v7.45l-6-3.13V9.17z" />
              </svg>
            </div>
            <div className="absolute top-full left-1/2 w-0.5 h-20 bg-gradient-to-b from-[#3C873A] to-transparent -translate-x-1/2" />
          </div>

          {/* TypeScript */}
          <div className="absolute left-[20%] bottom-[10%] -translate-x-1/2">
            <div className="w-16 h-16 bg-[#007ACC] rounded-full flex items-center justify-center shadow-lg animate-float">
              <span className="text-2xl font-bold text-white">TS</span>
            </div>
            <div className="absolute bottom-full left-1/2 w-0.5 h-20 bg-gradient-to-t from-[#007ACC] to-transparent -translate-x-1/2" />
          </div>

          {/* Redux */}
          <div className="absolute right-[20%] bottom-[10%] translate-x-1/2">
            <div className="w-16 h-16 bg-[#764ABC] rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path className="text-white" d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788.032.463.245.863.581 1.11-1.224 2.41-3.084 4.17-5.881 5.648-1.833.956-3.727 1.297-5.621 1.11-1.558-.154-2.781-.71-3.545-1.665-.916-1.172-1.003-2.441-.245-3.727.581-.956 1.497-1.665 2.077-2.016-.122-.401-.398-1.081-.515-1.573-5.621 4.07-5.038 9.626-3.331 12.22 1.28 1.943 3.88 3.157 6.753 3.157.794 0 1.558-.092 2.352-.216 5.008-.863 8.82-3.544 10.927-7.518zm3.3-3.19c-2.96-3.483-7.305-5.4-12.283-5.4h-.611c-.336-.71-1.07-1.172-1.894-1.172h-.062c-.947 0-1.71.802-1.71 1.788 0 .987.794 1.788 1.741 1.788h.062c.855-.03 1.558-.648 1.71-1.48h.673c2.932 0 5.713.863 8.246 2.563 1.924 1.297 3.3 2.996 4.07 5.033.673 1.665.612 3.299-.061 4.689-.886 1.912-2.382 2.96-4.367 2.96-1.28 0-2.475-.401-3.115-.71-.367.308-1.037.802-1.497 1.11 1.374.648 2.78 1.018 4.122 1.018 3.085 0 5.375-1.726 6.26-3.453 1.374-2.778.397-7.518-1.284-10.314z" />
              </svg>
            </div>
            <div className="absolute bottom-full left-1/2 w-0.5 h-20 bg-gradient-to-t from-[#764ABC] to-transparent -translate-x-1/2" />
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <line 
                x1="20%" 
                y1="10%" 
                x2="50%" 
                y2="50%" 
                stroke="url(#line-gradient)" 
                strokeWidth="2"
                strokeDasharray="4"
                className="animate-dash"
              />
              <line 
                x1="80%" 
                y1="10%" 
                x2="50%" 
                y2="50%" 
                stroke="url(#line-gradient)" 
                strokeWidth="2"
                strokeDasharray="4"
                className="animate-dash"
              />
              <line 
                x1="20%" 
                y1="90%" 
                x2="50%" 
                y2="50%" 
                stroke="url(#line-gradient)" 
                strokeWidth="2"
                strokeDasharray="4"
                className="animate-dash"
              />
              <line 
                x1="80%" 
                y1="90%" 
                x2="50%" 
                y2="50%" 
                stroke="url(#line-gradient)" 
                strokeWidth="2"
                strokeDasharray="4"
                className="animate-dash"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 