import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col h-screen bg-gray-100">
			{/* Header */}
			<div className="bg-blue-600 text-white p-4 text-center shadow-md">
				<h1 className="text-lg font-bold">Header</h1>
			</div>
			{/* Content */}
			<div className="flex-1 overflow-y-auto p-4">
				<div className="space-y-4">
					{
						Array.from({ length: 50 }).map((_, y) => (
							<div key={y} className="p-4 bg-white rounded shadow">
								<p>Scrollable Content Section {y + 1}</p>
							</div>
						))
					}
				</div>
			</div>

			{/* Footer */}
			<div className="bg-blue-600 text-white p-4 text-center shadow-md sticky bottom-0 w-full">
				<p className="text-sm">Footer</p>
			</div>
		</div>
	);
}
