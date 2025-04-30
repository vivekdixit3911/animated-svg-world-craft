
import React from 'react';
import CartoonAvatar from '../icons/CartoonAvatar';
import { motion } from 'framer-motion';

const team = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Lead Developer',
    seed: 'alex-johnson-dev2025'
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    role: 'UI/UX Designer',
    seed: 'sarah-martinez-design2025'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Project Manager',
    seed: 'david-chen-pm2025'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Full Stack Engineer',
    seed: 'emma-wilson-dev2025'
  }
];

// Animation variants for items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-gratech-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
          <div className="w-20 h-1 bg-gratech-blue mx-auto rounded"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Meet the innovative minds behind our cutting-edge solutions and services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div 
              key={member.id}
              className="relative overflow-hidden group"
              variants={itemVariants}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center">
                <div className="relative mb-6 w-40 h-40 mx-auto overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
                  
                  {/* Animated background elements */}
                  <div className="absolute w-20 h-20 -top-10 -left-10 bg-blue-500/10 rounded-full blur-md"></div>
                  <div className="absolute w-16 h-16 -bottom-8 -right-8 bg-purple-500/10 rounded-full blur-md"></div>
                  
                  {/* Updated cartoon avatar with hover effect */}
                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    <CartoonAvatar 
                      className="w-full h-full" 
                      seed={member.seed} 
                      role={member.role}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                
                {/* Skill bars - visual indicator of expertise */}
                <div className="w-full space-y-2 mt-auto">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Expertise</span>
                    <span className="text-blue-400">
                      {Math.floor(80 + Math.random() * 20)}%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      style={{ width: `${80 + Math.random() * 20}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs mb-1 mt-2">
                    <span>Experience</span>
                    <span className="text-purple-400">
                      {Math.floor(70 + Math.random() * 30)}%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                      style={{ width: `${70 + Math.random() * 30}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
