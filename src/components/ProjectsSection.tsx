import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
  return (
    <section id="projects" className='relative py-28 space-y-24'>
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative -pl-50 z-10'>
                    {/* heading */}
                    <div className='mb-12'>
                        <p className='text-xs text-[#a48cc9]'>Featured Project</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Example Project</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-start space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

                {/* project image */}
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-[360px]'>
                            <Image src="/images/Portfolio.png" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* text content */}
                <div className='relative md:order-2 z-10'>
                    {/* heading */}
                    <div className='mb-12 text-right'>
                        <p className='text-xs text-[#a48cc9]'>Featured Project</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Example Project</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-end space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

                {/* project image */}
                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden md:h-[360px] h-[250px]'>
                            <Image src="/images/Portfolio.png" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  )
}

export default ProjectsSection