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
  if (!isOpen) return null;

  return (
    <div
      className={`w-[80%] absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center bg-[#070707] rounded-2xl shadow-lg text-start text-neutral-50 ${className} `}
    >
      <p className="w-full text-sm text-stone-300 font-medium px-4 pt-4">
        Stack {type}
      </p>

      {type === "Savings" && (
        <SavingsForm
          onClose={onClose}
          type={type}
          submitFunction={submitFunction}
        />
      )}

      {type === "Crypto" && (
        <CryptoForm
          onClose={onClose}
          type={type}
          submitFunction={submitFunction}
        />
      )}

      {type === "Stock" && (
        <StockForm
          onClose={onClose}
          type={type}
          submitFunction={submitFunction}
        />
      )}
    </div>
  );
};

const SavingsForm = ({ onClose, type, submitFunction }) => {
  const [bank, setBank] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [interest, setInterest] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newInvestment = {
      id: Date.now() + Math.random().toString(36).substring(2, 9),
      date: new Date(),
      type,
      description,
      amount,
    };

    submitFunction(newInvestment);

    setBank("");
    setDescription("");
    setAmount("");
    setInterest("");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full space-y-4 px-[1rem] py-[1rem]"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Bank
        </label>
        <input
          name="bank"
          type="text"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
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
          type="number"
          placeholder="$"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min={0}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Interest Rate
        </label>
        <input
          name="interest"
          type="number"
          placeholder="%"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="w-full flex justify-end gap-3 pr-4 pb-4">
        <button
          onClick={onClose}
          className="cursor-pointer text-gray-300 bg-zinc-900 py-1.5 px-2.5 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer text-zinc-800 bg-gray-300 py-1.5 px-2.5 rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};

const CryptoForm = ({ onClose, type, submitFunction }) => {
  const [ticker, setTicker] = useState<string>("");
  const [equity, setEquity] = useState<number>(0);
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newInvestment = {
      id: Date.now() + Math.random().toString(36).substring(2, 9),
      date: new Date(),
      type,
      ticker,
      equity,
      amount,
    };

    submitFunction(newInvestment);

    setTicker("");
    setEquity(0);
    setAmount("");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full space-y-4 px-[1rem] py-[1rem]"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Ticker
        </label>
        <input
          name="ticker"
          type="text"
          placeholder=""
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Equity (Shares)
        </label>
        <input
          name="equity"
          type="number"
          value={equity}
          onChange={(e) => setEquity(Number(e.target.value))}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Amount
        </label>
        <input
          name="amount"
          type="number"
          placeholder="$"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="w-full flex justify-end gap-3 pr-4 pb-4">
        <button
          onClick={onClose}
          className="cursor-pointer text-gray-300 bg-zinc-900 py-1.5 px-2.5 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer text-zinc-800 bg-gray-300 py-1.5 px-2.5 rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};

const StockForm = ({ onClose, type, submitFunction }) => {
  const [ticker, setTicker] = useState<string>("");
  const [equity, setEquity] = useState<number>();
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newInvestment = {
      id: Date.now() + Math.random().toString(36).substring(2, 9),
      date: new Date(),
      type,
      ticker,
      equity,
      amount,
    };

    submitFunction(newInvestment);

    setTicker("");
    setEquity(0);
    setAmount("");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full space-y-4 px-[1rem] py-[1rem]"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Ticker
        </label>
        <input
          name="ticker"
          type="text"
          placeholder=""
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Equity (Shares)
        </label>
        <input
          name="equity"
          type="number"
          value={equity}
          onChange={(e) => setEquity(Number(e.target.value))}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <label className="text-sm w-[6rem] text-start text-gray-400">
          Amount
        </label>
        <input
          name="amount"
          type="number"
          placeholder="$"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
        />
      </div>
      <div className="w-full flex justify-end gap-3 pr-4 pb-4">
        <button
          onClick={onClose}
          className="cursor-pointer text-gray-300 bg-zinc-900 py-1.5 px-2.5 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer text-zinc-800 bg-gray-300 py-1.5 px-2.5 rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default InvestmentModal;
