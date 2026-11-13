import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  { href: "/bio", title: "Bio", desc: "รู้จักผู้จัดทำให้มากขึ้น" },
  { href: "/assignment", title: "Assignment", desc: "รวมงานที่ได้รับมอบหมายในรายวิชา" },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-8 py-16 text-center dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
        <Badge variant="secondary" className="mb-4">
          Course Profile
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          สวัสดี ยินดีต้อนรับ 👋
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          เว็บไซต์โปรไฟล์รายวิชา จัดทำโดย ชื่อของคุณ
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/bio" className={buttonVariants({ size: "lg" })}>
            ดู Bio
          </Link>
          <Link href="/assignment" className={buttonVariants({ size: "lg", variant: "outline" })}>
            ดู Assignment
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {highlights.map((h) => (
          <Link key={h.href} href={h.href}>
            <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{h.title}</CardTitle>
                <CardDescription>{h.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}