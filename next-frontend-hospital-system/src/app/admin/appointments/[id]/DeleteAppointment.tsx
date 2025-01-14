"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface DeleteProps {
    id: number;
}

const DeleteAppointmentButton: React.FC<DeleteProps> = ({ id }) => {
    const router = useRouter();
    const handleDelete = async () => {
        try {
            const result = await fetch(
                `http://localhost:5222/api/appointment/${id}`,
                { method: "DELETE" }
            );

            if (result.ok) router.push("/admin/appointments");

            throw new Error(await result.json());
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Button variant={"destructive"} onClick={handleDelete}>
            Delete
        </Button>
    );
};

export default DeleteAppointmentButton;
