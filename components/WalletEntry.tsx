import React, {useState} from "react";
import fetchJson, {FetchError} from "../lib/fetchJson";

export default function WalletEntry({
                                        password,
                                    }: {
    password: any,
}) {
    const [isDecrypted, setIsDecrypted] = useState(false)
    const [decryptedPassword, setDecryptedPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const encrypt = () => {
        setIsDecrypted(false);
        setDecryptedPassword('');
    }

    const decrypt = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const result: any = await fetchJson(`/api/decryptPassword/${password.id}`, {
                method: 'GET',
            })
            setIsDecrypted(true)
            setDecryptedPassword(result.decryptedPassword);
            // handleCloseAddPasswordModal(null);
        } catch (error) {
            if (error instanceof FetchError) {
                setErrorMessage(error.data.message)
            } else {
                console.error('An unexpected error happened:', error)
            }
        }
    }

    return (
        <article className="slds-card">
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__body">
                        <h2 className="slds-card__header-title">
                            <a href="#" className="slds-card__header-link slds-truncate" title="Accounts">
                                <span>{password.web_address}</span>
                                {errorMessage && <p className="slds-text-color_destructive">{errorMessage}</p>}
                            </a>
                        </h2>
                    </div>
                    <div className="slds-no-flex">
                        {
                            !isDecrypted ?
                                (<button className="slds-button slds-button_neutral" onClick={(e) => decrypt(e)}>Decrypt</button>)
                                : (<button className="slds-button slds-button_neutral" onClick={encrypt}>Hide</button>)
                        }
                    </div>
                </header>
            </div>
            <div className="slds-card__body slds-card__body_inner">
                <div className="slds-form" role="list">
                    <div className="slds-form__row">
                        <div className="slds-form__item" role="listitem">
                            <div className="slds-form-element slds-form-element_stacked slds-is-editing">
                                <label className="slds-form-element__label" htmlFor="stacked-form-element-id-01">
                                    Login
                                </label>
                                <div className="slds-form-element__control">
                                    <input type="text" id="stacked-form-element-id-01" readOnly
                                           className="slds-input" value={password.login}/>
                                </div>
                            </div>
                        </div>
                        <div className="slds-form__item" role="listitem">
                            <div className="slds-form-element slds-form-element_stacked slds-is-editing">
                                <label className="slds-form-element__label" htmlFor="stacked-combobox-id-01"
                                       id="combobox-label-id-18">Password</label>
                                <div className="slds-form-element__control">
                                    <div className="slds-combobox_container">
                                        <div
                                            className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                                            <div
                                                className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right">
                                                <input type="text"
                                                       className="slds-input slds-combobox__input slds-combobox__input-value"
                                                       readOnly
                                                       value={isDecrypted ? decryptedPassword : password.password}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slds-form__row">
                        <div className="slds-form__item" role="listitem">
                            <div
                                className="slds-form-element slds-form-element_stacked slds-is-editing slds-form-element_1-col">
                                <label className="slds-form-element__label"
                                       htmlFor="stacked-form-element-id-14">Description</label>
                                <div className="slds-form-element__control">
                                    <input type="text"
                                           className="slds-input slds-combobox__input slds-combobox__input-value"
                                           readOnly
                                           value={password.description}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}
