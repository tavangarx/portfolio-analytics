import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-blue-50/80 to-white/40 -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full">
                                New: Advanced Portfolio Analytics
                            </span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-medium leading-tight text-gray-900 mb-6">
                            Intelligent 
                            <span className="text-blue-600 block">Portfolio</span>
                            Optimization
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Professional-grade financial tools powered by advanced algorithms. 
                            Transform your investment strategy with data-driven decisions.
                        </p>
                        <div className="flex gap-4 mb-12">
                            <motion.a 
                                href="/tools/portfolio-optimizer" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 w-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Optimizing
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </motion.a>
                            <motion.a 
                                href="/demo" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-all duration-200 shadow-md hover:shadow-lg w-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Watch Demo
                            </motion.a>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-row justify-center space-x-12"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">100K+</div>
                                <div className="text-sm text-gray-500">Portfolios Optimized</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                                <div className="text-sm text-gray-500">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">$50B+</div>
                                <div className="text-sm text-gray-500">Assets Analyzed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                                <div className="text-sm text-gray-500">Market Coverage</div>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl bg-white shadow-[0_20px_50px_rgba(37,_99,_235,_0.3)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                            <img 
                                src="/dashboard-preview.png" 
                                alt="Dashboard Preview" 
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
