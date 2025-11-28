import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { 
  heroData, 
  whereMoneyGoesData, 
  howAvryWorksData, 
  trueCostData, 
  affordabilityData, 
  finalCtaData 
} from '../data/mock';
import { 
  DollarSign, 
  TrendingDown, 
  Shield, 
  Zap, 
  ArrowRight, 
  Check, 
  X, 
  Play,
  Home,
  Percent,
  Clock,
  Users
} from 'lucide-react';
import { toast } from 'sonner';

const AvryLanding = () => {
  const [heroEmail, setHeroEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleEmailSubmit = (email, source) => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Welcome to the rebellion! We\'ll be in touch.');
    if (source === 'hero') setHeroEmail('');
    if (source === 'footer') setFooterEmail('');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Avry</span>
          </div>
          <Button 
            onClick={() => document.getElementById('hero-email').focus()}
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 transition-all duration-200"
          >
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">The fee rebellion starts here</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                <span className="text-white">When buying your first home, they say '</span>
                <span className="text-emerald-400">the seller pays.</span>
                <span className="text-white">' That money still comes from you.</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                {heroData.subhead}
              </p>
              
              <p className="text-lg text-white/80 font-medium border-l-4 border-emerald-500 pl-4">
                {heroData.supportingLine}
              </p>
              
              <ul className="space-y-3">
                {heroData.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3 max-w-md">
                <div className="flex gap-3">
                  <Input
                    id="hero-email"
                    type="email"
                    placeholder={heroData.inputPlaceholder}
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-emerald-500 focus:ring-emerald-500/20"
                  />
                  <Button 
                    onClick={() => handleEmailSubmit(heroEmail, 'hero')}
                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 h-12 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    {heroData.ctaButton}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500">{heroData.microcopy}</p>
              </div>
            </div>
            
            {/* Video Frame */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl blur-2xl" />
              <div className="relative bg-[#141414] border border-white/10 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center cursor-pointer group" onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
                  {!isVideoPlaying ? (
                    <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <DollarSign className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-gray-400">Video demo playing...</p>
                    </div>
                  )}
                </div>
                <div className="p-4 border-t border-white/10">
                  <p className="text-sm text-gray-400 text-center">{heroData.videoCaption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Money Goes Section */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">{whereMoneyGoesData.heading}</h2>
            <p className="text-xl text-gray-400">{whereMoneyGoesData.subhead}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Old Way */}
            <Card className="bg-[#1a1a1a] border-red-500/30 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-400">{whereMoneyGoesData.oldWay.title}</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{whereMoneyGoesData.oldWay.description}</p>
              <div className="mt-6 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-red-400 font-semibold text-center">Thousands siphoned from YOUR purchase</p>
              </div>
            </Card>
            
            {/* New Way */}
            <Card className="bg-[#1a1a1a] border-emerald-500/30 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">{whereMoneyGoesData.newWay.title}</h3>
              </div>
              <ul className="space-y-4">
                {whereMoneyGoesData.newWay.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          {/* Bold Callout */}
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl font-black text-white">
              {whereMoneyGoesData.callout}
            </p>
          </div>
        </div>
      </section>

      {/* How Avry Works Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">{howAvryWorksData.heading}</h2>
            <p className="text-xl text-gray-400">{howAvryWorksData.subhead}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {howAvryWorksData.benefits.map((benefit, index) => {
              const icons = [DollarSign, Shield, Percent, Zap];
              const Icon = icons[index];
              return (
                <Card key={index} className="bg-[#141414] border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* True Cost Section */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">{trueCostData.heading}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {trueCostData.blocks.map((block, index) => {
              const icons = [DollarSign, Clock, Users];
              const Icon = icons[index];
              return (
                <Card key={index} className="bg-[#1a1a1a] border-white/10 p-8 rounded-2xl text-center hover:border-red-500/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-red-400" />
                  </div>
                  <p className="text-5xl font-black text-white mb-4">{block.amount}</p>
                  <p className="text-gray-400 leading-relaxed">{block.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Affordability Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8">{affordabilityData.heading}</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">{affordabilityData.paragraph}</p>
              <ul className="space-y-4">
                {affordabilityData.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-3xl" />
              <div className="relative bg-[#141414] border border-white/10 rounded-2xl p-10">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                      <TrendingDown className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-emerald-400">Lower Costs</p>
                      <p className="text-gray-500">More affordable homebuying</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-emerald-400">Your Money</p>
                      <p className="text-gray-500">Back where it belongs</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                      <Home className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-emerald-400">Fair Access</p>
                      <p className="text-gray-500">For every buyer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-emerald-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Limited spots for early rebels</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">{finalCtaData.heading}</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">{finalCtaData.subhead}</p>
          
          <div className="max-w-lg mx-auto space-y-4">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-500 h-14 rounded-xl text-lg focus:border-emerald-500 focus:ring-emerald-500/20"
              />
              <Button 
                onClick={() => handleEmailSubmit(footerEmail, 'footer')}
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 h-14 rounded-xl text-lg transition-all duration-200 hover:scale-105"
              >
                {finalCtaData.ctaButton}
              </Button>
            </div>
            <p className="text-emerald-400 font-medium">{finalCtaData.microcopy}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Avry</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Avry. Cutting waste from homebuying.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AvryLanding;
