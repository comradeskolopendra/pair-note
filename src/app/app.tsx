import { FC } from "react";

import {AppRouter} from "@/app/router";

import "@/shared/fonts/plus-jakarta-sans/plus-jakarta-sans.scss";
import "./styles/app.scss";

const App: FC = () => {
    return (
        <AppRouter/>
    )
};

export default App;