interface LogoutPopUpProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const LogoutPopUp = ({ isOpen, onCancel, onConfirm }: LogoutPopUpProps) => {
  return (
    <div
      className={`fixed inset-0  bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 9999 }} 
    >
      <div
        className={`fixed inset-0  bg-opacity-50 backdrop-blur-sm`}
        style={{ zIndex: -1 }} 
      ></div>
      
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4 text-black">Are you sure you want to logout?</h3>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
