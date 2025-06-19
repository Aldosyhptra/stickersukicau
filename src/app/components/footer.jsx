

export default function Footer(){
    return (
        <footer className="bg-gradient-to-b from-gray-700 to-gray-900 w-screen text-white py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} Sticker SukiCau. All rights reserved.</p>
            <p className="text-xs mt-2">Made by Aldo</p>
        </div>
        </footer>
    );
}