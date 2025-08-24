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

export default function DataTable({
	header,
	data,
	isLoading,
}: {
	header: string[];
	data: (string | ReactNode)[][];
	isLoading?: boolean;
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
		</div>
	);
}
