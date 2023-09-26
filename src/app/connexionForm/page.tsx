"use client";

import ConnexionForm from "@/src/components/Forms/ConnexionForm";
import { useState } from "react";

export default function LoginForm() {

  // State to manage modal display
  const [showModal, setShowModal] = useState(false);
  // State to store the current logged in user
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to open the modal
  const openModal = () => setShowModal(true);
  // Function to close the modal
  const closeModal = () => setShowModal(false);

  // function to handle successful login
  const handleSuccessfullLogin = (user) => {
    setLoggedInUser(user);
    closeModal();
  };

  return (
      <div className="relative min-h-screen">
         <div className={`fixed inset-0 bg-black ${showModal ? 'opacity-5' : 'opacity-0'} z-40 transition-opacity duration-300`}></div>

        {/* Check if user is logged in to show appropriate buttons */}
         {loggedInUser ? (
          <div className="absolute top-0 right-0 p-4 cursor-pointer z-50 sm:text-sm md:text-base lg:text-lg">
            <span className="font-bold pl-4 pt-4 pr-1 pb-4">{loggedInUser}</span>
            <button 
              className="cursor-pointer hover:font-bold sm:text-sm md:text-base lg:text-lg"
              onClick={() => setLoggedInUser(null)}>
                -  Se déconnecter
            </button>
          </div>
         ) : (
          // {/*Sign In button to open login modal*/}
        <h1 onClick={openModal} className="cursor-pointer hover:font-bold absolute top-0 right-0 p-4 z-50 sm:text-sm md:text-base lg:text-lg">
          Sign In
          </h1>
         )}

        <ConnexionForm
          showModal={showModal}
          closeModal={closeModal}
          successfulLogin={handleSuccessfullLogin}
          />
      </div>
    );
}