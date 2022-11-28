import CallAPIView from "./CallAPIView";

export default function SuccessView(props: { userId: string }) {
    let userId = props.userId;

    return (
        <div
            className="fill"
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "bold",
                color: "#333333",
                paddingTop: "10px",
                paddingBottom: "40px",
            }}
        >
            <CallAPIView />
        </div>
    );
}
