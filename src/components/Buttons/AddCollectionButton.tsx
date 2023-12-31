/* eslint-disable no-unused-vars */

'use client';

import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { BiSolidAddToQueue } from 'react-icons/bi';
import axiosInstance from '@/src/utils/axios';

interface AddCollectionButtonProps {
    userId: string;
    reGetCollections: (id: string) => void;
}

export default function AddCollectionButton({ userId, reGetCollections }: AddCollectionButtonProps) {
  const [isInput, setIsInput] = useState(false);
  const [title, setTitle] = useState('');

  const showInput = () => {
    setIsInput(true);
  };

  const addCollection = () => {
    setIsInput(false);
    axiosInstance.post(`/users/${userId}/collections`, {
      title,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      reGetCollections(userId);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      {isInput
        ? (
          <div className="flex items-center self-start gap-2 py-4 w-[90vw] sm:w-[85vw] mx-auto sm:py-0 text-lg font-bold">
            <BiSolidAddToQueue />
            <OutsideClickHandler onOutsideClick={() => setIsInput(false)}>
              <input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="outline-none w-[70%] sm:w-[60%] pl-2 border-2 border-gray-400 rounded-md"
                type="text"
                placeholder="Titre de la collection"
              />
              <button type="button" onClick={addCollection} className="ml-2 px-2 bg-slate-100 border-2 text-m font-medium border-gray-400 rounded">Ajouter</button>
            </OutsideClickHandler>
          </div>
        )
        : (
          <button type="button" onClick={showInput} className="flex items-center self-start sm:ml-[7%] gap-2 py-4 w-[90vw] sm:w-[250px] mx-auto sm:mx-0 sm:py-0 text-lg font-bold">
            <BiSolidAddToQueue />
            {' '}
            Ajouter une collection
          </button>
        )}
    </>
  );
}
