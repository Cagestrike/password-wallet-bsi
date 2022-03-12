import {FormEvent} from 'react'

export default function LoginForm({
                                      errorMessage,
                                      onSubmit,
                                  }: {
    errorMessage: string
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
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
                    <input type="password" id="password-element" name="password" required className="slds-input"/>
                </div>
            </div>

            <div className="slds-align_absolute-center">
                <button type="submit" className="slds-m-around_small slds-button slds-button_brand">Login</button>
            </div>

            {errorMessage && <p className="slds-text-color_destructive">{errorMessage}</p>}
        </form>
    )
}
