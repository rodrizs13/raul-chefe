import "./globals.css";

export const metadata = {
    title: "Minhas Anotações",
    description: "Aplicativo simples de anotações",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
