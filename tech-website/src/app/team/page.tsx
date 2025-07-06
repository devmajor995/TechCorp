import React from 'react';

const team = [
  {
    name: 'Moses Olokodana',
    role: 'Founder & CEO',
    bio: 'Visionary leader with a passion for technology and innovation.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
    twitter: '#',
    github: '#'
  },
  {
    name: 'Jane Doe',
    role: 'Lead Developer',
    bio: 'Expert in full-stack development and cloud solutions.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    twitter: '#',
    github: '#'
  },
  {
    name: 'John Smith',
    role: 'UI/UX Designer',
    bio: 'Designs beautiful, user-centered digital experiences.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    linkedin: '#',
    twitter: '#',
    github: '#'
  },
  {
    name: 'Emily Chen',
    role: 'Cybersecurity Specialist',
    bio: 'Keeps our clients safe with enterprise-grade security.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    linkedin: '#',
    twitter: '#',
    github: '#'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">Meet the <span className="text-blue-600">Team</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          Our diverse team of experts brings together years of experience in software development, cybersecurity, design, and business strategy.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 overflow-hidden border-4 border-blue-100 dark:border-slate-700 group-hover:border-purple-400 transition-all duration-300">
              <img src={member.avatar} alt={member.name} className="w-24 h-24 object-cover rounded-full" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h2>
            <h3 className="text-blue-600 font-semibold mb-2">{member.role}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center text-sm mb-4">{member.bio}</p>
            <div className="flex space-x-4 mt-2">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                </svg>
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.389 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.419a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.417 0-.22-.005-.439-.015-.657a10.243 10.243 0 002.548-2.61z" />
                </svg>
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.649.242 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 