import { BookOpenIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface BlogCardInput {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
    isAuthor?: boolean;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}

export const BlogCard = ({ 
    authorName, 
    title, 
    content, 
    publishedDate, 
    id, 
    isAuthor = false,
    onEdit,
    onDelete
}: BlogCardInput) => {
    
    const handleEdit = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (onEdit) onEdit(id);
    };
    
    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (onDelete) onDelete(id);
    };
    
    return (
        <Link to={`/blog/${id}`}>
            <div className="mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <Avatar name={authorName} />
                            <div className="ml-3">
                                <div className="font-medium text-gray-900 dark:text-gray-100">{authorName}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                    <span className="inline-block">{publishedDate}</span>
                                </div>
                            </div>
                            {isAuthor && (
                                <div className="ml-auto flex space-x-2">
                                    <button 
                                        onClick={handleEdit}
                                        className="p-1 rounded-full text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 transition-colors">
                                        <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button 
                                        onClick={handleDelete}
                                        className="p-1 rounded-full text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900 transition-colors">
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                            {title}
                        </h2>
                        
                        <div className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {content.length > 150 ? `${content.slice(0, 150)}...` : content}
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <BookOpenIcon className="h-4 w-4 mr-1" />
                                <span>{Math.ceil(content.length / 400)} min read</span>
                            </div>
                            <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/50 px-4 py-1 rounded-full">
                                Read more
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export function Avatar({ name }: { name: string }) {
    const firstName = name.split(" ")[0];
    const colors = [
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300", 
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
    ];
    
    // Use the first character to determine a consistent color
    const colorIndex = name.charCodeAt(0) % colors.length;
    const colorClass = colors[colorIndex];
    
    return (
        <div className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full ${colorClass}`}>
            <span className="font-medium">{firstName[0].toUpperCase()}</span>
        </div>
    );
}   