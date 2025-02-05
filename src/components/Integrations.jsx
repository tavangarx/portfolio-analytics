import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Zap, LineChart } from 'lucide-react';

const Integrations = () => {
    const integrations = [
        {
            name: "Bloomberg Terminal",
            category: "Market Data",
            icon: Database,
            description: "Access real-time market data, analytics, and news through direct Bloomberg integration",
            features: ["Real-time pricing", "Historical data", "Corporate actions", "News feed"]
        },
        {
            name: "Interactive Brokers",
            category: "Trading",
            icon: Zap,
            description: "Execute trades automatically across multiple asset classes with institutional-grade reliability",
            features: ["Multi-asset trading", "Real-time execution", "Position tracking", "FIX protocol"]
        },
        {
            name: "BlackRock Aladdin",
            category: "Portfolio Management",
            icon: LineChart,
            description: "Seamlessly connect with the world's leading investment and risk management platform",
            features: ["Risk analytics", "Portfolio modeling", "Asset allocation", "Performance attribution"]
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Enterprise Integrations
                    </h2>
                    <p className="text-xl text-gray-600">
                        Connect with industry-leading platforms and data providers
                    </p>
                </motion.div>

                <div className="flex flex-nowrap overflow-x-auto gap-8 pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center snap-x snap-mandatory">
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full min-w-[280px] max-w-sm flex-none snap-center lg:flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm">
                                    {integration.category}
                                </span>
                                <integration.icon className="w-6 h-6 text-blue-600" />
                            </div>

                            <h3 className="text-lg font-medium text-gray-900 mb-3">
                                {integration.name}
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                {integration.description}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {integration.features.map((feature, featureIndex) => (
                                    <li 
                                        key={featureIndex}
                                        className="text-gray-600 flex items-center text-sm"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                href="#"
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                                View Documentation
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
                        Explore All Integrations
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Integrations;
