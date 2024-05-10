'use client';
import React, { ChangeEvent, useState } from "react";
import farmersData from "@/components/data/farmerData";
import AddIcon from "@/components/icons/AddIcon";
import MidNav from "@/components/MidNav";
import Modal from "@/components/Modal";
import Table from "@/components/Table";
import states from "@/components/data/states";
import LGAs from "@/components/data/LGAs";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
// import { useRouter } from 'next/router'

function Page() {
  // const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    type: "FARMER",
    age: "",
    sex: "",
    address: "",
    birthday: "",
    religion: "",
    maritalStatus: "",
    photo: null,
    household_size: "",
    household_number: "",
    lga: "",
    state: ""
  });


  const openModal = () => {
    setIsModalOpen(true);
  };


  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newState = event.target.value;
    setFormData({
      ...formData,
      state: newState,
      lga: ""
    });
  };

  const handleLGAChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      lga: event.target.value
    });
  };
  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleFileChange = async (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const buffer = Buffer.from(reader.result as ArrayBuffer);
        const base64String = buffer.toString('base64');
        setFormData({
          ...formData,
          photo: base64String
        });
      };
      reader.onerror = () => {
        console.error('Error reading file');
      };
    }
  };


  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === "sex") {
      setGender(value);
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requiredFields = ['first_name', 'last_name', 'email', 'phone_number'];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    if (emptyFields.length > 0) {
      const missingFields = emptyFields.join(', ');
      toast.error(`Please fill in the following required fields: ${missingFields}`);
      return;
    }

    // Format birthday to ISO-8601 format
    const isoBirthday = formData.birthday ? new Date(formData.birthday).toISOString() : '';

    try {
      const createdItem = await createNewItem({
        ...formData,
        birthday: isoBirthday
      });
      console.log('Created item:', createdItem);
      if (createdItem && createdItem.code === 'ERR_INVALID_ARG_TYPE') {
        toast.error('Invalid Creation');
      } else {
        toast.success('Item created successfully');
        closeModal();
      }
    } catch (error) {
      console.error('Error creating item:', error);
      toast.error('Error creating item');
    }
  };


  const createNewItem = async (data: any) => {
    try {
      setLoading(true);
      const response = await fetch('https://ubiquitous-broccoli-v6l2.onrender.com/farmer/Createfarmer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setLoading(false);
      console.log(responseData)
      return responseData;
    } catch (error) {
      console.error('Error creating item:', error);
      setLoading(false);
      throw error;
    }
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const headers: string[] = ["# Farmer ID", "Farmer Name", "Gender", "DOB", "LGA", "Phone Number"];

  return (
    <div className=" ">
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] text-black font-bold "> Farmers <br /><span className="text-lg -mb-4 text-slate-400 font-normal" >Farmer</span></h2>
        <div className="mr-14">
          <button className="flex items-center bg-secondary p-3 rounded-2xl gap-3" onClick={openModal}>
            <AddIcon /> <p className="text-white"> Add New Farmer</p>
          </button>
        </div>
      </div>
      <MidNav />
      <Table headers={headers} data={farmersData} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        heading={"Add New Farmer"}
      >
        <p className="mt-5 font-semibold">Farmer Information</p>
        <hr />
        <form onSubmit={handleCreate}>
          <div>
            <label className="font-bold text-sm">
              Surname <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              placeholder="Input Surname"
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />
          </div>
          <div>
            <label className="font-bold text-sm">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              placeholder="Input First Name"
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />
          </div>
          <div className="flex justify-between">
            <div className="w-[48%]">
              <label className="font-bold text-sm">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Input Email"
                className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
              />
            </div>
            <div className="w-[48%]">
              <label className="font-bold text-sm">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                placeholder="Input Phone Number"
                className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
              />
            </div>
          </div>
          <div>
            <label className="font-bold text-sm">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Input Password"
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />
          </div>
          <div className="py-3 flex justify-between">
            <div className="flex flex-col">
              <label className="font-bold text-sm">Gender</label>
              <select
                name="sex"
                value={gender}
                onChange={handleInputChange}
                className="border border-slate-400 p-2 rounded-xl outline-none"
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-sm">D.O.B</label>
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                placeholder="Input D.O.B"
                className="border border-slate-400 p-2 rounded-xl outline-none"
              />
            </div>
          </div>
          <div>
            <label className="font-bold text-sm">Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files)}
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-sm">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Input Address"
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />
          </div>
          <div>
            <label className="font-bold text-sm">
              Birthday
            </label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Input Age"
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />

          </div>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col">
              <label className="font-bold text-sm">Religion</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                className="border border-slate-400 p-2 rounded-xl outline-none"
              >
                <option value="">Select Religion</option>
                <option value="CHRISTIAN">Christian</option>
                <option value="MUSLIM">Muslim</option>
                <option value="NOT_SPECIFIED">Not Specified</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="font-bold text-sm">Marital  Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                className="border border-slate-400 p-2 rounded-xl outline-none"
              >
                <option value="">Select</option>
                <option value="MARRIED">Married</option>
                <option value="UNMARRIED">Single</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-sm">
              Household Size
            </label>
            <input
              type="number"
              name="household_size"
              value={formData.household_size}
              onChange={handleInputChange}
              placeholder="Input Household Size"
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />
          </div>
          <div>
            <label className="font-bold text-sm">
              Household Number
            </label>
            <input
              type="number"
              name="household_number"
              value={formData.household_number}
              onChange={handleInputChange}
              placeholder="Input Household Number"
              className="text-sm border border-slate-400 p-2 w-full rounded-xl outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm">State</label>
            <select
              value={formData.state}
              onChange={handleStateChange}
              className="border border-slate-400 p-2 rounded-xl outline-none"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* LGA dropdown */}
          <div className="flex flex-col">
            <label className="font-bold text-sm">LGA</label>
            <select
              value={formData.lga}
              onChange={handleLGAChange}
              className="border border-slate-400 p-2 rounded-xl outline-none"
            >
              <option value="">Select LGA</option>
              {formData.state &&
                LGAs[formData.state].map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
            </select>
          </div>


          <div className="bg-secondary rounded-xl my-2 p-2 text-white flex items-center w-full justify-center cursor-pointer">
            {!loading &&
              <>
                {/* @ts-ignore */}
                <AddIcon className="mx-2" />
              </>
            }
            <button className="ml-2" type="submit" disabled={loading}>{loading ? <div className="flex items-center animate-pulse"><ClipLoader color={'#ffffff'} loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />Loading...</div> : 'Submit'}</button>
          </div>
          <div className="border rounded-xl cursor-pointer my-2 p-2 text-white flex items-center w-full justify-center">
            <p className="text-slate-400" onClick={closeModal}>Cancel</p>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Page;
