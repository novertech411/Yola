import React, { useState } from 'react';
import SearchIcon from "@/components/icons/SearchIcon";
import FilterIcon from './icons/FilterIcon';
import EditIcon from './icons/EditIcon';
import Modal from './Modal';

const MidNav = () => {
  const [isOpen, setIsModal] = useState<boolean>(false)
  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="relative bg-white w-[95%] border rounded-t-2xl flex justify-between items-center ">
      <div className="relative p-3">
        <input type="text" placeholder="search " className="p-2 pl-8 h-9 rounded-2xl border focus:outline-0 text-slate-400" />
        <div className="absolute inset-y-0 left-3 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
      </div>
      <div className="flex " >
        <span className="cursor-pointer mr-5 border p-2 rounded-2xl hover:opacity-40 transition-all ease-in-out duration-500">
          <FilterIcon />
        </span>

        <span className="cursor-pointer mr-5 border p-2 rounded-2xl hover:opacity-40 transition-all ease-in-out duration-500" onClick={openModal}>
          <EditIcon />
        </span>
      </div>
      <Modal

        isOpen={isOpen}
        onClose={closeModal}
        heading={"Edit Component"}
      >
        <h2></h2>
      </Modal>
    </div>
  );
};

export default MidNav;
