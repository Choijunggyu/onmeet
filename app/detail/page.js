'use client'

import '../materialize.css'
import { useState } from 'react';
import Modal from './modal/ApplyModal';

export default function ParentComponent(){
    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => {
            setIsModalOpen(true);
          };
    
    return(
        <div>
            <button onClick={openModal}>신청하기</button>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>

    )
}
