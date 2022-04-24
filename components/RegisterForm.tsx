import { FormEvent } from 'react'

export default function RegisterForm({
    errorMessage,
    successMessage,
    onSubmit,
}: {
    errorMessage: string
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    successMessage: string
}) {
    return (
        <form onSubmit={onSubmit}>
            <div className="slds-form-element slds-p-around--x-small">
                <label className="slds-form-element__label" htmlFor="login-element">Login</label>
                <div className="slds-form-element__control">
                    <input type="text" id="login-element" name="login" required className="slds-input"/>
                </div>
            </div>
            <div className="slds-form-element slds-p-around--x-small">
                <label className="slds-form-element__label" htmlFor="password-element">Password</label>
                <div className="slds-form-element__control">
                    <input type="text" id="password-element" name="password" required className="slds-input"/>
                </div>
            </div>
            <div className="slds-form-element slds-p-around--x-small">
                <label className="slds-form-element__label" htmlFor="password-confirm-element">Confirm password</label>
                <div className="slds-form-element__control">
                    <input type="text" id="password-confirm-element" name="password_confirm" required className="slds-input"/>
                </div>
            </div>
            <div className="slds-form-element slds-p-around--x-small">
                <div className="slds-form-element__control">
                    <div className="slds-checkbox">
                        <input type="checkbox" id="checkbox-unique-id-81" name="is_password_kept_as_hash" defaultChecked={true} />
                        <label className="slds-checkbox__label" htmlFor="checkbox-unique-id-81">
                            <span className="slds-checkbox_faux"/>
                            <span className="slds-form-element__label">Is password kept as hash?</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="slds-align_absolute-center">
                <button type="submit" className="slds-m-around_small slds-button slds-button_brand">Register</button>
            </div>

            {errorMessage && <p className="slds-text-color_destructive">{errorMessage}</p>}
            {successMessage && <p className="slds-text-color_success">{successMessage}</p>}
        </form>
    )
}
