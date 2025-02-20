import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { CssBaseline, ThemeProvider, Theme } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./scenes/Sidebar";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item: string) => {
    console.log(item);
};

function App() {
    const [theme, colorMode] = useMode() as [
        Theme,
        { toggleColorMode: () => void }
    ];
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <div>
                        <ListGroup
                            items={items}
                            heading="Cities"
                            onSelectItem={handleSelectItem}
                        />
                        {alertVisible && (
                            <Alert onClose={() => setAlertVisibility(false)}>
                                My Alert
                            </Alert>
                        )}
                        <Button
                            color="primary"
                            onClick={() => setAlertVisibility(true)}
                        >
                            My Button
                        </Button>
                    </div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
