import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

interface AlertProps {
  isOpen: boolean; // Control dialog visibility externally
  onClose: () => void; // Close action
  onConfirm: () => void; // Confirm action
  title: string; // Dynamic title
  description: string; // Dynamic description
  confirmText?: string; // Optional: Customize confirm button text
  cancelText?: string; // Optional: Customize cancel button text
}

const Alert: React.FC<AlertProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Replace the cart with the new product(s).",
  cancelText = "Retain the current cart and cancel the addition.",
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent style={{ maxWidth: "800px", padding: "2rem" }}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
