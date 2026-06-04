import React from "react";
import { X } from "lucide-react";

function Modal({
  title,
  data,
  onClose,
  onSubmit,
  actionText,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <div className="w-[700px] max-w-[95vw] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden animate-in fade-in zoom-in">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b bg-gradient-to-r from-blue-50 to-white">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Update the details below and save your changes.
            </p>
          </div>

          <button
            onClick={onClose}
            className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 min-h-[300px] max-h-[500px] overflow-y-auto">
          {data}
        </div>

        {/* Footer */}
        <div className="flex justify-between gap-3 px-8 py-5 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className={`px-6 py-2.5 rounded-xl text-white font-semibold shadow-lg transition cursor-pointer
              ${
                actionText === "Delete"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;