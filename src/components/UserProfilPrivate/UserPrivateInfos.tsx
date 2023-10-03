"use client";

import React, { useState } from 'react';
import ModifyButton from '../Buttons/ModifyButton';
import SaveButton from '../Buttons/SaveButton';
import DeleteModal from './DeleteModal';


const UserPrivateInfos = ({ 
    lastname = "Dupont",
    firstname = "Martin",
    birthday = "18/03/1993",
    email = "martindupont@exemple.com",
}) => {
  
  const [lastnameState, setLastname] = useState(lastname);
  const [firstnameState, setFirstname] = useState(firstname);
  const [birthdayState, setBirthday] = useState(birthday);
  const [emailState, setEmail] = useState(email);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // To delete the account
  const handleDeleteConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col md:flex-row border-2 rounded-xl mx-auto max-w-3xl pt-8 pb-5 pr-5 relative'> 
      <div className='w-full mx-auto flex flex-col justify-center ml-4'> 
        <div className="absolute top-2 right-2">
          <ModifyButton onClick={() => setIsEditing(!isEditing)} />
        </div>

        {isEditing ? (
          <>
            <div className='my-1'>
              <span className='font-bold ml-2'>NOM : </span>
              <input 
                type="text" 
                value={lastnameState} 
                onChange={(e) => setLastname(e.target.value)} 
                className='p-2 border rounded' 
              />
            </div>
            <div className='my-1'>
              <span className='font-bold ml-2'>Prénom : </span>
              <input 
                type="text" 
                value={firstnameState} 
                onChange={(e) => setFirstname(e.target.value)} 
                className='p-2 border rounded' 
              />
            </div>
            <div className='my-1'>
              <span className='font-bold ml-2'>Date de naissance : </span>
              <input 
                type="text" 
                value={birthdayState} 
                onChange={(e) => setBirthday(e.target.value)} 
                className='p-2 border rounded' 
              />
            </div>
            <div className='my-1'>
              <span className='font-bold ml-2'>Email : </span>
              <input 
                type="email" 
                value={emailState} 
                onChange={(e) => setEmail(e.target.value)} 
                className='p-2 border rounded' 
              />
            </div>
            <SaveButton onClick={() => setIsEditing(false)} />
          </>
        ) : (
          <>
            <div className='my-1'>
              <span className='font-bold ml-2'>NOM : </span>{lastnameState.toUpperCase()}
            </div>
            <div className='my-1'>
              <span className='font-bold ml-2'>Prénom : </span>{firstnameState}
            </div>
            <div className='my-1'>
              <span className='font-bold ml-2'>Date de naissance : </span>{birthdayState}
            </div>
            <div className='my-1'>
              <span className='font-bold ml-2'>Email : </span>{emailState}
            </div>
          </>
        )}

        <div className='flex justify-between items-center mt-12'>
        <button
            className='underline-offset-1 underline hover:font-bold'
            onClick={() => setIsModalOpen(true)}
        >
            Supprimer mon compte
        </button>
          <p className='text-gray-400'>Informations privées</p>
        </div>

        <DeleteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-bold">Confirmation de la suppresion</h2>
            <p className="text-gray-600">Êtes-vous sûr de vouloir supprimer votre compte ?</p>
            <div className="flex justify-end space-x-4 mt-6">
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                    Annuler
                </button>
                <button 
                    onClick={handleDeleteConfirm}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Confirmer
                </button>
            </div>
        </DeleteModal>
      </div>
    </div>
  );
};

export default UserPrivateInfos;