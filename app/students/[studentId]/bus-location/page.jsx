import Image from "next/image";

export default function Buslocation() {
	return (
		<div>
			{/* center this image using tailwindcss classes */}
			<div className="flex justify-center items-center">
				<Image
					src="/figmaBusLocation"
					alt="Bus location"
					width={700}
					height={700}
				/>
			</div>
		</div>
	)
}
