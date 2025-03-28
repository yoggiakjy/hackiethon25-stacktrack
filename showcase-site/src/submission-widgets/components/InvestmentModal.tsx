import React, { useState } from "react";

type Investment = {
  date: Date;
  type: String;
  description: String;
  amount: String;
};

const InvestmentModal = ({
  isOpen,
  onClose,
  type,
  submitFunction,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  submitFunction: (newInvestment: Investment) => void;
  className?: string;
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [interest, setInterest] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    event.preventDefault();

    const newInvestment = {
      date: new Date(),
      type,
      description,
      amount,
    };

    submitFunction(newInvestment);

    setName("");
    setDescription("");
    setAmount("");
    setInterest("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`w-[80%] absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center bg-[#070707] rounded-2xl shadow-lg text-start text-neutral-50 ${className} `}
    >
      <p className="w-full text-sm text-stone-300 font-medium px-4 pt-4">
        Stack {type}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start w-full space-y-4 px-[1rem] py-[1rem]"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <label className="text-sm w-[6rem] text-start text-gray-400">
            Bank
          </label>
          <input
            name="name"
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <label className="text-sm w-[6rem] text-start text-gray-400">
            Description
          </label>
          <input
            name="description"
            type="text"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <label className="text-sm w-[6rem] text-start text-gray-400">
            Amount
          </label>
          <input
            name="amount"
            type="text"
            placeholder="$"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <label className="text-sm w-[6rem] text-start text-gray-400">
            Interest Rate
          </label>
          <input
            name="interest"
            type="text"
            placeholder="%"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
          />
        </div>
        <div className="w-full flex justify-end gap-3 pr-4 pb-4">
          <button
            onClick={onClose}
            className="text-gray-300 bg-zinc-900 py-1.5 px-2.5 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-zinc-800 bg-gray-300 py-1.5 px-2.5 rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvestmentModal;
