import React, { useState } from "react";
import logo from "/GeeBee.svg";
import { MdOutlineArrowRight } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navOptions = [
        { title: "Work", to: "#work", offset: -80 },
        { title: "About", to: "#about", offset: 100 },
        { title: "Services", to: "#services", offset: -240 },
        { title: "Contact", to: "#contact", offset: 100 },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToElement = (to, offset) => {
        const element = document.querySelector(to);
        if (element) {
            window.scrollTo({
                top: element.offsetTop + offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="sticky top-0 bg-white z-[999] py-4 px-5 sm:px-8 lg:px-14"
        >
            <div className="flex justify-between items-center">
                <img src={logo} alt="logo" className="h-[28px]" />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navOptions.map((item, i) => (
                        <a
                            key={i}
                            className="hover:text-[#2F4858] cursor-pointer transition-colors"
                            onClick={() =>
                                scrollToElement(item.to, item.offset)
                            }
                        >
                            {item.title}
                        </a>
                    ))}
                    <div className="ml-4 flex items-center cursor-pointer py-2 px-4 rounded-md bg-gradient-to-r from-[#2F4858] to-[#3A5A6B] text-white">
                        Consultation <MdOutlineArrowRight className="ml-2" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-[#2F4858] hover:text-gray-600"
                    >
                        {isOpen ? (
                            <FiX className="w-6 h-6" />
                        ) : (
                            <FiMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        className="md:hidden fixed w-full bg-white shadow-lg z-[1000] top-[76px] left-0"
                    >
                        {navOptions.map((item, i) => (
                            <motion.a
                                key={i}
                                className="block py-3 px-4 hover:bg-gray-100 text-[#2F4858]"
                                onClick={() => {
                                    toggleMenu();
                                    scrollToElement(item.to, item.offset);
                                }}
                            >
                                {item.title}
                            </motion.a>
                        ))}
                        <div className="mt-4 p-4 bg-gradient-to-r from-[#2F4858] to-[#3A5A6B] text-white rounded-md">
                            Consultation{" "}
                            <MdOutlineArrowRight className="ml-2 inline" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;
