
// export default function Footer() {
//     return (
//         <footer className="text-center mt-10 border-t pt-6 pb-4 dark:border-gray-700">
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//                 © {new Date().getFullYear()} Saikat Rana • All rights reserved.
//             </p>
//             <div className="mt-2 space-x-4">
//                 <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
//                 <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
//                 <a href="mailto:yourmail@example.com">Email</a>
//             </div>
//         </footer>
//     );
// }

// export default function Footer() {
//     return (
//         <footer className="w-full border-t dark:border-gray-700 text-center py-6">
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//                 © {new Date().getFullYear()} Saikat Rana • All rights reserved.
//             </p>
//             <div className="mt-2 space-x-4 text-sm">
//                 <a href="https://github.com/yourusername" target="_blank" className="hover:underline">
//                     GitHub
//                 </a>
//                 <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:underline">
//                     LinkedIn
//                 </a>
//                 <a href="mailto:yourmail@example.com" className="hover:underline">
//                     Email
//                 </a>
//             </div>
//         </footer>
//     );
// }

export default function Footer() {
    return (
        <footer className="text-center text-sm text-gray-500 py-4 mt-auto">
            <p>© 2025 Saikat Rana • All rights reserved.</p>
            <div className="mt-1 space-x-4">
                <a href="https://github.com/yourhandle" target="_blank" className="hover:text-indigo-500">GitHub</a>
                <a href="https://linkedin.com/in/yourhandle" target="_blank" className="hover:text-indigo-500">LinkedIn</a>
                <a href="mailto:your@email.com" className="hover:text-indigo-500">Email</a>
            </div>
        </footer>
    );
}