import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateDoctorForm from "@/components/form/CreateDoctorForm";
import CreateServiceForm from "@/components/form/CreateServiceForm";
import { DialogTitle } from "@radix-ui/react-dialog";

interface Data {
  texto: string;
  doctorId?: number;
  serviceId?: number;
  color: "bg-green-600" | "bg-teal-500";
  select: boolean;
}

export function Modal(data: Data) {
  return (
    <Dialog>
      <DialogTrigger asChild className="mr-3">
        <Button className={data.color}>{data.texto}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Formulario</DialogTitle>
        {data.select ? (
          <CreateDoctorForm doctorId={data.doctorId} />
        ) : (
          <CreateServiceForm serviceId={data.serviceId} />
        )}
      </DialogContent>
    </Dialog>
  );
}
