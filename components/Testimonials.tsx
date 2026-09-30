import React from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#f8fafc]">
      {/* Soft Ambient Glow Backgrounds matching screenshot */}
      <div className="absolute top-[10%] left-[45%] w-[600px] h-[600px] rounded-full bg-[#f2ff9e]/50 blur-[140px] pointer-events-none" />
      <div className="absolute top-[0%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#e0e7ff]/50 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-[#e0e7ff]/60 blur-[150px] pointer-events-none" />

      <div className="relative z-10 container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Subtitle */}
        <div className="grid gap-8 lg:grid-cols-2 items-start justify-between">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.18] max-w-md">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed max-w-xl">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div>
                {/* Profile Avatar */}
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover shadow-sm border-2 border-white"
                />
                
                {/* Profile Name & Role */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#2563eb]">
                    {item.role}
                  </p>
                </div>

                {/* Quote Text */}
                <p className="mt-6 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
