import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

export const SuperTokensConfig = {
    appInfo: {
        appName: "El Punto Del Agua",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [ 
        EmailPassword.init({
        signInAndUpFeature: {
            disableDefaultUI: true,
            signUpForm: {
                formFields: [{
                    id: "email",
                    label: "Email",
                    placeholder: "Ingrese un email valido"
                },
                {
                    id: "password",
                    label: "contraseña",
                    placeholder: "Ingrese su contraseña"
                }
            ],
            termsOfServiceLink: "https://example.com/terms-of-service",
            privacyPolicyLink: "https://example.com/privacy-policy",
            },
            signInForm: {
                formFields: [{
                    id: "email",
                    label: "Email",
                    placeholder: "Ingrese un email valido"
                },
                {
                    id: "password",
                    label: "contraseña",
                    placeholder: "Ingrese su contraseña"
                }
            ]
            }
        }
    }), Session.init()],
};
