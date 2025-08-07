import { useEffect, useRef } from "react";

export default function Showcase({ creativeShoesImg, shoesAnimation }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
  <section 
  id="showCase" 
  className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12 "
>
  {/* Left Image */} 
  <div >
    <img
      src={creativeShoesImg}
      alt="creative shoes image"
      className="w-full h-full min-h-[200px] md:min-h-[450px] object-cover"
    />
  </div>
  
  {/* Right Video */}
  <div>
    <video
      ref={videoRef}
      src={shoesAnimation}
      muted
      loop
      playsInline
      className="w-full h-full min-h-[450px] object-cover rounded-xl shadow-md"
    />
  </div>
</section>  );
}
