import PageHeader from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Status = "ส่งแล้ว" | "กำลังทำ" | "ยังไม่เริ่ม";

const assignments: { title: string; desc: string; status: Status }[] = [
  { title: "W01", desc: "ชื่องานสัปดาห์ที่ 1", status: "ส่งแล้ว" },
  { title: "W02", desc: "Profile Website ด้วย Next.js และ Shadcn", status: "กำลังทำ" },
  { title: "W03", desc: "ชื่องานสัปดาห์ที่ 3", status: "ยังไม่เริ่ม" },
];

const variants = {
  "ส่งแล้ว": "default",
  "กำลังทำ": "secondary",
  "ยังไม่เริ่ม": "outline",
} as const;

export default function AssignmentPage() {
  return (
    <div>
      <PageHeader title="Assignment" description="งานที่ได้รับมอบหมายในรายวิชา" />
      <div className="grid gap-4 sm:grid-cols-2">
        {assignments.map((a) => (
          <Card key={a.title} className="transition hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{a.title}</CardTitle>
                <Badge variant={variants[a.status]}>{a.status}</Badge>
              </div>
              <CardDescription>{a.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}