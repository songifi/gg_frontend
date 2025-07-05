import { X, ChevronLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  slideFromBottom?: boolean
  fullHeight?: boolean
  backButton?: boolean
  title?: string
  onBack?: () => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  slideFromBottom,
  fullHeight,
  backButton,
  title,
  onBack,
}) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10)
    } else {
      setShow(false)
    }
  }, [isOpen])
  if (!isOpen) return null
  return (
    <div
      className={`fixed inset-0 z-50  flex ${slideFromBottom ? 'items-end justify-center px-0' : 'items-center justify-end lg:px-20'} overflow-auto bg-[#090909]/10 backdrop-blur-[1px]`}
    >
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-label="Close modal overlay"
      />
      {/* Modal content */}
      <div
        className={
          fullHeight
            ? 'fixed inset-0 z-50 w-full h-full max-w-none overflow-y-auto bg-white shadow-lg rounded-none '
            : slideFromBottom
              ? `fixed relative right-0 bottom-0 left-0 z-50 w-full max-w-lg overflow-y-auto bg-white shadow-lg rounded-t-4xl p-4 transition-all duration-300 ease-in-out md:static md:right-auto md:bottom-auto md:left-auto md:h-full md:translate-y-0 md:rounded-xl md:p-6 md:opacity-100 ${show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`
              : 'fixed inset-0 z-50 w-full h-full max-w-none overflow-y-auto bg-white shadow-lg rounded-none p-0 md:w-[80vw] md:rounded-xl md:ml-auto lg:max-w-md lg:ml-auto lg:mr-10 lg:rounded-xl'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full lg:p-6">
          {backButton ? (
            <div className="mb-6 flex w-full items-center justify-between p-2">
              <button
                className="flex items-center justify-center"
                onClick={onBack || onClose}
                aria-label="Back"
              >
                <ChevronLeft className="text-#08090A h-5 w-5" />
              </button>
              <div className="flex flex-1 justify-center">
                <span className="text-center text-base font-semibold">
                  {title}
                </span>
              </div>
              {/* Spacer to balance the chevron */}
            </div>
          ) : (
            <button
              className="absolute top-4 right-4 flex h-5 w-5 items-center
               justify-center rounded-full border
              border-[#737373] text-gray-400 hover:text-gray-600"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <div className="flex-1 overflow-y-auto">
            {children}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
