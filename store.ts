import create from 'zustand'

export const useStore = create((set) => ({
  isReadyToExplore: false,
  setReadyToExplore: () => set((state: any) => ({ isReadyToExplore: true })),

  isAnimating: false,
  setIsAnimating: () => set((state: any) => ({ isAnimating: true })),

  isAllSet: false,
  setAllSet: () => set((state: any) => ({ isAllSet: true })),

  isModalOpen: false,
  modalContent: null,
  closeModal: () => set((state: any) => ({ isModalOpen: false })),
  openModal: (content: any) =>
    set((state: any) => {
      return {
        modalContent: content,
        isModalOpen: true,
      }
    }),

  defaultAngleCallback: () => {},
  setDefaultAngleCallback: (cb: () => void) =>
    set((state: any) => ({
      defaultAngleCallback: () => {
        state.defaultAngleCallback()
        cb()
      },
    })),
}))
