'use client'
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const PaymentErrorModal = ({isOpen, setIsOpen}: IProps) => {
  if(!isOpen) return <></>

  return (
    <ModalContentWrapper 
      title="Упс..."
      description={<>Ваша оплата не прошла.<br/>Похоже что-то пошло не так.</>}
      onClick={() => setIsOpen(false)} 
      closeModal={() => setIsOpen(false)} 
      textButton="Попробовать снова"
    />
  )
};