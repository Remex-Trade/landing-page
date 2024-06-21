"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormattedOpenLimitOrders,
  FormattedOpenTrades,
} from "@/contracts-integration/hooks/useGetUserTrades";
import { useHandleUpdateSLTP } from "@/contracts-integration/hooks/useHandleUpdateSlTP";

const UpdateSlPl = ({
  trade,
  children
}: {
  trade: FormattedOpenTrades | FormattedOpenLimitOrders;
  children: React.ReactNode
}) => {
  // console.log("trade", trade);
  const handleUpdateSLTPMutation = useHandleUpdateSLTP();
  const loading = handleUpdateSLTPMutation.isPending;
  const [inputs, setInputs] = useState({
    takeProfit: trade.tp,
    stopLoss: trade.sl,
  });

  useEffect(() => {
    setInputs({
      takeProfit: trade.tp,
      stopLoss: trade.sl,
    });
  }, [trade?.tp, trade?.sl]);

  function setInputWithKey(key: keyof typeof inputs, value: string) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
         {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#2A2A2B] rounded-xl text-slate-100 border-0">
          <DialogHeader>
            <DialogTitle>Update SL/PL</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col p-4 gap-2 ">
            <div>Stop Loss</div>
            <div className="flex gap-2 items-center justify-between mb-2">
              <input
                type="number"
                value={inputs.stopLoss}
                onChange={(e) => setInputWithKey("stopLoss", e.target.value)}
                className="h-10 rounded-md bg-[#3B3A3D] text-center flex-1"
              />
              <button
                className="px-6 py-2 bg-[#0Cf3c4] rounded-lg text-green-900"
                onClick={() =>
                  handleUpdateSLTPMutation.mutate({
                    trade,
                    value: inputs.stopLoss,
                    updateType: "SL",
                  })
                }
                disabled={loading}
              >
                Update
              </button>
            </div>
            <div>Take Profit</div>
            <div className="flex gap-2 items-center justify-between">
              <input
                type="number"
                value={inputs.takeProfit}
                onChange={(e) => setInputWithKey("takeProfit", e.target.value)}
                className="h-10 rounded-md bg-[#3B3A3D] text-center flex-1"
              />
              <button
                className="px-6 py-2 bg-[#0Cf3c4] rounded-lg text-green-900"
                onClick={() =>
                  handleUpdateSLTPMutation.mutate({
                    trade,
                    value: inputs.takeProfit,
                    updateType: "TP",
                  })
                }
                disabled={loading}
              >
                Update
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateSlPl;
