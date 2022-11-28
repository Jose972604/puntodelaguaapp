import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { middleware, errorHandler, SessionRequest } from "supertokens-node/framework/express";
import { SuperTokensConfig } from "./config";

supertokens.init(SuperTokensConfig);

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true,
    })
);

// This exposes all the APIs from SuperTokens to the client.
app.use(middleware());

// An example API that requires session verification
app.get("/sessioninfo", verifySession(), async (req: SessionRequest, res) => {
    let session = req.session;
    res.send({
        sessionHandle: session!.getHandle(),
        userId: session!.getUserId(),
        accessTokenPayload: session!.getAccessTokenPayload(),
    });
});

app.get("/getProducts",verifySession(), async (req: any, res) => {
    const PRODUCTS = [
        {id:1,category: 'Herramienta', unity: '2', stocked: true, name: 'Martillo'},
        {id:2,category: 'Acueducto', unity: '20', stocked: true, name: 'Tubo'},
        {id:3,category: 'Acueducto', unity: '0', stocked: false, name: 'Medidor'},
        {id:4,category: 'Acueducto', unity: '10', stocked: true, name: 'Tapa'},
        {id:5,category: 'Acueducto', unity: '0', stocked: false, name: 'Cajilla'},
        {id:6,category: 'Accesorio Acueducto', unity: '200', stocked: true, name: 'Codo'},
        {id:7,category: 'Accesorio Acueducto', unity: '100', stocked: true, name: 'Union'}
      ];
    res.send({PRODUCTS});
});


// In case of session related errors, this error handler
// returns 401 to the client.
app.use(errorHandler());

app.listen(3001, () => console.log(`API Server listening on port 3001`));
