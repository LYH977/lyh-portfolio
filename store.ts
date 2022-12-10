import create from 'zustand'

export const useStore = create((set) => ({
  isReadyToExplore: false,
  setReadyToExplore: () => set((state: any) => ({ isReadyToExplore: true })),

  isAnimating: false,
  setIsAnimating: () => set((state: any) => ({ isAnimating: true })),

  isAllSet: false,
  setAllSet: () => set((state: any) => ({ isAllSet: true })),

  totalLoadedSecondaryModel: 0,
  incrementSecondaryModel: () =>
    set((state: any) => ({
      totalLoadedSecondaryModel: state.totalLoadedSecondaryModel + 1,
    })),

  isModalOpen: false,
  modalContent: null,
  isReadyToRenderSecondary: false,
  closeModal: () => set((state: any) => ({ isModalOpen: false })),
  openModal: (content: any) =>
    set((state: any) => {
      const isReadyToRenderSecondary = state.totalLoadedSecondaryModel === 4

      return {
        modalContent: content,
        isModalOpen: true,
        isReadyToRenderSecondary,
      }
    }),

  defaultAngleCallback: () => {},
  setDefaultAngleCallback: (cb: () => void) =>
    set((state: any) => ({ defaultAngleCallback: cb })),
}))
