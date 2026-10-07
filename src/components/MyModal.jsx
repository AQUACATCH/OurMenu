import { Modal } from '@heroui/react'
import React from 'react'

export const MyModal = ({selectedFood, isOpen, setIsOpen}) => {
    return (
        <div>
            <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Container placement='center'>
                    <Modal.Dialog className="sm:max-w-[360px] md:w-[80vw] max-h-[80vw] md:max-w-none">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className='capitalize text-center'>{selectedFood.title}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <img className='block max-h-[70vh] w-full object-contain h-auto' src={"/images/"+selectedFood.img} alt={selectedFood.title} />
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </div>
    )
}
