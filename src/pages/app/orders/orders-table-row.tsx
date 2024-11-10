import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, Trash } from "lucide-react";
import { OrderDetails } from "./orders-details";

export interface OrderTableRowProps {
  orderNumber?: string;
}

export function OrderTableRow({
  orderNumber = "k24oksadkk22",
}: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="xs" variant="outline">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails orderNumber={orderNumber} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        {orderNumber}
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell className="">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Giovanni Ramos Costa</TableCell>
      <TableCell className="font-medium">R$ 200,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <Trash className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
    </TableRow>
  );
}
