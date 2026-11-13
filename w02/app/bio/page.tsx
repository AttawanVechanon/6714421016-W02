import PageHeader from "@/components/page-header";
import ProfileCard from "@/components/profile-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BioPage() {
  return (
    <div>
      <PageHeader title="Bio" description="ข้อมูลส่วนตัวของผู้จัดทำ" />
      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <ProfileCard
            name="ชื่อ-นามสกุลของคุณ"
            studentId="รหัสนักศึกษา"
            description="นักศึกษาชั้นปีที่ 3 สนใจการพัฒนาเว็บไซต์"
            image="/images/profile.jpg"
            tags={["Web Development", "Next.js", "Tailwind"]}
          />
        </div>
        <div className="space-y-6 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>การศึกษา</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              สาขาเทคโนโลยีสารสนเทศ คณะวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ติดต่อ</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              อีเมล: your.email@example.com
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}