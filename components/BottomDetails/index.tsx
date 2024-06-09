import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { positionsColumns } from "./columns/positions";
import { DataTable } from "../data-table";
import { limitOrdersColumns } from "./columns/limitOrders";
import { balanceColumns } from "./columns/balance";
import { triggerOrdersColumns } from "./columns/triggerOrder";
import { realisedPnlColumns } from "./columns/realisedPnl";
import { historyColumns } from "./columns/history";

function Devider() {
  return (
    <div className="bg-overlay-divider/10 w-px min-w-[1px] h-4 last:hidden" />
  );
}

// w-full h-fit flex border border-[#2c2d2d]

export default function BottomDetails() {
  return (
    <div className="pb-10 pt-3 hidden sc1:flex sc1:py-0 overflow-hidden  flex-col gap-1 justify-center dark:bg-[#0F0E0E] bg-white dark:border-[#2C2D2D] shadow-lg border-[1px] w-full sc1:h-full h-80">
      <div className="rounded-lg flex-1 overflow-hidden">
        <Tabs defaultValue="positions">
          <TabsList className="w-full h-fit flex items-start border border-[#2c2d2d]">
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <Devider />
            <TabsTrigger value="balances">Balances</TabsTrigger>
            <Devider />
            <TabsTrigger value="limit_orders">Limit Orders</TabsTrigger>
            <Devider />
            <TabsTrigger value="trigger_orders">Trigger Orders</TabsTrigger>
            <Devider />
            <TabsTrigger value="history">History</TabsTrigger>
            <Devider />
            <TabsTrigger value="realized_pnl">Realized PnL</TabsTrigger>
          </TabsList>
          <div className="min-h-[400px]">
            <TabsContent value="positions">
              <DataTable
                noDataMessage="Your Perp positions will appear here"
                columns={positionsColumns}
                data={[]}
              />
            </TabsContent>
            <TabsContent value="limit_orders">
              <DataTable
                noDataMessage="Your open limit orders will appear here"
                columns={limitOrdersColumns}
                data={[]}
              />
            </TabsContent>
            <TabsContent value="balances">
              <DataTable
                noDataMessage="Balances will appear here"
                columns={balanceColumns}
                data={[]}
              />
            </TabsContent>
            <TabsContent value="trigger_orders">
              <DataTable
                noDataMessage="Your open trigger orders will appear here"
                columns={triggerOrdersColumns}
                data={[]}
              />
            </TabsContent>
            <TabsContent value="history">
              <DataTable
                noDataMessage="Your trades will appear here"
                columns={historyColumns}
                data={[]}
              />
            </TabsContent>
            <TabsContent value="realized_pnl">
              <DataTable
                noDataMessage="Your realized PnL will appear here"
                columns={realisedPnlColumns}
                data={[]}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
