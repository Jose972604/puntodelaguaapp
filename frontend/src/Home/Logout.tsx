import { builtinModules } from "module";

export default function Logout(props: { logoutClicked: () => void }) {
    let logoutClicked = props.logoutClicked;

    return (
        <div
            style={{
                display: "flex",
                height: "70px",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingLeft: "75px",
                paddingRight: "75px"
            }}
        >
            <h1  style={{
                display: "flex",
                height: "70px",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingLeft: "75px",
                paddingRight: "250px",
            }}>Inventario de productos</h1>
            <div
                onClick={logoutClicked}
                style={{
                    display: "flex",
                    width: "116px",
                    height: "42px",
                    backgroundColor: "#000000",
                    borderRadius: "10px",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: "bold",
                }}
            >
                SIGN OUT
            </div>
        </div>
    );
}
