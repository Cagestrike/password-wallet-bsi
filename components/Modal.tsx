import {MouseEventHandler} from "react";

export default function Modal({
                                  children,
                                  footer,
                                  headerText,
                                  show,
                                  handleClose,
                              }: { children: React.ReactNode, headerText: string, show: boolean, footer: React.ReactNode, handleClose: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <>
            {show && (
                <>
                    <section role="dialog" aria-labelledby="modal-heading-01" aria-modal="true"
                             className="slds-modal slds-fade-in-open modal">
                        <div className="slds-modal__container">
                            <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
                                    onClick={handleClose}>
                                X
                                <span className="slds-assistive-text">Cancel and close</span>
                            </button>
                            <div className="slds-modal__header">
                                <h1 id="modal-heading-01" className="slds-modal__title slds-hyphenate">{headerText}</h1>
                            </div>
                            <div className="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
                                {children}
                            </div>
                            {footer}
                        </div>
                    </section>
                    <div className="slds-backdrop slds-backdrop_open" role="presentation"/>
                </>
            )}
            <style jsx >{`
                .modal {
                z-index: 10000;
                }
              `}</style>
        </>
    )

}
