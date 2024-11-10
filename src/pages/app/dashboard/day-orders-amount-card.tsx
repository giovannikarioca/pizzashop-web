import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos (dia)
        </CardTitle>
        <Utensils className="h-4 w-4 text-primary-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">29</span>
        <p className="text-xs text-muted-foreground mt-1">
          <span className="text-rose-500 dark:text-rose-400">-2.6%</span>
          {" "}
          em relação a ontem
        </p>
      </CardContent>
    </Card>
  );
}
