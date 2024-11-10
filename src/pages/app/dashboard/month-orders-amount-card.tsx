import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function MonthOrderAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos (mês)
        </CardTitle>
        <Utensils className="h-4 w-4 text-primary-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">320</span>
        <p className="text-xs text-muted-foreground mt-1">
          <span className="text-emerald-500 dark:text-emerald-400">+8%</span>
          {" "}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
}
