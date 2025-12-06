const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 z-10" />
      
      {/* Main background video - West African mining scenery */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-gold-particles-floating-in-the-air-4986-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Beautiful West African landscape fallback */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      
      {/* Gold particles overlay effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)] z-5" />
      
      {/* Animated golden shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer z-5" />
    </div>
  );
};

export default BackgroundVideo;
