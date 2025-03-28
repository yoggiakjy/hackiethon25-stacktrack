import { useState } from "react";
import "./MyWidget.css";
import InvestmentModal from "./components/InvestmentModal";
import bankIcon from "./assets/bank.png";
import cryptoIcon from "./assets/crypto.png";
import stockIcon from "./assets/stock.png";
import editIcon from "./assets/edit.png";
import trashIcon from "./assets/trash.png";

const DEFAULT_INVESTMENTS = [
  {
    date: new Date(2025, 2, 14),
    type: "Stock",
    description: "NVIDIA",
    amount: "500",
  },
  {
    date: new Date(2025, 2, 14),
    type: "Crypto",
    description: "BITCOIN",
    amount: "1500",
  },
];

const MyWidget = () => {
  const [netWorth, setNetWorth] = useState("1000");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [investmentType, setInvestmentType] = useState("");
  const [investments, setInvestments] = useState(DEFAULT_INVESTMENTS);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClick = (type) => {
    setInvestmentType(type);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (newInvestment) => {
    setInvestments((prevInvestments) => [...prevInvestments, newInvestment]);
  };

  const handleDeleteInvestment = () => {
    
  };

  return (
    <div className="widget-container relative w-[30rem] bg-black px-[1rem] py-[1rem] rounded-xl border border-neutral-500 space-y-[1rem] shadow-2xl">
      {/* Main networth view */}
      <div className="flex flex-col justify-center items-center w-full bg-gradient-to-tr from-black via-gray-900 to-blue-900 shadow-2xl border-gray-900 border-[0.001px] rounded-xl p-6">
        <p className="text-sm font-extralight text-gray-300">Your Stack</p>
        <p className="text-5xl font-medium text-neutral-100 mt-1">{`$${netWorth}`}</p>

        {/* Change buttons */}
        <div className="flex justify-center items-center w-full gap-10 text-neutral-50 mt-8">
          {/* Bank account import */}
          <div className="flex flex-col justify-center items-center gap-1">
            <button
              className="cursor-pointer bg-gradient-to-tr from-black via-gray-900 to-green-900 rounded-xl p-2 transition transform hover:scale-105 hover:-translate-y-1 duration-200 ease-in-out"
              onClick={() => handleClick("Savings")}
            >
              <img
                src={bankIcon}
                alt="Bank Icon"
                width={512}
                height={512}
                className="w-[2.5rem] h-[2.5rem]"
              />
            </button>
            <p className="font-light text-xs">Savings</p>
          </div>

          {/* Crypto import */}
          <div className="flex flex-col justify-center items-center gap-1">
            <button
              className="cursor-pointer bg-gradient-to-tr from-black via-gray-900 to-purple-900 rounded-xl p-2 transition transform hover:scale-105 hover:-translate-y-1 duration-200 ease-in-out"
              onClick={() => handleClick("Crypto")}
            >
              <img
                src={cryptoIcon}
                alt="Crypto Icon"
                width={512}
                height={512}
                className="w-[2.5rem] h-[2.5rem]"
              />
            </button>
            <p className="font-light text-xs">Crypto</p>
          </div>

          {/* Stock import */}
          <div className="flex flex-col justify-center items-center gap-1">
            <button
              className="cursor-pointer bg-gradient-to-tr from-black via-gray-900 to-orange-900 rounded-xl p-2 transition transform hover:scale-105 hover:-translate-y-1 duration-200 ease-in-out"
              onClick={() => handleClick("Stock")}
            >
              <img
                src={stockIcon}
                alt="Stock Icon"
                width={512}
                height={512}
                className="w-[2.5rem] h-[2.5rem]"
              />
            </button>
            <p className="font-light text-xs">Stock</p>
          </div>

          <InvestmentModal
            isOpen={isModalOpen}
            type={investmentType}
            submitFunction={handleFormSubmit}
            onClose={() => {
              setIsModalOpen(false);
              setInvestmentType("");
            }}
          />
        </div>
      </div>

      {/* Portfolio list view */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-between items-center w-full">
          <p className="font-medium text-sm text-neutral-50">Portfolio</p>
          <button
            onClick={() => setIsEditMode(true)}
            className="transition transform hover:scale-105 duration-150 ease-in-out cursor-pointer"
          >
            <img
              src={editIcon}
              alt="Edit icon"
              width={512}
              height={512}
              className="w-[20px]"
            />
          </button>
        </div>

        <div className="flex flex-col justify-center items-start w-full mt-3 gap-2">
          {investments.map((investment, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full text-white gap-5"
            >
              <div className="flex gap-5">
                {investment.type === "Savings" && (
                  <div className="bg-gradient-to-tr from-black via-gray-900 to-green-900 rounded-xl p-1">
                    <img
                      src={bankIcon}
                      alt="Bank icon"
                      height={512}
                      width={512}
                      className="w-[1rem]"
                    />
                  </div>
                )}
                {investment.type === "Crypto" && (
                  <div className="bg-gradient-to-tr from-black via-gray-900 to-purple-900 rounded-xl p-1">
                    <img
                      src={cryptoIcon}
                      alt="Crypto Icon"
                      width={512}
                      height={512}
                      className="w-[2rem]"
                    />
                  </div>
                )}
                {investment.type === "Stock" && (
                  <div className="bg-gradient-to-tr from-black via-gray-900 to-orange-900 rounded-xl p-1">
                    <img
                      src={stockIcon}
                      alt="Stock Icon"
                      width={512}
                      height={512}
                      className="w-[2rem]"
                    />
                  </div>
                )}
                <p>{investment.description}</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p>{`$${investment.amount}`}</p>
                {isEditMode && (
                  <button onClick={() => handleDeleteInvestment()} className="cursor-pointer">
                    <img
                      src={trashIcon}
                      alt="Delete icon"
                      width={512}
                      height={512}
                      className="w-[20px]"
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWidget;
