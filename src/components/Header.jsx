import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Tools', href: '#', isDropdown: true },
        { name: 'Documentation', href: '/docs' },
        { name: 'Contact', href: '/contact' },
    ];

    const tools = [
        { 
            name: 'Portfolio Optimizer', 
            href: '/tools/portfolio-optimizer', 
            description: 'Optimize your investment portfolio' 
        },
        { 
            name: 'Risk Analytics', 
            href: '/tools/risk-analytics', 
            description: 'Analyze investment risks' 
        },
        { 
            name: 'Market Scanner', 
            href: '/tools/market-scanner', 
            description: 'Scan market opportunities' 
        },
    ];

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center h-20">
                    {/* Centered Navigation */}
                    <nav className="flex items-center space-x-12">
                        {navigation.map((item) => (
                            !item.isDropdown ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Menu as="div" key={item.name} className="relative">
                                    <Menu.Button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
                                        {item.name}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </Menu.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Menu.Items className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="p-2">
                                                {tools.map((tool) => (
                                                    <Menu.Item key={tool.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={tool.href}
                                                                className={`${
                                                                    active ? 'bg-blue-50' : ''
                                                                } block rounded-lg px-4 py-3 hover:bg-blue-50 transition-colors`}
                                                            >
                                                                <p className="text-sm font-medium text-gray-900">
                                                                    {tool.name}
                                                                </p>
                                                                <p className="text-sm text-gray-500">
                                                                    {tool.description}
                                                                </p>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            )
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
