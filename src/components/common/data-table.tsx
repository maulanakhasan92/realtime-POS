import { ReactNode } from "react";
import { Card } from "../ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import PaginationDataTable from "./pagination-data-table";

export default function DataTable({
	header,
	data,
	isLoading,
	totalPages,
	currentPage,
	currentLimit,
	onChangePage,
	onChangeLimit,
}: {
	header: string[];
	data: (string | ReactNode)[][];
	isLoading?: boolean;
	totalPages: number;
	currentPage: number;
	currentLimit: number;
	onChangePage: (page: number) => void;
	onChangeLimit: (limit: number) => void;
}) {
	return (
		<div className="w-full flex flex-col gap-4">
			<Card className="p-0">
				<Table className="w-full rounded-lg overflow-hidden">
					<TableHeader className="bg-muted sticky top-0 z-10">
						<TableRow>
							{header.map((column) => (
								<TableHead className="px-6 py-3" key={`th-${column}`}>
									{column}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.map((row, rowIndex) => (
							<TableRow key={`tr-${rowIndex}`}>
								{row.map((column, columnIndex) => (
									<TableCell
										key={`td-${rowIndex}-${columnIndex}`}
										className="px-6 py-3">
										{column}
									</TableCell>
								))}
							</TableRow>
						))}
						{data?.length === 0 && !isLoading && (
							<TableRow>
								<TableCell
									colSpan={header.length}
									className="text-center py-4 h-24">
									No data available
								</TableCell>
							</TableRow>
						)}
						{isLoading && (
							<TableRow>
								<TableCell
									colSpan={header.length}
									className="text-center py-4 h-24">
									Loading...
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</Card>
			<div className="flex justify-between items-center">
				<div></div>
				{totalPages > 1 && (
					<div className="flex justify-end">
						<PaginationDataTable
							currentPage={currentPage}
							onChangePage={onChangePage}
							totalPages={totalPages}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
