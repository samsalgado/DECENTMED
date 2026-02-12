import { useEffect, useState } from "react";
export default function BrowserOnly({ children }) {
const [isBrowser, setIsBrowser] = useState(false);

useEffect(() => {
setIsBrowser(true);
}, []);

return isBrowser ? children : null;
}