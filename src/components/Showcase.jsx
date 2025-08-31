import { useEffect, useRef, useState } from "react";

export default function Showcase({ footflexVideo, shoesAnimation }) {
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);
  const [leftVideoPlaying, setLeftVideoPlaying] = useState(false);

  // Intersection Observer for right video (auto-play when in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rightVideoRef.current?.play();
        } else {
          rightVideoRef.current?.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (rightVideoRef.current) {
      observer.observe(rightVideoRef.current);
    }

    return () => {
      if (rightVideoRef.current) {
        observer.unobserve(rightVideoRef.current);
      }
    };
  }, []);

  // Handle left video click - play once and pause at end
  const handleLeftVideoClick = () => {
    if (leftVideoRef.current && !leftVideoPlaying) {
      setLeftVideoPlaying(true);
      leftVideoRef.current.currentTime = 0; // Start from beginning
      leftVideoRef.current.play();
    }
  };

  // Handle left video end - reset to start and pause
  const handleLeftVideoEnd = () => {
    if (leftVideoRef.current) {
      setLeftVideoPlaying(false);
      leftVideoRef.current.currentTime = 0; // Reset to start
      leftVideoRef.current.pause();
    }
  };

  return (
    <>
    <div className="w-full text-center py-16 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
    Made to Move. Built to Flex.
  </h2>
  <button
    className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-800 transition duration-300"
    onClick={() => {
      // Optional: Scroll to New Arrivals
      const target = document.getElementById("newArrivals");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Step Into It
  </button>
</div>

    <section
      id="showCase"
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12"
    >
      {/* Left Video (footflex) - Click to play once */}
      <div className="relative">
        <video
          ref={leftVideoRef}
          src={footflexVideo}
          muted
          playsInline
          onClick={handleLeftVideoClick}
          onEnded={handleLeftVideoEnd}
          className="w-full h-full min-h-[200px] md:min-h-[450px] object-cover rounded-xl shadow-md cursor-pointer"
        />
      </div>

      {/* Right Video (shoes animation) - Auto-play when in view */}
      <div>
        <video
          ref={rightVideoRef}
          src={shoesAnimation}
          muted
          loop
          playsInline
          className="w-full h-full min-h-[200px] md:min-h-[450px] object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
     </>
  );
}
