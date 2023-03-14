import useModal from '@/stores/useModal'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function ImageModal(props: any) {
  const { modalImage, modalTitle, setModal } = useModal()

  const handleClose = () => {
    setModal(false)
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='Modal image'
      centered
    >
      <Modal.Header
        closeButton
        onClick={handleClose}
      >
        <Modal.Title id='Modal image'>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='flex justify-center'>
        {modalImage && (
          <Image
            src={modalImage}
            alt={modalTitle}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  )
}
