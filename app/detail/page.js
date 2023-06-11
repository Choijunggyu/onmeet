'use client'

import '../materialize.css'
import { useState } from 'react';
import Modal from './modal/ApplyModal';

export default function ParentComponent(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
            setIsModalOpen(true);
          };
    
    return(
        <div>
            <button className='mexavas-blue waves-effect waves-light btn' onClick={openModal}>신청하기</button>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>

    )
}
