import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    const links = {
        product: [
            { name: 'Features', href: '/features' },
            { name: 'Tools', href: '/tools' },
            { name: 'Documentation', href: '/docs' },
            { name: 'Pricing', href: '/pricing' }
        ],
        company: [
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' }
        ],
        resources: [
            { name: 'Blog', href: '/blog' },
            { name: 'Support', href: '/support' },
            { name: 'FAQ', href: '/faq' }
        ]
    };

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: 'https://github.com' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
        { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' }
    ];

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-4 gap-8">
                    {/* Website Title and Description Column */}
                    <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                            Portfolio Analytics
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Professional-grade financial tools powered by advanced algorithms.
                        </p>
                        {/* Social Links Grid */}
                        <div className="grid grid-cols-4 gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {links.product.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {links.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-400 text-center">
                        © {new Date().getFullYear()} Portfolio Analytics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
