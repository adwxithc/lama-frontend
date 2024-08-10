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

}

function Table<T,>({ columns, data, RowAction }: ITabelProps<T>) {
    return (
        <div className="rounded-xl shadow-md   border-2  overflow-x-auto ">
            <table className="w-full text-black/80 min-w-[600px]">
                <thead className="   ">
                    <tr  className="font-semibold">

                        {columns.map(column => (<th key={column.accessor as string} scope="col" className="p-3  text-center   font-medium  capitalize tracking-wider">{column.Header}</th>))}


                    </tr>
                </thead>
                <tbody className="">

                    <>
                        {data ?
                            data.map((row, rowIndex) => (
                                <tr key={rowIndex}
                                    className={cn(RowAction && 'cursor-pointer', `${rowIndex % 2 == 1 && 'bg-secondary'} font-semibold border-t-2`)}
                                    onClick={RowAction ? () => RowAction(row) : undefined}
                                >
                                    {columns.map((column) => (
                                        <td className="max-w-[200px] overflow-hidden truncate px-5 py-3 whitespace-nowrap text-center text-sm  " key={column.accessor as string}>
                                            {column.Cell ? column.Cell(row) : (row[column.accessor] as React.ReactNode)}
                                        </td>
                                    ))}

                                </tr>
                            ))
                            : <div>Loading</div>
                        }
                    </>


                </tbody>
            </table>
        </div>

    )
}

export default Table
