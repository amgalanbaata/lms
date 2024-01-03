// import { Inter, Roboto } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: "400", display: "swap" });
import "./globals.css";

import { roboto } from "../app/font/font";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${`roboto.variable`} ${`inter.variable`}`}>
                {children}
            </body>
        </html>
    );
}
