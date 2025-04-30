
import React from 'react';
import CartoonAvatar from '../icons/CartoonAvatar';

const team = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Lead Developer',
    seed: 'alex-johnson'
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    role: 'UI/UX Designer',
    seed: 'sarah-martinez'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Project Manager',
    seed: 'david-chen'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Full Stack Engineer',
    seed: 'emma-wilson'
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gratech-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
          <div className="w-20 h-1 bg-gratech-blue mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.id}
              className="text-center bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative mb-4 w-32 h-32 mx-auto">
                <CartoonAvatar 
                  className="w-full h-full rounded-full animate-bounce-gentle" 
                  seed={member.seed} 
                  role={member.role}
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
