import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import email_img from '../imgs/email_confimation.png'

const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-xl text-center max-w-md w-full"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >
                        <img
                            src={email_img} // Puedes usar un ícono local o importado
                            alt="Email Enviado"
                            className="w-20 h-20 mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Datos Confirmados</h2>
                        <p className="text-gray-600 mb-4">
                            Hemos enviado un correo a <span className="text-blue-600 font-medium">tu email</span>. Por favor, revisalo y verifica tus datos.
                        </p>

                        <div className="flex flex-col gap-3 items-center">
                            <Link
                                to="/"
                                className="text-white bg-primary-100 hover:bg-primary-300 px-4 py-2 rounded font-semibold"
                            >
                                Volver al inicio
                            </Link>
                            <button
                                onClick={onClose}
                                className="text-sm text-gray-500 hover:text-gray-700 underline"
                            >
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
