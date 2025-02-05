import React from 'react';
import { motion } from 'framer-motion';
import { 
    BarChart2, Shield, Binary, Globe, 
    Box, Users
} from 'lucide-react';

const Features = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-medium text-gray-900 mb-4">
                        Powerful features for sophisticated investors
                    </h2>
                    <p className="text-xl text-gray-600">
                        Our comprehensive suite of tools helps you make better investment decisions
                    </p>
                </motion.div>

                <div className="grid grid-cols-3 gap-8">
                    {[
                        {
                            icon: BarChart2,
                            title: 'Advanced Analytics',
                            description: 'Deep insights into your portfolio performance with sophisticated analysis tools'
                        },
                        {
                            icon: Shield,
                            title: 'Risk Management',
                            description: 'Comprehensive risk assessment and real-time monitoring systems'
                        },
                        {
                            icon: Binary,
                            title: 'Smart Algorithms',
                            description: 'State-of-the-art optimization algorithms based on modern portfolio theory'
                        },
                        {
                            icon: Globe,
                            title: 'Global Coverage',
                            description: 'Access to worldwide markets and diverse asset classes'
                        },
                        {
                            icon: Box,
                            title: 'Custom Constraints',
                            description: 'Flexible optimization with customizable investment constraints'
                        },
                        {
                            icon: Users,
                            title: 'Collaboration',
                            description: 'Team-friendly features for professional investment firms'
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                                    <feature.icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                                    <span className="text-2xl font-medium text-gray-300 group-hover:text-blue-300">
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
