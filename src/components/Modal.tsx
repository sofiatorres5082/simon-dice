import React from "react";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode; // Para poder mostrar contenido dinámico
}

export default function Modal({
  showModal,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-title">
          <h2>{title}</h2>
          {children}
        </div>
        <button className="close-button" onClick={onClose}>
        <img src="./public/images/cerrarIcon.png" alt="Cerrar" style={{ width: '50px', height: '50px' }} />
        </button>
      </div>
    </div>
  );
}
