import Image from "next/image";

const Team = () => {
  // Team member data
  const team = [
    {
      name: "David Miller",
      role: "Co-Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=90",
      bio: "With over 15 years in the luxury jewelry industry, David brings creativity and innovative design to every collection."
    },
    {
      name: "Mia Thompson",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=90",
      bio: "Mia&apos;s business acumen and passion for exceptional customer experiences has established DM Stores as a leader in the industry."
    },
    {
      name: "James Wilson",
      role: "Master Jeweler",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=90",
      bio: "James brings 20 years of experience crafting exquisite pieces with precision and artistry."
    },
    {
      name: "Sophia Chen",
      role: "Design Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=90",
      bio: "Sophia&apos;s eye for emerging trends and timeless design creates stunning pieces that capture the imagination."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6">
            <div className="inline-block relative">
              <span className="inline-block text-sm md:text-base uppercase tracking-widest font-medium text-black">
                Our Experts
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-secondary"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-black">
            Meet Our <span className="text-accent-secondary">Team</span>
          </h2>
          <p className="text-lg text-gray-700">
            The passionate experts behind our beautiful collections. Our team combines decades of experience with fresh perspectives to create jewelry that delights and inspires.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-accent-secondary/30">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Diamond sparkle animation for the first team member */}
                {index === 0 && (
                  <div className="absolute top-1/4 right-1/4 w-4 h-4 z-20">
                    <div className="w-full h-full animate-pulse">
                      <div className="w-full h-full rotate-45 bg-white opacity-80 rounded-sm"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-1 text-black">{member.name}</h3>
                <p className="text-accent-secondary text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text font-semibold">
            &quot;Individually, we are experts. Together, we are passionate about creating extraordinary jewelry experiences.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team; 