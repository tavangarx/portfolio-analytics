import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$99",
            description: "Perfect for individual investors and small portfolios",
            features: [
                "Up to 100 securities analysis",
                "Basic portfolio optimization",
                "Daily rebalancing signals",
                "Email support",
                "Basic API access"
            ],
            highlighted: false
        },
        {
            name: "Professional",
            price: "$299",
            description: "Ideal for professional investors and fund managers",
            features: [
                "Unlimited securities analysis",
                "Advanced optimization algorithms",
                "Real-time rebalancing signals",
                "Priority support",
                "Full API access",
                "Custom constraints",
                "Risk factor analysis"
            ],
            highlighted: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large institutions with complex requirements",
            features: [
                "Custom integration support",
                "Dedicated account manager",
                "Custom development options",
                "SLA guarantees",
                "White-label solutions",
                "Advanced risk modeling",
                "24/7 phone support"
            ],
            highlighted: false
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
                        Simple, transparent pricing
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose the plan that best fits your needs
                    </p>
                </motion.div>

                <div className="flex flex-nowrap overflow-x-auto gap-8 pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center snap-x snap-mandatory">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`w-full min-w-[280px] max-w-sm flex-none snap-center lg:flex-1 rounded-2xl p-8 ${
                                plan.highlighted 
                                    ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-opacity-50' 
                                    : 'bg-white text-gray-900 border border-gray-100 hover:border-blue-100'
                            } hover:shadow-xl transition-all duration-300`}
                        >
                            <h3 className="text-xl font-medium mb-4">
                                {plan.name}
                            </h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold">
                                    {plan.price}
                                </span>
                                {plan.price !== "Custom" && (
                                    <span className={`${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                                        /month
                                    </span>
                                )}
                            </div>
                            <p className={`mb-8 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                                {plan.description}
                            </p>
                            
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <Check className={`w-5 h-5 mr-3 mt-0.5 ${
                                            plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                                        }`} />
                                        <span className={
                                            plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                                        }>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 px-6 rounded-xl inline-flex items-center justify-center transition-colors duration-200 ${
                                    plan.highlighted
                                        ? 'bg-white text-blue-600 hover:bg-gray-50'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                            >
                                Get started
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </motion.button>
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
                    <p className="text-gray-600 mb-4">
                        Need a custom solution? Let's talk about your requirements.
                    </p>
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-colors duration-200 inline-flex items-center border border-gray-100 hover:border-blue-100 hover:shadow-lg">
                        Contact Sales Team
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
