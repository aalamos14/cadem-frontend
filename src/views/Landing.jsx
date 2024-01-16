import React from "react";
import Footer from "../components/Footer";

const Landing = () => {
    return (
        <div className="bg-[url('assets/images/image0.jpeg')] w-screen h-screen bg-cover bg-center">
            <div className="flex flex-col pt-10 ml-10">
                <p className="text-5xl font-bold text-purple-700">Cadema</p>
            </div>
            {/* flex with scroll x axis with 3 product boxes */}
            <div className="flex flex-col items-center overflow-x-scroll scrollbar-hide mt-10 mb-20">
                {/* product box with name and description */}
                <div className="flex flex-col items-center bg-white rounded-lg p-5 m-2 min-w-[250px]">
                    <p className="text-xl font-bold text-slate-800 text-center">Carbón</p>
                    <p className="text-md text-slate-700 text-center">Gran calidad en quebracho blanco y colorado con capacidad de producción para envasado personalizado a requerimiento del cliente.</p>
                </div>
                {/* product box with name and description */}
                <div className="flex flex-col items-center bg-white rounded-lg p-5 m-2 min-w-[250px]">
                    <p className="text-xl font-bold text-slate-800 text-center">Miel</p>
                    <p className="text-md text-slate-700 text-center">Actualmente manejamos miel de ulmo de la mas alta pureza.</p>
                </div>
                {/* product box with name and description */}
                <div className="flex flex-col items-center bg-white rounded-lg p-5 m-2 min-w-[250px]">
                    {/* solucion de productos agricolas con acentos */}
                    <p className="text-xl font-bold text-slate-800 text-center">Solución de productos agrícolas</p>
                    <p className="text-md text-slate-700 text-center">Cuentanos un poco mas sobre tu proyecto para poder ofrecerte una solucion que se adapte a tus necesidades.</p>
                </div>
            </div>
            <div className="bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );
}

export default Landing;