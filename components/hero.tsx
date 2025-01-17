import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../content/resume-data.json';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B1F1F] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2F4F2F] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />

            <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Hi, I'm {resumeData.basics.name}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        {resumeData.basics.headline}
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        {(() => {
                            const linkedInProfile =
                                resumeData.basics.contact.socialProfiles.find(
                                    (profile) => profile.network === 'LinkedIn'
                                );

                            const githubProfile =
                                resumeData.basics.contact.socialProfiles.find(
                                    (profile) => profile.network === 'GitHub'
                                );

                            const mail = resumeData.basics.contact.email;

                            return (
                                <>
                                    {linkedInProfile && (
                                        <Button asChild variant="outline">
                                            <a
                                                href={linkedInProfile.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Linkedin className="mr-2 h-4 w-4" />
                                                LinkedIn
                                            </a>
                                        </Button>
                                    )}
                                    {githubProfile && (
                                        <Button asChild variant="outline">
                                            <a
                                                href={githubProfile.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="mr-2 h-4 w-4" />
                                                GitHub
                                            </a>
                                        </Button>
                                    )}
                                    {mail && (
                                        <Button asChild>
                                            <a href={mail}>
                                                <Mail className="mr-2 h-4 w-4" />
                                                Contact
                                            </a>
                                        </Button>
                                    )}
                                </>
                            );
                        })()}

                        
                    </div>
                </div>

                <div className="relative flex-1">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 rounded-full border-2 border-[#2F4F2F] transform rotate-45" />
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-cfBFTXD7FM0K8ru5ikeZ00rxWS52lJ.png"
                            alt="Profile"
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
