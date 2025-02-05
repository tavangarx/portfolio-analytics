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
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-medium text-gray-900 mb-4">
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
                            className="w-full min-w-[280px] max-w-sm flex-none snap-center lg:flex-1 bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                                    <integration.icon className="w-6 h-6 text-blue-500" />
                                </div>
                            </div>

                            <h3 className="text-xl font-medium text-gray-900 mb-3">
                                {integration.name}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {integration.description}
                            </p>

                            <div className="space-y-3">
                                {integration.features.map((feature, featureIndex) => (
                                    <div 
                                        key={featureIndex}
                                        className="text-gray-600 flex items-center text-sm"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
