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
      bio: "Mia&apos;s business acumen and passion for exceptional customer experiences has established MDStores as a leader in the industry."
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
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
            <h3 className="text-xl font-heading font-semibold mb-1 text-gray-900">{member.name}</h3>
            <p className="text-[#FFC0CB] text-sm mb-4">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team; 