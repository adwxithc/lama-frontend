import { cn } from "../../utils/style-utils";

export interface IColumns<T> {
    Header: string;
    accessor: keyof T;
    Cell?: (row: T) => JSX.Element;

}
interface ITabelProps<T> {
    columns: IColumns<T>[];
    data: T[];
    RowAction?: (row: T) => void;
    isLoading: boolean

}

function Table<T,>({ columns, data, isLoading, RowAction }: ITabelProps<T>) {
    
    return (
        <div className="rounded-xl shadow-md   border-2  overflow-x-auto ">
            <table className="w-full text-black/80 min-w-[600px]">
                <thead className="   ">
                    <tr className="font-semibold">

                        {columns.map(column => (<th key={column.Header as string} scope="col" className="p-3  text-center   font-medium  capitalize tracking-wider">{column.Header}</th>))}


                    </tr>
                </thead>
                {
                    
                        <tbody className="">
                            {
                                isLoading ?
                                <tr>
                                {columns.map(item=>(<td key={item.Header} className="h-16 bg-gray-300 animate-pulse" ></td>))}
                                </tr>
                                :
                                <>
                                {
                                    data.map((row, rowIndex) => (
                                        <tr key={rowIndex}
                                            className={cn(RowAction && 'cursor-pointer', `${rowIndex % 2 == 1 && 'bg-secondary'} font-semibold border-t-2`)}
                                            onClick={RowAction ? () => RowAction(row) : undefined}
                                        >
                                            {columns.map((column, i) => (
                                                <td className="max-w-[200px] overflow-hidden truncate px-5 py-3 whitespace-nowrap text-center text-sm  " key={'' + row[column.accessor] + i}>
                                                    {column.Cell ? column.Cell(row) : (row[column.accessor] as React.ReactNode)}
                                                </td>
                                            ))}

                                        </tr>
                                    ))

                                }

                            </>
                            }
                        


                        </tbody>
                }


            </table>
        </div>

    )
}

export default Table
