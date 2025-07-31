
function RightComponent({ scrollContainerRef, aboutRef, experienceRef, projectsRef }) {
  return (
    <div  ref={scrollContainerRef} className="w-2/3 overflow-y-auto bg-red-300 hover:bg-blue-200 transition-all duration-900">
        
        <div ref={aboutRef} className="h-[1000px]">About</div>
        <div ref={experienceRef} className="h-[1000px]">EXPERIENCE</div>
        <div ref={projectsRef} className="h-[1000px]">Project</div>
      </div>
  )
}

export default RightComponent
