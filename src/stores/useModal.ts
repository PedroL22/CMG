import { create } from 'zustand'
import { StaticImageData } from 'next/image'

interface UseModalType {
  modal: boolean
  modalImage: StaticImageData | undefined
  modalTitle: string
  setModal: (value: boolean) => void
  setModalImage: (value: StaticImageData) => void
  setModalTitle: (value: string) => void
}

const useModal = create<UseModalType>((set) => ({
  modal: false,
  modalImage: undefined,
  modalTitle: '',

  setModal: (value: boolean) => set(() => ({ modal: value })),
  setModalImage: (value: StaticImageData) => set(() => ({ modalImage: value })),
  setModalTitle: (value: string) => set(() => ({ modalTitle: value })),
}))

export default useModal
