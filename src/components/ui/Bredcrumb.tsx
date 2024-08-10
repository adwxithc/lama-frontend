
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';



interface BreadcrumbProps {
    paths: {
        label: ReactNode;
        link?: string;
    }[];
}

const Breadcrumb = ({ paths }:BreadcrumbProps) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-gray-700">
                {paths.map((path, index) => (
                    <li key={index} className="flex items-center text-primary font-semibold">
                        {index > 0 && <span className='mr-1 text-neutral-500  text-2xl'>/ </span>}
                        {path.link ? (
                            <Link to={path.link} className="capitalize">
                                {path.label}
                            </Link>
                        ) : (
                            <span className="text-gray-500">{path.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
