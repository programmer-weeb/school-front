import AiReport from "../ai-report/page";
import Buslocation from "../bus-location/page";
import Exam from "../exam/page";
import MedicalRecords from "../medical-records/page";

export default function General() {
	return (
		<div>
			<h1>general</h1>
			<Buslocation />
			<Exam />
			<MedicalRecords />
			<AiReport />
		</div>
	)
}
