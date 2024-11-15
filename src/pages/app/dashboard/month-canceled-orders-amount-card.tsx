import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-primary-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">24</span>
        <p className="text-xs text-muted-foreground mt-1">
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span>
          {" "}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
}
