import React, {FormEvent, MouseEventHandler} from "react";
import Modal from "components/Modal";

export default function AddPasswordModal({
                                             show,
                                             handleClose,
                                             onSubmit,
                                             errorMessage,
                                             successMessage,
                                         }: {
    show: boolean
    handleClose: MouseEventHandler<HTMLButtonElement>
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    errorMessage: string,
    successMessage: string
}) {

    return (
        <>
            <form onSubmit={onSubmit}>
                <Modal headerText="Add Password" show={show} handleClose={handleClose} footer={(
                    <div className="slds-modal__footer">
                        <button className="slds-button slds-button_neutral" aria-label="Cancel and close"
                                onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="slds-button slds-button_brand" type="submit">Save</button>
                    </div>
                )}>
                    <div className="slds-form-element slds-p-around--x-small">
                        <label className="slds-form-element__label" htmlFor="web-address-element">Web Addresss</label>
                        <div className="slds-form-element__control">
                            <input type="text" id="web-address-element" name="web_address" required className="slds-input"/>
                        </div>
                    </div>
                    <div className="slds-form-element slds-p-around--x-small">
                        <label className="slds-form-element__label" htmlFor="login-element">Login</label>
                        <div className="slds-form-element__control">
                            <input type="text" id="login-element" name="login" required
                                   className="slds-input"/>
                        </div>
                    </div>
                    <div className="slds-form-element slds-p-around--x-small">
                        <label className="slds-form-element__label" htmlFor="password-element">Password</label>
                        <div className="slds-form-element__control">
                            <input type="password" id="password-element" name="password" required
                                   className="slds-input"/>
                        </div>
                    </div>
                    <div className="slds-form-element slds-p-around--x-small">
                        <label className="slds-form-element__label" htmlFor="description-element">Description</label>
                        <div className="slds-form-element__control">
                            <input type="text" id="description" name="description"
                                   className="slds-input"/>
                        </div>
                    </div>
                    {errorMessage && <p className="slds-text-color_destructive">{errorMessage}</p>}
                    {successMessage && <p className="slds-text-color_success">{successMessage}</p>}

                </Modal>
            </form>
        </>
    )
}
