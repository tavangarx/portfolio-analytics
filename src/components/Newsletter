import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-blue-600 to-blue-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-white mb-12"
                >
                    <h2 className="text-3xl font-medium mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-blue-100">
                        Get the latest updates on product features and market insights
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl mx-auto"
                >
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 text-white placeholder-blue-100 border border-white/10"
                        />
                        <button className="px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                            Subscribe
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </form>
                    <p className="text-blue-100 text-sm mt-4 text-center">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
